import React from 'react';

interface IBtnProps {
    text?: string
    classN?: string
}

const Button: React.FC<IBtnProps> = ({text, classN}) => {
    return (
        <button className={classN}>{text}</button>
    );
};

export default Button;