import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyAIFFWkZQyUACGZ76Yqnp4akffRB3QYk90",
    authDomain: "crwn-db-ad47a.firebaseapp.com",
    projectId: "crwn-db-ad47a",
    storageBucket: "crwn-db-ad47a.appspot.com",
    messagingSenderId: "365794311822",
    appId: "1:365794311822:web:3dbd1746ded006478e93df",
    measurementId: "G-W22LWHEQCW"
};


firebase.initializeApp(config)
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;