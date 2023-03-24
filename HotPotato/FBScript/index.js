import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1JgNhG6KgmhMeIEDoKyOv96w8OnqLYrc",
  authDomain: "hotpotato-620e2.firebaseapp.com",
  projectId: "hotpotato-620e2",
  storageBucket: "hotpotato-620e2.appspot.com",
  messagingSenderId: "713809734328",
  appId: "1:713809734328:web:822b89293111c56ec5e24d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  collection,
  onSnapshot,
  increment,
  deleteDoc,
} from "firebase/firestore";

const INBOUND_COLLECTION = "inboundAttacks";

export async function attackChallenge(player, challenge) {
  const date = new Date().getTime();
  await setDoc(doc(db, INBOUND_COLLECTION, String(date)), {
    date: date,
    player: player,
    challenge: challenge,
  });
}

export async function attackStreak(player, streak) {
  const date = new Date().getTime();
  await setDoc(doc(db, INBOUND_COLLECTION, String(date)), {
    date: date,
    player: player,
    challenge: `${streak} day challenge`,
  });
}

attackChallenge("Asha", "5 jumping jacks");
attackStreak("Daphne", 3);
