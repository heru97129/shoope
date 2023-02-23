import React from 'react';
import Layout from '../../components/layout/Layout';
import styles from './ourstory.module.scss'

function OurStory(props) {
    return (
        <Layout>
        <div className={styles['ourstory']}>
            <div className={styles['ourstory__title']}>
            <h1>Fast fashion, and faster fashion</h1>
            <p>by <strong>ANNY JOHNSON</strong>  October ,2020</p>

            </div>
            <div className={styles['ourstory__story']}>
                  <img src='images/Img 01.png'/>
                  <div className={styles['text']}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> <br/> Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                     
                     <img src='images/Img 02.png' />



                     <h1>Top Trends</h1>

                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Aliquam placerat, augue a volutpat hendrerit, sapien tortor
                          faucibus augue, a maximus elit ex vitae libero.</p>
                        <ul>
                            <li>consectetur adipiscing elit. Aliquam placerat</li>
                            <li>Lorem ipsum dolor sit amet consectetur </li>
                            <li>sapien tortor faucibus augue</li>
                            <li>a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis</li>

                        </ul>
                  </div>
            </div>

        </div>
       </Layout>
    );
}

export default OurStory;