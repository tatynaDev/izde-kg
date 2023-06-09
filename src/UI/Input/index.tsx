import React, {CSSProperties} from 'react';

interface IInputProps {
    text?: string
    placeholder?: string
    value?: string
    names?: string
    onChange?: (e:any) => void
    styles?: CSSProperties | undefined
    width?: number
    className?: string
}

const Input: React.FC<IInputProps> = ({text,className,width,styles,onChange,value,names, placeholder}) => {
    return (
        <input className={className} width={width} style={styles} onChange={onChange} type={text} name={names} value={value} placeholder={placeholder}/>
    );
};

export default Input;