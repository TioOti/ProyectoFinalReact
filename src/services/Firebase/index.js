import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'   


const firebaseConfig = {
  apiKey: "AIzaSyCEM5MKqMXQsELF2HMylTT_KRrH6H-OlQo",
  authDomain: "entregafinalreact.firebaseapp.com",
  projectId: "entregafinalreact",
  storageBucket: "entregafinalreact.appspot.com",
  messagingSenderId: "823376039569",
  appId: "1:823376039569:web:796a967493869d05fb3930"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)