//Importation des méthodes
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Chansons } from '../api/chansons.js';
import { SallesList } from '../api/salles.js';
import { ReactiveVar } from 'meteor/reactive-var';

//Importation de body
import './body.html';
//Importation des templates
import './templates/header.html';
import './templates/youTube.html';
import './templates/search.html';
import './templates/parametres.html';
import './templates/chanson.html';
import './templates/recap.html';
import './templates/LoginModal.html';
import './templates/login2.html';
import './templates/TemplateOri.html';
import './templates/searchtemplate.html';
import './templates/Layout.html';
import './templates/headerHome.html';
import './templates/roomtemplate.html';
import './templates/abouttemplate.html';
import './templates/hometemplate.html';
import './templates/notfoundtemplate.html';
import './templates/qrcodetemplate.html';
import './templates/headerLogin.html';
import './templates/headerAbout.html';
import './templates/modalQR.html';



//Variables utiles
let prochainesChansons = [];
let mesChansons;
let compteur = 0;
let doublon = false;
let httpRequest;
let titreVideo;
let sortParam;




//Envoi de la requête à l'API YouTube
function makeRequest(string) {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert("Impossible de créer une instance XMLHttp");
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+string+'&key=AIzaSyB-jC9ewqrBt2w_tFRzemk36bhY_04RZtU');
  httpRequest.send();
}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      let tab = httpRequest.responseText;
      let obj = JSON.parse(tab);
      titreVideo = obj.items[0].snippet.title;
    } else {
      alert("La requête a rencontré un problème");
    }
  }
};
//Fin de la requête


Template.roomtemplate.onCreated(function() {
  this.sortBy = new ReactiveVar('score');
})

Template.roomtemplate.helpers({

  chansonsFutures(){
    let idsalle = FlowRouter.getParam("id");
    sortParam = Template.instance().sortBy.get();
    return Chansons.find({
      "playedStatus":false,
      "fksalle": idsalle,
    },{
      sort : { [sortParam] : -1 }
    }); 
  },

  chansonsFinies(){
    let idsalle = FlowRouter.getParam("id");
    // On montre les chansons déjà jouées pendant la soirée
    return Chansons.find({
      "playedStatus":true,
      "fksalle": idsalle
    },{});
  }
});

Template.roomtemplate.events({

  'change #ordre':function (event,templateInstance) {
    var sortSelected = document.getElementById("ordre").value;
    templateInstance.sortBy.set(sortSelected)
  },

  'submit .ajoutChanson'(event) {
    // On empêche le comportement par défaut
    event.preventDefault();
 
    // Récupération des informations
    const target = event.target;
    const URL = target.URL.value;
    let videoID = "";

    //Vérification de la validité de l'URL
    if(URL.indexOf("youtube.com") == -1 && URL.indexOf("youtu.be") == -1){
      alert("Merci de rentrer une URL YouTube valide");
      return;
    };

    //Extraction de l'ID de la vidéo en fonction du format de l'URL
    if(URL.indexOf("youtube.com") > -1) {
      //Format de type youtube.com/watch?v=fkk1vg0nAfc&t=1691s
      if(URL.indexOf("&") > -1){
        videoID = URL.split("v=")[1];
        videoID = videoID.split("&")[0];
      }
      else {
      //Format de type youtube.com/watch?v=fkk1vg0nAfc
      videoID = URL.split("v=")[1];
      }

      // https://www.youtube.com/watch?v=fkk1vg0nAfc&t=1691s
    }

    else if(URL.indexOf("youtu.be") > -1) {
      //Format de type youtu.be/gMHSqGYhHrA?t=870
      if(URL.indexOf("?") > -1){
        videoID = URL.split(".be/")[1];
        videoID = videoID.split("?")[0];
      }
      else {
      //Format de type youtu.be/gMHSqGYhHrA
      videoID = URL.split(".be/")[1];
      }
    }
  
    if(videoID == undefined){
      alert("Cette vidéo n'existe pas !");
      return;
    }
    makeRequest(videoID);


    mesChansons = Chansons.find(
      {},
      {fields:{
        "videoID" :1,
        "fksalle" :1,
        _id:0
      }
    }).fetch();
    
    let idsalle = FlowRouter.getParam("id")
    //On vérifie que la chanson sélectionée n'existe pas déjà dans la base de données
    for(let i = 0; i < mesChansons.length; i++){
      if(mesChansons[i].videoID === videoID && mesChansons[i].fksalle === idsalle) {
        alert("On risquerait de s'en lasser !");
        return;
      }
    };

    // Pour régler les problèmes de faille spatio-temporelle, lag artificiel de 200ms
    setTimeout(function(){

      //On vérifie que la requête a renvoyé un truc, si c'est pas le cas on ajoute
      //rien à la collection
      if(!titreVideo){
        alert("Cette vidéo n'existe pas !");
        return;
      }
      
      //Recupération de l'id de la salle
      let idsalle = FlowRouter.getParam("id");
    
      //Comme l'URL, le videoID, et le titre de la vidéo sont conformes, on ajoute une vidéo
      //de score 0 à la collection
      Chansons.insert({
      URL,
      videoID,
      titreVideo,
      score: 0,
      playedStatus: false,
      addedAt: new Date(),
      fksalle: idsalle,
    })

  },200)


  if(Meteor.is_server) {

    People.allow({
      'insert': function (userId,doc) {
        /* user and doc checks ,
        return true to allow insert */
        return true; 
      }
    });
  
  }
 
    // On vide la forme
    target.URL.value = "";},
});

