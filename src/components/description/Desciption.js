import { Similar } from './../../components/SimilarItems/Similar';
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
    <Similar   articles={articles}  />
      </div>
    </div>
  );
}
