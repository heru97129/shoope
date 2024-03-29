import SignIne  from "../../components/SignIn/SignIne";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import React, { useEffect, useState } from "react";
import styles from "./login.module.scss";
import Auth from "../../firebase/model/authentification";

import { useRef } from "react";
import {  onAuthStateChanged } from "firebase/auth";

function Login(props) {
  let authSucces = new Auth()
  // const authChange = getAuth();
  // onAuthStateChanged(authChange, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const userChange = user;
  //     console.log(userChange,'user')
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //     console.log(user,'user')
  //   }
  // });






  let [sign, setsign] = useState(false);

  let [displayName, setdisplayName] = useState();
  let [lastname, setlast] = useState();
  let [email, setmail] = useState();
  let [password, setpass] = useState();
  let [users, setuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  let loginRef = useRef(null)


  function catchUsers() {

    authSucces.Create(email,password,displayName,lastname)
  

    setdisplayName("");
    setlast("");
    setmail("");
    setpass("");
  }

  function SignInspan(data) {
    setsign(data)

  }


  useEffect(() => {
    setuser({ ...users, displayName, lastname, email, password });
    console.log(users);
  }, [displayName, lastname, email, password]);

  return (
    <div className={styles["login"]} ref={loginRef} >
      <div className={styles["login__left"]}>
        <div className={styles["image"]}>
          <img src="images/undraw_Shopping_Bags_tdby (1).png" />
        </div>
      </div>
      <div className={styles["login__input"]}>
        <div className={styles["inner"]}>
          {!sign ? 
            <Subscribe
              firstname={displayName}
              styles={styles}
              setfirst={setdisplayName}
              lastname={lastname}
              setlast={setlast}
              email={email}
              setmail={setmail}
              password={password}
              setpass={setpass}
              catchUsers={catchUsers}
              SignInspan={SignInspan}
            />
          : 
            <SignIne
       
              styles={styles}
              SignInspan={SignInspan}
            />
          }
        
        </div>
      </div>
    </div>
  );
}

export default Login;
