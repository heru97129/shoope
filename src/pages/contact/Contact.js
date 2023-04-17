import React, {useEffect, useState, useReducer, useRef} from "react";
import Layout from "../../components/layout/Layout";
import styles from "./contact.module.scss";
import db from "../../firebase/config";
import { collection,addDoc } from "firebase/firestore";

//  find all the users in the collection users

      // (async () =>{
        //     const colRef = collection(db,'users')
        //     const snapshot = await getDocs(colRef)
        //     let doc = snapshot.docs.map(doc => doc.data())
        //     console.log(doc)

        // })()




function Contact(props) {

    const [user,
        setuser] = useReducer((state, newState) => ({
        ...state,
        ...newState
    }), {
        Last_name: '',
        First_name: '',
        Email: '',
        Subject: '',
        Message: ''
    });

    const handleOnChange =  (event) => {
      let champs = event.target.name 
      const {value}= event.target;
  
        console.log(champs,value)
        setuser({[champs]: value});
    };

    let all_Input = useRef(null)
    all_Input.current = []
    
    const Handleclick = async () => {
      const colRef = collection(db,'users')
      await addDoc(colRef,user)

      all_Input.current.forEach(element => element !== null ? element.value = '' : null);

    }

    const handleInput = (e) =>{

 
      if(!all_Input.current.includes(e) && e !== null){
        all_Input.current.push(e)
      }
    }
    useEffect(() => {
     console.log(all_Input)
    })

    return (
        <Layout>
            <div className={styles["contact"]}>
                <div className={styles["contact__title"]}>
                    <h1>Contact Us</h1>
                    <p>
                        Say Hello send us your thoughts about our products or share
                        <br/>
                        your ideas with our Team!
                    </p>
                </div>
                <div className={styles['contact__inpt']}>
                    <div className={styles['grid']}>
                        <div>
                            <label>
                                <input placeholder="First name" ref={handleInput}   name="First_name" onChange={handleOnChange}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input placeholder="Last name"    ref={handleInput}   name="Last_name" onChange={handleOnChange}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input placeholder="Email"    ref={handleInput}   name="Email" onChange={handleOnChange}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input placeholder="Subject"    ref={handleInput}   name="Subject" onChange={handleOnChange}/>
                            </label>
                        </div>
                    </div>
                    <div className={styles['message']}>
                        <p>Message</p>
                        <input    ref={handleInput}    name="Message" onChange={handleOnChange}/>
                    </div>

                </div>

                <div className={styles['contact__btn']}>
                    <button onClick={Handleclick}>Send</button>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
