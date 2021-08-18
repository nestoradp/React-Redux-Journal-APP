
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAWLh27bo7vBRBC4aV9bKBs1IqCUChWj6o",
    authDomain: "react-app-journal-9c179.firebaseapp.com",
    projectId: "react-app-journal-9c179",
    storageBucket: "react-app-journal-9c179.appspot.com",
    messagingSenderId: "126538368903",
    appId: "1:126538368903:web:c6fa3b04e8d1ef8939f522"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db =firebase;

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



export {
    db,
    googleAuthProvider,
    firebase

}