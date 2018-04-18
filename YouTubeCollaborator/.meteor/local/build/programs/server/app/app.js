var require = meteorInstall({"imports":{"api":{"chansons.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/api/chansons.js                                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({
  Chansons: () => Chansons
});
let Mongo;
module.watch(require("meteor/mongo"), {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Chansons = new Mongo.Collection('chansons');
///////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.watch(require("../imports/api/chansons.js"));
Meteor.startup(() => {// code to run on server at startup
});
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY2hhbnNvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIkNoYW5zb25zIiwiTW9uZ28iLCJ3YXRjaCIsInJlcXVpcmUiLCJ2IiwiQ29sbGVjdGlvbiIsIk1ldGVvciIsInN0YXJ0dXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLE9BQU9DLE1BQVAsQ0FBYztBQUFDQyxZQUFTLE1BQUlBO0FBQWQsQ0FBZDtBQUF1QyxJQUFJQyxLQUFKO0FBQVVILE9BQU9JLEtBQVAsQ0FBYUMsUUFBUSxjQUFSLENBQWIsRUFBcUM7QUFBQ0YsUUFBTUcsQ0FBTixFQUFRO0FBQUNILFlBQU1HLENBQU47QUFBUTs7QUFBbEIsQ0FBckMsRUFBeUQsQ0FBekQ7QUFFMUMsTUFBTUosV0FBVyxJQUFJQyxNQUFNSSxVQUFWLENBQXFCLFVBQXJCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDRlAsSUFBSUMsTUFBSjtBQUFXUixPQUFPSSxLQUFQLENBQWFDLFFBQVEsZUFBUixDQUFiLEVBQXNDO0FBQUNHLFNBQU9GLENBQVAsRUFBUztBQUFDRSxhQUFPRixDQUFQO0FBQVM7O0FBQXBCLENBQXRDLEVBQTRELENBQTVEO0FBQStETixPQUFPSSxLQUFQLENBQWFDLFFBQVEsNEJBQVIsQ0FBYjtBQUsxRUcsT0FBT0MsT0FBUCxDQUFlLE1BQU0sQ0FDbkI7QUFDRCxDQUZELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuZXhwb3J0IGNvbnN0IENoYW5zb25zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2NoYW5zb25zJyk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcblxuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9jaGFuc29ucy5qcyc7XG5cblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuICAvLyBjb2RlIHRvIHJ1biBvbiBzZXJ2ZXIgYXQgc3RhcnR1cFxufSk7XG4iXX0=
