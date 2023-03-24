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

const USER = "user0";
const POTATOES = "potatoes";
const UNLOCKS = "unlocks";
const EQUIPPED = "equipped";
const FRIENDS_COLLECTION = "friends";
const PROFILE_COLLECTION = "profile";

export async function getPotatoes() {
  return await getDoc(doc(db, USER, POTATOES));
}

export async function getUnlocks() {
  return await getDoc(doc(db, USER, UNLOCKS));
}

export async function getEquipped() {
  return await getDoc(doc(db, USER, EQUIPPED));
}

export async function updatePotatoes(potatoes) {
   await setDoc(doc(db, USER, POTATOES), {...potatoes})
}

export async function updateEquipped(field, state) {
  await setDoc(doc(db, USER, EQUIPPED), {[`${field}`]: state})
}

// export function addEquipsListener(setEquips) {
//   const q = query(
//       collection(db, USER)
//   );
//   const unsubscribe = onSnapshot(q, () => {
//       // const equips = [];
//       // querySnapshot.forEach((doc) => {
//       //     equips.push(doc.data());
//       //   });
//       setEquips(EQUIPPED.data());
//   });
//   return unsubscribe;
// }

export async function payPotatoes(potato, cost) {
  let potatoes = await getDoc(doc(db, USER, POTATOES));
}

export async function awardRandomPotatoes(num) {
  let potatoes = await getDoc(doc(db, USER, POTATOES));
  let additions = Array(3).fill(0);
  additions[0] = potatoes.data().soldiers;
  additions[1] = potatoes.data().wizards;
  additions[2] = potatoes.data().knights;

  let i = 0;
  while (i < 3) {
    if (additions[0] == 10 && additions[1] == 10 && additions[2] == 10) {
      break;
    }
    let kind = Math.floor(Math.random() * 3);
    if (additions[kind] == 10) {
      continue;
    }
    additions[kind] += 1;
    i += 1;
  }
  await setDoc(doc(db, USER, POTATOES), {soldiers: additions[0], 
                                        wizards: additions[1], 
                                        knights: additions[2]});
}
const OUTBOUND_COLLECTION = "outboundAttacks";
const INBOUND_COLLECTION = "inboundAttacks";

export async function attackChallenge(player, challenge) {
    const date = new Date().getTime();
    await setDoc(doc(db, OUTBOUND_COLLECTION, String(date)), {date: date, player: player, challenge: challenge});
}

export async function attackStreak(player, streak) {
    const date = new Date().getTime();
    await setDoc(doc(db, OUTBOUND_COLLECTION, String(date)), {date: date, player: player, challenge: `${streak} day challenge`});
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

export function addAttackersListener(setAttacks) {
    const q = query(
        collection(db, INBOUND_COLLECTION)
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