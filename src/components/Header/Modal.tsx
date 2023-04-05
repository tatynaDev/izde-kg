import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Button from "../../UI/Button";

const Modal = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="header__block--modal">
            <button onClick={() => setOpen(!open)}
                className='header__block--modal__btn'>
                <div className={`line long ${open ? "up" : ""}`}></div>
                <div className={`line short`} style={{
                    display: open ? 'none' : 'block'
                }}></div>
                <div className={`line long ${open ? "down" : ""}`}></div>
            </button>

            <div className="header__block--modal__window" style={{
                right:open ? '' : '-500px'
            }}>
                <NavLink to='/buy'>Buy</NavLink>
                <NavLink to='/rent'>Rent</NavLink>
                <NavLink to='/agents'>Agents</NavLink>
                <NavLink to='/review'>Reviews</NavLink>

                <Button text='login' classN='header__block--btn__btn'/>
                <div className='header__block--btn__language'>
                    <select>
                        <option className='language'>English</option>
                        <option className='language'>Kyrgyz</option>
                        <option className='language'>Russian</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Modal;