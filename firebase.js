// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS2YctDEttDjpwecArmRMxPHCiPAnmXbQ",
  authDomain: "portfolio-e97aa.firebaseapp.com",
  projectId: "portfolio-e97aa",
  storageBucket: "portfolio-e97aa.appspot.com",
  messagingSenderId: "77888796475",
  appId: "1:77888796475:web:d7876f150436fb734a291e",
  measurementId: "G-WZTWWG7NQZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
