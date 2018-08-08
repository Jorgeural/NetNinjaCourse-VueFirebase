import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyBSteNaAJzXHfKcO5mJ6B7NFNW5PK6VJBY",
  authDomain: "geo-ninjas-240f8.firebaseapp.com",
  databaseURL: "https://geo-ninjas-240f8.firebaseio.com",
  projectId: "geo-ninjas-240f8",
  storageBucket: "geo-ninjas-240f8.appspot.com",
  messagingSenderId: "464449521923"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true});

export default firebaseApp.firestore()