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
var Template = Package['templating-runtime'].Template;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Mongo = Package.mongo.Mongo;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, Mongol, updData, newId, self, MongolEditingStatus, Mongol_InlineEditor, current, content, DocumentPosition, CurrentCollection, a, b, colorized, sessionKey, CollectionName, CollectionCount, CurrentDocument, DocumentID, ValidatedCurrentDocument, list, docID, docIndex, currentDoc, newPosition;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/lib/common.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0xaa99=["\x69\x73\x43\x6C\x69\x65\x6E\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x73\x74\x61\x72\x74\x75\x70","\x4D\x6F\x6E\x67\x6F\x6C\x44\x6F\x63\x5F","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x54\x68\x65\x72\x65\x20\x69\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x77\x69\x74\x68\x20\x79\x6F\x75\x72\x20\x4A\x53\x4F\x4E\x20\x73\x79\x6E\x74\x61\x78\x2E\x0A\x0A\x4E\x6F\x74\x65\x3A\x20\x6B\x65\x79\x73\x20\x61\x6E\x64\x20\x73\x74\x72\x69\x6E\x67\x20\x76\x61\x6C\x75\x65\x73\x20\x6E\x65\x65\x64\x20\x64\x6F\x75\x62\x6C\x65\x20\x71\x75\x6F\x74\x65\x73\x2E","\x6A\x73\x6F\x6E\x2E\x70\x61\x72\x73\x65","\x53\x74\x72\x61\x6E\x67\x65\x2C\x20\x74\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x64\x75\x70\x6C\x69\x63\x61\x74\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E","\x64\x75\x70\x6C\x69\x63\x61\x74\x65","\x53\x74\x72\x61\x6E\x67\x65\x2C\x20\x74\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x72\x65\x6D\x6F\x76\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E","\x72\x65\x6D\x6F\x76\x65","\x53\x74\x72\x61\x6E\x67\x65\x2C\x20\x74\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x69\x6E\x73\x65\x72\x74\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E","\x69\x6E\x73\x65\x72\x74","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x75\x70\x64\x61\x74\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E\x20\x50\x6C\x65\x61\x73\x65\x20\x72\x65\x76\x69\x65\x77\x20\x79\x6F\x75\x72\x20\x63\x68\x61\x6E\x67\x65\x73\x20\x61\x6E\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6E\x2E","\x75\x70\x64\x61\x74\x65","\x55\x6E\x6B\x6E\x6F\x77\x6E\x20\x45\x72\x72\x6F\x72","\x69\x73\x53\x74\x72\x69\x6E\x67","\x65\x78\x65\x63","\x70\x61\x72\x73\x65","\x65\x72\x72\x6F\x72","\x4D\x6F\x6E\x67\x6F\x6C","\x67\x65\x74","\x67\x65\x74\x41\x6C\x6C","\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x6E\x61\x6D\x65","\x6D\x61\x70","\x73\x65\x74","\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x73","\x77\x69\x74\x68\x6F\x75\x74","\x70\x75\x73\x68","\x76\x65\x6C\x6F\x63\x69\x74\x79\x54\x65\x73\x74\x46\x69\x6C\x65\x73","\x68\x69\x64\x65\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x76\x65\x6C\x6F\x63\x69\x74\x79\x46\x69\x78\x74\x75\x72\x65\x46\x69\x6C\x65\x73","\x76\x65\x6C\x6F\x63\x69\x74\x79\x54\x65\x73\x74\x52\x65\x70\x6F\x72\x74\x73","\x76\x65\x6C\x6F\x63\x69\x74\x79\x41\x67\x67\x72\x65\x67\x61\x74\x65\x52\x65\x70\x6F\x72\x74\x73","\x76\x65\x6C\x6F\x63\x69\x74\x79\x4C\x6F\x67\x73","\x76\x65\x6C\x6F\x63\x69\x74\x79\x4D\x69\x72\x72\x6F\x72\x73","\x76\x65\x6C\x6F\x63\x69\x74\x79\x4F\x70\x74\x69\x6F\x6E\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x4D\x6F\x6E\x67\x6F\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x41\x75\x74\x6F\x50\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x45\x6D\x61\x69\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x52\x65\x73\x75\x6C\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x54\x68\x72\x6F\x74\x74\x6C\x65","\x6D\x65\x74\x65\x6F\x72\x5F\x61\x63\x63\x6F\x75\x6E\x74\x73\x5F\x6C\x6F\x67\x69\x6E\x53\x65\x72\x76\x69\x63\x65\x43\x6F\x6E\x66\x69\x67\x75\x72\x61\x74\x69\x6F\x6E","\x6D\x65\x74\x65\x6F\x72\x5F\x61\x75\x74\x6F\x75\x70\x64\x61\x74\x65\x5F\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x73","\x69\x73\x53\x65\x72\x76\x65\x72","\x2E","\x73\x70\x6C\x69\x74","\x63\x6F\x6E\x63\x61\x74","\x61\x70\x70\x6C\x79","\x5F\x67\x65\x74","\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","\x63\x68\x61\x72\x41\x74","\x73\x75\x62\x73\x74\x72","\x61\x6C\x64\x65\x65\x64\x3A\x73\x69\x6D\x70\x6C\x65\x2D\x73\x63\x68\x65\x6D\x61","\x61\x6C\x64\x65\x65\x64\x3A\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x32","\x73\x69\x6D\x70\x6C\x65\x53\x63\x68\x65\x6D\x61","\x69\x73\x46\x75\x6E\x63\x74\x69\x6F\x6E","\x5F\x63\x32"];if(Meteor[_0xaa99[0]]){Meteor[_0xaa99[3]](function(){MeteorToysDict= Package[_0xaa99[2]][_0xaa99[1]]})};if(Mongol=== undefined){Mongol= {}};Mongol= {"\x67\x65\x74\x44\x6F\x63\x75\x6D\x65\x6E\x74\x55\x70\x64\x61\x74\x65":function(_0xaaa9x1){var _0xaaa9x2=_0xaa99[4]+ _0xaaa9x1,_0xaaa9x3=false;updData= document[_0xaa99[5]](_0xaaa9x2);if(updData){_0xaaa9x3= updData[_0xaa99[6]]};return _0xaaa9x3},"\x65\x72\x72\x6F\x72":function(_0xaaa9x1){switch(_0xaaa9x1){case _0xaa99[8]:alert(_0xaa99[7]);break;case _0xaa99[10]:alert(_0xaa99[9]);break;case _0xaa99[12]:alert(_0xaa99[11]);break;case _0xaa99[14]:alert(_0xaa99[13]);break;case _0xaa99[16]:alert(_0xaa99[15]);break;default:return _0xaa99[17];break}},"\x70\x61\x72\x73\x65":function(_0xaaa9x1){var _0xaaa9x4=null;try{var _0xaaa9x5=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;var _0xaaa9x6=function(_0xaaa9x7,_0xaaa9x8){if(_[_0xaa99[18]](_0xaaa9x8)){var _0xaaa9x9=_0xaaa9x5[_0xaa99[19]](_0xaaa9x8);if(_0xaaa9x9){return  new Date(_0xaaa9x8)}};return _0xaaa9x8};_0xaaa9x4= JSON[_0xaa99[20]](_0xaaa9x1,_0xaaa9x6)}catch(error){Mongol[_0xaa99[21]](_0xaa99[8])};return _0xaaa9x4},"\x64\x65\x74\x65\x63\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x73":function(){if(MeteorToysDict[_0xaa99[23]](_0xaa99[22])=== undefined){var _0xaaa9xa=_[_0xaa99[27]](Mongo[_0xaa99[25]][_0xaa99[24]](),function(_0xaaa9xb){return _0xaaa9xb[_0xaa99[26]]});var _0xaaa9xc={"\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x73":_0xaaa9xa};MeteorToysDict[_0xaa99[28]](_0xaa99[22],_0xaaa9xc)}},"\x68\x69\x64\x65\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E":function(_0xaaa9xd){var _0xaaa9xe=MeteorToysDict[_0xaa99[23]](_0xaa99[22]),_0xaaa9xa=_0xaaa9xe[_0xaa99[29]];_0xaaa9xa= _[_0xaa99[30]](_0xaaa9xa,_0xaaa9xd);_0xaaa9xe[_0xaa99[29]]= _0xaaa9xa;MeteorToysDict[_0xaa99[28]](_0xaa99[22],_0xaaa9xe)},"\x73\x68\x6F\x77\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E":function(_0xaaa9xd){var _0xaaa9xe=MeteorToysDict[_0xaa99[23]](_0xaa99[22]),_0xaaa9xa=_0xaaa9xe[_0xaa99[29]];_0xaaa9xa[_0xaa99[31]](_0xaaa9xd);MeteorToysDict[_0xaa99[28]](_0xaa99[22],_0xaaa9xe)},"\x68\x69\x64\x65\x56\x65\x6C\x6F\x63\x69\x74\x79":function(){this[_0xaa99[33]](_0xaa99[32]);this[_0xaa99[33]](_0xaa99[34]);this[_0xaa99[33]](_0xaa99[35]);this[_0xaa99[33]](_0xaa99[36]);this[_0xaa99[33]](_0xaa99[37]);this[_0xaa99[33]](_0xaa99[38]);this[_0xaa99[33]](_0xaa99[39])},"\x68\x69\x64\x65\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73":function(){this[_0xaa99[33]](_0xaa99[40]);this[_0xaa99[33]](_0xaa99[41]);this[_0xaa99[33]](_0xaa99[42]);this[_0xaa99[33]](_0xaa99[43]);this[_0xaa99[33]](_0xaa99[44]);this[_0xaa99[33]](_0xaa99[45]);this[_0xaa99[33]](_0xaa99[46])},"\x68\x69\x64\x65\x4D\x65\x74\x65\x6F\x72":function(){this[_0xaa99[33]](_0xaa99[47]);this[_0xaa99[33]](_0xaa99[48])},"\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E":function(_0xaaa9xd){return Mongo[_0xaa99[25]][_0xaa99[23]](_0xaaa9xd)|| ((Meteor[_0xaa99[49]])?eval(_0xaaa9xd):Meteor[_0xaa99[54]][_0xaa99[53]](null,[window][_0xaa99[52]](_0xaaa9xd[_0xaa99[51]](_0xaa99[50]))))|| ((Meteor[_0xaa99[49]])?eval(_0xaaa9xf(_0xaaa9xd)):Meteor[_0xaa99[54]][_0xaa99[53]](null,[window][_0xaa99[52]](_0xaaa9xf(_0xaaa9xd)[_0xaa99[51]](_0xaa99[50]))))|| null;function _0xaaa9xf(_0xaaa9x10){return _0xaaa9x10[_0xaa99[56]](0)[_0xaa99[55]]()+ _0xaaa9x10[_0xaa99[57]](1)}},"\x69\x6E\x73\x65\x72\x74\x44\x6F\x63":function(_0xaaa9x11,_0xaaa9x12){check(_0xaaa9x11,Match.Any);check(_0xaaa9x12,Match.Any);if(!!Package[_0xaa99[58]]&&  !!Package[_0xaa99[59]] && _[_0xaa99[61]](_0xaaa9x11[_0xaa99[60]]) && _0xaaa9x11[_0xaa99[62]]){newId= _0xaaa9x11[_0xaa99[14]](_0xaaa9x12,{filter:false,autoConvert:false,removeEmptyStrings:false,validate:false})}else {newId= _0xaaa9x11[_0xaa99[14]](_0xaaa9x12)};return newId}}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_header/template.header.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("Mongol_header");
Template["Mongol_header"] = new Template("Template.Mongol_header", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("mongol_618")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {
      return [ "\n\n    ", HTML.STRONG("Mongol"), HTML.BR(), "\n    ", HTML.DIV({
        class: "Mongol_contentView"
      }, "\n    ", HTML.Comment("  "), "\n      ", HTML.DIV({
        class: "Mongol_docMenu",
        style: "text-indent: 8px"
      }, "\n        In-App MongoDB Editor\n      "), "\n      ", HTML.DIV({
        class: "Mongol_documentViewer "
      }, "\n", HTML.PRE({
        class: "MeteorToys-off"
      }, "{ \n  ", HTML.SPAN({
        class: "MeteorToys_key"
      }, '"created_by"'), ': "', HTML.A({
        href: "http://maxsavin.com"
      }, "Max Savin"), '",\n  ', HTML.SPAN({
        class: "MeteorToys_key"
      }, '"docs_at"'), ':    "', HTML.A({
        href: "https://meteor.toys"
      }, "Meteor Toys"), '",\n  ', HTML.SPAN({
        class: "MeteorToys_key"
      }, '"license"'), ':    "', HTML.A({
        href: "https://github.com/MeteorToys/allthings/blob/master/LICENSE.md"
      }, "MT License"), '",\n  ', HTML.SPAN({
        class: "MeteorToys_key"
      }, '"alsoSee"'), ':    "', HTML.A({
        href: "https://meteorcandy.com/?ref=header"
      }, "Meteor Candy"), '",\n}\n'), "\n      "), "\n    ", HTML.Comment("  "), "\n    "), "\n\n  " ];
    });
  });
}));

