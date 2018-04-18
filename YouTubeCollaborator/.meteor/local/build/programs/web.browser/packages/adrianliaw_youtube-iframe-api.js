//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

/* Package-scope variables */
var YT, YTConfig;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/adrianliaw_youtube-iframe-api/packages/adrianliaw_youtube-iframe-api.js                          //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/adrianliaw:youtube-iframe-api/lib/iframe_api.js                                            //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
if (!window['YT']) {                                                                                   // 1
    YT = {                                                                                             // 2
        loading: 0,                                                                                    // 3
        loaded: 0                                                                                      // 4
    };                                                                                                 // 5
}                                                                                                      // 6
if (!window['YTConfig']) {                                                                             // 7
    YTConfig = {                                                                                       // 8
        'host': 'https://www.youtube.com'                                                              // 9
    };                                                                                                 // 10
}                                                                                                      // 11
YT.load = function () {                                                                                // 12
    if (!YT.loading) {                                                                                 // 13
        YT.loading = 1;                                                                                // 14
        (function() {                                                                                  // 15
            var l = [];                                                                                // 16
            YT.ready = function(f) {                                                                   // 17
                if (YT.loaded) {                                                                       // 18
                    f();                                                                               // 19
                } else {                                                                               // 20
                    l.push(f);                                                                         // 21
                }                                                                                      // 22
            };                                                                                         // 23
            window.onYTReady = function() {                                                            // 24
                YT.loaded = 1;                                                                         // 25
                for (var i = 0; i < l.length; i++) {                                                   // 26
                    try {                                                                              // 27
                        l[i]();                                                                        // 28
                    } catch (e) {}                                                                     // 29
                }                                                                                      // 30
                YT.loading= 0;                                                                         // 31
            };                                                                                         // 32
            YT.setConfig = function(c) {                                                               // 33
                for (var k in c) {                                                                     // 34
                    if (c.hasOwnProperty(k)) {                                                         // 35
                        YTconfig[k] = c[k];                                                            // 36
                    }                                                                                  // 37
                }                                                                                      // 38
            };                                                                                         // 39
            $(document).ready(function () {                                                            // 40
                var a = document.createElement('script');                                              // 41
                a.id = 'www-widgetapi-script';                                                         // 42
                a.src = 'https:' + '//s.ytimg.com/yts/jsbin/www-widgetapi-vfldTtH0_/www-widgetapi.js'; // 43
                $("head").append(a);                                                                   // 44
            });                                                                                        // 45
        })();                                                                                          // 46
    }                                                                                                  // 47
}                                                                                                      // 48
                                                                                                       // 49
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("adrianliaw:youtube-iframe-api", {
  YT: YT,
  YTConfig: YTConfig
});

})();
