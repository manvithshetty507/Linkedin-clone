import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Add other Firebase services as needed

const firebaseConfig = {
    // Your Firebase configuration here
    apiKey: "AIzaSyBNEbc47ro3bH6DTY8LXAvmmnNE4LxlECQ",
    authDomain: "linkedin-clone-a2db2.firebaseapp.com",
    projectId: "linkedin-clone-a2db2",
    storageBucket: "linkedin-clone-a2db2.appspot.com",
    messagingSenderId: "873691686355",
    appId: "1:873691686355:web:83cf87535261c8a05efb26",
    measurementId: "G-XYSE51BHW4"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

