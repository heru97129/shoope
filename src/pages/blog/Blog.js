import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Layout from '../../components/layout/Layout';
import styles from './blog.module.scss'
import { useSelector ,useDispatch} from 'react-redux'
import {  filterCategory,deleteUsers,updateName } from '../../features/Users';



function Blog(props) {
  const userList = useSelector((state)=> state.users.value)
  const dispatch = useDispatch()

let [data,setdata] = useState(userList)
  
    function SwitchCategory(e){
      console.log(e.target.innerText.toLowerCase())
      let categories = e.target.innerText.toLowerCase()
      const copy = userList.filter(el => el.category === categories)
      setdata(copy)
     console.log(data)
    }


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
                    <li onClick={SwitchCategory}>Jewelery</li>
                    <li onClick={SwitchCategory}>Electronics</li>
                    <li onClick={SwitchCategory}>Women's clothing</li>
                    <li onClick={SwitchCategory}>Men's clothing</li>

                </ul>

             </div>
             </div>
          
             <div className={styles['blog__articles']}>
             <div className={styles['grid']}>
            {data && data.map(articles =>{
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