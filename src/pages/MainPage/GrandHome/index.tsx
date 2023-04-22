import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import photo from './../../../assets/img/explore-home1.svg'
import girl from './../../../assets/img/explore-home2.svg'
import './GrandHome.scss'

const GrandHome = () => {
    const settings = {
        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 4.5,
        swipeToSlide: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                className: "center",
                infinite: false,
                centerPadding: "60px",
                slidesToShow: 2,
                swipeToSlide: true,
            }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3, slidesToScroll: 2,
                    infinite: false, dots: false
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    const block = [
        {
        image: photo,
        name: "The Grand Estate",
        country: 'Bishkek',
        date: "$ 100 000"

    },
        {
        image: girl,
        name: "The Grand Estate",
        country: 'Bishkek',
        date: "$ 100 000"

    },
        {
        image: photo,
        name: "The Grand Estate",
        country: 'Bishkek',
        date: "$ 100 000"

    },
        {
        image: girl,
        name: "The Grand Estate",
        country: 'Bishkek',
        date: "$ 100 000"

    },
        {
        image: photo,
        name: "The Grand Estate",
        country: 'Bishkek',
        date: "$ 100 000"

    },
        {
        image: girl,
        name: "The Grand Estate",
        country: 'Bishkek',
        date: "$ 100 000"

    },
        {
        image: photo,
        name: "The Grand Estate",
        country: 'Bishkek',
        date: "$ 100 000"

    }]
    return (
        <>
            <section id="slider">
                <div className="slider--general">
                    <Slider {...settings}>
                        {
                            block.map((el, idx) => (
                            <div className='slider--general__block' key={idx}>
                                <img className='slider--general__block--phone' src={el.image} alt=""/>
                                <div className='slider--general__block--phone-info'>
                                    <h1>{el.name}</h1>
                                    <div className="slider--general__block--phone-info-price">
                                        <p className='country'>{el.country}</p>
                                        <p className='date'>{el.date}</p>
                                    </div>
                                </div>
                            </div>))}
                    </Slider>
                </div>
            </section>
        </>);
};

export default GrandHome