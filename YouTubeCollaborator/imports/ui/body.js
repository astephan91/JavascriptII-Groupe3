//Importation des méthodes
import { Template } from 'meteor/templating';

//Importation de body
import './body.html';
//Importation des templates
import './templates/Header.html';
import './templates/YouTube.html';
import './templates/Search.html';
import './templates/Parametres.html';

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
}
