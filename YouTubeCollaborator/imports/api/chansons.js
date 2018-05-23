import { Mongo } from 'meteor/mongo';

export const Chansons = new Mongo.Collection('chansons');

/*
Règles pour savoir qui a le droit d'ajouter des chansons à la collection ou d'en supprimer
Tout le monde a le droit d'insert ou de update
*/

Chansons.allow({
    insert(){
        return true;
    },  
    update(){
        return true;
    }
});