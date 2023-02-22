import React from "react";
import styles from './banner.module.scss'


export function Banner({}) {

  return (
    <div className={styles['banner']}>
        <div className={styles['banner__price']}>
      <h1>Gold big hoops</h1>
      <p>$ 68,00</p>
      <button>View Product</button>
      </div>
    </div>
  );
}
