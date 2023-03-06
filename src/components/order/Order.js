import React from "react";
import styles from './order.module.scss'
import { useSelector, useDispatch,dispatch, createStoreHook } from "react-redux";


export function Order({}) {

  const neworder = useSelector(state => state.posts.order)
console.log(neworder)
  return (
    <div className={styles['order']}>
    {neworder.length == 0 &&  <div className={styles['order__notyet']}>
      <p>No order has been made yet</p>
      <p>BROWNSE PRODUCT</p>
    </div>}
    {neworder.length > 0 &&  <div className={styles['order__yet']}>
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
      {neworder.map(data =>{
        console.log(data,'order')
             const {category,id,price} = data
        return(
          <tr key={id}>
            <td>{id}</td>
            <td>{new Date().toLocaleDateString()}</td>
            <td>Processing</td>
            <td>$ {price}</td>
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
