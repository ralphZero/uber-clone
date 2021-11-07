import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAhEhTw8wgrkREBdhr_GHGmpwfji0JLExg",
  authDomain: "uber-clone-f2b00.firebaseapp.com",
  projectId: "uber-clone-f2b00",
  storageBucket: "uber-clone-f2b00.appspot.com",
  messagingSenderId: "371705967708",
  appId: "1:371705967708:web:4c22e054bcf9a6b1f72299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider }; 