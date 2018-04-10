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
    return Chansons.find({})
  }
});

Template.body.events({
  'submit .nouvelleChanson'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const URL = target.URL.value;
 
    // Insert a task into the collection
    Chansons.insert({
      URL,
    });
 
    // Clear form
    target.text.value = '';
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
