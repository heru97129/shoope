import { Lastest } from './components/lastestarticles/Lastest';
import { Banner } from './components/banner/banner';
import { Menu } from './components/menu/Menu';
import { useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux'
import './App.css';
// import { addUsers,deleteUsers,updateName } from './features/Users';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';


function App() {
  const dispatch = useDispatch()
  const userList = useSelector((state)=> state.users.value)



  console.log(userList)
  return (
    <>
    <Home />
    </>
  );
}

export default App;
