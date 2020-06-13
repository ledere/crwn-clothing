
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA4GQyzm1aQa12gu1kNfriqq9A4z0629Fs",
    authDomain: "crwn-db-b1fcf.firebaseapp.com",
    databaseURL: "https://crwn-db-b1fcf.firebaseio.com",
    projectId: "crwn-db-b1fcf",
    storageBucket: "crwn-db-b1fcf.appspot.com",
    messagingSenderId: "392690690025",
    appId: "1:392690690025:web:6e674ee77309b59f434d78"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setup google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
