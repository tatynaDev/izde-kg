import React from 'react';
import easy from "../../../assets/img/easy-home1.svg";
import {RiMedalFill} from "react-icons/ri";
import easy2 from "../../../assets/img/easy-home2.svg";
import {BsFillCheckCircleFill} from "react-icons/bs";
import './EasyHome.scss'
const EasyHome = () => {
    return (
        <>
            <div className="easy-home">
                <div className="container">
                    <div className="easy-home-content">
                        <div className="easy-home-content-info">
                            <h1>Easy Home Search</h1>
                            <p>We can help you to find your dream home</p>
                        </div>
                        <div className="easy-home-content-block">
                            <div className="easy-home-content-block-process">
                                <div className="easy-home-content-block-process-agent">
                                    <img src={easy} alt=""/>
                                    <div className="medal">
                                        <div className="superagent">
                                            <RiMedalFill/>  <p> SUPERAGENTS</p>
                                        </div>

                                    </div>

                                    <div className="process-info">
                                        <h2>Find your SuperAgent</h2>
                                        <p>The most responsive agents with up-to-date and improved accuracy on the properties you are searching for.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="easy-home-content-block-process1">
                                <div className="easy-home-content-block-process-agent">
                                    <img src={easy2} alt=""/>
                                    <div className="medal-verified">
                                        <div className="verified">
                                            <BsFillCheckCircleFill/>  <p> VERIFIED</p>
                                        </div>

                                    </div>

                                    <div className="process-info">
                                        <h2>Verified listings</h2>
                                        <p>Explore property listing that have passed our verification process</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default EasyHome;