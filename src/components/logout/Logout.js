import React, { useState } from 'react'
import styles from './logout.module.scss'
import { Navigate} from "react-router-dom"
import { getAuth, signOut } from "firebase/auth";


export default function Logout() {
    let [logout,setlogout] = useState(false)


const auth = getAuth();
function LogoutBtn(){
  signOut(auth).then(() => {
    // Sign-out successful.
    setlogout(true)
    alert('thank you for your visite')
  }).catch((error) => {
    // An error happened.
  });
}

  return (
    <div className={styles['logout']}>
       <button onClick={LogoutBtn}>Sign out</button>
       {logout && (
          <Navigate to="/login"  />
        )}
    </div>
  )
}
