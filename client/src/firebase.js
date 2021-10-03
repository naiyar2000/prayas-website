import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyC54-751EHJV0DVmIc5FF9satLBfSJth6c",
    authDomain: "prayas-app-f6416.firebaseapp.com",
    databaseURL: "https://freelance-booking-app-default-rtdb.firebaseio.com",
    projectId: "prayas-app-f6416",
    storageBucket: "prayas-app-f6416.appspot.com",
    messagingSenderId: "650640910388",
    appId: "1:650640910388:web:9a51dd07f0dcbf6f404261",
    measurementId: "G-TNV65HM3RS"
});


export default app;