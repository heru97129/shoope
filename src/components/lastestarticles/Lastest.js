import React from "react";
import styles from './lastest.module.scss'
import { useEffect,useState } from "react";
import { selectAllPosts } from '../../features/Users';
import { fetchPosts } from '../../features/Users';
import { useSelector ,useDispatch} from 'react-redux'


export function Lastest({}) {

let [products,setproducts] = useState(null)


const dispatch = useDispatch()
const post = useSelector(selectAllPosts)
useEffect(() => {
  dispatch(fetchPosts());
  const copy = post.slice(0,6)

  
  if(post.length > 0){
    const copy = post.slice(0,6)
    setproducts(copy)
    console.log(products )

        
  }


  console.log(products,'effect')
}, [post.length > 0]);



console.log(post)
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
  );
}
