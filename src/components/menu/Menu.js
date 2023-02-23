import React from "react";
import styles from './menu.module.scss'
import {  Link,  useParams,
  useLocation,
  useHistory,
  useRouteMatch, } from "react-router-dom";

export function Menu({}) {
  const router = useLocation()
  console.log(router.pathname)
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
            <li><i className="fa-solid fa-cart-shopping"></i></li>
            <li><Link to="/account"><i className="fa-solid fa-user"></i></Link></li>
          </ul>
        </div>

       </div>
      </div>
      )
}
  