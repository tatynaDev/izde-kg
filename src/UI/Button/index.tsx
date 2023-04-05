import React from 'react';

interface IBtnProps {
    text?: string
    classN?: string
    fn?: () => void
}

const Button: React.FC<IBtnProps> = ({text, classN, fn}) => {
    return (
        <button onClick={fn} className={classN}>{text}</button>
    );
};

export default Button;