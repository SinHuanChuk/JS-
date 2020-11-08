import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

 var firebaseConfig = {
    apiKey: "AIzaSyABz7RI61vLm74qzQr2e8l1Q2766AGK01o",
    authDomain: "realtimeproject-1699b.firebaseapp.com",
    databaseURL: "https://realtimeproject-1699b.firebaseio.com",
    projectId: "realtimeproject-1699b",
    storageBucket: "realtimeproject-1699b.appspot.com",
    messagingSenderId: "353455943176",
    appId: "1:353455943176:web:044a30fd044766ab2bebbd",
    measurementId: "G-GR07J708JF"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore()

export {auth, firestore}