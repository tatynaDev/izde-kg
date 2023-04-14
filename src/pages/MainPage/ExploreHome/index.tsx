import React, {useState} from 'react';
import {HiOutlineChevronDown, HiOutlineChevronUp} from "react-icons/hi";
import './ExploreHome.scss'
const ExploreHome = () => {
    const [explore, setExplore] = useState<boolean>(false)

    return (
        <>
            <div className="explore-home">
                <div className="container">
                    <div className="explore-home-content">
                        <h1>Explore the New Properties</h1>
                        <div className="explore-home-content-btn">
                            <div className='explore-item-content'>
                                <div className="explore-item">
                                    <input className='explore-input' type="checkbox" name='explore1'
                                           id='explore-1'/>
                                    <label onClick={() => setExplore(!explore)} className='explore-title'
                                           htmlFor='explore-1'><h3>Recently added</h3>
                                        {
                                            explore ? <HiOutlineChevronUp className='down'/> :
                                                <HiOutlineChevronDown className='up'/>
                                        }
                                    </label>

                                    <div className="explore-text">
                                        <p>Most popular</p>
                                        <p>Cheapest</p>
                                        <p>The most expensive</p>
                                    </div>
                                </div>
                            </div>
                            <button className='explore-see-btn'>See more</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ExploreHome;