Template.__checkName("Mongol_header_pro");
Template["Mongol_header_pro"] = new Template("Template.Mongol_header_pro", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("cmongol_618")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {
      return [ "\n    ", HTML.STRONG("Mongol Pro"), HTML.BR(), "\n    ", HTML.DIV({
        class: "Mongol_contentView"
      }, "\n      ", HTML.Comment("  "), "\n      ", HTML.DIV({
        class: "Mongol_docMenu",
        style: "text-indent: 8px"
      }, "\n        Reset a Collection\n      "), "\n      ", HTML.DIV({
        class: "Mongol_documentViewer ",
        style: "padding-top: 0px"
      }, "\n        ", HTML.Comment(' <div class="MeteorToys_row Mongol_Impersonation MeteorToys_row_hoverable" style="margin-top: 0px">\n          Reset All Collections\n        </div> '), "\n        ", HTML.DIV({
        class: "MeteorToys_row Mongol_All MeteorToys_row_hoverable",
        style: "margin-top: 0px; line-height: 20px"
      }, "\n          All Collections + localStorage\n        "), "\n        ", HTML.DIV({
        class: "MeteorToys_row Mongol_MeteorToys MeteorToys_row_hoverable",
        style: "margin-top: 0px; line-height: 20px"
      }, "\n          Meteor Toys\n        "), "\n        ", HTML.DIV({
        class: "MeteorToys_row Mongol_Impersonation MeteorToys_row_hoverable",
        style: "margin-top: 0px; line-height: 20px"
      }, "\n          Authenticate Toy\n        "), "\n        ", Blaze.Each(function() {
        return Spacebars.call(view.lookup("collection"));
      }, function() {
        return [ "\n          ", Blaze.If(function() {
          return Spacebars.call(view.lookup("."));
        }, function() {
          return [ "\n            ", HTML.DIV({
            class: "MeteorToys_row MeteorToys_row_reset MeteorToys_row_hoverable",
            style: "margin-top: 0px; line-height: 20px"
          }, "\n              ", Blaze.View("lookup:.", function() {
            return Spacebars.mustache(view.lookup("."));
          }), " \n            "), "\n          " ];
        }), "\n        " ];
      }), "\n      "), "\n    "), "\n  " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_header/header.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0xf23a=["\x54\x68\x69\x73\x20\x77\x69\x6C\x6C\x20\x70\x65\x72\x6D\x61\x6E\x65\x6E\x74\x6C\x79\x20\x72\x65\x6D\x6F\x76\x65\x20\x61\x6C\x6C\x20\x74\x68\x65\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x73\x20\x69\x6E\x20","\x2E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x65\x73\x65\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x53\x6F\x72\x72\x79\x2C\x20\x74\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x72\x65\x6D\x6F\x76\x69\x6E\x67\x20","\x63\x61\x6C\x6C","\x54\x68\x69\x73\x20\x77\x69\x6C\x6C\x20\x70\x65\x72\x6D\x61\x6E\x65\x6E\x74\x6C\x79\x20\x72\x65\x6D\x6F\x76\x65\x20\x61\x6C\x6C\x20\x74\x68\x65\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x73\x20\x69\x6E\x20\x79\x6F\x75\x72\x20\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x73\x2E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x65\x73\x65\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x73","\x53\x6F\x72\x72\x79\x2C\x20\x74\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x72\x65\x6D\x6F\x76\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x73\x2E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x54\x68\x69\x73\x20\x77\x69\x6C\x6C\x20\x72\x65\x73\x65\x74\x20\x79\x6F\x75\x72\x20\x41\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x69\x6F\x6E\x20\x72\x65\x63\x65\x6E\x74\x73\x20\x6C\x69\x73\x74","\x54\x68\x69\x73\x20\x77\x69\x6C\x6C\x20\x72\x65\x73\x65\x74\x20\x61\x6C\x6C\x20\x79\x6F\x75\x72\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x64\x61\x74\x61\x2E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x65\x73\x65\x74\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x54\x68\x69\x73\x20\x77\x69\x6C\x6C\x20\x72\x65\x73\x65\x74\x20\x61\x6C\x6C\x20\x79\x6F\x75\x72\x20\x4D\x65\x74\x65\x6F\x72\x20\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x73\x20\x61\x6E\x64\x20\x6C\x6F\x63\x61\x6C\x53\x74\x6F\x72\x61\x67\x65\x2E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x65\x73\x65\x74\x41\x6C\x6C","\x63\x6C\x65\x61\x72","\x72\x65\x6C\x6F\x61\x64","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x65\x76\x65\x6E\x74\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x68\x65\x61\x64\x65\x72\x5F\x70\x72\x6F","\x4D\x6F\x6E\x67\x6F\x6C","\x67\x65\x74","\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x73","\x68\x65\x6C\x70\x65\x72\x73"];Template[_0xf23a[18]][_0xf23a[17]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x6F\x77\x5F\x72\x65\x73\x65\x74":function(){self= String(this);if(confirm(_0xf23a[0]+ self+ _0xf23a[1])){Meteor[_0xf23a[4]](_0xf23a[2],self,function(_0xf1e3x1,_0xf1e3x2){if(_0xf1e3x1){alert(_0xf23a[3]+ self+ _0xf23a[1])}})}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x6F\x77\x5F\x72\x65\x73\x65\x74\x5F\x61\x6C\x6C":function(){if(confirm(_0xf23a[5])){Meteor[_0xf23a[4]](_0xf23a[6],self,function(_0xf1e3x1,_0xf1e3x2){if(_0xf1e3x1){alert(_0xf23a[7])}})}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x69\x6F\x6E":function(){self= _0xf23a[8];if(confirm(_0xf23a[9])){Meteor[_0xf23a[4]](_0xf23a[2],self,function(_0xf1e3x1,_0xf1e3x2){if(_0xf1e3x1){alert(_0xf23a[3]+ self+ _0xf23a[1])}})}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73":function(){if(confirm(_0xf23a[10])){Meteor[_0xf23a[4]](_0xf23a[11],self,function(_0xf1e3x1,_0xf1e3x2){})}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x41\x6C\x6C":function(){if(confirm(_0xf23a[12])){Meteor[_0xf23a[4]](_0xf23a[13],function(_0xf1e3x1,_0xf1e3x2){if(_0xf1e3x1){alert(_0xf23a[3]+ self+ _0xf23a[1])};if(_0xf1e3x2){MeteorToys[_0xf23a[14]]();window[_0xf23a[16]][_0xf23a[15]]()}})}}});Template[_0xf23a[18]][_0xf23a[22]]({collection:function(){var _0xf1e3x3=MeteorToysDict[_0xf23a[20]](_0xf23a[19]);return _0xf1e3x3[_0xf23a[21]]}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_editor/template.docViewer.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("Mongol_docViewer");
Template["Mongol_docViewer"] = new Template("Template.Mongol_docViewer", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("notEmpty"));
  }, function() {
    return [ "\n    ", Spacebars.include(view.lookupTemplate("Mongol_docControls")), "\n    ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("activeDocument"));
    }, function() {
      return [ "\n      ", Blaze.If(function() {
        return Spacebars.call(view.lookup("editStyle"));
      }, function() {
        return [ "\n        ", HTML.DIV({
          class: function() {
            return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];
          },
          id: function() {
            return [ "MongolDoc_", Spacebars.mustache(view.lookup("..")) ];
          },
          contenteditable: function() {
            return Spacebars.mustache(view.lookup("editContent"));
          }
        }, "  \n          ", HTML.PRE({
          spellcheck: "false"
        }, Blaze.View("lookup:normalJSON", function() {
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("normalJSON")));
        })), "\n        "), "\n      " ];
      }, function() {
        return [ "\n        ", HTML.DIV({
          class: function() {
            return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];
          },
          id: function() {
            return [ "MongolDoc_", Spacebars.mustache(view.lookup("..")) ];
          },
          contenteditable: function() {
            return Spacebars.mustache(view.lookup("editContent"));
          }
        }, "  \n            ", HTML.PRE({
          spellcheck: "false"
        }, Blaze.View("lookup:editableJSON", function() {
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("editableJSON")));
        })), "\n        "), "\n      " ];
      }), "\n    " ];
    }, function() {
      return [ "\n      ", HTML.DIV({
        class: "Mongol_documentViewer",
        id: function() {
          return [ "MongolDoc_", Spacebars.mustache(view.lookup(".")) ];
        }
      }, "  \n        ", HTML.PRE("No document found"), "\n      "), "\n    " ];
    }), "\n  " ];
  }, function() {
    return [ "\n    ", Spacebars.include(view.lookupTemplate("Mongol_docInsert")), "\n  " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_editor/docViewer.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0x7aee=["\x66\x65\x74\x63\x68","\x66\x69\x6E\x64","\x4D\x6F\x6E\x67\x6F\x6C\x5F","\x67\x65\x74","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x63\x6F\x6C\x6F\x72\x69\x7A\x65\x45\x64\x69\x74\x61\x62\x6C\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4A\x53\x4F\x4E","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x65\x64\x69\x74\x4D\x6F\x64\x65","\x74\x72\x75\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x65\x64\x69\x74\x61\x62\x6C\x65","\x63\x6F\x75\x6E\x74","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x6F\x63\x56\x69\x65\x77\x65\x72"];Template[_0x7aee[13]][_0x7aee[12]]({activeDocument:function(){var _0x906cx1=String(this);var _0x906cx2=Mongol.Collection(_0x906cx1);var _0x906cx3=_0x906cx2[_0x7aee[1]]({},{transform:null})[_0x7aee[0]]();var _0x906cx4=_0x7aee[2]+ String(this);var _0x906cx5=MeteorToysDict[_0x7aee[3]](_0x906cx4);var _0x906cx6=_0x906cx3[_0x906cx5];return _0x906cx6},editableJSON:function(){var _0x906cx6=this;var _0x906cx7=JSON[_0x7aee[4]](_0x906cx6,null,2),_0x906cx8;if(!(_0x906cx7=== undefined)){_0x906cx8= Package[_0x7aee[7]][_0x7aee[6]][_0x7aee[5]](_0x906cx7)}else {_0x906cx8= _0x906cx7};return _0x906cx8},normalJSON:function(){var _0x906cx6=this,_0x906cx7=JSON[_0x7aee[4]](_0x906cx6,null,2);return _0x906cx7},editContent:function(){var _0x906cx9=MeteorToysDict[_0x7aee[3]](_0x7aee[8]);if(_0x906cx9){return _0x7aee[9]}},editStyle:function(){var _0x906cx9=MeteorToysDict[_0x7aee[3]](_0x7aee[8]);if(_0x906cx9){return _0x7aee[10]}},notEmpty:function(){var _0x906cxa=Mongol.Collection(String(this))&& Mongol.Collection(String(this))[_0x7aee[1]]()[_0x7aee[11]]()|| 0;if(_0x906cxa>= 1){return true}}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_editor/inline.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0x761c=["\x4D\x6F\x6E\x67\x6F\x6C\x5F\x63\x75\x72\x72\x65\x6E\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x67\x65\x74","\x68\x74\x6D\x6C","\x23\x4D\x6F\x6E\x67\x6F\x6C\x44\x6F\x63\x5F","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x62\x61\x63\x6B\x75\x70","\x73\x65\x74","\x74\x65\x78\x74","\x23\x4D\x6F\x6E\x67\x6F\x6C\x5F\x63","\x20\x70\x72\x65","\x69\x73\x53\x74\x72\x69\x6E\x67","\x65\x78\x65\x63","\x70\x61\x72\x73\x65","\x72\x65\x73\x74\x6F\x72\x65\x42\x61\x63\x6B\x75\x70","\x61\x63\x63\x6F\x75\x6E\x74\x5F\x36\x31\x38","\x65\x71\x75\x61\x6C\x73","\x75\x73\x65\x72\x73","\x67\x65\x74\x44\x6F\x63\x75\x6D\x65\x6E\x74\x55\x70\x64\x61\x74\x65","\x67\x65\x74\x44\x61\x74\x61","\x75\x73\x65\x72","\x4D\x6F\x6E\x67\x6F\x6C\x5F","\x66\x65\x74\x63\x68","\x66\x69\x6E\x64","","\x20","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x75\x70\x64\x61\x74\x65","\x76\x61\x6C\x69\x64\x61\x74\x65\x44\x6F\x63\x75\x6D\x65\x6E\x74","\x75\x70\x64\x61\x74\x65","\x65\x72\x72\x6F\x72","\x63\x61\x6C\x6C","\x6B\x65\x79\x43\x6F\x64\x65","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x62\x6C\x75\x72","\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65\x3A\x66\x6F\x63\x75\x73","\x6B\x65\x79\x64\x6F\x77\x6E","\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65","\x67\x65\x74\x53\x65\x6C\x65\x63\x74\x69\x6F\x6E","\x65\x6D\x70\x74\x79","\x72\x65\x6D\x6F\x76\x65\x41\x6C\x6C\x52\x61\x6E\x67\x65\x73","\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x65\x64\x69\x74\x4D\x6F\x64\x65","\x75\x70\x64\x61\x74\x65\x44\x61\x74\x61","\x72\x65\x6D\x6F\x76\x65\x54\x65\x78\x74\x53\x65\x6C\x65\x63\x74\x69\x6F\x6E","\x62\x69\x6E\x64\x48\x6F\x74\x6B\x65\x79\x73","\x63\x72\x65\x61\x74\x65\x42\x61\x63\x6B\x75\x70","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x65\x76\x65\x6E\x74\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x6F\x63\x56\x69\x65\x77\x65\x72"];MongolEditingStatus= false;Mongol_InlineEditor= {createBackup:function(){current= MeteorToysDict[_0x761c[1]](_0x761c[0]);content= $(_0x761c[3]+ current)[_0x761c[2]]();MeteorToysDict[_0x761c[5]](_0x761c[4],content)},restoreBackup:function(){current= MeteorToysDict[_0x761c[1]](_0x761c[0]);content= MeteorToysDict[_0x761c[1]](_0x761c[4]);$(_0x761c[3]+ current)[_0x761c[2]](content)},clearBackup:function(){MeteorToysDict[_0x761c[5]](_0x761c[4],null)},getData:function(){var _0x48f9x1=MeteorToysDict[_0x761c[1]](_0x761c[0]),_0x48f9x2=$(_0x761c[7]+ _0x48f9x1+ _0x761c[8])[_0x761c[6]]();var _0x48f9x3=null;try{var _0x48f9x4=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;var _0x48f9x5=function(_0x48f9x6,_0x48f9x7){if(_[_0x761c[9]](_0x48f9x7)){var _0x48f9x8=_0x48f9x4[_0x761c[10]](_0x48f9x7);if(_0x48f9x8){return  new Date(_0x48f9x7)}};return _0x48f9x7};_0x48f9x3= JSON[_0x761c[11]](_0x48f9x2,_0x48f9x5)}catch(error){Mongol_InlineEditor[_0x761c[12]]()};return _0x48f9x3},updateData:function(){var _0x48f9x9=(MeteorToysDict[_0x761c[14]](_0x761c[0],_0x761c[13]))?_0x761c[15]:MeteorToysDict[_0x761c[1]](_0x761c[0]),_0x48f9xa,_0x48f9x3,_0x48f9xb;if(MeteorToysDict[_0x761c[14]](_0x761c[0],_0x761c[13])){_0x48f9xb= Mongol[_0x761c[16]](_0x761c[13]);_0x48f9x3= Mongol_InlineEditor[_0x761c[17]]();_0x48f9xa= Meteor[_0x761c[18]]()}else {var _0x48f9xc=_0x761c[19]+ _0x48f9x9;DocumentPosition= MeteorToysDict[_0x761c[1]](_0x48f9xc),CurrentCollection= Mongol.Collection(_0x48f9x9)[_0x761c[21]]({},{transform:null})[_0x761c[20]]();_0x48f9xb= Mongol[_0x761c[16]](_0x48f9x9);_0x48f9x3= Mongol_InlineEditor[_0x761c[17]]();_0x48f9xa= CurrentCollection[DocumentPosition]};delete _0x48f9x3[_0x761c[22]];delete _0x48f9x3[_0x761c[23]];if(_0x48f9x3){Meteor[_0x761c[28]](_0x761c[24],_0x48f9x9,_0x48f9x3,Mongol[_0x761c[25]](_0x48f9xa),function(_0x48f9xd,_0x48f9xe){if(!_0x48f9xd){}else {Mongol[_0x761c[27]](_0x761c[26]);Mongol_InlineEditor[_0x761c[12]]()}})}},bindHotkeys:function(){$(_0x761c[34])[_0x761c[33]](function(_0x48f9xf){if(_0x48f9xf[_0x761c[29]]== 10|| _0x48f9xf[_0x761c[29]]== 13){_0x48f9xf[_0x761c[30]]();$(_0x761c[32])[_0x761c[31]]()};if(_0x48f9xf[_0x761c[29]]== 27){Mongol_InlineEditor[_0x761c[12]]();$(_0x761c[32])[_0x761c[31]]()}})},removeTextSelection:function(){if(window[_0x761c[35]]){if(window[_0x761c[35]]()[_0x761c[36]]){window[_0x761c[35]]()[_0x761c[36]]()}else {if(window[_0x761c[35]]()[_0x761c[37]]){window[_0x761c[35]]()[_0x761c[37]]()}}}else {if(document[_0x761c[38]]){document[_0x761c[38]][_0x761c[36]]()}}}};Template[_0x761c[46]][_0x761c[45]]({"\x64\x62\x6C\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x6F\x63\x75\x6D\x65\x6E\x74\x56\x69\x65\x77\x65\x72":function(){MeteorToysDict[_0x761c[5]](_0x761c[39],true)},"\x66\x6F\x63\x75\x73\x6F\x75\x74\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65":function(){try{a= Mongol_InlineEditor[_0x761c[40]]();b= Mongol_InlineEditor[_0x761c[41]]()}catch(e){}},"\x66\x6F\x63\x75\x73\x69\x6E\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65":function(){a= Mongol_InlineEditor[_0x761c[42]]();b= Mongol_InlineEditor[_0x761c[43]]()},"\x64\x62\x6C\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65":function(_0x48f9x10,_0x48f9x11){_0x48f9x10[_0x761c[44]]()}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_account/template.account.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("Mongol_account");
Template["Mongol_account"] = new Template("Template.Mongol_account", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("account_618")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {
      return [ "\n\n\t\t\t", HTML.Comment(" Display sign in status "), "\n\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("currentUser"));
      }, function() {
        return [ "\n\t\t\t\t", HTML.DIV({
          class: "Mongol_account_state MeteorToys-background-green"
        }), "\n\t\t\t" ];
      }, function() {
        return [ "\n\t\t\t\t", HTML.DIV({
          class: "Mongol_account_state MeteorToys-background-red"
        }), "\n\t\t\t" ];
      }), "\n\n\t\t\t", HTML.Comment(" Row Name "), "\n\t\t\t", HTML.DIV({
        class: "Mongol_icon Mongol_icon_user"
      }), "\n\t\t\tAccount\n     \n        ", HTML.DIV({
        class: "Mongol_contentView"
      }, "\n\n\t\t\t", HTML.Comment(" Document Viewer "), "\n\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("currentUser"));
      }, function() {
        return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_accountViewer")), "\n\t\t\t" ];
      }, function() {
        return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_accountViewer_notSignedIn")), "\n\t\t\t" ];
      }), "\n\n\t\t"), "\n\n\t" ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_account/account.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_account/template.accountViewer.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("Mongol_accountViewer");
Template["Mongol_accountViewer"] = new Template("Template.Mongol_accountViewer", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("Mongol_docControls")), "\n\n\t", HTML.DIV({
    class: function() {
      return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];
    },
    id: "MongolDoc_account_618",
    contenteditable: function() {
      return Spacebars.mustache(view.lookup("editContent"));
    }
  }, "\t\n\t\t", HTML.PRE(Blaze.View("lookup:accountData", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("accountData")));
  })), "\n\t") ];
}));

