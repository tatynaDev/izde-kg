import React from 'react';
import bishkek from "./../../../assets/img/ReviewPage/bishkek.svg"
import "./style.scss";
import {RiMessage2Line, RiPencilLine} from "react-icons/ri";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {BsStarHalf} from "react-icons/bs";

const Index = () => {

    // const reviews = [
    //     {
    //         id: 1,
    //         name: "The Grand Estate",
    //         star: "5/5",
    //         iconFist: <GrStar/>,
    //         description: "It’s an awesome home with a <br/> great view to a city. I would definitely recommend to rent this <br/> property"
    //     },
    //     {
    //         id: 2,
    //         star: "4/5",
    //         iconSecond: <ImStarHalf/>
    //     },
    //     {
    //         id: 3,
    //         star: "3/5",
    //         iconThird: <IoMdStarOutline/>
    //     }
    // ]
    return (
        <div id="revBishkek">
            <div className="container">
                <div className="textOne">
                    <h1>Top reviewed buildings in Bishkek</h1>
                    <h1>Latest reviews</h1>
                </div>

                <div className="revBishkek">

                  <div className="blocks">
                      <div className="revBishkek--build">
                          <div className="revBishkek--build__first">
                              <img src={bishkek} alt="img"/>
                              <div className="revBishkek--build__first--block">
                                  <div className="revBishkek--build__first--block__text">
                                      <h5>Apartment</h5>
                                      <h2>The Grand Estate</h2>
                                  </div>
                                  <div className="revBishkek--build__first--block__stars">
                                      <AiFillStar className="revBishkek--build__first--block__stars--icon"/> <span>5/5</span>
                                  </div>
                                  <div className="revBishkek--build__first--block__message">
                                      <div className="revBishkek--build__first--block__message--btn">
                                          <button> <RiMessage2Line className="revBishkek--build__first--block__message--btn__iconsM"/> Read reviews</button>
                                      </div>
                                      <div className="revBishkek--build__first--block__message--write">
                                          <button>  <RiPencilLine className="revBishkek--build__first--block__message--write__iconsP"/>  Write review</button>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>

                      <div className="revBishkek--build">
                          <div className="revBishkek--build__first">
                              <img src={bishkek} alt="img"/>
                              <div className="revBishkek--build__first--block">
                                  <div className="revBishkek--build__first--block__text">
                                      <h5>Apartment</h5>
                                      <h2>The Grand Estate</h2>
                                  </div>
                                  <div className="revBishkek--build__first--block__stars">
                                      <AiFillStar className="revBishkek--build__first--block__stars--icon"/> <span>3/5</span>
                                  </div>
                                  <div className="revBishkek--build__first--block__message">
                                      <div className="revBishkek--build__first--block__message--btn">
                                          <button> <RiMessage2Line className="revBishkek--build__first--block__message--btn__iconsM"/> Read reviews</button>
                                      </div>
                                      <div className="revBishkek--build__first--block__message--write">
                                          <button>  <RiPencilLine className="revBishkek--build__first--block__message--write__iconsP"/>  Write review</button>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>

                      <div className="revBishkek--build">
                          <div className="revBishkek--build__first">
                              <img src={bishkek} alt="img"/>
                              <div className="revBishkek--build__first--block">
                                  <div className="revBishkek--build__first--block__text">
                                      <h5>Apartment</h5>
                                      <h2>The Grand Estate</h2>
                                  </div>
                                  <div className="revBishkek--build__first--block__stars">
                                      <BsStarHalf className="revBishkek--build__first--block__stars--icon"/> <span>4/5</span>
                                  </div>
                                  <div className="revBishkek--build__first--block__message">
                                      <div className="revBishkek--build__first--block__message--btn">
                                          <button> <RiMessage2Line className="revBishkek--build__first--block__message--btn__iconsM"/> Read reviews</button>
                                      </div>
                                      <div className="revBishkek--build__first--block__message--write">
                                          <button>  <RiPencilLine className="revBishkek--build__first--block__message--write__iconsP"/>  Write review</button>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>

                      <div className="revBishkek--build">
                          <div className="revBishkek--build__first">
                              <img src={bishkek} alt="img"/>
                              <div className="revBishkek--build__first--block">
                                  <div className="revBishkek--build__first--block__text">
                                      <h5>Apartment</h5>
                                      <h2>The Grand Estate</h2>
                                  </div>
                                  <div className="revBishkek--build__first--block__stars">
                                      <AiOutlineStar className="revBishkek--build__first--block__stars--icon"/> <span>3/5</span>
                                  </div>
                                  <div className="revBishkek--build__first--block__message">
                                      <div className="revBishkek--build__first--block__message--btn">
                                          <button> <RiMessage2Line className="revBishkek--build__first--block__message--btn__iconsM"/> Read reviews</button>
                                      </div>
                                      <div className="revBishkek--build__first--block__message--write">
                                          <button>  <RiPencilLine className="revBishkek--build__first--block__message--write__iconsP"/>  Write review</button>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>

                      <div className="revBishkek--build">
                          <div className="revBishkek--build__first">
                              <img src={bishkek} alt="img"/>
                              <div className="revBishkek--build__first--block">
                                  <div className="revBishkek--build__first--block__text">
                                      <h5>Apartment</h5>
                                      <h2>The Grand Estate</h2>
                                  </div>
                                  <div className="revBishkek--build__first--block__stars">
                                      <AiFillStar className="revBishkek--build__first--block__stars--icon"/> <span>5/5</span>
                                  </div>
                                  <div className="revBishkek--build__first--block__message">
                                      <div className="revBishkek--build__first--block__message--btn">
                                          <button> <RiMessage2Line className="revBishkek--build__first--block__message--btn__iconsM"/> Read reviews</button>
                                      </div>
                                      <div className="revBishkek--build__first--block__message--write">
                                          <button>  <RiPencilLine className="revBishkek--build__first--block__message--write__iconsP"/>  Write review</button>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>

                  </div>

                    <div className="group">
                        <div className="revBishkek--latest">
                            <div className="revBishkek--latest__block">
                                <h5>Apartment</h5>
                                <h2>The Grand Estate</h2>
                                <div className="revBishkek--latest__block--star">
                                    <BsStarHalf className="revBishkek--latest__block--star__icon"/> <span>4/5</span>
                                </div>
                                <p>It’s an awesome home with a great view to a <br/>
                                    city. I would definitely recommend to rent this <br/>
                                    property
                                </p>
                                <button> <RiMessage2Line className="revBishkek--latest__icon"/> More reviews </button>

                            </div>
                        </div>
                        <div className="revBishkek--latest">
                            <div className="revBishkek--latest__block">
                                <h5>Apartment</h5>
                                <h2>The Grand Estate</h2>
                                <div className="revBishkek--latest__block--star">
                                    <AiOutlineStar className="revBishkek--latest__block--star__icon"/> <span>4/5</span>
                                </div>
                                <p>It’s an awesome home with a great view to a <br/>
                                    city. I would definitely recommend to rent this <br/>
                                    property
                                </p>
                                <button> <RiMessage2Line className="revBishkek--latest__icon"/> More reviews </button>

                            </div>
                        </div>
                        <div className="revBishkek--latest">
                            <div className="revBishkek--latest__block">
                                <h5>Apartment</h5>
                                <h2>The Grand Estate</h2>
                                <div className="revBishkek--latest__block--star">
                                    <BsStarHalf className="revBishkek--latest__block--star__icon"/> <span>4/5</span>
                                </div>
                                <p>It’s an awesome home with a great view to a <br/>
                                    city. I would definitely recommend to rent this <br/>
                                    property
                                </p>
                                <button> <RiMessage2Line className="revBishkek--latest__icon"/> More reviews </button>

                            </div>
                        </div>
                        <div className="revBishkek--latest">
                            <div className="revBishkek--latest__block">
                                <h5>Apartment</h5>
                                <h2>The Grand Estate</h2>
                                <div className="revBishkek--latest__block--star">
                                    <AiOutlineStar className="revBishkek--latest__block--star__icon"/> <span>3/5</span>
                                </div>
                                <p>It’s an awesome home with a great view to a <br/>
                                    city. I would definitely recommend to rent this <br/>
                                    property
                                </p>
                                <button> <RiMessage2Line className="revBishkek--latest__icon"/> More reviews </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Index;