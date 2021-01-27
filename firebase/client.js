import app from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBO4aanmHWdfc61xrucyGBalCmAhZLaEJQ",
    authDomain: "e-commerce-7e1b8.firebaseapp.com",
    databaseURL: "https://e-commerce-7e1b8.firebaseio.com",
    projectId: "e-commerce-7e1b8",
    storageBucket: "e-commerce-7e1b8.appspot.com",
    messagingSenderId: "454818164439",
    appId: "1:454818164439:web:3d3e491290cc18caa34a92",
    measurementId: "G-ZE55B800Q4"
};

app.initializeApp(firebaseConfig);

export const loginWithGoogle = () => {
    const googleProvider = new app.auth.GoogleAuthProvider();
    return app.auth().signInWithPopup(googleProvider);
}