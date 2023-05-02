import { Desciption } from "../../../components/description/Desciption";
import React from "react";
import { useEffect, useState } from "react";
import styles from "./product.module.scss";
import Layout from "../../../components/layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import {
  counter,
  selectAllPosts,
  fetchFromDb
} from "../../../features/Users";
import { fetchPosts } from "../../../features/Users";
import {

  useParams,

} from "react-router-dom";
import AddInformations from "../../../components/AddInformations/AddInformations";
import Review from "../../../components/review/Review";
import AddProducts from '../../../firebase/model/products';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { doc,getDoc} from 'firebase/firestore'
import db from '../../../firebase/config'






function Products(props) {
  let addProducts = new AddProducts()
  const authChange = getAuth();
  let tb = [];

  const dispatch = useDispatch();
  const post = useSelector(selectAllPosts);
  let number = useSelector((state) => state.posts.count);

  let [currcollect,setcurrcollect] = useState()

  let [id,setid] = useState()
  let [items, setitem] = useState(1);
  let [theProduct, setproduct] = useState();
  let [category, setcategory] = useState([]);
  let [fetch, setfetch] = useState(false);


  let params = useParams();

  function numberofProduct(sign) {
    sign = sign.target.innerText;
   
    dispatch(counter([sign, params[1],post,id]));
  }

  useEffect(() => {
    dispatch(fetchPosts("fulfilled"));
    if (post.length > 0) {
      let rightItems = post.find((el) => Number(el.id) === Number(params[1]));
       post.find((el) => {
        if (rightItems.category === el.category) {
          console.log(rightItems.category ,el.category)

          tb.push(el);
          setcategory(tb.slice(0, 3));
        }

        setproduct([rightItems]);
        // dispatch(counter(["", params[1]]));
      });
    }



    onAuthStateChanged(authChange, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const userChange = user;

        setid(userChange.uid)


      } else {
        // User is signed out
        // ...
        console.log(user,'user')
     
      }
    });

    let fetchDoc = async ()=>{


     

      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
     
        dispatch(fetchFromDb([docSnap.data(),params[1]]))
    } catch(error) {
        console.log(error)
    }
    }

     if(!fetch && id){
      fetchDoc()
        setfetch(true)
     }
  setfetch(false)
  }, [number, params[1], post.length > 0,id]);
  return (
    <Layout>
      <div className={styles["prod"]}>
        <div className={styles["prod__describ"]}>
          {theProduct &&
            theProduct.map((product) => {
              let {  description, id, image, price, title} =
                product;

              return (
                <div className={styles["container"]} key={id}>
                  <div className={styles["product-pic"]}>
                    <div className={styles["grid-pic"]}>
                      <div>
                        <img src={image} />
                      </div>
                      <div>
                        <img src={image} />
                      </div>
                      <div>
                        <img src={image} />
                      </div>
                      <div>
                        <img src={image} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["product-infos"]}>
                    <h2>{title}</h2>
                    <p className={styles["product-infos__price"]}>$ {price}</p>
                    <p>{description}</p>
                    <div className={styles["product-infos__btn"]}>
                      <div className={styles["btn-add"]}>
                        <div>
                          <p onClick={numberofProduct}>-</p>
                        </div>
                        <div>
                          <p>{number}</p>
                        </div>
                        <div>
                          <p onClick={numberofProduct}>+</p>
                        </div>
                      </div>

                      <div className={styles["btn-add"]}>
                        <p>ADD TO CART</p>
                      </div>
                    </div>
                    <div className={styles["reseau"]}>
                      <ul>
                        <li>
                          <i className="fa-regular fa-heart"></i>
                        </li>
                        <li>|</li>
                        <li>
                          <i className="fa-regular fa-envelope"></i>
                        </li>
                        <li>
                          <i className="fa-brands fa-facebook-f"></i>
                        </li>
                        <li>
                          <i className="fa-brands fa-instagram"></i>
                        </li>
                        <li>
                          <i className="fa-brands fa-twitter"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles["see-more"]}>
          <div className={styles["see-more__items"]}>
            <ul>
              <li
                className={styles[`${items === 1 ? "li-selected" : ""}`]}
                onClick={() => setitem(1)}
              >
                Description
              </li>
              <li
                className={styles[`${items === 2 ? "li-selected" : ""}`]}
                onClick={() => setitem(2)}
              >
                Aditional information
              </li>
              <li
                className={styles[`${items === 3 ? "li-selected" : ""}`]}
                onClick={() => setitem(3)}
              >
                Reviews(0)
              </li>
            </ul>
          </div>
          <div className={styles["see-more__content"]}>
            {items === 1 && <Desciption articles={category} />}
            {items === 2 && (
              <AddInformations articles={category} product={theProduct} />
            )}
            {items === 3 && <Review articles={category} />}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Products;
