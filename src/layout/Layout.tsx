import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({children} : any) => {
    return (
        <div>
            <Header/>
            <div style={{
                minHeight: '80vh',
            }}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;