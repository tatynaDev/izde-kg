import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import Logo from "./logo";
import './index.scss'
import './media.scss'
import NavBar from "./NavBar";
import Modal from "./Modal";

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className='header'>
            <div className="container">
                <div className='header__block'>
                    <div className='header__block--logo'>
                        <Logo/>
                    </div>
                    <div className='header__block--nav'>
                        <NavLink to={'/buy'}>Buy</NavLink>
                        <NavLink to={'/rent'}>Rent</NavLink>
                        <NavLink to={'/agents'}>Agents</NavLink>
                        <NavLink to={'/review'}>Reviews</NavLink>
                    </div>
                    <div className='header__block--btn'>
                        <div className='header__block--btn__language'>
                            <select>
                                <option className='language'>
                                    English</option>
                                <option className='language'>Kyrgyz</option>
                                <option className='language'>Russian</option>
                            </select>
                        </div>
                        <Button onClick={() => navigate("/logIn")} text='login' classN={'header__block--btn__btn'}/>
                    </div>
                    <NavBar/>
                    <Modal/>
                </div>
            </div>
        </div>
    );
};

export default Header;