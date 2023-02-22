import React from "react";
import styles from './menu.module.scss'
import {  Link } from "react-router-dom";

export function Menu({}) {
  return (
<div className={styles['menu']}>
       <div className={styles['menu__slogan']}>
        <h1><Link to="/">Shoope</Link></h1>
       </div>
       <div className={styles['menu-right']}>
        <div className={styles['menu-right__items']}>
          <ul>
            <li> <Link to="/shop">Shop</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/OurStory">Our story</Link></li>
            <li>|</li>

          </ul>
        </div>
        <div className={styles['menu-right__icons']}>
          <ul>
            <li><i class="fa-solid fa-magnifying-glass"></i></li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
            <li><i class="fa-solid fa-user"></i></li>
          </ul>
        </div>

       </div>
      </div>
      )
}
  