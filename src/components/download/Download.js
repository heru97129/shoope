import React from 'react';
import styles from './download.module.scss'

function Download(props) {
    return (
        <div className={styles['download']}>
        <div className={styles['download__notyet']}>
          <p>No download available yet</p>
          <p>BROWNSE PRODUCT</p>
        </div>
        </div>
    );
}

export default Download;