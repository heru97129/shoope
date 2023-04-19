import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, dispatch } from "react-redux";
import styles from "./shopcard.module.scss";
import { selectAllPosts, counter,addnewproduct } from "../../features/Users";
import { Link } from "react-router-dom";

function Shopcard(props) {
  const order = useSelector((state) => state.posts.objchecked);
  const post = useSelector(selectAllPosts);
  let [products, setproduct] = useState([]);
  let [finalcompte, setfinal] = useState([]);
  let tab = [];
  let dispatch = useDispatch();

  function numberofProduct(sign, id) {
    dispatch(counter([sign, id]));
  }

  useEffect(() => {
    //  envoi le bon produit avec l'id correspondant 
    Object.keys(order).forEach((id) => {
      post.forEach((element, i) => {
        if (element.id === Number(id)) {
          if (order[element.id] !== 0) {
            tab.push(element);
          }

          setproduct([...tab]);
        }
      });
    });
    let tabprice = [];

    console.log(products, "prod");
    products.forEach((element) => {
      tabprice.push(element.price * order[element.id]);
      console.log(tabprice);
      const initialValue = 0;
      const sumWithInitial = tabprice.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );

      setfinal(parseInt(sumWithInitial));

    });
    dispatch(addnewproduct([products,finalcompte]))

  }, [order, products.length > 0,finalcompte]);
  console.log(products,'order')

  return (
    <div className={styles["shopcard"]}>
      <div className={styles["shopcard__bag"]}>
        <h2>Shopping bag</h2>
        <p>{order.length} items</p>
        <div className={styles["product"]}>
          {products &&
            products.map((data) => {
              const { image, id, compte, price, description, title } = data;

              return (
                <div className={styles["card"]} key={id}>
                  <div className={styles["card__pic"]}>
                    <img src={image} />
                  </div>
                  <div className={styles["card__details"]}>
                    <div className={styles["details"]}>
                      <div className={styles["cross"]}>
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                      <h5>{title.substring(0, 42)}</h5>

                      <p className={styles["details__price"]}>
                        $ {price * Number(order[id])}
                      </p>
                    </div>
                    <div className={styles["quantity"]}>
                      <p>
                        QTY :{" "}
                        <span
                          className={styles["span"]}
                          onClick={() => numberofProduct("-", id)}
                        >
                          {" "}
                          -{" "}
                        </span>{" "}
                        {order[id]}{" "}
                        <span onClick={() => numberofProduct("+", id)}>
                          {" "}
                          +{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className={styles["product__view"]}>
            <div className={styles["title-view"]}>
              <p>Subtotal(5items)</p>
              <p>$ {finalcompte}</p>
            </div>

            <button>
              {" "}
              <Link to="/shopping"> VIEW CART</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopcard;
