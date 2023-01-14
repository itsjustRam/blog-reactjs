
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd7tfQ9QUL3kzsbQL1sZ6wAqb0xPu5NtA",
  authDomain: "blog-01-32bae.firebaseapp.com",
  projectId: "blog-01-32bae",
  storageBucket: "blog-01-32bae.appspot.com",
  messagingSenderId: "367990242537",
  appId: "1:367990242537:web:c7356d14b50ea1a8678478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();