Template.__checkName("Mongol_accountViewer_notSignedIn");
Template["Mongol_accountViewer_notSignedIn"] = new Template("Template.Mongol_accountViewer_notSignedIn", (function() {
  var view = this;
  return HTML.Raw('<div class="Mongol_docMenu">\n\t\t\t<div class="Mongol_docBar1" style="text-indent: 8px">\n\t\t\t\tNot Signed In\n\t\t\t</div>\n\t\t</div>\n\t<div class="Mongol_documentViewer">\t\n\t\t<!-- Nothing -->\n\t</div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_account/accountViewer.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0x5f1f=["\x75\x73\x65\x72","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x65\x64\x69\x74\x4D\x6F\x64\x65","\x67\x65\x74","\x63\x6F\x6C\x6F\x72\x69\x7A\x65\x45\x64\x69\x74\x61\x62\x6C\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x74\x72\x75\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x65\x64\x69\x74\x61\x62\x6C\x65","\x75\x73\x65\x72\x49\x64","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x61\x63\x63\x6F\x75\x6E\x74\x56\x69\x65\x77\x65\x72","\x73\x65\x74","\x75\x70\x64\x61\x74\x65\x44\x61\x74\x61","\x72\x65\x6D\x6F\x76\x65\x54\x65\x78\x74\x53\x65\x6C\x65\x63\x74\x69\x6F\x6E","\x62\x69\x6E\x64\x48\x6F\x74\x6B\x65\x79\x73","\x63\x72\x65\x61\x74\x65\x42\x61\x63\x6B\x75\x70","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x65\x76\x65\x6E\x74\x73"];Template[_0x5f1f[11]][_0x5f1f[10]]({accountData:function(){var _0x1862x1=Meteor[_0x5f1f[0]](),_0x1862x2=JSON[_0x5f1f[1]](_0x1862x1,null,2);if(MeteorToysDict[_0x5f1f[3]](_0x5f1f[2])){colorized= _0x1862x2}else {colorized= Package[_0x5f1f[6]][_0x5f1f[5]][_0x5f1f[4]](_0x1862x2)};return colorized},editContent:function(){var _0x1862x3=MeteorToysDict[_0x5f1f[3]](_0x5f1f[2]);if(_0x1862x3){return _0x5f1f[7]}},editStyle:function(){var _0x1862x3=MeteorToysDict[_0x5f1f[3]](_0x5f1f[2]);if(_0x1862x3){return _0x5f1f[8]}},usercode:function(){return Meteor[_0x5f1f[9]]()}});Template[_0x5f1f[11]][_0x5f1f[18]]({"\x64\x62\x6C\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x6F\x63\x75\x6D\x65\x6E\x74\x56\x69\x65\x77\x65\x72":function(){MeteorToysDict[_0x5f1f[12]](_0x5f1f[2],true)},"\x66\x6F\x63\x75\x73\x6F\x75\x74\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65":function(){a= Mongol_InlineEditor[_0x5f1f[13]]();b= Mongol_InlineEditor[_0x5f1f[14]]()},"\x66\x6F\x63\x75\x73\x69\x6E\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65":function(){a= Mongol_InlineEditor[_0x5f1f[15]]();b= Mongol_InlineEditor[_0x5f1f[16]]()},"\x64\x62\x6C\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65":function(_0x1862x4,_0x1862x5){_0x1862x4[_0x5f1f[17]]()}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_collection_notFound/template.notFound.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("Mongol_collection_notFound");
Template["Mongol_collection_notFound"] = new Template("Template.Mongol_collection_notFound", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("no_collections")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {
      return [ "\n\n    ", HTML.DIV({
        class: "Mongol_icon Mongol_icon_collection"
      }), "No Collections", HTML.BR(), "\n    ", HTML.DIV({
        class: "Mongol_contentView"
      }, "\n    ", HTML.Comment("  "), "\n      ", HTML.DIV({
        class: "Mongol_docMenu",
        style: "text-indent: 8px"
      }, "\n        None Detected\n      "), "\n      ", HTML.DIV({
        class: "Mongol_documentViewer "
      }, "\n\n        If you think this is an error,", HTML.BR(), "\n        please report it on ", HTML.A({
        href: "https://github.com/msavin/Mongol",
        style: "color: #cc0000"
      }, "GitHub"), ".\n        \n      "), "\n    ", HTML.Comment("  "), "\n    "), "\n\n  " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_collection_notFound/notFound.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_collection/template.collections.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("Mongol_collection");
Template["Mongol_collection"] = new Template("Template.Mongol_collection", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call(view.lookup("."))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {
      return [ "\n\n\t\t", HTML.Comment(" Collection Count "), "\n\t\t", HTML.DIV({
        class: "Mongol_counter"
      }, "\n\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("collectionCount"));
      }, function() {
        return [ "\n\t\t\t", HTML.SPAN({
          class: "MongolHide"
        }, Blaze.View("lookup:currentPosition", function() {
          return Spacebars.mustache(view.lookup("currentPosition"));
        }), "/") ];
      }), Blaze.View("lookup:collectionCount", function() {
        return Spacebars.mustache(view.lookup("collectionCount"));
      }), "\n\t\t"), "\n\n\t\t", HTML.Comment(" Collection Name "), "\n\t\t", HTML.DIV({
        class: "Mongol_row_name"
      }, HTML.DIV({
        class: "Mongol_icon Mongol_icon_collection"
      }), Blaze.View("lookup:.", function() {
        return Spacebars.mustache(view.lookup("."));
      }), Blaze.If(function() {
        return Spacebars.call(view.lookup("xf"));
      }, function() {
        return Blaze.View("lookup:xf", function() {
          return Spacebars.mustache(view.lookup("xf"));
        });
      })), "\n    \t    \n\t\t", HTML.Comment(" Document Viewer "), "\n\t\t", HTML.DIV({
        class: "Mongol_contentView"
      }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_docViewer")), "\n\t\t"), "\n\t\t\n\t" ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_collection/collections.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0x60b5=["\x4D\x6F\x6E\x67\x6F\x6C\x5F","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x63\x75\x72\x72\x65\x6E\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x65\x71\x75\x61\x6C\x73","\x67\x65\x74","\x73\x65\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x63\x6F\x75\x6E\x74","\x66\x69\x6E\x64","\x68\x65\x6C\x70\x65\x72\x73"];Template[_0x60b5[6]][_0x60b5[5]]({"\x63\x6C\x69\x63\x6B":function(){var _0xe11bx1=String(this),_0xe11bx2=_0x60b5[0]+ _0xe11bx1;if(MeteorToysDict[_0x60b5[2]](_0x60b5[1],_0xe11bx1)){}else {if(!MeteorToysDict[_0x60b5[3]](String(_0xe11bx2))){MeteorToysDict[_0x60b5[4]](String(_0xe11bx2),0)}}}});Template[_0x60b5[6]][_0x60b5[9]]({collectionCount:function(){var _0xe11bx3=String(this);var _0xe11bx4=Mongol.Collection(_0xe11bx3);var _0xe11bx5=_0xe11bx4&& _0xe11bx4[_0x60b5[8]]()[_0x60b5[7]]()|| 0;return _0xe11bx5},currentPosition:function(){var _0xe11bx1=String(this);var _0xe11bx2=_0x60b5[0]+ _0xe11bx1;var _0xe11bx6=MeteorToysDict[_0x60b5[3]](_0xe11bx2);var _0xe11bx5=_0xe11bx6+ 1;return _0xe11bx5}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_trash/template.main.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("Mongol_trash");
Template["Mongol_trash"] = new Template("Template.Mongol_trash", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("trash")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {
      return [ "\n\t  \n\t\t", HTML.DIV({
        class: "Mongol_counter"
      }, "\n\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("collectionCount"));
      }, function() {
        return [ "\n\t\t\t\t", HTML.SPAN({
          class: "MongolHide"
        }, Blaze.View("lookup:currentPosition", function() {
          return Spacebars.mustache(view.lookup("currentPosition"));
        }), "/") ];
      }), Blaze.View("lookup:collectionCount", function() {
        return Spacebars.mustache(view.lookup("collectionCount"));
      }), "\n\t\t"), "\n\n\t\t", HTML.DIV({
        class: "Mongol_row_name"
      }, HTML.DIV({
        class: "Mongol_icon Mongol_icon_trash"
      }), "Trash"), "\n\n\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("collectionCount"));
      }, function() {
        return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_trash_viewer")), "\n\t\t" ];
      }, function() {
        return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_trash_empty")), "\n\t\t" ];
      }), "\n\n\t" ];
    });
  });
}));

