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

app.apps.length === 0 &&
    app.initializeApp(firebaseConfig);


export const loginWithProvider = (typeProvider) => {  
    if(typeProvider == 'google'){  
        var Provider = new app.auth.GoogleAuthProvider();
    }else{
        Provider = new app.auth.FacebookAuthProvider();
    }
    return app.auth().signInWithPopup(Provider).then(data => {
        const { displayName, email, photoURL } = data.user;
        return { displayName, email, photoURL }
    });
}

export const logOut = () => {
    return app.auth().signOut().then(() => {

    }).catch((err) => {
        console.log(err)
    });
}