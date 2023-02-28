import React from "react";
import { useEffect, useState } from "react";
import styles from "./product.module.scss";
import Layout from "../../../components/layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "../../../features/Users";
import { fetchPosts } from "../../../features/Users";
import {
  Link,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

function Products(props) {
  const dispatch = useDispatch();
  const post = useSelector(selectAllPosts);
  const router = useLocation();
  console.log(router.pathname, "route product");

  let [data, setdata] = useState();

  useEffect(() => {
    dispatch(fetchPosts("fulfilled"));

    if (post.length > 0) {
      let copy = post.filter(
        (product) => product.id === Number(router.pathname.substring(9))
      );
      setdata(copy);
    }
  }, [post.length > 0]);
  console.log(data);

  return (
    <Layout>
      <div className={styles["prod"]}>
        <div className={styles["prod__describ"]}>
          {data &&
            data.map((product) => {
              let { category, description, id, image, price, title } = product;

              return (
                <div className={styles['container']}>
                  <div className={styles["product-pic"]}>
                    <div className={styles['grid-pic']}>
                     <div>
                        <img src={image}/>
                     </div>
                     <div>
                        <img src={image}/>
                     </div>
                     <div>  
                        <img src={image}/>
                     </div>
                     <div>
                        <img src={image}/>
                     </div>

                    </div>
                  </div>
                  <div className={styles["product-infos"]}>
                    <h2>{title}</h2>
                    <p className={styles["product-infos__price"]}>$ {price}</p>
                     <p>{description}</p>
                     <div className={styles["product-infos__btn"]}>
                      <div className={styles['btn-add']}>
                        <div>
                          <p>-</p>
                        </div>
                        <div>
                          <p>0</p>
                        </div>
                        <div>
                          <p>+</p>
                          </div> 
                      </div>
                   
                     <div className={styles['btn-add']}>
                    <p>ADD TO CART</p>
                      </div>
                      </div>
                      <div className={styles['reseau']}>
                        <ul>
                            <li><i class="fa-regular fa-heart"></i></li>
                            <li>|</li>
                            <li><i class="fa-regular fa-envelope"></i></li>
                            <li><i class="fa-brands fa-facebook-f"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                        </ul>
                      </div> 
                     </div>
                  
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
}

export default Products;
