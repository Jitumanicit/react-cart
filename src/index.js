import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7kwkWC1MJazdS2-ioV_QF8FDpo9cT0KU",
  authDomain: "cart-2d494.firebaseapp.com",
  projectId: "cart-2d494",
  storageBucket: "cart-2d494.appspot.com",
  messagingSenderId: "352448099916",
  appId: "1:352448099916:web:eff5b8630b4711708da6e9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
