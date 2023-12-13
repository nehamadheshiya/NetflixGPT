// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHz1rnzBcranfd0c1C3MP-YetGijZrefw",
  authDomain: "netflix-gpt-8eba5.firebaseapp.com",
  projectId: "netflix-gpt-8eba5",
  storageBucket: "netflix-gpt-8eba5.appspot.com",
  messagingSenderId: "812974800301",
  appId: "1:812974800301:web:bc0f85933725572b4bf524",
  measurementId: "G-BH59476K24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);