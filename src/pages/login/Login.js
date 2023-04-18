import SignIne  from "../../components/SignIn/SignIne";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import React, { useEffect, useState } from "react";
import styles from "./login.module.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";

function Login(props) {
  const auth = getAuth();
  let [sign, setsign] = useState(false);

  let [firstname, setfirst] = useState();
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
    console.log(users);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    setfirst("");
    setlast("");
    setmail("");
    setpass("");
  }

  function SignInspan(data) {
    setsign(data)

  }

  function leave(){
   loginRef.current.style = 'display:none'
  }

  useEffect(() => {
    setuser({ ...users, firstname, lastname, email, password });
    console.log(users);
  }, [firstname, lastname, email, password]);

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
              firstname={firstname}
              styles={styles}
              setfirst={setfirst}
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
               leave={leave}
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
