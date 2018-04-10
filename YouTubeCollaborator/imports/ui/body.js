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



Template.body.helpers({
  chansons(){
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
 
    // Insertion d'une chanson de score nul dans la collection
    Chansons.insert({
      URL,
      score: 0,
    });
 
    // On vide la forme
    target.URL.value = '';
  },
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
      //height: "400",
      //width: "600",
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
