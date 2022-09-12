import { addDoc, updateDoc, collection, doc, deleteDoc } from "firebase/firestore";
import { db } from './firebase';

// Functions for database mutations

export const emptyEntry = {
   name: "",
   link: "",
   description: "",
   user: "",
   category: 0,
   id: ""
}

export async function addEntry(entry) {
   const location = await collection(db, "entries");
   await addDoc(location, {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
      // The ID of the current user is logged with the new entry for database user-access functionality.
      // You should not remove this userid property, otherwise your logged entries will not display.
      userid: entry.userid,
      id: location.id // adds a new unique id to reference by
   });
}

export async function updateEntry(entry) {
   const docRef = await doc(db, "entries", entry.id)

   const data = {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      category: entry.category,
      // The ID of the current user is logged with the new entry for database user-access functionality.
      // You should not remove this userid property, otherwise your logged entries will not display.
      id: entry.id
   }

   await updateDoc(docRef, data)
   .then(docRef => {
      console.log("doc updated successfully");
   })
   .catch(error => {
      console.log(error);
   })
}

export async function deleteEntry(entry) {
   const docRef = await doc(db, "entries", entry.id)

   await deleteDoc(docRef)
   .then(docRef => {
      console.log("doc deleted successfully");
   })
   .catch(error => {
      console.log(error)
   })
}