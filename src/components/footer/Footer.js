import React from "react";
import styles from './footer.module.scss'
export function Footer({}) {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer__terms']}>
        <div className={styles["terms-link"]}>
          <ul>
            <li>CONTACT</li>
            <li>TERMS OF SERVICES</li>
            <li>SHIPPING OF SERVICES</li>
          </ul>
        </div>

        <div className={styles["terms-newsletter"]}>
          <input placeholder="Give an email, get the newsletter." />
        </div>
      </div>
      <div className={styles['footer__policy']}>
        <p>© 2021 Shelly. Terms of use and privacy policy.</p>
        <div className={styles['reseau']}>
          <ul>
            <li>
              <i class="fa-brands fa-linkedin-in"></i>
            </li>
            <li>
              <i class="fa-brands fa-facebook-f"></i>
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
