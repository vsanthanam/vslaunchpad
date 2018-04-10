import * as firebase from "firebase";

var config = {

  // apiKey: "<API_KEY>",
  // authDomain: "vslaunchpad-stage.firebaseapp.com",
  databaseURL: "https://vslaunchpad-stage.firebaseio.com"
  // storageBucket: "<BUCKET>.appspot.com",

};

function setupFirebase() {

  firebase.initializeApp(config);

}

function getProjects(callback) {

  var database = firebase.database();

  var ref = database.ref('projects');
  ref.once('value', (snapshot) => {

    console.log(snapshot.val());
    callback(snapshot.val());

  });

}

function getProfiles(callback) {

  var database = firebase.database();

  var ref = database.ref('profiles');
  ref.once('value', (snapshot) => {

    console.log(snapshot.val());
    callback(snapshot.val());

  });

}

export { setupFirebase, getProjects, getProfiles };
