import React, { useEffect,useState } from "react";
import Layout from "../../components/layout/Layout";
import styles from "./shop.module.scss";
import {selectAllPosts} from '../../features/Users';
import {fetchPosts} from '../../features/Users';
import {useSelector, useDispatch} from 'react-redux'
import {  Link,  useParams,
  useLocation,
  useHistory,
  useRouteMatch, } from "react-router-dom";

function Shop(props) {
  const dispatch = useDispatch()
  const post = useSelector(selectAllPosts)


  let [data,
      setdata] = useState(post)

  useEffect(() => {
      dispatch(fetchPosts('fulfilled'));


      if(post.length > 0){
        
        setdata(post)
        console.log(data,post )

      }
  }, [post.length > 0]);

  return (
    <Layout>
      <div className={styles["shop"]}>
        <h1>Shop The Lastest</h1>
        <div className={styles["shopstore"]}>
          <div className={styles["shopstore__search"]}>
            <div className={styles["search-input"]}>
              <input placeholder="Search..." />
            </div>
            <div className={styles["select-input"]}>
              <select name="shop-by" id="shop-by">
                <option id="option" value="">Shop By</option>
              </select>
              <select name="sort-by" id="sort-by">
                <option value="">Sort By</option>
              </select>
            </div>
            <div className={styles["price-range"]}>
            <progress id="file" max="100" value="40"> 70% </progress>
            <div className={styles['price-range__text']}>
                <p>Price:$40 - $180</p>
                <p>Filter</p>
            </div>
            </div>
            <div className={styles["on-sale"]}>
              <div>
                <p>On sale</p>
              </div>
              <div>
                <label className={styles["switch"]}>
                  <input type="checkbox" id="checkbox" />
                  <div
                    className={`${styles["slider"]} ${styles["round"]}`}
                  ></div>
                </label>
              </div>
            </div>
            <div className={styles["in-stock"]}>
              <div>
                <p>In stock</p>
              </div>
              <div>
                <label className={styles["switch"]}>
                  <input type="checkbox" id="checkbox" />
                  <div
                    className={`${styles["slider"]} ${styles["round"]}`}
                  ></div>
                </label>
              </div>
            </div>
          </div>
          <div className={styles["shopstore__articles"]}>
          <div className={styles['grid']}>
            {data && data.map(articles =>{
                let {category,description,id,image,price,title} =  articles


                return(
                  <Link to={`/product/${id}`}>

                    <div className={styles['card']} key={id}>
                      <h2 className={`${styles["card__title"]} ${styles['gold']}`}>{title.substring(0,20)}</h2>
                      <img src={image}></img>
                      <p className={styles['card__price']}>$ {price} </p>
                      {/* <p>{description.substring(0,30)}</p> */}
                      <p>{category}</p>

                    </div>
                    </Link>

                )
            })}
        </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Shop;
