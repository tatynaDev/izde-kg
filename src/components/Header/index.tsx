import React from 'react';
import Logo from "./logo";
import './index.scss'
import './media.scss'
import NavBar from "./NavBar";
import Modal from "./Modal";

const Header = () => {

    return (
        <div className='header'>
            <div className="container">
                <div className='header__block'>
                    <div className='header__block--logo'>
                        <Logo/>
                    </div>
                    <NavBar/>
                    <Modal/>
                </div>
            </div>
        </div>
    );
};

export default Header;