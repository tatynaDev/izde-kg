import React from 'react';
import bishkek from "../../../../assets/img/ReviewPage/bishkek.svg";
import {RiMessage2Line, RiPencilLine} from "react-icons/ri";
import {ImStarFull} from "react-icons/im";
import {HiOutlinePencil} from "react-icons/hi";
import {TbMessageDots} from "react-icons/tb";
import {FaStarHalfAlt} from "react-icons/fa";


interface IPropsReviewsDetail {
    star?: string
    iconStar?: any
}

const ReviewsDetail:React.FC<IPropsReviewsDetail> = ({star, iconStar}) => {

    return (
        <div>
            <div className="revBishkek--build">
                <img src={bishkek} alt="img"/>
                <div className="revBishkek--build__info">
                    <div className="revBishkek--build__info--block">
                        <h3>Apartment</h3>
                        <h2>The Grand Estate</h2>
                    </div>

                    <div className="revBishkek--build__info--block">
                        <div className="revBishkek--build__info--block__star">
                            <ImStarFull style={{fontSize: 26}}/>
                            <p>5/5</p>
                        </div>

                        <div className="revBishkek--build__info--block__btn">
                            <button><TbMessageDots/> Read reviews</button>
                            <button><HiOutlinePencil/> Write review</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="revBishkek--build">
                <img src={bishkek} alt=""/>
                <div className="revBishkek--build__info">
                    <div className="revBishkek--build__info--block">
                        <h3>Apartment</h3>
                        <h2>The Grand Estate</h2>
                    </div>

                    <div className="revBishkek--build__info--block">
                        <div className="revBishkek--build__info--block__star">
                            <FaStarHalfAlt style={{fontSize: 26}}/>
                            <p>4/5</p>
                        </div>

                        <div className="revBishkek--build__info--block__btn">
                            <button><TbMessageDots/> Read reviews</button>
                            <button><HiOutlinePencil/> Write review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsDetail;