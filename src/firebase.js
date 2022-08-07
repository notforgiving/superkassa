import { initializeApp } from 'firebase/app';
import {
  getFirestore
} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBv34qTxqTYzTKcwqslEQ8OwFIAqUQN3yk",
  authDomain: "button-e66ba.firebaseapp.com",
  projectId: "button-e66ba",
  storageBucket: "button-e66ba.appspot.com",
  messagingSenderId: "715705120260",
  appId: "1:715705120260:web:522ef67c59a6bad57f6751"
};

initializeApp(firebaseConfig);

export const db = getFirestore();