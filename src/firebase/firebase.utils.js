import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDIEnHklXACLhYdyEcLAIy4Mn1IraSclYM",
  authDomain: "crown-db-c353b.firebaseapp.com",
  projectId: "crown-db-c353b",
  storageBucket: "crown-db-c353b.appspot.com",
  messagingSenderId: "628368928091",
  appId: "1:628368928091:web:52ece45963048152c2be7e",
  measurementId: "G-9H94N8WNPK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
