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
    );
};

export default Button;