import React from 'react';
import Login from '../../pages/login/Login';
import { Banner } from '../banner/banner';
import { Lastest } from '../lastestarticles/Lastest';
import Layout from '../layout/Layout';

function Home(props) {
    return (
        <>
           <Layout>
    
            <Banner />
            <Lastest />
            </Layout> 
        </>
    );
}

export default Home;