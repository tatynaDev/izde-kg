import React from 'react';
import {RiMessage2Line} from "react-icons/ri";

interface IPropsLatestDetail {
    star?: string
    iconStar?: any
}


const ReviewsLatestDetail:React.FC<IPropsLatestDetail> = ({star, iconStar}) => {
    return (
       <>
           <div className="revBishkek--latest">
               <div className="revBishkek--latest__block">
                   <h5>Apartment</h5>
                   <h2>The Grand Estate</h2>
                   <div className="revBishkek--latest__block--star">
                       <span className="revBishkek--latest__block--star__icon">{iconStar}</span>
                       <span>{star}</span>
                   </div>
                   <p>It’s an awesome home with a great view to a
                       city. I would definitely recommend to rent this
                       property
                   </p>
                   <button><RiMessage2Line className="revBishkek--latest__icon"/> More reviews</button>
               </div>
           </div>
       </>
    );
};

export default ReviewsLatestDetail;