import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyCUq8qpsWERKePHN9lRv7L3hSh2CFd4LRc",
    authDomain: "fir-authen-bb946.firebaseapp.com",
    projectId: "fir-authen-bb946",
    storageBucket: "fir-authen-bb946.appspot.com",
    messagingSenderId: "48933209139",
    appId: "1:48933209139:web:0682c7f25424f555298f46"
});

const auth = getAuth(app);
export {
    auth,
};

export default app;