
import db from "../config";

import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    query,
    Firestore,
    updateDoc,
    getDoc,
    orderBy,
    getDocs
} from "@firebase/firestore";


class AccountRq{
    constructor(){
     this.Firestore = Firestore
     this.db = db
     this.collection = 'users'
    }

   
   async Create(req){
        try {
            console.log(req)
            const docRef = await addDoc(collection(this.db, this.collection), req)
          
        } catch (e) {
            console.error(e)
            throw e
        }
    }
   


}


export default AccountRq