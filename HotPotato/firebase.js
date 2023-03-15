import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAU6F5MfOb4EH6ziCx9BC2BZlGzkKr8ZEg",
  authDomain: "hotpotato-2b264.firebaseapp.com",
  projectId: "hotpotato-2b264",
  storageBucket: "hotpotato-2b264.appspot.com",
  messagingSenderId: "259883655786",
  appId: "1:259883655786:web:99eb2ee349ee19a7cd6013",
  measurementId: "G-DG9WND00V4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };