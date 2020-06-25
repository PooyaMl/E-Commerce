import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBdBpUWhEadVUqFQu0WqEEMikyUuFPVTWI",
  authDomain: "e-commerce-3e9fc.firebaseapp.com",
  databaseURL: "https://e-commerce-3e9fc.firebaseio.com",
  projectId: "e-commerce-3e9fc",
  storageBucket: "e-commerce-3e9fc.appspot.com",
  messagingSenderId: "269728353411",
  appId: "1:269728353411:web:00a245f9aba57e27921fb6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;