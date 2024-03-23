// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "@firebase/analytics";
import { getStorage } from "@firebase/storage";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMx_O9Z_N9M23B86Sj5YpUAz2he1RzjQE",
    authDomain: "hackthetank-70076.firebaseapp.com",
    projectId: "hackthetank-70076",
    storageBucket: "hackthetank-70076.appspot.com",
    messagingSenderId: "629654923871",
    appId: "1:629654923871:web:154b6911bea4454e9649ea",
    measurementId: "G-F2E53RL7XF"
  };

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);