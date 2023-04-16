import React from 'react';
import './style.scss';
import reviewBishkek from "http://localhost:3001/static/media/buy-home.b5a4c6e994c8d6c7ee7050b34660acc1.svg";


const ReviewBishkek = () => {
    return (
        <section id="reviewBishkek">
            <div className="container">
                <div className="reviewBishkek">
                    <div className="reviewBishkek--topBuild">
                        <h1>Top reviewed buildings in Bishkek</h1>
                        <img src={reviewBishkek} alt="img"/>
                    </div>
                    <div className="reviewBishkek--topBuild">
                        <h1>Latest reviews</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewBishkek;