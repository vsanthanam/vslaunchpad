// @flow

import * as firebase from 'firebase';

const invariant = require('assert');

var dbName = process.env.REACT_APP_USE_STAGE ? process.env.REACT_APP_DB_PROD : process.env.REACT_APP_DB_STAGE;
invariant(dbName);

const dbUrl = dbName + ".firebaseio.com";

// eslint-disable-next-line
(dbUrl: string);

var config = {

  // apiKey: "<API_KEY>",
  // authDomain: "vslaunchpad-stage.firebaseapp.com",
  databaseURL: dbUrl
  // storageBucket: "<BUCKET>.appspot.com",

};

type Link = {

  name: string,
  key: string,
  url: string,
  desc: string,
  display_url: string,
  exclude: boolean

}

function setupFirebase() {

  firebase.initializeApp(config);

}

function getProjects(callback: (Array<Array<Link>> => void)) {

  var database = firebase.database();

  var ref = database.ref('projects');
  ref.once('value', snapshot => {

    // console.log(snapshot.val());
    callback(snapshot.val());

  });

}

function getProfiles(callback: (Array<Array<Link>> => void)) {

  var database = firebase.database();

  var ref = database.ref('profiles');
  ref.once('value', snapshot => {

    // console.log(snapshot.val());
    callback(snapshot.val());

  });

}

export { setupFirebase, getProjects, getProfiles };
