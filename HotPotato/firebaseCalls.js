import { db } from "./firebase.js";
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

const POTATOES = "potatoes"
const USER = "user0"

export async function getPotatoes() {
  return await getDoc(doc(db, POTATOES, USER));
}

export async function setPotatoes() {
  
}