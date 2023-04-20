
import db from "../config";
import { doc,setDoc,collection } from 'firebase/firestore'

import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import firebaseapp from "../setupDb";
import { async } from "@firebase/util";

let data ={}

class Auth{
    constructor(){
     this.getAuth = getAuth()
     this.db = db
     this.collection = 'users'
     this.data = null
     this.Firebase = firebaseapp
    }

   
  async  Sign(email,password){

        return   await signInWithEmailAndPassword(this.getAuth, email, password)
            .then((userCredential) => {
              // Signed in 
              const users = userCredential.user;
         
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage,errorCode,'error')

            });
      
    }

    async  Create(email,password,displayName,lastanme){
      let data = {
        name:displayName,
        lastanme:lastanme,
        job:'janitor'
      }

        return   await   createUserWithEmailAndPassword(this.getAuth, email, password)
        .then( async (userCredential) => {
          // Signed *
          alert('account created')
          try {
            await setDoc(doc(this.db, 'user',userCredential.user.uid),data)
            await setDoc(doc(this.db, 'products',userCredential.user.uid),{
              name:displayName
            })

        } catch (e) {
            console.error(e); // handle your error here
        } finally {
            console.log('Cleanup here'); // cleanup, always executed
        }
   
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      
    }
   



}


export default Auth