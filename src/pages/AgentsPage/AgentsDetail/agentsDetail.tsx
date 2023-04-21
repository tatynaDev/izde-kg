import React from 'react';
import leslie from '../../../assets/img/Rectangle 73.png'
import '../AgentsDetail/AgentsDetail.scss'
import {FiPhoneCall} from "react-icons/fi";
import {MdOutlineEmail} from "react-icons/md";
import paragon from '../../../assets/img/image 3.png'
import "./Media/AgentsDetailMedia.scss"

const AgentDetail = () => {
    return (
        <div id='info'>
            <div className="container">
                <div className="info">
                    <div className="info-one">
                        <div className="info-one__img">
                            <div className="info-one__img-left">
                                <img src={leslie} alt=""/>
                            </div>
                            <div className="info-one__img-text">
                                <h1>Leslie Alexander</h1>
                                <p>SENIOR PROPERTY ADVISOR</p>
                                <div className="info-one__img-text__btn">
                                    <button>
                                        SUPERAGENT
                                    </button>
                                </div>
                                <div className="info-one__img-text__language">
                                    <p>Languages:</p>
                                    <h3>English, Russian</h3>
                                </div>
                            </div>
                        </div>
                        <div className="info-one__border"></div>
                        <div className="info-one__areas">
                            <h1>Personal information</h1>
                            <div className="info-one__areas-bottom">
                                <p>Areas</p>
                                <h3 style={{color: '#004A60'}}>Bishkek</h3>
                            </div>
                            <div className="info-one__areas-bottom">
                                <p>Active listings:</p>
                                <h3 style={{color: '#1B76F9'}}>15 Properties</h3>
                            </div>
                            <div className="info-one__areas-bottom">
                                <p>Experience since:</p>
                                <h3>2020</h3>
                            </div>
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="info-block__call">
                            <h1>Contact this agent</h1>
                            <div className="con">
                                <div className="info-block__call-agent">
                                    <button><FiPhoneCall className='phoneCall'/> Call agent</button>
                                </div>
                                <div className="info-block__call-email">
                                    <button><MdOutlineEmail className='LineEmail'/> Email agent</button>
                                </div>
                            </div>
                        </div>

                        <div className="info-block__img">
                            <h1>Company</h1>
                            <div className="info-block__img--paragon">
                                <img src={paragon} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default AgentDetail;
