import React, {useState} from 'react';
import main from "../../../assets/img/Home-page.svg";
import {HiOutlineChevronDown, HiOutlineChevronUp} from "react-icons/hi";
import {BsSearch} from "react-icons/bs";
import './MainHome.scss'
const MainHome = () => {
    const [accord, setAccord] = useState<boolean>(false)
    const [rooms, setRooms] = useState<boolean>(false)
    const [price, setPrice] = useState<boolean>(false)

    const openAccord = () => {
        setAccord(!accord)
        setRooms(false)
        setPrice(false)
    }
    const openRooms = () => {
        setAccord(false)
        setRooms(!rooms)
        setPrice(false)
    }
    const openPrice = () => {
        setAccord(false)
        setRooms(false)
        setPrice(!price)
    }
    return (
        <>
            <div className="main-home" id="main-home">
                <div className="container">
                    <div className="main-home-content">
                        <div className="main-home-content-img">
                            <img src={main} alt=""/>
                            <div className='main-home-content-img-info'>
                                <h1>Let’s find a perfect home for you!</h1>
                            </div>
                        </div>
                        <div className="main-home-content-search">
                            <div className="main-home-content-search-info">
                                <div className="main-home-content-search-info-select">
                                    <div className="main-home-content-search-info-select-button">
                                        <button className='main-home-rent'>Rent</button>
                                        <button className='main-home-buy' >Buy</button>
                                    </div>
                                    <div className="main-option">
                                        <div className="country-item">
                                            <input className='country-input' type="checkbox" name='country1'
                                                   id='country-1'/>
                                            <label onClick={ openAccord} className='country-title'
                                                   htmlFor='country-1'><h3>Property type</h3>
                                                {
                                                    accord ? <HiOutlineChevronDown className='down'/> :
                                                        <HiOutlineChevronUp className='up'/>
                                                }
                                            </label>

                                            <div className="country-text"
                                            style={{
                                                display: accord ? 'block' : 'none'
                                            }}>
                                                <p onClick={()=> setAccord(false)}>Apartment</p>
                                                <p onClick={()=> setAccord(false)}>Villa</p>
                                                <p onClick={()=> setAccord(false)}>Townhouse</p>
                                                <p onClick={()=> setAccord(false)}>Penthouse</p>
                                                <p onClick={()=> setAccord(false)}>Whole Building</p>
                                            </div>
                                        </div>
                                        <div className="main-option-card">
                                            <div className="rooms-item">
                                                <input className='rooms-input' type="checkbox" name='country2' id='country-2'/>
                                                <label onClick={openRooms} className='rooms-title'
                                                       htmlFor='country-2'><h3>Rooms</h3>
                                                    {
                                                        rooms ? <HiOutlineChevronDown className='down'/> :
                                                            <HiOutlineChevronUp className='up'/>

                                                    }


                                                </label>

                                                <div className="rooms-text" style={{
                                                    display: rooms ? 'block' : 'none'
                                                }}>
                                                    <p onClick={()=> setRooms(false)}>1</p>
                                                    <p onClick={()=> setRooms(false)}>2</p>
                                                    <p onClick={()=> setRooms(false)}>3</p>
                                                    <p onClick={()=> setRooms(false)}>4</p>
                                                    <p onClick={()=> setRooms(false)}>5</p>
                                                    <p onClick={()=> setRooms(false)}>5+</p>
                                                </div>
                                            </div>
                                            <div className="price-item">
                                                <input className='price-input' type="checkbox" name='price3' id='price-3'/>
                                                <label onClick={openPrice} className='price-title'
                                                       htmlFor='price-3'><h3>Price</h3>
                                                    {
                                                        price ? <HiOutlineChevronDown className='down'/> :
                                                            <HiOutlineChevronUp className='up'/>

                                                    }


                                                </label>
                                                }
                                            </label>

                                                <div className="price-text" style={{
                                                    display: price ? 'block' : 'none'
                                                }}>
                                                    <p onClick={()=> setPrice(false)}>I min</p>
                                                    <p onClick={()=> setPrice(false)}>I max</p>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="main-home-content-search-info-input">
                                    <input className='main-home-input' type="text" placeholder='Enter an address or city '/>
                                    <button className='main-home-btn'>
                                        <BsSearch/> Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MainHome;