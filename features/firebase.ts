import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup ,FacebookAuthProvider} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDMyb91OyjMEohiIGg3Hvogcz27tUF8aO0",
    authDomain: "next-app-test-57d16.firebaseapp.com",
    projectId: "next-app-test-57d16",
    storageBucket: "next-app-test-57d16.appspot.com",
    messagingSenderId: "492549284382",
    appId: "1:492549284382:web:82804985da0675b541040f"
  };


  const app = initializeApp(firebaseConfig);

  export const auth = getAuth();

  export const createUser =  createUserWithEmailAndPassword;

  export const signIn = signInWithEmailAndPassword;
  
  export const logOut = signOut;

  export const googleProvider = GoogleAuthProvider;
 
 export const provider = new GoogleAuthProvider(); 

 export const signPop = signInWithPopup;

 export const facebookAuthProvider = FacebookAuthProvider;

 export const faceProvider = new FacebookAuthProvider();

