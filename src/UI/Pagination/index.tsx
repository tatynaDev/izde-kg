import React from 'react';
import './index.scss'

const Pagination = () => {
    const btn = [1,2,3,4,5,6,7,8,9,10,'Next']

    return (
        <div className='container'>
            <div className="buttons">
                {
                    btn.map(el => (
                        <button className='pagination'>{el}</button>
                    ))
                }
            </div>
        </div>
    );
};

export default Pagination;