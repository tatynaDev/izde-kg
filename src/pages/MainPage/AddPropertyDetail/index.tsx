import React, {useRef, useState} from 'react';
import "./AddPropertyDetail.scss"
import AddPropertyImageOne from "./img/AddPropertyImageOne";
import Input from "../../../UI/Input";
import {RiBaiduLine, RiDoorLine} from "react-icons/ri";
import {MdComputer, MdOutlineMicrowave} from "react-icons/md";
import {AiOutlineWifi} from "react-icons/ai";
import {TbAirConditioning, TbParking} from "react-icons/tb";
import {BsThermometerHigh} from "react-icons/bs";
import {CgSmartHomeWashMachine} from "react-icons/cg";
import {ImSpoonKnife} from "react-icons/im";
import {CiDumbbell} from "react-icons/ci";
import {FiMonitor} from "react-icons/fi";
import {FaSwimmingPool} from "react-icons/fa";



const AddPropertyDetail = () => {
    const [file,setFile] = useState<string | ArrayBuffer | any>("")
    const inputRef = useRef(null)

    const fileReader = new FileReader()

    fileReader.onloadend = () => {
        setFile(fileReader.result)
    }

    const handleChange = (e: React.ChangeEvent<any>) => {
        fileReader.readAsDataURL(e.target.files[0])
    }


    return (
        <div>
            <div className="container">
                <div className="AddPropertyDetail">
                    <h1>Property characteristics</h1>
                    <div className="AddPropertyDetail--images">
                        <AddPropertyImageOne/>
                    </div>
                    <a href="#">Add photo</a>

                    <input type="file" ref={inputRef} onChange={handleChange}/>


                    <div className="AddPropertyDetail--group">
                        <div className="AddPropertyDetail--group__left">
                            <div>
                             <h2>Series</h2>
                                <div>
                                    <button>Elite</button>
                                    <button>105</button>
                                    <button>106</button>
                                    <button>104</button>
                                    <button>Individual project</button>
                                </div>
                            </div>
                            <div>
                                <h2>Number of room</h2>
                                <div>
                                    <button>1</button>
                                    <button>2</button>
                                    <button>3</button>
                                    <button>4</button>
                                    <button>5</button>
                                    <button>6+</button>
                                </div>
                            </div>
                            <div>
                                <h2>Bathroom</h2>
                                <div>
                                    <button>Combined</button>
                                    <button>Separate</button>
                                </div>
                            </div>
                            <div>
                                <h2>Type of parking</h2>
                                <div>
                                    <button>Ground</button>
                                    <button>Underground</button>
                                    <button>No</button>
                                </div>
                            </div>
                            <div>
                                <h2>Location: </h2>
                                <Input placeholder="Bishkek"/>
                            </div>
                            <div>
                                <h2>Square: </h2>
                                <Input placeholder="m2"/>
                            </div>
                            <div>
                                <h2>Floor</h2>
                                <div style={{display: "flex" , alignItems: "center"}}>
                                    <Input width={95} styles={{width: "95px"}}/>
                                    <h2 style={{transform: "translateY(-10px)" , padding: "0 10px"}}>of</h2>
                                    <Input width={95} styles={{width: "95px"}}/>
                                </div>
                            </div>
                            <div>
                                <h2>Price</h2>
                                <Input/>
                            </div>
                            <div>
                                <h2>About property </h2>
                                <Input styles={{width: "662px", height: "88px"}}/>
                            </div>
                            <button className="buttons">Send to admin</button>
                        </div>
                        <div className="AddPropertyDetail--group__right">
                            <h3>Aminities: </h3>
                            <div className={"AddPropertyDetail--group__right--box"}>
                                <Input text={"checkbox"}/>
                                <RiDoorLine className={"AddPropertyDetail--group__right--box__icons"}/>
                                <h4>Balkony</h4>
                            </div>
                            <div className={"AddPropertyDetail--group__right--box"}>
                                <Input text={"checkbox"}/>
                                <MdOutlineMicrowave className={"AddPropertyDetail--group__right--box__icons"}/>
                                <h4>Microwave </h4>
                            </div>
                            <div className={"AddPropertyDetail--group__right--box"}>
                                <Input text={"checkbox"}/>
                                <AiOutlineWifi className={"AddPropertyDetail--group__right--box__icons"}/>
                                <h4>WiFi</h4>
                            </div>
                            <div className={"AddPropertyDetail--group__right--box"}>
                                <Input text={"checkbox"}/>
                                <TbParking className={"AddPropertyDetail--group__right--box__icons"}/>
                                <h4>Covered parking </h4>
                            </div>
                            <div className={"AddPropertyDetail--group__right--box"}>
                                <Input text={"checkbox"}/>
                                <MdComputer className={"AddPropertyDetail--group__right--box__icons"}/>
                                <h4>TV</h4>
                            </div>
                            <div className={"AddPropertyDetail--group__right--box"}>
                                <Input text={"checkbox"}/>
                                <BsThermometerHigh className={"AddPropertyDetail--group__right--box__icons"}/>
                                <h4>Central heating</h4>
                            </div>
                            <div className={"AddPropertyDetail--group__right--box"}>
                                <Input text={"checkbox"}/>
                                <CgSmartHomeWashMachine className={"AddPropertyDetail--group__right--box__icons"}/>
                                <h4>Washing machine</h4>
                            </div>
                            <div className={"AddPropertyDetail--group__right--box"}>
                                <Input text={"checkbox"}/>
                                <TbAirConditioning className={"AddPropertyDetail--group__right--box__icons"}/>
                                <h4>Air-conditioner</h4>
                            </div>
                            <div className={"AddPropertyDetail--group__right--box"}>
                                <Input text={"checkbox"}/>
                                <ImSpoonKnife className={"AddPropertyDetail--group__right--box__icons"}/>
                                <h4>Tableware</h4>
                            </div>
                            <div className={"AddPropertyDetail--group__right--box"}>
                                <Input text={"checkbox"}/>
                                <FaSwimmingPool className={"AddPropertyDetail--group__right--box__icons"}/>
                                <h4>Swimming pool</h4>
                            </div>
                            <div className={"AddPropertyDetail--group__right--box"}>
                                <Input text={"checkbox"}/>
                                <CiDumbbell className={"AddPropertyDetail--group__right--box__icons"}/>
                                <h4>Gym</h4>
                            </div>
                            <div className={"AddPropertyDetail--group__right--box"}>
                                <Input text={"checkbox"}/>
                                <FiMonitor className={"AddPropertyDetail--group__right--box__icons"}/>
                                <h4>Workspace</h4>
                            </div>
                            <div className={"AddPropertyDetail--group__right--box"}>
                                <Input text={"checkbox"}/>
                                <RiBaiduLine className={"AddPropertyDetail--group__right--box__icons"}/>
                                <h4>Pet friendly</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <iframe className="iframes"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d539.7203843937335!2d74.58615285657483!3d42.879652374860505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8192372e15d%3A0x38f955cf4a92cde3!2z0J_RgNC40L3RgiDQnNC10LTQuNCw!5e0!3m2!1sru!2skg!4v1681070279317!5m2!1sru!2skg"
                        width="600" height="450"  loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default AddPropertyDetail;