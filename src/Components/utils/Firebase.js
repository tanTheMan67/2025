// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8WpY_swYlS6SPSy61Qc8mLglQvKbnEZA",
  authDomain: "movvi-11f82.firebaseapp.com",
  projectId: "movvi-11f82",
  storageBucket: "movvi-11f82.firebasestorage.app",
  messagingSenderId: "193180799627",
  appId: "1:193180799627:web:7c8086081cad884774fa8e",
  measurementId: "G-YXC5LCG5JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();