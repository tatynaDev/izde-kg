import React from 'react';
import {NavLink} from 'react-router-dom';

interface IAddressProps {
    title?: string
    first?: string
    second?: string
    third?: string
}

const FooterAddress: React.FC<IAddressProps> = ({
                                                    title,
                                                    third,
                                                    second,
                                                    first,
                                                }) => {
    return (
        <div className='addresses'>
            <h1 className='addresses--title'>{title}</h1>
            <NavLink to={'#'}>{first}</NavLink>
            <NavLink to={'#'}>{second}</NavLink>
            <NavLink to={'#'}>{third}</NavLink>
        </div>
    );
};

export default FooterAddress;