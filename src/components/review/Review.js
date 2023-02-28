import React, { useEffect, useState } from 'react';
import styles from './review.module.scss'

function Review({articles}) {
    let [comments,setcomments] = useState({})
    let [allcomments,setAllcomments] = useState([])
    let [reviews,setreviews] = useState()
    let [name,setname] = useState()
    let [email,setemail] = useState()
    


    function catchReviews(){
     setAllcomments([...allcomments,comments])
   
     setreviews("")
     setname("")

     setemail("")

    }
    useEffect(()=>{
        setcomments({...comments,name,email,reviews})
        console.log(comments)
        console.log(allcomments)

    },[name,email,reviews])
    return (
        <div className={styles['review']}>
            <div className={styles['form']}>
             <div className={styles['form__commentary']}>

             </div>
             <div className={styles['form__add']}>
                <h2>Add a review</h2>
                <p>Your email address will not be published. Required fields are marked *</p>
                 <div className={styles['add-inp']}>
                <div>
                Your Review*
                <input onChange={(e)=> setreviews(e.target.value)}/>
                </div>
                <div>
                Enter your name*
                <input onChange={(e)=>setname(e.target.value)}/>

                </div>
                <div>
                Enter your Email*
                <input onChange={(e)=>setemail(e.target.value)}/>

                </div>
                </div>

                <div className={styles['check']}>
                  <input type={'checkbox'}/>
                  <p>Save my name, email, and website in this browser for the next time I comment</p>
                </div>

                <div className={styles['rating']}>
                 <p>Your Rating*</p>

                 <ul>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>

                 </ul>
                </div>
              
                <button onClick={catchReviews} className={styles['btn']}>Submit</button>

             </div>

            </div>
            
        </div>
    );
}

export default Review;