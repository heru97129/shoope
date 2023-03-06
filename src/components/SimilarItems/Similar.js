import React from "react";
import styles from './similar.module.scss'
import {
  Link,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

export function Similar({ articles }) {
  return (
    <div className={styles["similar"]}>
      {articles &&
        articles.map((product) => {
          let { category, description, id, image, price, title } = product;
          return (
            <Link to={`/product/${id}`}  key={id}>

            <div className={styles["card"]}>
              <img src={image} />
              <p>
                <strong>{title}</strong>{" "}
              </p>
              <p>$ {price}</p>
            </div>
            </Link>

          );
        })}
    </div>
  );
}
