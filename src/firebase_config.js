import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyDQYoe22MYdVoZfuOhxIwzhNi7yuUqieSE",
    authDomain: "todoapp-6af7f.firebaseapp.com",
    projectId: "todoapp-6af7f",
    storageBucket: "todoapp-6af7f.appspot.com",
    messagingSenderId: "711680537726",
    appId: "1:711680537726:web:a0ccf6a95f1a2478bc142f"
  };
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
