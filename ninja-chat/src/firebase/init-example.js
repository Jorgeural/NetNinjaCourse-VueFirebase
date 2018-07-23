//Create a new Project in Firebase
// Initialice a firestore database.
// Go to project overview and copy you config.

import firebase from 'firebase'
import firestore from 'firebase/firestore'

// var config = {
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: ""
// };
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true});

export default firebaseApp.firestore()