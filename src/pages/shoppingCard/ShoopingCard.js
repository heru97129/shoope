import React, { useEffect,useState } from "react";
import Layout from "../../components/layout/Layout";
import { useSelector, useDispatch, dispatch } from "react-redux";
import { selectAllPosts, counter,addnewproduct } from "../../features/Users";

import styles from "./shoppingcard.module.scss";

function ShoopingCard(props) {
  const currentprod = useSelector((state) => state.posts.currentProduct);
  const totalprod = useSelector((state) => state.posts.totalprice);

  const order = useSelector((state) => state.posts.objchecked);
  const dispatch = useDispatch()
  let [tabtotal,settotal] = useState([])

  console.log(currentprod,totalprod,order);



 function Newcompte(e,id){
    console.log(e.target.innerText)
    let sign = e.target.innerText
    dispatch(counter([sign, id]));
 }

 useEffect(()=>{
    let tab = []
    currentprod.forEach((prod)=>{
          let {price,id} = prod
        //   console.log(price * order[id])
          tab.push(price * order[id])
          const initialValue = 0;
          const sumWithInitial = tab.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
          );

          settotal(sumWithInitial)
    
    })
 })


  return (
    <Layout>
      <div className={styles["shop"]}>
        <h1>shopping card</h1>
        <div className={styles["grid-shop"]}>
          <div className={styles["grid-shop__articles"]}>
            {currentprod &&
              currentprod.map((data) => {
                let { image, id, compte, price, description, title } = data;

                return (
                  <div className={styles["card"]} key={id}>
                    <div className={styles["card__images"]}>
                      <img src={image} />
                    </div>
                    <div className={styles["card__describ"]}>
                      <p>{title}</p>
                      <p>{description.substring(0, 20)}</p>
                      <p>$ {price}</p>
                    </div>
                    <div className={styles["card__counter"]}>
                    <i className="fa-solid fa-xmark"></i>

                      <div className={styles["counter"]}>
                        
                        <span onClick={(e) =>Newcompte(e,id)}>-</span>
                        <p>{order[id]}</p>
                        <span onClick={(e) =>Newcompte(e,id)}>+</span>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className={styles['button']}>
                <button className={styles['button__update']}>UPDATE CART</button>
                <div className={styles['button__coupon']}>
                     <label>
                        <input placeholder="Coupon code" />

                     </label>
                     <button>APPLY COUPON</button>
                </div>

              </div>
          </div>


          <div className={styles["grid-shop__totals"]}>
            <h2>Cart totals</h2>
            <div className={styles['Subtotals']}>
                <div className={styles['Subtotals__ship']}>
                    <div>
                    <p>SUBTOTAL</p>
                    </div>
                    <div>
                    <p>$ 60.00</p>
                    </div>
                </div>
                <div className={styles['Subtotals__ship']}>
                    <div>
                    <p>SHIPPING</p>
                    </div>
          
                    <div>
                        <p>Shipping costs will be calculated once you have provided address.</p>
                        <div className={styles['calculate']}>
                            <div> CALCULATE SHIPPING  <i className="fa-solid fa-angle-up"></i></div>
                            <div>SELECT A COUNTRY <i class="fa-solid fa-angle-down"></i></div>  
                            <div>CITY <i class="fa-solid fa-angle-down"></i></div>  
                            <div>POST CODE / ZIP <i class="fa-solid fa-angle-down"></i></div>
                            <button>UPDATE TOTALS</button>

                        </div>
                    </div>

                </div>
                <div className={styles['Subtotals__totals']}>
                    <div><p>TOTAL</p> <p>$ {tabtotal}</p></div>
                    <button>PROCEED TO CHECKOUT</button>

                </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ShoopingCard;
