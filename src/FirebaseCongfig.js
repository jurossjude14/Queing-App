// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID

    apiKey: "AIzaSyCLpZxtaF9Qs0qdL3vDa5S2a6yMHCbh2yQ",
    authDomain: "queing-proj.firebaseapp.com",
    projectId: "queing-proj",
    storageBucket: "queing-proj.appspot.com",
    messagingSenderId: "126451713139",
    appId: "1:126451713139:web:d847c7d28d444386d2d606",
    measurementId: "G-886E138NH1"
};
  
// Initialize Firebase
console.log(firebaseConfig); // Add this line to debug
const app = initializeApp(firebaseConfig);
export default app;