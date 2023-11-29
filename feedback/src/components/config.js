import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase } from "firebase/database";

// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";



const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD4erbjGfA738T8-jK6u9UggXWynvAiIU0",
  authDomain: "feedback-7e215.firebaseapp.com",
  projectId: "feedback-7e215",
  storageBucket: "feedback-7e215.appspot.com",
  messagingSenderId: "228515639233",
  appId: "1:228515639233:web:2ba5418f6a88efe2ec8940",
  measurementId: "G-N4PBCYLD4S"
});

// // Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// // key is the counterpart to the secret key you set in the Firebase console.
// const appCheck = initializeAppCheck(firebaseConfig, {
//   provider: new ReCaptchaV3Provider("6LcL-gQnAAAAAHfqSAQBFJWHivRCbEMd-RHI96jQ"),

//   // Optional argument. If true, the SDK automatically refreshes App Check
//   // tokens as needed.
//   isTokenAutoRefreshEnabled: true,
// });

export default firebaseConfig;

export const auth = getAuth(firebaseConfig);
export const db = getDatabase(firebaseConfig);