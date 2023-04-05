import React from 'react';
import logo from '../../assets/img/logo/Logo (1).svg'
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to={'/'}><img className='logo-image' src={logo} alt=""/></Link>
    );
};

export default Logo;