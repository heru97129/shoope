import React, { useEffect, useState } from "react";
import styles from './menu.module.scss'
import {  Link,  useParams,
  useLocation,
  useHistory,
  useRouteMatch} from "react-router-dom";
  import { useSelector, useDispatch,dispatch, createStoreHook } from "react-redux";
import Shopcard from "../../pages/shopcard/Shopcard";


export function Menu({}) {
  const router = useLocation()
   const ordero = useSelector(state => state.posts.count)
   let [showcard,setshow] = useState(false)
   function Showcard(){
    setshow(el => !el)
    console.log(showcard)
   }

  return (
<div className={styles['menu']}>
       <div className={styles['menu__slogan']}>
        <h1><Link to="/">Shoope</Link></h1>
       </div>
       <div className={styles['menu-right']}>
        <div className={styles['menu-right__items']}>
          <ul>
            <li > <Link className={styles[`${router.pathname == "/shop" ? 'li-shop' : ''}`]} to="/shop">Shop</Link></li>
            <li><Link className={styles[`${router.pathname == "/Blog" ? 'li-shop' : ''}`]} to="/Blog">Blog</Link></li>
            <li ><Link className={styles[`${router.pathname == "/OurStory" ? 'li-shop' : ''}`]} to="/OurStory">Our story</Link></li>
            <li>|</li>

          </ul>
        </div>
        <div className={styles['menu-right__icons']}>
          <ul>
            <li>  <i className="fa-solid fa-magnifying-glass"></i></li>
            <li onClick={Showcard} className={styles['shop']}><i className="fa-solid fa-cart-shopping"></i> <span className={styles['ordered']}>{ordero}</span></li>
            <li><Link to="/account"><i className="fa-solid fa-user"></i></Link></li>
          </ul>
        </div>

       </div>
       {showcard &&   <Shopcard />}
     
      </div>
      )
}
  