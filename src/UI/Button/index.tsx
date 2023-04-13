import React from 'react';


interface IBtnProps {
    text?: string | any
    classN?: string
    onClick?: () => void
    disabled?: any
}

const Button: React.FC<IBtnProps> = ({text,disabled,onClick, classN}) => {

    return (
        <button disabled={disabled} onClick={onClick} className={classN}>{text}</button>
    fn?: () => void
}

const Button: React.FC<IBtnProps> = ({text, classN, fn}) => {
    return (
        <button onClick={fn} className={classN}>{text}</button>
    );
};

export default Button;