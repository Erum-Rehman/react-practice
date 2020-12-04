import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAiHwQhpiFjoiZ48nY0qJVAgeHX90yMqhE",
    authDomain: "react-practice-f6985.firebaseapp.com",
    projectId: "react-practice-f6985",
    storageBucket: "react-practice-f6985.appspot.com",
    messagingSenderId: "857639358366",
    appId: "1:857639358366:web:b7ba5d813fd613ff6b108f",
    measurementId: "G-VJ1K5WNK0J"
  });
  
  var fire = firebaseApp.firestore();

export { fire }