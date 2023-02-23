import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Layout from '../../components/layout/Layout';
import styles from './blog.module.scss'




function Blog(props) {
    let [products,setproducts] = useState()

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setproducts(json.slice(6,10)));
    },[])


    console.log(products)
    return (
        <Layout>
           <div className={styles['container']}>
            <h1>Blog</h1>
            <div className={styles['blog']}>
             <div className={styles['blog__search']}>
                <input  placeholder='Search...'/>
                <div className={styles['categories']}>
                <h2>
                    Categories 
                </h2>
                <ul>
                    <li>Fashion</li>
                    <li>Style</li>
                    <li>Accessoiries</li>
                    <li>Seasons</li>

                </ul>

             </div>
             </div>
          
             <div className={styles['blog__articles']}>
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

export default Blog;