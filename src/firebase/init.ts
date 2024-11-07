// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyDVzeW7uu4xxM32AMjeKY0ptafSQU8vd3w',
  authDomain: 'int305fb005-fb12b.firebaseapp.com',
  projectId: 'int305fb005-fb12b',
  storageBucket: 'int305fb005-fb12b.firebasestorage.app',
  messagingSenderId: '993749568772',
  appId: '1:993749568772:web:c73a0f8ab572ca7dff5451',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;


