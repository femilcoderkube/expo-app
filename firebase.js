// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU0rZJn-9SvAsAPqs6MjJ-rQ9beqdXV2A",
  authDomain: "expo-app-81f4d.firebaseapp.com",
  projectId: "expo-app-81f4d",
  storageBucket: "expo-app-81f4d.appspot.com",
  messagingSenderId: "723643581380",
  appId: "1:723643581380:web:aca379497a66018048da91",
  measurementId: "G-YLBTYSD80L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