Template.__checkName("Mongol_trash_menu");
Template["Mongol_trash_menu"] = new Template("Template.Mongol_trash_menu", (function() {
  var view = this;
  return HTML.DIV({
    class: "Mongol_docMenu"
  }, HTML.Raw('\n\t\t<div class="Mongol_m_edit MeteorToys_action">Restore</div>\n\t\t'), HTML.DIV({
    class: function() {
      return [ Spacebars.mustache(view.lookup("disable_right")), " Mongol_m_right MeteorToys_action" ];
    }
  }, HTML.Raw("&rsaquo;")), "\n\t\t", HTML.DIV({
    class: function() {
      return [ Spacebars.mustache(view.lookup("disable_left")), " Mongol_m_left MeteorToys_action" ];
    }
  }, HTML.Raw("&lsaquo;")), "\n\t");
}));

Template.__checkName("Mongol_trash_viewer");
Template["Mongol_trash_viewer"] = new Template("Template.Mongol_trash_viewer", (function() {
  var view = this;
  return HTML.DIV({
    class: "Mongol_contentView"
  }, "\n\t\t", Spacebars.include(view.lookupTemplate("Mongol_trash_menu")), "\n\t    ", HTML.DIV({
    class: "Mongol_documentViewer"
  }, "\n", HTML.PRE("From ", Blaze.View("lookup:collectionName", function() {
    return Spacebars.mustache(view.lookup("collectionName"));
  }), " ", Blaze.View("lookup:currentDocument", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("currentDocument")));
  })), "\n\t    "), "\n\t");
}));

