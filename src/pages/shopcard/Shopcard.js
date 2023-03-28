import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './shopcard.module.scss'
import {selectAllPosts} from "../../features/Users";


function Shopcard(props) {
    const order = useSelector(state => state.posts.objchecked)
    const post = useSelector(  selectAllPosts)
    let[products,setproduct] = useState([])
    let tab = []
    console.log(order,post)
    useEffect(()=>{
      post.forEach((element,i) => {
        console.log(typeof Object.keys(order)[i] )
        if(Number(element.id) === Number(Object.keys(order)[i]) ){
          tab.push(element)
          console.log(tab,'tab')
          setproduct(tab)
        }
      });

    },[])

    console.log(products)
    return (
        <div className={styles['shopcard']}>
            <div className={styles['shopcard__bag']}>
                <h2>Shopping bag</h2>
                <p>{order.length} items</p>
                <div className={styles['product']}>
                  {
                   tab && tab.map(data =>{
                        const {image,id,compte,price} = data

                        return(
                            <div className={styles['card']}>
                                <div className={styles['card__pic']}> 
                                <img src={image}/>  </div>
                                <div className={styles['card__details']}>
                                    <div className={styles['details']}>
                                      <p className={styles['details__price']}>$ {price * Number(order[id])}</p>
                                    </div>
                                    <div >
                                         <p>QTY {order[id]}</p>
                                     </div>
                                </div>

                            </div>
                        )
                    })
                  }

                </div>
              </div>
        </div>
    )
}

export default Shopcard;