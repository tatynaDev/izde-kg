import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "../../UI/Button";

const NavBar = () => {
    return (
        <>
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
                <Button text='login' classN={'header__block--btn__btn'}/>
            </div>
        </>
    );
};

export default NavBar;