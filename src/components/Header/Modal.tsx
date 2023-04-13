import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import Button from "../../UI/Button";

const Modal = () => {
    const [open, setOpen] = useState(false)
    const close = () => {
        setOpen(!open)
    }

    useEffect(() => {
        setOpen(false)
    }, [])

    return (
        <div className="header__block--modal">
            <button onClick={close}
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
                <NavLink onClick={close} to='/buy'>Buy</NavLink>
                <NavLink onClick={close} to='/rent'>Rent</NavLink>
                <NavLink onClick={close} to='/agents'>Agents</NavLink>
                <NavLink onClick={close} to='/review'>Reviews</NavLink>

                <Button fn={close} text='login' classN='header__block--btn__btn'/>
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