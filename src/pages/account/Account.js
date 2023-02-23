import { Adresse } from '../../components/adresse/Adresse';
import { Order } from "../../components/order/Order";
import { Dashboard } from "../../components/dashboard/Dashboard";
import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import styles from "./account.module.scss";
import Download from "../../components/download/Download";

function Account(props) {
  let [select, setselect] = useState(0);

  function switchTab(page) {
    setselect(page);
  }

  return (
    <Layout>
      <div className={styles["Account-title"]}>
        <h1>My account</h1>
      </div>
      <div className={styles["boutiq"]}>
        <div className={styles["boutiq__items"]}>
          <ul>
            <li
              className={`${styles[`${select === 0 ? "strong" : ""}`]} ${styles[`${select === 0 ? "li-selected" : ""}`]}`}
              onClick={() => switchTab(0)}
            >
              Dashboard
            </li>
            <li
               className={`${styles[`${select === 1 ? "strong" : ""}`]} ${styles[`${select === 1 ? "li-selected" : ""}`]}`}
              onClick={() => switchTab(1)}
            >
              Orders
            </li>
            <li
               className={`${styles[`${select === 2 ? "strong" : ""}`]} ${styles[`${select === 2 ? "li-selected" : ""}`]}`}
              onClick={() => switchTab(2)}
            >
              Downloads
            </li>
            <li
               className={`${styles[`${select === 3 ? "strong" : ""}`]} ${styles[`${select === 3 ? "li-selected" : ""}`]}`}
              onClick={() => switchTab(3)}
            >
              Addresses
            </li>
            <li
               className={`${styles[`${select === 4 ? "strong" : ""}`]} ${styles[`${select === 4 ? "li-selected" : ""}`]}`}
              onClick={() => switchTab(4)}
            >
              Account details
            </li>
            <li
               className={`${styles[`${select === 5 ? "strong" : ""}`]} ${styles[`${select === 5 ? "li-selected" : ""}`]}`}
              onClick={() => switchTab(5)}
            >
              Logout
            </li>
          </ul>
        </div>
        <div className={styles["boutiq__content"]}>
          {select === 0 && <Dashboard />}
          {select == 1 && <Order />}
          {select == 2 && <Download />}
          {select == 3 && <Adresse     />
        
        }
        </div>
      </div>
    </Layout>
  );
}

export default Account;
