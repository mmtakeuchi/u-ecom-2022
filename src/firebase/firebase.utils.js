import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAZwfTiA8ONucJOdfhCV3g56G1Y6INAcL0",
  authDomain: "u-ecom.firebaseapp.com",
  projectId: "u-ecom",
  storageBucket: "u-ecom.appspot.com",
  messagingSenderId: "521531002010",
  appId: "1:521531002010:web:3fde43bc51885ee64ba323",
  measurementId: "G-EZJB6WW3GS",
};

firebase.initializeApp(config);

export const auth = new firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
