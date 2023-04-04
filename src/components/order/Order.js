import React, { useState,useEffect } from "react";
import styles from './order.module.scss'
import { useSelector, useDispatch,dispatch, createStoreHook } from "react-redux";
import {selectAllPosts} from "../../features/Users";


export function Order({}) {
  const post = useSelector(  selectAllPosts)
  const neworder = useSelector(state => state.posts.objchecked)  
  let tab  = []
  let[products,setproduct] = useState()


  useEffect(()=>{
   Object.keys(neworder).forEach((id)=>{
    post.forEach((element,i) => {
      console.log(element.id, id)
         if( element.id === Number(id)){

           console.log(neworder[element.id])
           if(neworder[element.id] !==  0){
            tab.push(element)

           }
         console.log(tab,'tab')

         setproduct([...tab])
         }
    });
   })
  

  },[])
  console.log(products)
  return (
    <div className={styles['order']}>
    {Object.keys(neworder).length == 0 &&  <div className={styles['order__notyet']}>
      <p>No order has been made yet</p>
      <p>BROWNSE PRODUCT</p>
    </div>}
    {Object.keys(neworder).length > 0 &&  <div className={styles['order__yet']}>
    <table>
    <thead>
     
    </thead>
    <tbody>
      <tr>
        <th className={styles['items']}>ORDER NUMBER</th>
        <th className={styles['items']}>DATE</th>
        <th className={styles['items']}>STATUS</th>
        <th className={styles['items']}>TOTAL</th>
        <th className={styles['items']}>ACTIONS</th>
      </tr>
      {products && products.map((data,id )=>{
     
        return(
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{new Date().toLocaleDateString()}</td>
            <td>Processing</td>
            <td>$ {data.price * neworder[data.id]}</td>
            <td>view order</td>
          </tr>
        )
      })}
  
    </tbody>
  </table>
    </div>}
    </div>
  );
}
