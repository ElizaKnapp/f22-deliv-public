import { addDoc, setDoc, collection, doc } from "firebase/firestore";
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
   console.log(entry.userid)
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
      id: location.id
   });
}

export async function updateEntry(entry) {
   // TODO: Create Mutation to Edit Entry
   console.log(entry.id)

   const docRef = await doc(db, "entries", entry.id)
   console.log(docRef)

   const data = {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
      // The ID of the current user is logged with the new entry for database user-access functionality.
      // You should not remove this userid property, otherwise your logged entries will not display.
      userid: entry.userid,
      id: entry.id
   }

   setDoc(docRef, data)
   .then(docRef => {
      console.log("doc updated successfully");
   })
   .catch(error => {
      console.log(error);
   })
}

export async function deleteEntry(entry) {
   // TODO: Create Mutation to Delete Entry
}