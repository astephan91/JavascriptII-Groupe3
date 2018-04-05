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

Template.body.helpers({
  chansons(){
    return Chansons.find({})
  }
});

Template.search.events({
  'click #Ajouter' : function(){
    const vidURL = document.getElementById("URL").value;
    //Pour faire tout ce qui est playlist, voir : https://developers.google.com/youtube/iframe_api_reference
    Chansons.insert({
      URL : vidURL
    });
    const URLs = Chansons.find({},{ fields: { URL: 1, _id: 0 } }).map((chanson) => chanson.URL);
    console.log(URLs);
  }
});
