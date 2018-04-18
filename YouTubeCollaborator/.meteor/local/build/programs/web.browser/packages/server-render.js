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
var WebApp = Package.webapp.WebApp;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"server-render":{"client.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/server-render/client.js                                                                                //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({
  onPageLoad: function () {
    return onPageLoad;
  }
});
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var ClientSink;
module.watch(require("./client-sink.js"), {
  ClientSink: function (v) {
    ClientSink = v;
  }
}, 1);
var promise = new Promise(Meteor.startup);
var sink = new ClientSink();

function onPageLoad(callback) {
  promise = promise.then(function () {
    return callback(sink);
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client-sink.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/server-render/client-sink.js                                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({
  ClientSink: function () {
    return ClientSink;
  }
});
var doc = document;
var head = doc.getElementsByTagName("head")[0];
var body = doc.body;

var isoError = function (method) {
  console.error("sink." + method + " was called on the client when\n    it should only be called on the server.");
};

var ClientSink =
/*#__PURE__*/
function () {
  function ClientSink() {}

  var _proto = ClientSink.prototype;

  _proto.appendToHead = function () {
    function appendToHead(nodeOrHtml) {
      appendContent(head, nodeOrHtml);
    }

    return appendToHead;
  }();

  _proto.appendToBody = function () {
    function appendToBody(nodeOrHtml) {
      appendContent(body, nodeOrHtml);
    }

    return appendToBody;
  }();

  _proto.appendToElementById = function () {
    function appendToElementById(id, nodeOrHtml) {
      appendContent(doc.getElementById(id), nodeOrHtml);
    }

    return appendToElementById;
  }();

  _proto.renderIntoElementById = function () {
    function renderIntoElementById(id, nodeOrHtml) {
      var element = doc.getElementById(id);

      while (element.lastChild) {
        element.removeChild(element.lastChild);
      }

      appendContent(element, nodeOrHtml);
    }

    return renderIntoElementById;
  }();

  _proto.redirect = function () {
    function redirect(location) {
      // code can't be set on the client
      window.location = location;
    }

    return redirect;
  }(); // server only methods


  _proto.setStatusCode = function () {
    function setStatusCode() {
      isoError("setStatusCode");
    }

    return setStatusCode;
  }();

  _proto.setHeader = function () {
    function setHeader() {
      isoError("setHeader");
    }

    return setHeader;
  }();

  _proto.getHeaders = function () {
    function getHeaders() {
      isoError("getHeaders");
    }

    return getHeaders;
  }();

  _proto.getCookies = function () {
    function getCookies() {
      isoError("getCookies");
    }

    return getCookies;
  }();

  return ClientSink;
}();

function appendContent(destination, nodeOrHtml) {
  if (typeof nodeOrHtml === "string") {
    // Make a shallow clone of the destination node to ensure the new
    // children can legally be appended to it.
    var container = destination.cloneNode(false); // Parse the HTML into the container, allowing for multiple children.

    container.innerHTML = nodeOrHtml; // Transplant the children to the destination.

    while (container.firstChild) {
      destination.appendChild(container.firstChild);
    }
  } else if (Array.isArray(nodeOrHtml)) {
    nodeOrHtml.forEach(function (elem) {
      return appendContent(destination, elem);
    });
  } else {
    destination.appendChild(nodeOrHtml);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("/node_modules/meteor/server-render/client.js");

/* Exports */
Package._define("server-render", exports);

})();
