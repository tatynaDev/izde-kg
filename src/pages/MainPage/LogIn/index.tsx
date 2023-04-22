import React, {useState} from 'react';
import "./LogIn.scss"
import ImageLogIn from "./img/Image-LogIn";
import Button from "../../../UI/Button";
import ImageGoogleIcon from "./img/ImageGoogleIcon";
import Input from "../../../UI/Input";
import "./Media/Media.scss";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

interface ICon {
    email: string
    password: any
}

interface IFormCom {
    title: string
    price: number
    description: string
    image: string
    category: string
    password: any
}


const LogIn = () => {
    const navigate = useNavigate()
    const [error,setError] = useState<boolean>(false)
    const [type,setType] = useState<boolean>(true)
    const [pas,setPas] = useState<string>("")
    const [values,setValues] = useState<ICon>({
        email: "",
        password: "",
    })


    const newProduct: IFormCom = {
        title: values.email,
        password: values.password,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleClick = async (e: React.FormEvent<any>) => {
        e.preventDefault()
        if (values.email.trim().length !== 0 && values.password.trim().length !== 0) {
            setError(false)
            if (values.password.length > 6) {
                setError(false)
                setPas("")
                await axios.post(`https://fakestoreapi.com/products`, newProduct)
                navigate("/userProfile")
            } else {
                setPas("Choose a password it needs be between 6 and 99 characters")
                setError(true)
            }
        } else {
            setError(true)
        }
        setValues({email: "", password: ""})
    }


    return (
        <div id={"logIn"}>
            <div className="container">
                <div className="logIn">
                    <div className="logIn--logo">
                        <ImageLogIn/>
                        <h1>WELCOME TO IZDE.KG</h1>
                    </div>
                    <form action="#" onSubmit={handleClick}>
                        <div className="logIn--nav">
                        <h6>Log in</h6>
                        <Input value={values.email} styles={{border: error ? values.email.trim().length !== 0 ? "" : "2px solid red" : ""}} onChange={handleChange} names={"email"} text={"email"} placeholder={"Email"}/>
                        <div className="logIn--nav__block">
                        <Input value={values.password} styles={{border: error ? values.password.trim().length !== 0 ? "" : "2px solid red" : ""}} onChange={handleChange} names={"password"} text={type ? "password" : "text"} placeholder={"Password"}/>
                        <div onClick={() => setType(!type)} className="logIn--nav__button">{type ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}</div>
                        </div>
                        {pas && <p style={{color:"red"}}>{pas}</p>}
                        <p>Well call or text you to confirm your number. Standard message and data rates apply.</p>
                        <a href="#">Forgot your password?</a>
                        <a href="#">Don’t have an account? Register</a>
                        <Button  text={"Continue"} classN={"logIn--nav__btn"}/>
                        <div className="logIn--nav__child">
                            <ImageGoogleIcon/>
                            <h2>Continue with Google</h2>
                        </div>
                        </div>
                    </form>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;