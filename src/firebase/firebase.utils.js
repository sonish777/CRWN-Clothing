import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7UXLLRdyseu_JJWyzynRL8ShRNwTRU7g",
  authDomain: "crwn-db-12a5a.firebaseapp.com",
  databaseURL: "https://crwn-db-12a5a.firebaseio.com",
  projectId: "crwn-db-12a5a",
  storageBucket: "crwn-db-12a5a.appspot.com",
  messagingSenderId: "1073383040449",
  appId: "1:1073383040449:web:2614e3156d990da179fb40",
  measurementId: "G-BNL0WX2SLG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("ERROR CREATING USER ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
