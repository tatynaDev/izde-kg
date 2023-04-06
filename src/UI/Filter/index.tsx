import React from 'react';
import {FaAward} from "react-icons/fa";
import {MdVerified} from "react-icons/md";
import {BiSearch} from "react-icons/bi";
import './filter.scss'
import './media.scss'

const Filter = () => {
    return (
        <div className='filter'>
            <div className="filter--left">
                <div className="filter--left__search">
                    <input type="search" placeholder='Enter an address or city '/>
                    <button className='filter--left__search--btn'>
                        <BiSearch/>
                        <span>Search</span>
                    </button>
                </div>
                <div className="filter--left__item">
                    <div className="filter--left__item--super">
                        <p>SUPERAGENTS</p>
                        <p><FaAward/></p>
                    </div>
                    <div className="filter--left__item--super">
                        <p>VERIFIED</p>
                        <p><MdVerified/></p>
                    </div>
                </div>
            </div>
            <div className="filter--right">
                <div className='filter--right__sel'>
                    <select>
                        <option selected={true}>Property type</option>
                        <option>Office</option>
                        <option>Apartment</option>
                        <option>House</option>
                        <option>Villa</option>
                        <option>Penthouse</option>
                    </select>
                </div>
                <div className='filter--right__sel'>
                    <select>
                        <option selected={true}>Rooms</option>
                        <option>1-2</option>
                        <option>2-4</option>
                        <option>4-5</option>
                        <option>5-6</option>
                        <option>more</option>
                    </select>
                </div>
                <div className='filter--right__sel'>
                    <select>
                        <option selected={true}>Price</option>
                        <option>min</option>
                        <option>max</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Filter;