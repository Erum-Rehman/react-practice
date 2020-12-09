import firebase from 'firebase';

var myApp = firebase.initializeApp({
    apiKey: "AIzaSyCQYy0PfgiMtmeufXZId_6exCJVvUULxu0",
    authDomain: "react-project-9f683.firebaseapp.com",
    projectId: "react-project-9f683",
    storageBucket: "react-project-9f683.appspot.com",
    messagingSenderId: "348428488640",
    appId: "1:348428488640:web:50ce73ded5c0cb507b8225",
    measurementId: "G-MWGHQR50FC"
  });
 var Fire = myApp.firestore();

 export { Fire }