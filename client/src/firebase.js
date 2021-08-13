import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCps45uBG2s27X82kvBgAeRyANO8wFxL-Q",
    authDomain: "freelance-booking-app.firebaseapp.com",
    databaseURL: "https://freelance-booking-app-default-rtdb.firebaseio.com",
    projectId: "freelance-booking-app",
    storageBucket: "freelance-booking-app.appspot.com",
    messagingSenderId: "294107082451",
    appId: "1:294107082451:web:5d59090bb8a20f47432e26",
    measurementId: "G-YKZQBMQGHQ"
});


export default app;