Template.__checkName("Mongol_trash_empty");
Template["Mongol_trash_empty"] = new Template("Template.Mongol_trash_empty", (function() {
  var view = this;
  return HTML.Raw('<div class="Mongol_contentView">\n\t\t<div class="Mongol_docMenu" style="text-indent: 8px">Empty</div>\n\t\t<div class="Mongol_documentViewer">\n<pre>When you remove documents,\nthey will appear here.</pre></div>\n\t</div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_trash/main.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0xedd7=["\x4D\x6F\x6E\x67\x6F\x6C\x5F\x54\x72\x61\x73\x68\x5F\x43\x6F\x75\x6E\x74","\x67\x65\x74","\x73\x65\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x74\x72\x61\x73\x68","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x4D\x6F\x6E\x67\x6F\x6C","\x4D\x6F\x6E\x67\x6F\x6C","\x6D\x73\x61\x76\x69\x6E\x3A\x6D\x6F\x6E\x67\x6F\x6C","\x63\x6F\x75\x6E\x74","\x66\x69\x6E\x64","\x54\x72\x61\x73\x68\x5F\x43\x6F\x75\x6E\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F","\x68\x65\x6C\x70\x65\x72\x73","\x66\x65\x74\x63\x68","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6F\x72\x69\x67\x69\x6E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x61\x74\x65","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x63\x6F\x6C\x6F\x72\x69\x7A\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x74\x72\x61\x73\x68\x5F\x76\x69\x65\x77\x65\x72","\x5F\x69\x64","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x69\x6E\x73\x65\x72\x74","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x72\x65\x73\x74\x6F\x72\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E","\x63\x61\x6C\x6C","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x65\x6D\x6F\x76\x65","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x72\x65\x6D\x6F\x76\x69\x6E\x67\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x20\x66\x72\x6F\x6D\x20\x74\x72\x61\x73\x68\x2C","\x63\x6C\x69\x63\x6B","\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x6C\x65\x66\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x64\x69\x73\x61\x62\x6C\x65\x64","\x68\x61\x73\x43\x6C\x61\x73\x73","\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x72\x69\x67\x68\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x74\x72\x61\x73\x68\x5F\x6D\x65\x6E\x75"];Template[_0xedd7[4]][_0xedd7[3]]({"\x63\x6C\x69\x63\x6B":function(){if(!MeteorToysDict[_0xedd7[1]](_0xedd7[0])){MeteorToysDict[_0xedd7[2]](_0xedd7[0],0)}}});Template[_0xedd7[4]][_0xedd7[12]]({collectionCount:function(){var _0x193bx1=_0xedd7[5];var _0x193bx2=Package[_0xedd7[7]][_0xedd7[6]].Collection(_0x193bx1);var _0x193bx3=_0x193bx2&& _0x193bx2[_0xedd7[9]]()[_0xedd7[8]]()|| 0;return _0x193bx3},currentPosition:function(){var _0x193bx4=_0xedd7[10];var _0x193bx5=_0xedd7[11]+ _0x193bx4;var _0x193bx6=MeteorToysDict[_0xedd7[1]](_0x193bx5);var _0x193bx3=_0x193bx6+ 1;return _0x193bx3}});Template[_0xedd7[20]][_0xedd7[12]]({currentDocument:function(){var _0x193bx1=_0xedd7[5],_0x193bx7=MeteorToysDict[_0xedd7[1]](_0xedd7[0]),_0x193bx8=Package[_0xedd7[7]][_0xedd7[6]].Collection(_0xedd7[5])[_0xedd7[9]]()[_0xedd7[13]]()[_0x193bx7];if(_0x193bx8){delete _0x193bx8[_0xedd7[14]];delete _0x193bx8[_0xedd7[15]];var _0x193bx9=Package[_0xedd7[19]][_0xedd7[18]][_0xedd7[17]](JSON[_0xedd7[16]](_0x193bx8,undefined,2));return _0x193bx9}},collectionName:function(){var _0x193bx1=_0xedd7[5],_0x193bx7=MeteorToysDict[_0xedd7[1]](_0xedd7[0]),_0x193bx8=Package[_0xedd7[7]][_0xedd7[6]].Collection(_0xedd7[5])[_0xedd7[9]]()[_0xedd7[13]]()[_0x193bx7];if(_0x193bx8){return _0x193bx8[_0xedd7[14]]}}});Template[_0xedd7[32]][_0xedd7[3]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x65\x64\x69\x74":function(){var _0x193bx1=_0xedd7[5],_0x193bx7=MeteorToysDict[_0xedd7[1]](_0xedd7[0]),_0x193bx8=Package[_0xedd7[7]][_0xedd7[6]].Collection(_0xedd7[5])[_0xedd7[9]]()[_0xedd7[13]]()[_0x193bx7];var _0x193bx4=_0x193bx8[_0xedd7[14]];var _0x193bxa=_0x193bx8[_0xedd7[21]];delete _0x193bx8[_0xedd7[14]];delete _0x193bx8[_0xedd7[15]];Meteor[_0xedd7[24]](_0xedd7[22],_0x193bx4,_0x193bx8,function(_0x193bxb,_0x193bxc){if(_0x193bxb){alert(_0xedd7[23])}});Meteor[_0xedd7[24]](_0xedd7[25],_0xedd7[5],_0x193bxa,true,function(_0x193bxb,_0x193bxc){if(_0x193bxb){alert(_0xedd7[26])}});var _0x193bx5=_0xedd7[0];var _0x193bxd=MeteorToysDict[_0xedd7[1]](_0x193bx5);var _0x193bx2=Package[_0xedd7[7]][_0xedd7[6]].Collection(_0xedd7[5]);var _0x193bxe=_0x193bx2[_0xedd7[9]]()[_0xedd7[8]]()- 1;if(_0x193bxe=== _0x193bxd){$(_0xedd7[28])[_0xedd7[27]]()}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x72\x69\x67\x68\x74":function(){if(!$(_0xedd7[31])[_0xedd7[30]](_0xedd7[29])){var _0x193bx5=_0xedd7[0];var _0x193bxd=MeteorToysDict[_0xedd7[1]](_0x193bx5);var _0x193bx2=Package[_0xedd7[7]][_0xedd7[6]].Collection(_0xedd7[5]);var _0x193bxe=_0x193bx2[_0xedd7[9]]()[_0xedd7[8]]()- 1;if(_0x193bxd> _0x193bxe){MeteorToysDict[_0xedd7[2]](_0x193bx5,0);return};if(_0x193bxe=== _0x193bxd){MeteorToysDict[_0xedd7[2]](_0x193bx5,0)}else {var _0x193bxf=MeteorToysDict[_0xedd7[1]](_0x193bx5)+ 1;MeteorToysDict[_0xedd7[2]](_0x193bx5,_0x193bxf)}}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x6C\x65\x66\x74":function(){if(!$(_0xedd7[28])[_0xedd7[30]](_0xedd7[29])){var _0x193bx5=_0xedd7[0];var _0x193bxd=MeteorToysDict[_0xedd7[1]](_0x193bx5);var _0x193bx2=Package[_0xedd7[7]][_0xedd7[6]].Collection(_0xedd7[5]);var _0x193bxe=_0x193bx2[_0xedd7[9]]()[_0xedd7[8]]()- 1;if(_0x193bxd> _0x193bxe){MeteorToysDict[_0xedd7[2]](_0x193bx5,_0x193bxe);return};if(MeteorToysDict[_0xedd7[1]](_0x193bx5)=== 0){MeteorToysDict[_0xedd7[2]](_0x193bx5,_0x193bxe)}else {var _0x193bxf=MeteorToysDict[_0xedd7[1]](_0x193bx5)- 1;MeteorToysDict[_0xedd7[2]](_0x193bx5,_0x193bxf)}}}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_insert/template.docInsert.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("Mongol_docInsert");
Template["Mongol_docInsert"] = new Template("Template.Mongol_docInsert", (function() {
  var view = this;
  return [ HTML.Raw('<div class="Mongol_docMenu">\n\t\t<div class="MeteorToys_action Mongol_docMenu_insert" style="float: right">Submit</div>\n\t\t&nbsp;Insert a Document\n\t</div>\n\n\t'), HTML.DIV({
    class: "Mongol_documentViewer ",
    id: function() {
      return [ "Mongol_", Spacebars.mustache(view.lookup(".")), "_newEntry" ];
    },
    tabindex: "-1",
    contenteditable: "true"
  }, "\t\n", HTML.Raw("<pre>{\n\n}</pre>"), "\n\n\t") ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_insert/docInsert.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0x1ec8=["\x4D\x6F\x6E\x67\x6F\x6C\x5F","\x5F\x6E\x65\x77\x45\x6E\x74\x72\x79","\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x70\x61\x72\x73\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x69\x6E\x73\x65\x72\x74","\x73\x65\x74","\x44\x6F\x63\x75\x6D\x65\x6E\x74\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6C\x6C\x79\x20\x69\x6E\x73\x65\x72\x74\x65\x64\x2E","\x7B\x3C\x62\x72\x3E\x3C\x62\x72\x3E\x7D","\x68\x74\x6D\x6C","\x23\x4D\x6F\x6E\x67\x6F\x6C\x5F","\x69\x6E\x73\x65\x72\x74","\x65\x72\x72\x6F\x72","\x63\x61\x6C\x6C","\x65\x76\x65\x6E\x74\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x6F\x63\x49\x6E\x73\x65\x72\x74"];Template[_0x1ec8[15]][_0x1ec8[14]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x6F\x63\x4D\x65\x6E\x75\x5F\x69\x6E\x73\x65\x72\x74":function(_0x6a7fx1,_0x6a7fx2){var _0x6a7fx3=String(this),_0x6a7fx4=_0x1ec8[0]+ String(this)+ _0x1ec8[1],_0x6a7fx5=document[_0x1ec8[3]](_0x6a7fx4)[_0x1ec8[2]],_0x6a7fx6=Mongol[_0x1ec8[4]](_0x6a7fx5);if(_0x6a7fx6){Meteor[_0x1ec8[13]](_0x1ec8[5],_0x6a7fx3,_0x6a7fx6,function(_0x6a7fx7,_0x6a7fx8){if(!_0x6a7fx7){sessionKey= _0x1ec8[0]+ _0x6a7fx3;MeteorToysDict[_0x1ec8[6]](sessionKey,0);alert(_0x1ec8[7]);_0x6a7fx2.$(_0x1ec8[10]+ _0x6a7fx3+ _0x1ec8[1])[_0x1ec8[9]](_0x1ec8[8])}else {Mongol[_0x1ec8[12]](_0x1ec8[11])}})}}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/_component/template.component.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("Mongol_Component");
Template["Mongol_Component"] = new Template("Template.Mongol_Component", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "Mongol_row ", Spacebars.mustache(view.lookup("active")) ];
    },
    id: function() {
      return [ "Mongol_c", Spacebars.mustache(view.lookup("name")) ];
    }
  }, "\n\t\t", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/_component/component.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0x31e5=["\x4D\x6F\x6E\x67\x6F\x6C","\x63\x6C\x6F\x73\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x63\x75\x72\x72\x65\x6E\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x67\x65\x74","\x73\x65\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x65\x64\x69\x74\x4D\x6F\x64\x65","\x77\x68\x69\x63\x68","\x6E\x61\x6D\x65","\x65\x71\x75\x61\x6C\x73","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x70\x72\x65\x76\x69\x65\x77","\x65\x76\x65\x6E\x74\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x6F\x77\x5F\x65\x78\x70\x61\x6E\x64","\x68\x65\x6C\x70\x65\x72\x73"];window[_0x31e5[0]]= {};window[_0x31e5[0]][_0x31e5[1]]= function(){if(MeteorToysDict[_0x31e5[3]](_0x31e5[2])){MeteorToysDict[_0x31e5[4]](_0x31e5[2],null);MeteorToysDict[_0x31e5[4]](_0x31e5[5],false)}else {MeteorToys[_0x31e5[1]]()}};Template[_0x31e5[12]][_0x31e5[11]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x6F\x77":function(_0xa3b1x1,_0xa3b1x2){if(_0xa3b1x1[_0x31e5[6]]=== 1){if(MeteorToysDict[_0x31e5[8]](_0x31e5[2],this[_0x31e5[7]])){MeteorToysDict[_0x31e5[4]](_0x31e5[2],null)}else {MeteorToysDict[_0x31e5[4]](_0x31e5[2],this[_0x31e5[7]])};MeteorToysDict[_0x31e5[4]](_0x31e5[5],false)}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x63\x6F\x6E\x74\x65\x6E\x74\x56\x69\x65\x77":function(_0xa3b1x1){_0xa3b1x1[_0x31e5[9]]()},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x6F\x77":function(){MeteorToysDict[_0x31e5[4]](_0x31e5[10],this[_0x31e5[7]])}});Template[_0x31e5[12]][_0x31e5[14]]({active:function(){if(MeteorToysDict[_0x31e5[8]](_0x31e5[2],this[_0x31e5[7]])){return _0x31e5[13]}}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/template.main.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("Mongol");
Template["Mongol"] = new Template("Template.Mongol", (function() {
  var view = this;
  return HTML.DIV({
    id: "Mongol",
    class: function() {
      return [ "MeteorToys MeteorToys_hide_Mongol MeteorToysReset ", Spacebars.mustache(view.lookup("active")) ];
    },
    oncontextmenu: "Mongol.close(); return false;"
  }, "\n\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("MeteorToys_Pro"));
  }, function() {
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_header_pro")), "\n\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_account")), "\n\t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("Mongol_collections"));
    }, function() {
      return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_collection")), "\n\t\t\t" ];
    }, function() {
      return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_collection_notFound")), "\n\t\t\t" ];
    }), "\n\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_trash")), "\n\t\t" ];
  }, function() {
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_header")), "\n\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_account")), "\n\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_support")), "\n\t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("Mongol_collections"));
    }, function() {
      return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_collection")), "\n\t\t\t" ];
    }, function() {
      return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("Mongol_collection_notFound")), "\n\t\t\t" ];
    }), "\n\t\t" ];
  }), "\n\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/main.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0xe502=["\x64\x65\x74\x65\x63\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x68\x69\x64\x65\x4D\x65\x74\x65\x6F\x72","\x68\x69\x64\x65\x56\x65\x6C\x6F\x63\x69\x74\x79","\x68\x69\x64\x65\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x73\x74\x61\x72\x74\x75\x70","\x4D\x6F\x6E\x67\x6F\x6C","\x67\x65\x74","\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x73","\x77\x69\x74\x68\x6F\x75\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x63\x75\x72\x72\x65\x6E\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x65\x78\x70\x61\x6E\x64","\x68\x65\x6C\x70\x65\x72\x73"];Meteor[_0xe502[6]](function(){Mongol[_0xe502[0]]();MeteorToysDict= Package[_0xe502[2]][_0xe502[1]];Mongol[_0xe502[3]]();Mongol[_0xe502[4]]();Mongol[_0xe502[5]]()});Template[_0xe502[7]][_0xe502[13]]({Mongol_collections:function(){var _0x47a5x1=MeteorToysDict[_0xe502[8]](_0xe502[7]);return _0x47a5x1&& _[_0xe502[10]](_0x47a5x1[_0xe502[9]],null)|| []},active:function(){var _0x47a5x2=MeteorToysDict[_0xe502[8]](_0xe502[11]);if(_0x47a5x2){return _0xe502[12]}}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_controls/template.docControls.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("Mongol_docControls");
