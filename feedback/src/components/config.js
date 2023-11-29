import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase } from "firebase/database";

// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";



const firebaseConfig = firebase.initializeApp({
    <REPLACE>
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
