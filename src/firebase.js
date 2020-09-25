import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIXWWVLnm4H8r7xRWByg_QI9TdW6o9LqI",
  authDomain: "twitter-clone-fe4e3.firebaseapp.com",
  databaseURL: "https://twitter-clone-fe4e3.firebaseio.com",
  projectId: "twitter-clone-fe4e3",
  storageBucket: "twitter-clone-fe4e3.appspot.com",
  messagingSenderId: "538360586912",
  appId: "1:538360586912:web:5d4a0178de04ebf318dfc5",
  measurementId: "G-265SVKPJMT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
