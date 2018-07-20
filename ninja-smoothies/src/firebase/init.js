import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    // apiKey: "Your api key",
    // authDomain: authDomain,
    // databaseURL: databaseURL,
    // projectId: projectId,
    // storageBucket: storageBucket,
    // messagingSenderId: messagingSenderId
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  export default firebaseApp.firestore();