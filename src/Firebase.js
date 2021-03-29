import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDo7tTc1sM42PXj6si7EvtZPwF2vAegtCY",
    authDomain: "clone-65c84.firebaseapp.com",
    projectId: "clone-65c84",
    storageBucket: "clone-65c84.appspot.com",
    messagingSenderId: "283791314996",
    appId: "1:283791314996:web:b70dd8ccf6dbe6cbb83a61",
    measurementId: "G-HP5ZSN0LM6"
  });

const db = firebase.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };