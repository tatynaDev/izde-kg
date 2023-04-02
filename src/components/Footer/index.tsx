import React from 'react';
import './index.scss'
import Logo from "../Header/logo";
import FooterAddress from "./FooterAddress";
import {GrFacebook, GrLinkedin} from "react-icons/gr";
import {Link, NavLink} from 'react-router-dom';
import {RiInstagramFill} from "react-icons/ri";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer--block">
                    <div className="footer--block__left">
                        <Logo/>
                        <p className='footer--block__left--text'>The shortest distance between paradise and the place
                            you call home.</p>
                    </div>
                    <div className="footer--block__right">
                        <FooterAddress
                            title='About'
                            first='About us'
                            second='Features'
                            third='News & Blogs'/>

                        <FooterAddress
                            title='Company'
                            first='How we work'
                            second='Capital'
                            third='Security'/>

                        <FooterAddress
                            title='Support'
                            first='FAQ'
                            second='Support Center'
                            third='Contact Us'/>
                        <div className='addresses'>
                            <h1 className='addresses--title'>Follow us</h1>
                            <div className='addresses--web'>
                                <NavLink className='facebook' to='#'><GrFacebook/></NavLink>
                                <NavLink className='linkedin' to='#'><GrLinkedin/></NavLink>
                                <NavLink className='instagram' to='#'><RiInstagramFill/></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer__b'>
                    <Link className='footer__b--bottom' to='#'>Terms & Agreements</Link>
                    <Link className='footer__b--bottom' to='#'>Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;