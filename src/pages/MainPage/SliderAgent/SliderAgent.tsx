import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import agent1 from './../../../assets/img/agent1.svg'
import agent2 from './../../../assets/img/agent2.svg'
import agent3 from './../../../assets/img/agent3.svg'
import agent4 from './../../../assets/img/agent4.svg'
import agent5 from './../../../assets/img/agent5.svg'
import './SliderAgent.scss'
const SliderAgent  = () => {
    const settings = {
        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 6.8,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3, slidesToScroll: 3,
                infinite: true, dots: false
            }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2, slidesToScroll: 2,
                    infinite: true, dots: false
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

    const block = [{
        image: agent1,
    }, {
        image: agent2,
    }, {
        image: agent3,
    }, {
        image: agent4,
    }, {
        image: agent5,

    }, {
        image: agent1,

    }, {
        image: agent2,

    }
    ]
    return (
        <>
            <section id="slider">
                <div className="slider--agent">
                    <Slider {...settings}>
                        {block.map((el, idx) => (
                            <div  className='slider--agent-content' key={idx}>
                                <img className='slider--agent-content-img' src={el.image} alt=""/>
                            </div>))}
                    </Slider>
                </div>
            </section>
        </>);
};

export default SliderAgent