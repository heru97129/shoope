import React from "react";
import styles from './similar.module.scss'

export function Similar({ articles }) {
  return (
    <div className={styles["similar"]}>
      {articles &&
        articles.map((product) => {
          let { category, description, id, image, price, title } = product;
          return (
            <div className={styles["card"]} key={id}>
              <img src={image} />
              <p>
                <strong>{title}</strong>{" "}
              </p>
              <p>$ {price}</p>
            </div>
          );
        })}
    </div>
  );
}
