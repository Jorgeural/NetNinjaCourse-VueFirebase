import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyChAzJglXh0T6CY7_wM5Kd5OILX3UXIcic",
    authDomain: "ninja-smoothies-989f4.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-989f4.firebaseio.com",
    projectId: "ninja-smoothies-989f4",
    storageBucket: "ninja-smoothies-989f4.appspot.com",
    messagingSenderId: "183584290462"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  export default firebaseApp.firestore();