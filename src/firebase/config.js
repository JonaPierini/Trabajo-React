//innstalar firebaaase

import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCK1MPS7gCsh4vTA34OQeAq9EON9GEMf4k",
    authDomain: "peliculas-98264.firebaseapp.com",
    projectId: "peliculas-98264",
    storageBucket: "peliculas-98264.appspot.com",
    messagingSenderId: "257217129518",
    appId: "1:257217129518:web:4d07797fed60d1664d43bf"
};

const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}
export const database = firebase.firestore();