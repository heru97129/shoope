import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";








export default function SignIn({  styles,SignInspan,leave }) {


  const auth = getAuth();
    let [email,setemail] = useState()
    let [password,setpass] = useState()
    let [user,setuser] = useState({
      email:'',
      password:''
    })

    function UserConnect(){
    console.log(user)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const users = userCredential.user;
   leave()
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
setemail('')
setpass('')
    }

    useEffect(()=>{
      setuser({...user,email,password})
    },[email,password])


  return (
    <div className={styles["sign-in-div"]}>
      <div>
      <h1>
        Welcome back to <span className={styles["color"]}>SHOOPE</span> !!
      </h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>

      <div className={styles["input_sign"]}>
        <input
          type="text"
          placeholder="MAIL"
          value={email}
          onChange={(e)=> setemail(e.target.value)}
          className={styles["inp_style"]}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e)=> setpass(e.target.value)}
          className={styles["inp_style"]}
        />
        
      </div>
        
        <button  className={styles['btn']} onClick={UserConnect}>Submit</button>
        <p className={styles["sign-in"]}>
            You don't have an account yet <span onClick={()=>SignInspan(false)}>sign up</span>
          </p>
      </div>
    </div>
  );
}
