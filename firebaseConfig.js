// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3kb7SoXREO-JCjYujjEqXhD3-T_OXQmY",
  authDomain: "fairway-app.firebaseapp.com",
  projectId: "fairway-app",
  storageBucket: "fairway-app.appspot.com",
  messagingSenderId: "468696509534",
  appId: "1:468696509534:web:c37de919585682d19058cf",
  measurementId: "G-Z7Q736LLMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);