Template.search.events({
  'click #boutonDebut'(event){
    //On check la liste des chansons
    prochainesChansons = Chansons.find({playedStatus: false}, { sort: { score: -1 } }).fetch();
    //S'il n'y en a pas, il ne se passe rien
    if (prochainesChansons.length === 0) {
      alert("Il n'y a aucune chanson dans la playlist!")
    }
    //S'il y a des chansons dans la playlist, on lit la 1e et on change son playedStatus
    else if(prochainesChansons.length > 0){
      player.loadVideoById(prochainesChansons[0].videoID);
      Chansons.update(prochainesChansons[0]._id,{ $set:{playedStatus: true}});
    //Puis on cache le bouton
      document.getElementById("boutonDebut").style.visibility = "hidden";
    }
  }
})

//Blocage de l'ajout de nouvelles chansons
Template.parametres.events({
  'click .switch'(event){
    if(compteur%2===0){
      document.getElementById("formulaireChanson").style.visibility = "hidden";
      compteur++;}
    else if (compteur%2!=0){
      document.getElementById("formulaireChanson").style.visibility = "visible";
      compteur++;
    }
  }
})

Template.chanson.events({
  //Augmentation du score
  'click .pos'(event) {
    //On empêche le comportement par défaut
    event.preventDefault();

    //Et on update le score
    Chansons.update(this._id, {
      $set: {"score": this.score +1},
    });
  },

  //Diminution du score
  'click .neg'(event) {
    //On empêche le comportement par défaut
    event.preventDefault();

    //Et on update le score
    Chansons.update(this._id, {
      $set: {"score": this.score -1},
    });
  },
});

//Lancement de YouTube

if (Meteor.isClient) {
  onYouTubeIframeAPIReady = function() {
    player = new YT.Player("player", {
      videoId: "",
      events: {
        //Quand le player est ready
        onReady: onPlayerReady,
        //Quand le player change d'état
        onStateChange: onPlayerStateChange
      }
    });
  };

  //Quand le player est ready, on prévient le user
  function onPlayerReady(event) {
   console.log("Le player est ready");
  }

  function onPlayerStateChange(event) {
    //Si la vidéo est terminée :
    if (event.data === 0) {
      //On charge la liste des prochaines chansons
      prochainesChansons = Chansons.find({playedStatus: false}, { sort: { [sortParam]: -1 } }).fetch();
      //On joue la chanson qui a le meilleur score
      player.loadVideoById(prochainesChansons[0].videoID);
      //On passe son statusPlayed en true
      Chansons.update(prochainesChansons[0]._id,{ $set:{playedStatus: true}});
      //Et on update la liste des prochaines chansons
      prochainesChansons = Chansons.find({playedStatus: false}, { sort: { [sortParam]: -1 } }).fetch();
    }
  }

  YT.load();
};

//logout
Template.headerLogin.events({
  'click .logout': ()=> {
    Meteor.logout();
  }

  
});


//récupere l'URL (le but était de l'intégrer dans un QRCode)
Template.roomtemplate.events({
  'click button': function(){
    let currentURL = FlowRouter.current();
    console.log(currentURL);
  },
});






//Insertion dans la collection des salles et creation de l'URL unique
Template.TemplateOri.events({
  'submit form': function(event){
    event.preventDefault()
    const target = event.target;
    const name = target.text.value;
    
    if(name===""){
      alert("Merci de rentrer un nom!");
      return;
    }

    let id = SallesList.insert({
      name
    })
    console.log(name)
    let dbname = FlowRouter.getParam("slug");
    let pathDef = "/room/:dbname/:id";
    let params  = {dbname:name, id:id };
    FlowRouter.go(pathDef, params);
    document.location.reload(true);
  }
})

//Affichage du nom de la salle dans la salle
Template.header.helpers({
  sallenom : function(){
    let idsalle = FlowRouter.getParam("id");
    return SallesList.findOne(
      {
        _id:idsalle
      }
    );
  }
});
