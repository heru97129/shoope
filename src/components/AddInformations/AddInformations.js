import React from "react";
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
        {articles &&
          articles.map((product, i) => {
            let { category, description, id, image, price, title } = product;

            return (
              <div className={styles["card"]} key={i}>
                <img src={image} />
                <p>
                  <strong>{title}</strong>{" "}
                </p>
                <p>$ {price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AddInformations;
