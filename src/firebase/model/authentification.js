
import db from "../config";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

let data ={}

class Auth{
    constructor(){
     this.getAuth = getAuth()
     this.db = db
     this.collection = 'users'
     this.data = null
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

    async  Create(email,password){

        return   await   createUserWithEmailAndPassword(this.getAuth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          alert('votre compte a été créer')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      
    }
   



}


export default Auth