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
  console.log("updated")
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

export async function createProfile(profile) {
    const id = uuid.v4();
    await setDoc(doc(db, PROFILE_COLLECTION, id), {id: id, ...profile});
}

export async function createFriend(friend) {
    const id = uuid.v4();
    await setDoc(doc(db, FRIENDS_COLLECTION, id), {id: id, ...friend});
}