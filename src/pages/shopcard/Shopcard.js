import React from 'react';
import { useSelector } from 'react-redux';
import styles from './shopcard.module.scss'


function Shopcard(props) {
    const order = useSelector(state => state.posts.order)
    console.log(order)
    return (
        <div className={styles['shopcard']}>
            <div className={styles['shopcard__bag']}>
                <h2>Shopping bag</h2>
                <p>{order.length} items</p>
                <div className={styles['product']}>
                  {
                    order.map(data =>{
                        const {image,id,compte,price} = data

                        return(
                            <div className={styles['card']}>
                                <div className={styles['card__pic']}> 
                                <img src={image}/>  </div>
                                <div className={styles['card__details']}>
                                    <div className={styles['details']}>
                                      <p className={styles['details__price']}>$ {price}</p>
                                    </div>
                                    <div >
                                         <p>QTY {compte}</p>
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