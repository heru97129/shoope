import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './shopcard.module.scss'
import {selectAllPosts} from "../../features/Users";


function Shopcard(props) {
    const order = useSelector(state => state.posts.objchecked)
    const post = useSelector(  selectAllPosts)
    let[products,setproduct] = useState([])
    console.log(order,post,'order é post')
    let tab  = []


    useEffect(()=>{
     Object.keys(order).forEach((id)=>{
      post.forEach((element,i) => {
        console.log(element.id, id)
           if( element.id === Number(id)){

            if(order[element.id] !==  0){
              tab.push(element)
  
             }
         
           console.log(tab,'tab')

           setproduct([...tab])
           }
      });
     })
    

    },[order])

    console.log(products)
    return (
        <div className={styles['shopcard']}>
            <div className={styles['shopcard__bag']}>
                <h2>Shopping bag</h2>
                <p>{order.length} items</p>
                <div className={styles['product']}>
                  {
                   products && products.map(data =>{
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