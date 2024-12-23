// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCebCFBPIFbcqAemwGsW4FXwz0JBk27Nqs",
  authDomain: "b10a11-client-side.firebaseapp.com",
  projectId: "b10a11-client-side",
  storageBucket: "b10a11-client-side.firebasestorage.app",
  messagingSenderId: "224080346372",
  appId: "1:224080346372:web:50e9961cad09dd2692e451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app