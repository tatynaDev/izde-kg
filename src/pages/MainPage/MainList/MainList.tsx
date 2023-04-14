import React from 'react';
import './List.scss'
import Button from "../../../UI/Button";
const MainList = () => {

    return (
        <>
            <div className="list">
                <div className="container">
                    <div className="content-list">
                        <div className="content-list-info">
                            <h1>List your property with us</h1>
                            <p>Grow your business with property finder</p>
                            <Button text={'Get started'} classN={'list-button'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainList;