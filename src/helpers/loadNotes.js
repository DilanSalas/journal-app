import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseFirestore } from "../firebase/config";



export const loadNotes = async(uid = '') => {
  if(!uid) throw new Error('uid is required');


 const collectionRef = collection(FirebaseFirestore, `${uid}/journal/notes`);

 const docs = await getDocs(collectionRef);

 const notes = [];

 docs.forEach((doc) => {
  notes.push({ id: doc.id, ...doc.data() });
 });

 return notes;

}