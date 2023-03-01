import React from "react";
import { Similar } from "../SimilarItems/Similar";
import styles from "./informations.module.scss";

function AddInformations({ articles, product }) {
  return (
    <div className={styles["informations"]}>
      <div className={styles["informations__infos"]}>
        {product &&
          product.map((prod) => {
            let { rating, id, category } = prod;
            return (
              <ul>
                <li>id : {id}</li>
                <li>count : {rating.count}</li>
                <li>rate : {rating.rate}</li>
                <li>category : {category}</li>
              </ul>
            );
          })}
      </div>
      <div className={styles["informations__grid"]}>
      <h2>Similar Items</h2>

           <Similar articles={articles} />
      </div>
    </div>
  );
}

export default AddInformations;
