import React from 'react';
import "./reviewStyle.scss";
import reviewPage from "../../../assets/img/ReviewPage/reviewBuild.svg"
import {BiSearch} from "react-icons/bi";



const ReviewPage = () => {
    return (
        <div id="review">
            <img  src={reviewPage} alt="img"/>
            <div className="container">
                <div className="review">
                    <div className="review--build">
                        <h1>Building Reviews</h1>
                    </div>
                    <div className="review--block">
                        <div className="review--block__search">
                            <input className='main-home-input' type="text" placeholder='Enter building name or community'/>
                            <button className='review--block__btn'>
                                <BiSearch className="review--block__btn--iconSearch"/> Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;