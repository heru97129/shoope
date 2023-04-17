import React from 'react';
import styles from './login.module.scss'

function Login(props) {
    return (
        <div className={styles['login']}>
            <div className={styles['login__left']}></div>
            <div className={styles['login__input']}>
                <div className={styles['inner']}>
                    <h1>Subscribe To  <span className={styles['color']}>SHOOPE</span>  !!</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                      
                      <div className={styles['input_field']}>
                    <input type='text' placeholder='FISRTNAME' className={styles['inp_style']}  />
                    <input type='text' placeholder='LASTNAME' className={styles['inp_style']} />
                    <input type='text' placeholder='EMAIL' className={styles['inp_style']} />
                    <input type='text' placeholder='PASSWORD' className={styles['inp_style']} />
                    </div>
                    <button className={styles['btn']}>SUBMIT</button>
                </div>

            </div>
          
        </div>
    );
}

export default Login;