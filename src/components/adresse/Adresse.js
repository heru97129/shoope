import React from "react";
import styles from './adresse.module.scss'


export function Adresse({}) {
  return (
    <div>
      <h3>The following addresses will be used on the checkout page by default.</h3>
      <div className={styles['adresses']}>
        <div className={styles['adresses__billing']}>
            <h2>Billing address</h2>
            <h2 className={styles['add']}>ADD</h2>
        <p>You have not set up this type of address yet.</p>

        </div>
        <div className={styles['adresses__shipping']}>
        <h2>Shipping address</h2>
        <h2 className={styles['add']}>ADD</h2>
        <p>You have not set up this type of address yet.</p>

        </div>

      </div>
    </div>
  );
}
