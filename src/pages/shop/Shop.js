import React, { useEffect,useState } from "react";
import Layout from "../../components/layout/Layout";
import styles from "./shop.module.scss";

function Shop(props) {
    let [products,setproducts] = useState()

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setproducts(json.slice(0,6)));
    },[])
    console.log(products)
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
            {products && products.map(articles =>{
                let {category,description,id,image,price,title} =  articles


                return(
                    <div className={styles['card']} key={id}>
                      <h2 className={`${styles["card__title"]} ${styles['gold']}`}>{title}</h2>
                      <img src={image}></img>
                      <p>$ {price} </p>
                      <p>{description}</p>
                      <p>{category}</p>

                    </div>
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
