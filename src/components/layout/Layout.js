import React from 'react';
import { Menu } from '../menu/Menu';

const Layout =({children}) =>{
    return(
        <>
        <Menu />
        <main>
            
            {children}
        
        </main>
        </>
    )
}

export default Layout;