import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAD-s5bsGBJD5JURqA5EJ4D1g7VaYrPliU',
    authDomain: 'queuing-system-a6655.firebaseapp.com',
    projectId: 'queuing-system-a6655',
    storageBucket: 'queuing-system-a6655.appspot.com',
    messagingSenderId: '1046728714247',
    appId: '1:1046728714247:web:a11429097e4dc32061a2a2',
    measurementId: 'G-80NY30LVQR',
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
export const firestore = getFirestore(firebase);
export const database = getDatabase(firebase);
