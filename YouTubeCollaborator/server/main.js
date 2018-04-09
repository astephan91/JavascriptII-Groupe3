import { Meteor } from 'meteor/meteor';

import '../imports/api/chansons.js';


Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish("chansons", function(){
  return Chansons.find();
});
