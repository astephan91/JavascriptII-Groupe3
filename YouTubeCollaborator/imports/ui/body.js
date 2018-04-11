//Importation des méthodes
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Chansons } from '../api/chansons.js'

//Importation de body
import './body.html';
//Importation des templates
import './templates/header.html';
import './templates/youTube.html';
import './templates/search.html';
import './templates/parametres.html';
import './templates/chanson.html';

https://youtu.be/DFiis3Y2u80

Template.body.helpers({
  chansons(){
    // Classement en fonction du score
    return Chansons.find({}, { sort: { score: -1 } });
    
  }
});

Template.body.events({
  'submit .nouvelleChanson'(event) {
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
      if(URL.indexOf("&t") > -1){
        videoID = URL.split("v=")[1];
        videoID = videoID.split("&t")[0];
        console.log(videoID);
      }
      else {
      //Format de type youtube.com/watch?v=fkk1vg0nAfc
      videoID = URL.split("v=")[1];
      console.log(videoID)
      }

      // https://www.youtube.com/watch?v=fkk1vg0nAfc&t=1691s
    }

    else if (URL.indexOf("youtu.be") > -1) {
      //Format de type youtu.be/gMHSqGYhHrA?t=870
      if(URL.indexOf("?t=") > -1){
        videoID = URL.split(".be/")[1];
        videoID = videoID.split("?t=")[0];
        console.log(videoID);
      }
      else {
      //Format de type youtu.be/gMHSqGYhHrA
      videoID = URL.split(".be/")[1];
      console.log(videoID);
      }
    }
 
    // Insertion d'une chanson de score nul dans la collection
    Chansons.insert({
      URL,
      videoID,
      score: 0,
    });
 
    // On vide la forme
    target.URL.value = "";  },
});

Template.chanson.events({
  //Augmentation du score
  'click .pos'(event) {
    // On empêche le comportement par défaut
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
      videoId: "fkk1vg0nAfc",
      events: {
        onReady: function (event) {
          event.target.playVideo();
        }
      }
    });
  };

  YT.load();
};
