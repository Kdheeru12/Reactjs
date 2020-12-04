import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
 
 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBrKTaHKWsqwvDU-HOaEs4oukyy78eWmyE",
    authDomain: "gallery-b206d.firebaseapp.com",
    projectId: "gallery-b206d",
    storageBucket: "gallery-b206d.appspot.com",
    messagingSenderId: "302320707888",
    appId: "1:302320707888:web:e724f6d18eb2ddf5e740f5"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Storage = firebase.storage();

const Firestore = firebase.firestore();


export {Storage,Firestore} 