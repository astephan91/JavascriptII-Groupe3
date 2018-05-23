import { Mongo } from 'meteor/mongo';


export const SallesList = new Mongo.Collection('salleslist');


//const SallesList = new Mongo.Collection('salleslist');

SallesList.allow({
    insert: function(userId, doc) {
      // only allow posting if you are logged in
      return !! userId;
    }
  });

  SallesList.friendlySlugs('name');
 