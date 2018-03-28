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
import './templates/affichagePlaylist.html'

//Lancement de YouTube

if (Meteor.isClient) {
  onYouTubeIframeAPIReady = function() {
    player = new YT.Player("player", {
      //height: "400",
      //width: "600",
      videoId: "2bjk26RwjyU",
      events: {
        onReady: function (event) {
          event.target.playVideo();
        }
      }
    });
  };
  YT.load();
};

Template.body.helpers({
  chansons(){
    return Chansons.find({})
  }
});

Template.search.events({
  'click #Ajouter' : function(){
    const vidURL = document.getElementById("URL").value;

    Chansons.insert({
      URL : vidURL
    });
  }
});
