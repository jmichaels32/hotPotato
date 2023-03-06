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

const FRIENDS_COLLECTION = "friends";
const PROFILE_COLLECTION = "profile"

export async function createProfile(profile) {
    const id = uuid.v4();
    await setDoc(doc(db, PROFILE_COLLECTION, id), {id: id, ...profile});
}

export async function createFriend(friend) {
    const id = uuid.v4();
    await setDoc(doc(db, FRIENDS_COLLECTION, id), {id: id, ...friend});
}