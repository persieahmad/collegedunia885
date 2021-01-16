import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyDuReFU-21IkO9vnGxhMpjOX0NAK0bDaSk",
  authDomain: "collegedunia885.firebaseapp.com",
  projectId: "collegedunia885",
  storageBucket: "collegedunia885.appspot.com",
  messagingSenderId: "709638460098",
  appId: "1:709638460098:web:b91cf082fb71f74ecc615b",
  measurementId: "G-ZCME0QFP73"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
