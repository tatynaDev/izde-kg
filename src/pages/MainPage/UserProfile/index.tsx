import React from 'react';
import "./userProfile.scss"
import {TbPencilMinus} from "react-icons/tb";
import Button from "../../../UI/Button";
import ImageProfile from "./img/ImageProfile";
import {GiBathtub} from "react-icons/gi";
import {MdOutlineSelectAll} from "react-icons/md";
import {BiBed} from "react-icons/bi";
import "../UserProfile/Media/UserProfileMedia.scss"

const UserProfile = () => {
    return (
        <div>
            <div className="container">
                <div className="userProfile">
                    <div className="userProfile--changePr">
                        <div className="userProfile--changePr__left">
                            <h2>Change profile<TbPencilMinus className="userProfile--changePr__left--icon"/></h2>
                            <h1>Name Surname</h1>
                            <p>City: <span>Bishkek</span></p>
                        </div>
                        <div className="userProfile--changePr__right">
                            <Button text={"Add property"}/>
                            <Button text={"Become agent"}/>
                        </div>
                    </div>
                    <div className="userProfile--properties">
                        <h1>Saved properties:</h1>
                        <div className="userProfile--properties__block">
                            <ImageProfile/>
                            <div className="userProfile--properties__block--child">
                                <div className="userProfile--properties__block--child__hero">
                                    <h2>Apartment</h2>
                                    <h1>The Grand Estate</h1>
                                </div>
                                <div className="userProfile--properties__block--child__text">
                                    <div className="userProfile--properties__block--child__text--pr">
                                        <p><GiBathtub/>1 Bathroom</p>
                                        <p><MdOutlineSelectAll/>Square: 120 m2</p>
                                        <p><BiBed/>1 Bedroom</p>
                                    </div>
                                    <div className="userProfile--properties__block--child__text--footer">
                                        <span>Bishkek</span>
                                        <h6>$ 10 000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserProfile;