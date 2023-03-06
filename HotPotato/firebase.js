import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1JgNhG6KgmhMeIEDoKyOv96w8OnqLYrc",
    authDomain: "hotpotato-620e2.firebaseapp.com",
    projectId: "hotpotato-620e2",
    storageBucket: "hotpotato-620e2.appspot.com",
    messagingSenderId: "713809734328",
    appId: "1:713809734328:web:822b89293111c56ec5e24d"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };