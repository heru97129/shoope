import React from "react";
import styles from './order.module.scss'


export function Order({}) {
  return (
    <div className={styles['order']}>
    <div className={styles['order__notyet']}>
      <p>No order has been made yet</p>
      <p>BROWNSE PRODUCT</p>
    </div>
    </div>
  );
}
