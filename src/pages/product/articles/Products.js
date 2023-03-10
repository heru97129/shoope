import { Desciption } from "../../../components/description/Desciption";
import React from "react";
import { useEffect, useState } from "react";
import styles from "./product.module.scss";
import Layout from "../../../components/layout/Layout";
import { useSelector, useDispatch,dispatch } from "react-redux";
import { order, selectAllPosts,neworder,addprod } from "../../../features/Users";
import { fetchPosts } from "../../../features/Users";
import {
  Link,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import AddInformations from "../../../components/AddInformations/AddInformations";
import Review from "../../../components/review/Review";

let tb = []

function Products(props) {
  
  const dispatch = useDispatch();
  const post = useSelector(selectAllPosts);
  const numberOrder = useSelector( state => state.posts.count)
  const numberds = useSelector( state => state.posts.countProduct)

  
  const router = useLocation();
  let [data, setdata] = useState();
  let [categories, setcategories] = useState();
  let [items, setitems] = useState(1);
  let [count, setcount] = useState(1);
  let [update, setupdate] = useState(false);


  function ItemsSwitch(num) {
    setitems(num)
  }

  function NumberofItems(e){
   let sign = e.target.innerText

   if(sign === '+'){
setcount(count + 1 )

    dispatch(order('+'))
    dispatch(neworder(data))
tb.push({id:data.map(st=> st.id).join(''),count:count,change:update})

    dispatch(addprod(tb))
setupdate(false)
   }
   
   else if(sign === '-' ){
    dispatch(order('-'))
    setcount(count - 1)

   }
  }



  useEffect(() => {
    setcount(1)
    setupdate(true)
    dispatch(fetchPosts("fulfilled"));
    if (post.length > 0) {
      let catego;
      let copy = post.filter((product) => {
        if (product.id === Number(router.pathname.substring(9))) {
          catego = product.category;
     
        }

       

        return product.id === Number(router.pathname.substring(9));
      });
      let copyCategories = post.filter(

        (product) => product.category === catego
        
      );
      copyCategories = copyCategories.slice(0, 3);
      
      setcategories(copyCategories);
      setdata(copy);
    
    }
  }, [post.length > 0,router.pathname]);


  return (
    <Layout>
      <div className={styles["prod"]}>
        <div className={styles["prod__describ"]}>
          {data &&
            data.map((product) => {
              let { category, description, id, image, price, title } = product;
                  
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
                          <p onClick={NumberofItems}>-</p>
                        </div>
                        <div>
                          <p>{0}</p>
                        </div>
                        <div>
                          <p onClick={NumberofItems}>+</p>
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
              <li className={styles[`${items === 1 ? 'li-selected' : ''}`]} onClick={() => ItemsSwitch(1)}>Description</li>
              <li className={styles[`${items === 2 ? 'li-selected' : ''}`]} onClick={() => ItemsSwitch(2)}>Aditional information</li>
              <li className={styles[`${items === 3 ? 'li-selected' : ''}`]} onClick={() => ItemsSwitch(3)}>Reviews(0)</li>
            </ul>
          </div>
          <div className={styles["see-more__content"]}>
            {items === 1 && <Desciption articles={categories} />}
            {items === 2 && <AddInformations articles={categories} product={data} /> }
            {items === 3 && <Review articles={categories} />}


          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Products;
