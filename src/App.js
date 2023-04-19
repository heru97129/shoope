import { Lastest } from './components/lastestarticles/Lastest';
import { Banner } from './components/banner/banner';
import { Menu } from './components/menu/Menu';
import { useState,useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux'
import './App.css';
// import { addUsers,deleteUsers,updateName } from './features/Users';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from 'react-router';
import { set } from 'immutable';


function App() {
    
  let [userHere,setuserHere] = useState(true)
  let [id,setid] = useState()
  const authChange = getAuth();


  useEffect(()=>{
console.log(userHere)

    onAuthStateChanged(authChange, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const userChange = user;
        // console.log(userChange,'user')
        console.log(userChange.uid,'user')
        setid(userChange.uid)

        // ...
        setuserHere(true)
      } else {
        // User is signed out
        // ...
        console.log(user,'user')
        setuserHere(false)
      }
    });
    console.log(userHere,'uhsuhsuh')
 
  },[userHere])


  return (
    <>
    {
     !userHere && <Navigate to='/login' />
    }
    {
     userHere &&  <Home />
    }

    </>
  );
}

export default App;
