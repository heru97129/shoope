import React from "react";
import styles from './lastest.module.scss'
import { faker } from '@faker-js/faker';

console.log(faker)
function createProducts(id){
    return {
        id:id,
        name:faker.commerce.productName(),
        product : faker.commerce.product(),
        price : faker.commerce.price(),
        description : faker.commerce.productDescription(),
        Material : faker.commerce.productMaterial(),
        department:faker.commerce.department(),
        productAdjective : faker.commerce.productAdjective(),
        images: faker.image.fashion()


        
    }
}


let users = []

Array.from({length:6}).forEach((el,i)=>{
    users.push(createProducts(i))
})


console.log(users)

export function Lastest({}) {
const userList = users
  return (
    <div className={styles['lastest']}>
      <div className={styles['lastest__title']}>
        <div>
        <h1 >Shop The Lastest</h1>
        </div>
        <div>
        <h2>View All</h2>
        </div>
      </div>
        <div className={styles['lastest__grid']}>
            {userList.map(articles =>{
                let {id,name,product,price,description, Material,department,productAdjective,images} =  articles


                return(
                    <div className={styles['card']}>
                      <h2 className={`${styles["card__title"]} ${styles['gold']}`}>{name}</h2>
                      <img src={images}></img>
                      <p>{product}</p>
                      <p>$ {price} </p>
                      <p>{description}</p>
                      <p>{Material}</p>

                    </div>
                )
            })}
        </div>
    </div>
  );
}
