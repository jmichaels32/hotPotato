import { db } from "./firebase";
import uuid from "react-native-uuid";
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

const OUTBOUND_COLLECTION = "outboundAttacks";

export async function attackChallenge(player, challenge) {
    const date = new Date().getTime();

    await setDoc(doc(db, OUTBOUND_COLLECTION, String(date)), {date: date, player: player, challenge: challenge});
}

export async function attackStreak(player, streak) {
    const id = uuid.v4();
    await setDoc(doc(db, OUTBOUND_COLLECTION, id), {id: id, player: player, challenge: `${streak} day challenge`});
}

export function addAttacksListener(setAttacks) {
    const q = query(
        collection(db, OUTBOUND_COLLECTION)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const attacks = [];
        querySnapshot.forEach((doc) => {
            attacks.push(doc.data());
          });
          setAttacks(attacks);
    });
    return unsubscribe;
}