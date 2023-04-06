import React from 'react';
import './index.scss'
import House from "./house";
import {FaBath} from "react-icons/fa";
import {BiBed, BiShapeSquare} from 'react-icons/bi';

interface IBuyPageProps {
    text?: string
    title?: string
    location: string
    price: string
}

const BayHome: React.FC<IBuyPageProps> = ({
                                              text,
                                              title,
                                              location,
                                              price
                                          }) => {
    return (
        <div className='buyHome'>
            <div className='buyHome--left'>
                <House/>
            </div>
            <div className='buyHome--right'>
                <p className='buyHome--right__text'>{text}</p>
                <h1 className='buyHome--right__title'>{title}</h1>
                <div className='buyHome--right__stuff'>
                    <p><span><FaBath/></span>1 Bathroom</p>
                    <p><span><BiShapeSquare/></span>Square: 120 m2</p>
                    <p><span><BiBed/></span>1 Bedroom</p>
                </div>
                <div className='buyHome--right__loc'>
                    <p className='buyHome--right__text'>{location}</p>
                    <p className='price'>{price}</p>
                </div>

            </div>
        </div>
    );
};

export default BayHome;