Template["Mongol_docControls"] = new Template("Template.Mongol_docControls", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("active"));
  }, function() {
    return [ "\n\t\t\n\t\t", HTML.DIV({
      class: function() {
        return [ "Mongol_docMenu ", Spacebars.mustache(view.lookup("Mongol_docMenu_editing")) ];
      }
    }, "\n\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("account"));
    }, function() {
      return [ "\n\t\t\t\t", HTML.DIV({
        class: "Mongol_docBar1"
      }, "\n\t\t\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("editing"));
      }, function() {
        return [ "\n\t\t\t\t\t\t", HTML.DIV({
          class: "Mongol_edit_title"
        }, "Update Document"), "\n\t\t\t\t\t\t", HTML.DIV({
          class: "MeteorToys_action Mongol_edit_save"
        }, "Save"), "\n\t\t\t\t\t\t", HTML.DIV({
          class: "MeteorToys_action Mongol_edit_cancel"
        }, "Cancel"), "\n\t\t\t\t\t" ];
      }, function() {
        return [ "\t\n\t\t\t\t\t\t\n                        ", HTML.Comment("For some reason, the method in place does not work for this\n                        Commenting out for now"), "\n                        ", HTML.DIV({
          class: "MeteorToys_action Mongol_m_edit Mongol_m_updateAccount"
        }, "Update"), "\n\t\t\t\t\t\t\n\t\t\t\t\t\t", HTML.Comment(" &nbsp;Currently Read-Only "), "\n\t\t\t\t\t\t", HTML.DIV({
          class: "MeteorToys_action Mongol_m_signout"
        }, "Sign Out"), "\n                        \n\t\t\t\t\t" ];
      }), "\n\t\t\t\t"), "\n\t\t\t" ];
    }, function() {
      return [ "\n\t\t\t\t", HTML.DIV({
        class: "Mongol_docBar1"
      }, "\n\t\t\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("editing"));
      }, function() {
        return [ "\n\t\t\t\t\t\t", HTML.DIV({
          class: "Mongol_edit_title"
        }, "Update Document"), "\n\t\t\t\t\t\t", HTML.DIV({
          class: "MeteorToys_action Mongol_edit_save"
        }, "Save"), "\n\t\t\t\t\t\t", HTML.DIV({
          class: "MeteorToys_action Mongol_edit_cancel"
        }, "Cancel"), "\n\t\t\t\t\t" ];
      }, function() {
        return [ "\n\t\t\t\t\t\t", HTML.DIV({
          class: "MeteorToys_action Mongol_m_edit"
        }, "Update"), "\n\t\t\t\t\t\t", HTML.DIV({
          class: "MeteorToys_action Mongol_m_new"
        }, "Duplicate"), "\n\t\t\t\t\t\t", HTML.DIV({
          class: "MeteorToys_action Mongol_m_delete"
        }, "Remove"), "\n\t\t\t\t\t\t", HTML.DIV({
          class: function() {
            return [ "MeteorToys_action ", Spacebars.mustache(view.lookup("disable")), " Mongol_m_right" ];
          }
        }, HTML.CharRef({
          html: "&rsaquo;",
          str: "›"
        })), "\n\t\t\t\t\t\t", HTML.DIV({
          class: function() {
            return [ "MeteorToys_action ", Spacebars.mustache(view.lookup("disable")), " Mongol_m_left" ];
          }
        }, HTML.CharRef({
          html: "&lsaquo;",
          str: "‹"
        })), "\n\t\t\t\t\t" ];
      }), "\n\t\t\t\t"), "\n\t\t\t" ];
    }), "\t\n\t\t"), "\n\n\t" ];
  }, function() {
    return [ "\n\n\t\t", HTML.DIV({
      class: "Mongol_docMenu"
    }, "\n\t\t\t", HTML.DIV({
      class: "Mongol_docBar1"
    }, "\n\t\t\t\t", HTML.CharRef({
      html: "&nbsp;",
      str: " "
    }), "\n\t\t\t"), "\n\t\t"), "\n\n\t" ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_controls/docControls.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0xaa88=["\x76\x61\x6C\x69\x64\x61\x74\x65\x44\x6F\x63\x75\x6D\x65\x6E\x74","\x69\x73\x46\x75\x6E\x63\x74\x69\x6F\x6E","\x65\x61\x63\x68","\x69\x6E\x6C\x69\x6E\x65\x45\x64\x69\x74\x69\x6E\x67\x54\x69\x6D\x65\x72","\x72\x65\x73\x65\x74\x49\x6E\x6C\x69\x6E\x65\x45\x64\x69\x74\x69\x6E\x67\x54\x69\x6D\x65\x72","\x63\x6C\x65\x61\x72\x54\x69\x6D\x65\x6F\x75\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6E\x6F\x49\x6E\x6C\x69\x6E\x65\x45\x64\x69\x74\x69\x6E\x67","\x73\x65\x74","\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x63\x75\x72\x72\x65\x6E\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x67\x65\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F","\x66\x65\x74\x63\x68","\x66\x69\x6E\x64","\x63\x6F\x75\x6E\x74","\x5F\x69\x64","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x75\x70\x6C\x69\x63\x61\x74\x65","\x66\x69\x6E\x64\x4F\x6E\x65","\x6D\x61\x70","\x64\x75\x70\x6C\x69\x63\x61\x74\x65","\x65\x72\x72\x6F\x72","\x63\x61\x6C\x6C","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x65\x64\x69\x74\x4D\x6F\x64\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x65\x6D\x6F\x76\x65","\x73\x68\x6F\x75\x6C\x64\x4C\x6F\x67","\x52\x65\x6D\x6F\x76\x65\x64\x20","\x20\x66\x72\x6F\x6D\x20","\x2E\x20\x42\x61\x63\x6B\x2D\x75\x70\x20\x62\x65\x6C\x6F\x77\x3A","\x6C\x6F\x67","\x72\x65\x6D\x6F\x76\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x64\x69\x73\x61\x62\x6C\x65\x64","\x68\x61\x73\x43\x6C\x61\x73\x73","\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x72\x69\x67\x68\x74","\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x6C\x65\x66\x74","\x61\x63\x63\x6F\x75\x6E\x74\x5F\x36\x31\x38","\x65\x71\x75\x61\x6C\x73","\x75\x73\x65\x72\x73","\x67\x65\x74\x44\x6F\x63\x75\x6D\x65\x6E\x74\x55\x70\x64\x61\x74\x65","\x70\x61\x72\x73\x65","\x75\x73\x65\x72","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x75\x70\x64\x61\x74\x65","\x75\x70\x64\x61\x74\x65","\x6C\x6F\x67\x6F\x75\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x6F\x63\x43\x6F\x6E\x74\x72\x6F\x6C\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x64\x69\x73\x61\x62\x6C\x65\x64","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x77\x72\x61\x70\x70\x65\x72\x5F\x65\x78\x70\x61\x6E\x64","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x6F\x63\x4D\x65\x6E\x75\x5F\x65\x64\x69\x74\x69\x6E\x67","\x68\x65\x6C\x70\x65\x72\x73"];Mongol[_0xaa88[0]]= function(_0x9cdbx1){var _0x9cdbx2={};_[_0xaa88[2]](_0x9cdbx1,function(_0x9cdbx3,_0x9cdbx4){if(_[_0xaa88[1]](_0x9cdbx3)){return};_0x9cdbx2[_0x9cdbx4]= _0x9cdbx3});return _0x9cdbx2};Mongol[_0xaa88[3]]= null;Mongol[_0xaa88[4]]= function(){if(Mongol[_0xaa88[3]]){Meteor[_0xaa88[5]](Mongol[_0xaa88[3]])};MeteorToysDict[_0xaa88[7]](_0xaa88[6],true);Mongol[_0xaa88[3]]= Meteor[_0xaa88[8]](function(){MeteorToysDict[_0xaa88[7]](_0xaa88[6],false)},300)};Template[_0xaa88[44]][_0xaa88[43]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x6E\x65\x77":function(){CollectionName= MeteorToysDict[_0xaa88[10]](_0xaa88[9]),DocumentPosition= MeteorToysDict[_0xaa88[10]](_0xaa88[11]+ String(this)),CurrentCollection= Mongol.Collection(CollectionName)[_0xaa88[13]]({},{transform:null})[_0xaa88[12]](),CollectionCount= Mongol.Collection(CollectionName)[_0xaa88[13]]()[_0xaa88[14]](),CurrentDocument= CurrentCollection[DocumentPosition],DocumentID= CurrentDocument[_0xaa88[15]],sessionKey= _0xaa88[11]+ String(this),ValidatedCurrentDocument= Mongol[_0xaa88[0]](CurrentDocument);Meteor[_0xaa88[21]](_0xaa88[16],CollectionName,ValidatedCurrentDocument._id,function(_0x9cdbx5,_0x9cdbx6){if(!_0x9cdbx5){if(Mongol.Collection(CollectionName)[_0xaa88[17]](_0x9cdbx6)){list= Mongol.Collection(CollectionName)[_0xaa88[13]]({},{transform:null})[_0xaa88[12]](),docID= _0x9cdbx6,currentDoc;docIndex= _[_0xaa88[18]](list,function(_0x9cdbx7,_0x9cdbx8){if(_0x9cdbx7[_0xaa88[15]]=== docID){currentDoc= _0x9cdbx8}});MeteorToysDict[_0xaa88[7]](sessionKey,Number(currentDoc))}}else {Mongol[_0xaa88[20]](_0xaa88[19])}})},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x65\x64\x69\x74":function(){MeteorToysDict[_0xaa88[7]](_0xaa88[22],true)},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x64\x65\x6C\x65\x74\x65":function(){var _0x9cdbx9=MeteorToysDict[_0xaa88[10]](_0xaa88[9]),_0x9cdbxa=_0xaa88[11]+ String(this);DocumentPosition= MeteorToysDict[_0xaa88[10]](_0x9cdbxa),CurrentCollection= Mongol.Collection(_0x9cdbx9)[_0xaa88[13]]({},{transform:null})[_0xaa88[12]](),CollectionCount= Mongol.Collection(_0x9cdbx9)[_0xaa88[13]]()[_0xaa88[14]]();var _0x9cdbxb=CurrentCollection[DocumentPosition],_0x9cdbxc=_0x9cdbxb[_0xaa88[15]];Meteor[_0xaa88[21]](_0xaa88[23],_0x9cdbx9,_0x9cdbxc,function(_0x9cdbx5,_0x9cdbx6){if(!_0x9cdbx5){if(MeteorToysDict[_0xaa88[24]]()){console[_0xaa88[28]](_0xaa88[25]+ _0x9cdbxc+ _0xaa88[26]+ _0x9cdbx9+ _0xaa88[27]);console[_0xaa88[28]](_0x9cdbxb)};if(DocumentPosition>= CollectionCount- 1){newPosition= DocumentPosition- 1;MeteorToysDict[_0xaa88[7]](_0x9cdbxa,newPosition)};if(MeteorToysDict[_0xaa88[10]](_0x9cdbxa)===  -1){MeteorToysDict[_0xaa88[7]](_0x9cdbxa,0)}}else {Mongol[_0xaa88[20]](_0xaa88[29])}})},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x72\x69\x67\x68\x74":function(_0x9cdbxd,_0x9cdbxe){if(!_0x9cdbxe.$(_0xaa88[32])[_0xaa88[31]](_0xaa88[30])){Mongol[_0xaa88[4]]();var _0x9cdbxa=_0xaa88[11]+ String(this);var _0x9cdbxb=MeteorToysDict[_0xaa88[10]](_0x9cdbxa);var _0x9cdbxf=String(this);var _0x9cdbx10=Mongol.Collection(_0x9cdbxf);var _0x9cdbx11=_0x9cdbx10[_0xaa88[13]]()[_0xaa88[14]]()- 1;if(_0x9cdbxb> _0x9cdbx11){MeteorToysDict[_0xaa88[7]](_0x9cdbxa,0);return};if(_0x9cdbx11=== _0x9cdbxb){MeteorToysDict[_0xaa88[7]](_0x9cdbxa,0)}else {var _0x9cdbx12=MeteorToysDict[_0xaa88[10]](_0x9cdbxa)+ 1;MeteorToysDict[_0xaa88[7]](_0x9cdbxa,_0x9cdbx12)}}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x6C\x65\x66\x74":function(_0x9cdbxd,_0x9cdbxe){if(!_0x9cdbxe.$(_0xaa88[33])[_0xaa88[31]](_0xaa88[30])){Mongol[_0xaa88[4]]();sessionKey= _0xaa88[11]+ String(this);var _0x9cdbxb=MeteorToysDict[_0xaa88[10]](sessionKey);var _0x9cdbxf=String(this);var _0x9cdbx10=Mongol.Collection(_0x9cdbxf);var _0x9cdbx11=_0x9cdbx10[_0xaa88[13]]()[_0xaa88[14]]()- 1;if(_0x9cdbxb> _0x9cdbx11){MeteorToysDict[_0xaa88[7]](sessionKey,_0x9cdbx11);return};if(MeteorToysDict[_0xaa88[10]](sessionKey)=== 0){MeteorToysDict[_0xaa88[7]](sessionKey,_0x9cdbx11)}else {var _0x9cdbx12=MeteorToysDict[_0xaa88[10]](sessionKey)- 1;MeteorToysDict[_0xaa88[7]](sessionKey,_0x9cdbx12)}}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x65\x64\x69\x74\x5F\x73\x61\x76\x65":function(){var _0x9cdbxf=(MeteorToysDict[_0xaa88[35]](_0xaa88[9],_0xaa88[34]))?_0xaa88[36]:String(this);if(MeteorToysDict[_0xaa88[35]](_0xaa88[9],_0xaa88[34])){var _0x9cdbx13=Mongol[_0xaa88[37]](_0xaa88[34]);var _0x9cdbx14=Mongol[_0xaa88[38]](_0x9cdbx13);var _0x9cdbx15=Meteor[_0xaa88[39]]()}else {var _0x9cdbxa=_0xaa88[11]+ _0x9cdbxf;DocumentPosition= MeteorToysDict[_0xaa88[10]](_0x9cdbxa),CurrentCollection= Mongol.Collection(_0x9cdbxf)[_0xaa88[13]]({},{transform:null})[_0xaa88[12]]();var _0x9cdbx13=Mongol[_0xaa88[37]](_0x9cdbxf);var _0x9cdbx14=Mongol[_0xaa88[38]](_0x9cdbx13);var _0x9cdbx15=CurrentCollection[DocumentPosition]};if(_0x9cdbx14){Meteor[_0xaa88[21]](_0xaa88[40],_0x9cdbxf,_0x9cdbx14,Mongol[_0xaa88[0]](_0x9cdbx15),function(_0x9cdbx5,_0x9cdbx6){if(!_0x9cdbx5){MeteorToysDict[_0xaa88[7]](_0xaa88[22],null)}else {Mongol[_0xaa88[20]](_0xaa88[41])}})}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x65\x64\x69\x74\x5F\x63\x61\x6E\x63\x65\x6C":function(){MeteorToysDict[_0xaa88[7]](_0xaa88[22],null)},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x73\x69\x67\x6E\x6F\x75\x74":function(){Meteor[_0xaa88[42]]();MeteorToysDict[_0xaa88[7]](_0xaa88[9],null)}});Template[_0xaa88[44]][_0xaa88[48]]({disable:function(){var _0x9cdbxa=_0xaa88[11]+ String(this);var _0x9cdbxb=MeteorToysDict[_0xaa88[10]](_0x9cdbxa);var _0x9cdbxf=String(this);var _0x9cdbx10=Mongol.Collection(_0x9cdbxf);var _0x9cdbx11=_0x9cdbx10[_0xaa88[13]]()[_0xaa88[14]]();if(_0x9cdbxb>= 1){return};if(_0x9cdbx11=== 1){return _0xaa88[45]}},editing:function(){var _0x9cdbx16=MeteorToysDict[_0xaa88[10]](_0xaa88[22]);return _0x9cdbx16},editing_class:function(){var _0x9cdbx17=MeteorToysDict[_0xaa88[10]](_0xaa88[22]);if(_0x9cdbx17){return _0xaa88[46]}},Mongol_docMenu_editing:function(){var _0x9cdbx18=MeteorToysDict[_0xaa88[10]](_0xaa88[22]);if(_0x9cdbx18){return _0xaa88[47]}},active:function(){var _0x9cdbx19=MeteorToysDict[_0xaa88[10]](_0xaa88[9]);if(_0x9cdbx19=== String(this)){return true};if(_0x9cdbx19=== _0xaa88[34]){return true}},account:function(){var _0x9cdbx1a=MeteorToysDict[_0xaa88[10]](_0xaa88[9]);if(_0x9cdbx1a=== _0xaa88[34]){return true}else {return false}}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_support/template.support.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("Mongol_support");
Template["Mongol_support"] = new Template("Template.Mongol_support", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("show"));
  }, function() {
    return [ "\n\t", Blaze._TemplateWith(function() {
      return {
        name: Spacebars.call("support")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {
        return [ "\n\t\t\n\t\t", HTML.DIV({
          class: "Mongol_icon Mongol_icon_support"
        }), "Support", HTML.BR(), "\n\t\t\n\n\t\t", HTML.DIV({
          class: "Mongol_contentView"
        }, "\n\t\t\t", HTML.DIV({
          class: "Mongol_docMenu",
          style: "padding-left: 8px"
        }, "\n\t\t\t\t", HTML.DIV({
          class: "MeteorToys_action Mongol_m_signout"
        }, "Hide"), "\n\t\t\t\tThanks for using Mongol!\n\t\t\t"), "\n\t\t\t", HTML.DIV({
          class: "Mongol_documentViewer "
        }, "\n\t\t\t\tIf you've been enjoying Meteor Toys,", HTML.BR(), "\n\t\t\t\tplease consider making a one-time\n\t\t\t\tpurchase ", HTML.BR(), "for the complete set.", HTML.BR(), HTML.BR(), "\n\n\t\t\t\tMeteor Toys Pro offer features, such as:", HTML.BR(), "\n\t\t\t\t - One-click Autopublish Toggle", HTML.BR(), "\n\t\t\t\t - Instant Account Authentication", HTML.BR(), "\n\t\t\t\t - DDP Speed Throttle", HTML.BR(), "\n\t\t\t\t ", HTML.BR(), "\n\n\t\t\t\t ", HTML.A({
          href: "https://meteor.toys/?ref=mongol",
          target: "_blank",
          style: "color: #cc0000"
        }, HTML.DIV({
          class: "Mongol_buy MeteorToys-background-blue MeteorToys-color-foundation"
        }, HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }), " Upgrade to Pro ", HTML.CharRef({
          html: "&raquo;",
          str: "»"
        }), " ", HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }))), "\n\n\t\t\t\t ", HTML.BR(), HTML.BR(), "On another note, you might like a new project,", HTML.BR(), "\n\t\t\t\t Meteor Candy. There's a free version that lets ", HTML.BR(), "\n\t\t\t\t you search accounts and impersonate them!", HTML.BR(), HTML.BR(), "\n\n\t\t\t\t ", HTML.A({
          href: "https://github.com/msavin/MeteorCandy?ref=mongol",
          target: "_blank",
          style: "color: #cc0000"
        }, HTML.DIV({
          class: "Mongol_buy MeteorToys-background-blue MeteorToys-color-foundation"
        }, HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }), " See Meteor Candy ", HTML.CharRef({
          html: "&raquo;",
          str: "»"
        }), " ", HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }))), " \n\n\n\n\t\t\t"), "\n\t\t"), "\n\t" ];
      });
    }), "\n" ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_support/support.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {
	if (localStorage.getItem("MeteorToys.hideSupport")) {
		MeteorToysDict.set("hideSupport", true)		
	}
});

Template.Mongol_support.events({
	'click .Mongol_m_signout': function () {
		window['Mongol'].close();

		window.setTimeout(function () {
			MeteorToysDict.set("hideSupport", true)
			localStorage.setItem("MeteorToys.hideSupport", "true")
		}, 300);
	}
});

Template.Mongol_support.helpers({
	show: function () {
		if (MeteorToysDict.get("hideSupport")) {
			return false;
		} else {
			return true;
		}
	}
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("msavin:mongol", {
  Mongol: Mongol
});

})();
