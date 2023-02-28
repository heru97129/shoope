import React from "react";
import styles from './description.module.scss'

export function Desciption({ articles }) {
  return (
    <div className={styles["description"]}>
      <p className={styles["description__p"]}>
        Reprehenderit veniam nulla do sit tempor. Tempor duis occaecat mollit
        est deserunt. Cupidatat incididunt nostrud exercitation laborum aute
        voluptate irure irure officia. <br/> Fugiat veniam exercitation nisi aliqua
        ut.
      </p>
 

      <div className={styles["description__similar-items"]}>
        <h2>Similar Items</h2>
         <div className={styles["description__grid"]}>
        {articles && articles.map((product) => {
          let { category, description, id, image, price, title } = product;

          return(
            <div className={styles["card"]} key={id}>
                <img src={image}/>
                <p><strong>{title}</strong> </p>
                <p>$ {price}</p>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  );
}
