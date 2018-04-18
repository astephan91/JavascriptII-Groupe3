var require = meteorInstall({"imports":{"ui":{"templates":{"chanson.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/templates/chanson.html                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.watch(require("./template.chanson.js"), {
  "*": module.makeNsSetter(true)
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.chanson.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/templates/template.chanson.js                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("chanson");
Template["chanson"] = new Template("Template.chanson", (function() {
  var view = this;
  return HTML.LI({
    class: "elementLi"
  }, "\n        ", Blaze.View("lookup:URL", function() {
    return Spacebars.mustache(view.lookup("URL"));
  }), HTML.Raw(' <input type="button" class="pos" value="+"> <input type="button" class="neg" value="-">\n      '));
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/templates/header.html                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.watch(require("./template.header.js"), {
  "*": module.makeNsSetter(true)
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.header.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/templates/template.header.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return HTML.Raw('<div id="header">\n    <h2>\n      Nom de la salle : Soirée truc\n    </h2>\n  </div>');
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"parametres.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/templates/parametres.html                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.watch(require("./template.parametres.js"), {
  "*": module.makeNsSetter(true)
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.parametres.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/templates/template.parametres.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("parametres");
Template["parametres"] = new Template("Template.parametres", (function() {
  var view = this;
  return HTML.Raw('<div id="parametres">\n    <h3>\n      <a href="">Paramètres</a>\n    </h3>\n  </div>');
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"search.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/templates/search.html                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.watch(require("./template.search.js"), {
  "*": module.makeNsSetter(true)
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.search.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/templates/template.search.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("search");
Template["search"] = new Template("Template.search", (function() {
  var view = this;
  return HTML.Raw('<form class="nouvelleChanson">\n  <input type="text" name="URL" placeholder="Adresse YouTube">\n</form>');
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"youTube.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/templates/youTube.html                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.watch(require("./template.youTube.js"), {
  "*": module.makeNsSetter(true)
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.youTube.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/templates/template.youTube.js                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("youTube");
Template["youTube"] = new Template("Template.youTube", (function() {
  var view = this;
  return HTML.Raw('<div id="player"></div>');
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"body.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/body.html                                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.watch(require("./template.body.js"), {
  "*": module.makeNsSetter(true)
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.body.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/template.body.js                                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.body.addContent((function() {
  var view = this;
  return [ HTML.SCRIPT({
    type: "text/javascript",
    src: "https://gdata.youtube.com/feeds/api/videos/videoid?v=2&alt=json-in-script&format=5&callback=getTitle"
  }, "\n    "), "\n\n", Spacebars.include(view.lookupTemplate("header")), "\n\n", Spacebars.include(view.lookupTemplate("youTube")), "\n\n", Spacebars.include(view.lookupTemplate("search")), "\n\n", Spacebars.include(view.lookupTemplate("TemplateOri")), "\n\n\n\n", HTML.UL({
    id: "affichagePlaylist"
  }, "\n  ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("chansons"));
  }, function() {
    return [ "\n    ", Spacebars.include(view.lookupTemplate("chanson")), "\n  " ];
  }), "\n"), "\n\n", Spacebars.include(view.lookupTemplate("parametres")) ];
}));
Meteor.startup(Template.body.renderToDocument);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"body.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/body.js                                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var Chansons;
module.watch(require("../api/chansons.js"), {
  Chansons: function (v) {
    Chansons = v;
  }
}, 2);
module.watch(require("./body.html"));
module.watch(require("./templates/header.html"));
module.watch(require("./templates/youTube.html"));
module.watch(require("./templates/search.html"));
module.watch(require("./templates/parametres.html"));
module.watch(require("./templates/chanson.html"));
module.watch(require("./templates/spreadsheet.html"));
Template.body.helpers({
  chansons: function () {
    // Classement en fonction du score
    return Chansons.find({}, {
      sort: {
        score: -1
      }
    });
  }
});
Template.body.events({
  'submit .nouvelleChanson': function (event) {
    // On empêche le comportement par défaut
    event.preventDefault(); // Récupération des informations

    var target = event.target;
    var URL = target.URL.value; //Vérification de la validité de l'URL

    if (URL.indexOf("youtube.com") == -1 && URL.indexOf("youtu.be") == -1) {
      alert("Merci de rentrer une URL YouTube valide");
      return;
    }

    ;
    var videoID = URL.split("v=")[1]; // Insertion d'une chanson de score nul dans la collection

    Chansons.insert({
      URL: URL,
      videoID: videoID,
      score: 0
    }); // On vide la forme

    target.URL.value = "";
    target.titre.value = "";
  }
});
Template.chanson.events({
  //Augmentation du score
  'click .pos': function (event) {
    // On empêche le comportement par défaut
    event.preventDefault(); //Et on update le score

    Chansons.update(this._id, {
      $set: {
        "score": this.score + 1
      }
    });
  },
  //Diminution du score
  'click .neg': function (event) {
    //On empêche le comportement par défaut
    event.preventDefault(); //Et on update le score

    Chansons.update(this._id, {
      $set: {
        "score": this.score - 1
      }
    });
  }
}); //Lancement de YouTube

if (Meteor.isClient) {
  onYouTubeIframeAPIReady = function () {
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
}

;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"api":{"chansons.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/chansons.js                                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  Chansons: function () {
    return Chansons;
  }
});
var Mongo;
module.watch(require("meteor/mongo"), {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var Chansons = new Mongo.Collection('chansons');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/main.js                                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.watch(require("../imports/ui/body.js"));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("/client/main.js");