// ========================================================
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyAp7wtwAafVbfUSz81dLyvPGVn_mpKIWOI",
  authDomain: "elementbattle-2db4f.firebaseapp.com",
  databaseURL: "https://elementbattle-2db4f.firebaseio.com",
  projectId: "elementbattle-2db4f",
  storageBucket: "",
  messagingSenderId: "170473410550",
  appId: "1:170473410550:web:1f2ece17355ef724"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
export default db