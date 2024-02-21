import { collection, addDoc } from "firebase/firestore"; 
import { database } from "./firebaseSetup";

export async function writeToDB(data) {
    console.log(database);
    try{
        console.log(data)
        const dataRef = await addDoc(collection(database, "goals"), data);
        console.log(dataRef)
    } catch(err){
        console.log(err);
    }
}