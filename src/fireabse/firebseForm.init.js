// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBLX8jAiuKa392WG6Af1ESqOLBpnxh-v4E',
  authDomain: 'sing-up-form-5a52f.firebaseapp.com',
  projectId: 'sing-up-form-5a52f',
  storageBucket: 'sing-up-form-5a52f.appspot.com',
  messagingSenderId: '532125751261',
  appId: '1:532125751261:web:1f80c673975730fc9e8834',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
