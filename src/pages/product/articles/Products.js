import {Desciption} from "../../../components/description/Desciption";
import React from "react";
import {useEffect, useState} from "react";
import styles from "./product.module.scss";
import Layout from "../../../components/layout/Layout";
import {useSelector, useDispatch, dispatch} from "react-redux";
import {order, selectAllPosts, neworder, addprod} from "../../../features/Users";
import {fetchPosts} from "../../../features/Users";
import {Link, useParams, useLocation, useHistory, useRouteMatch} from "react-router-dom";
import AddInformations from "../../../components/AddInformations/AddInformations";
import Review from "../../../components/review/Review";

let tb = []

function Products(props) {

    const dispatch = useDispatch();
    const post = useSelector(selectAllPosts);
    let newShit = useSelector(state => state.posts.order)

    const router = useLocation();
    let [data,
        setdata] = useState();
    let [categories,
        setcategories] = useState();
    let [items,
        setitems] = useState(1);
    let [count,
        setcount] = useState(1);
    let [update,
        setupdate] = useState(false);
    let [nombre,
        setnombre] = useState(0);
    let [newdata,
        setnewdata] = useState();

    function ItemsSwitch(num) {
        setitems(num)
    }

    function NumberofItems(e) {
        let sign = e.target.innerText

        if (sign === '+') {
            
            setcount(count + 1)
            
            dispatch(order('+'))
            dispatch(neworder(data))

            tb.push({
                id: data
                    .map(st => st.id)
                    .join(''),
                count: count,
                change: update
            })
            
            dispatch(addprod(tb))
            setupdate(false)
            
            console.log('TB DANS PLUS',tb,data,'data',newShit,'Ns')
        } else if (sign === '-') {
            dispatch(order('-'))
            setcount(count - 1)

        }
    }

    useEffect(() => {
        setcount(1)
        setupdate(true)
        dispatch(fetchPosts("fulfilled"));
        if (post.length > 0) {
          
            let catego;
            let copy = post.filter((product) => {
                if (product.id === Number(router.pathname.substring(9))) {
                    catego = product.category;

                }

                setnombre(0)

                return product.id === Number(router.pathname.substring(9));
            });
            let copyCategories = post.filter((product) => product.category === catego);
            copyCategories = copyCategories.slice(0, 3);

            setcategories(copyCategories);
            setdata(copy)
            setnewdata(copy)
            if(data){
              tb =  [...tb,{id:copy[0].id.toString(),count:count,update:update}]
           
            }
         
        }

    }, [
        post.length > 0,
        router.pathname
    ]);

    function Compteproduct() {
      // console.log(newShit.length > 0, 'testoooo', newShit, data, 'id data',)
     if(nombre === 0) newShit = []
      
        if (newShit.length > 0) {
            let compte = newShit.find(news => news.id === data[0].id)
            let numberprod = compte.compte

            setnombre(numberprod + 1)
        } else {
            setnombre(1)

        }
    }



    return (
        <Layout>
            <div className={styles["prod"]}>
                <div className={styles["prod__describ"]}>
                    {newdata && newdata.map((product) => {
                        let {
                            category,
                            description,
                            id,
                            image,
                            price,
                            title,
                            compte
                        } = product;

                        return (
                            <div className={styles["container"]} key={id}>
                                <div className={styles["product-pic"]}>
                                    <div className={styles["grid-pic"]}>
                                        <div>
                                            <img src={image}/>
                                        </div>
                                        <div>
                                            <img src={image}/>
                                        </div>
                                        <div>
                                            <img src={image}/>
                                        </div>
                                        <div>
                                            <img src={image}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["product-infos"]}>
                                    <h2>{title}</h2>
                                    <p className={styles["product-infos__price"]}>$ {price}</p>
                                    <p>{description}</p>
                                    <div className={styles["product-infos__btn"]}>
                                        <div className={styles["btn-add"]}>
                                            <div>
                                                <p onClick={NumberofItems}>-</p>
                                            </div>
                                            <div>
                                                <p>{nombre}</p>
                                            </div>
                                            <div>
                                                <p
                                                    onClick={(e) => {
                                                    NumberofItems(e)
                                                    Compteproduct()
                                                }}>+</p>
                                            </div>
                                        </div>

                                        <div className={styles["btn-add"]}>
                                            <p>ADD TO CART</p>
                                        </div>
                                    </div>
                                    <div className={styles["reseau"]}>
                                        <ul>
                                            <li>
                                                <i className="fa-regular fa-heart"></i>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <i className="fa-regular fa-envelope"></i>
                                            </li>
                                            <li>
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </li>
                                            <li>
                                                <i className="fa-brands fa-instagram"></i>
                                            </li>
                                            <li>
                                                <i className="fa-brands fa-twitter"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={styles["see-more"]}>
                    <div className={styles["see-more__items"]}>
                        <ul>
                            <li
                                className={styles[`${items === 1
                                    ? 'li-selected'
                                    : ''}`]}
                                onClick={() => ItemsSwitch(1)}>Description</li>
                            <li
                                className={styles[`${items === 2
                                    ? 'li-selected'
                                    : ''}`]}
                                onClick={() => ItemsSwitch(2)}>Aditional information</li>
                            <li
                                className={styles[`${items === 3
                                    ? 'li-selected'
                                    : ''}`]}
                                onClick={() => ItemsSwitch(3)}>Reviews(0)</li>
                        </ul>
                    </div>
                    <div className={styles["see-more__content"]}>
                        {items === 1 && <Desciption articles={categories}/>}
                        {items === 2 && <AddInformations articles={categories} product={data}/>}
                        {items === 3 && <Review articles={categories}/>}

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Products;
