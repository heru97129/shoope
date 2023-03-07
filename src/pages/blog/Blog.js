import React, {useEffect, useState} from "react";
import Layout from '../../components/layout/Layout';
import styles from './blog.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import {selectAllPosts} from '../../features/Users';
import {fetchPosts} from '../../features/Users';
import {  Link,  useParams,
    useLocation,
    useHistory,
    useRouteMatch, } from "react-router-dom";
    


function Blog(props) {
    const dispatch = useDispatch()
    const post = useSelector(selectAllPosts)


    let [data,
        setdata] = useState(post)

    useEffect(() => {
        dispatch(fetchPosts('fulfilled'));


        if(post.length > 0){
          
          setdata(post)
          console.log(data,post )

        }
    }, [post.length > 0]);



    function SwitchCategory(e) {
        let categories = e
            .target
            .innerText
            .toLowerCase()
        const copy = post.filter(el => el.category === categories)
        setdata(copy)
    }

    return (
        <Layout>
            <div className={styles['container']}>
                <h1>Blog</h1>
                <div className={styles['blog']}>
                    <div className={styles['blog__search']}>
                        <input placeholder='Search...'/>
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
                            {data && data.map(articles => {
                                let {
                                    category,
                                    description,
                                    id,
                                    image,
                                    price,
                                    title
                                } = articles

                                return (
                                    <Link to={`/product/${id}`} key={id}>
                                    <div className={styles['card']}  >
                                        <h2 className={`${styles["card__title"]} ${styles['gold']}`}>{title}</h2>
                                        <img src={image}></img>
                                        <p>$ {price}
                                        </p>
                                        {/* <p>{description}</p> */}
                                        <p>{category}</p>

                                    </div>
                                    </Link>
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