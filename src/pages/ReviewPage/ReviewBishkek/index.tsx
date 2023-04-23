import React from 'react';
import "./style.scss";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {BsStarHalf} from "react-icons/bs";
import ReviewsDetail from "./ReviewsDetail";
import ReviewsLatestDetail from "./ReviewsLatestDetail";

const Index = () => {


    return (
        <div id="revBishkek">
            <div className="container">


                <div className="revBishkek">

                    <div className="blocks">
                        <h1>Top reviewed buildings in Bishkek</h1>
                        <ReviewsDetail star={'5/5'} iconStar={<AiFillStar/>}/>
                        <ReviewsDetail star={'4/5'} iconStar={<BsStarHalf/>}/>
                        <ReviewsDetail star={'3/5'} iconStar={<AiOutlineStar/>}/>
                    </div>

                    <div className="group">
                        <h1>Latest reviews</h1>
                        <ReviewsLatestDetail star={"4/5"} iconStar={<BsStarHalf/>}/>
                        <ReviewsLatestDetail star={"3/5"} iconStar={<AiOutlineStar/>}/>
                        <ReviewsLatestDetail star={"4/5"} iconStar={<BsStarHalf/>}/>
                        <ReviewsLatestDetail star={"3/5"} iconStar={<AiOutlineStar/>}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Index;