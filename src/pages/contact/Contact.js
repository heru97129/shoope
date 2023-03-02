import React from "react";
import Layout from "../../components/layout/Layout";
import styles from "./contact.module.scss";

function Contact(props) {
  return (
    <Layout>
      <div className={styles["contact"]}>
        <div className={styles["contact__title"]}>
          <h1>Contact Us</h1>
          <p>
            Say Hello send us your thoughts about our products or share <br />
            your ideas with our Team!
          </p>
        </div>
        <div className={styles['contact__inpt']}>
            <div className={styles['grid']}>
           <div>
            <label>
                <input placeholder="First name" />
            </label>
           </div>
           <div>
            <label>
                <input placeholder="Last name" />
            </label>
           </div>
           <div>
            <label>
                <input placeholder="Email" />
            </label>
           </div>
           <div>
            <label>
                <input placeholder="Subject" />
            </label>
           </div>
           </div>
           <div className={styles['message']}>
            <p>Message</p>
           <input />
           </div>
        
        </div>

        <div className={styles['contact__btn']}>
         <button>Send</button>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
