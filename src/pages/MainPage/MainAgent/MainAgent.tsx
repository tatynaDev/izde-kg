import React from 'react';
import Button from "../../../UI/Button";
import './MainAgent.scss'
const MainAgent = () => {
    return (
        <div>
            <div className="agent">
                <div className="container">
                    <div className="content-agent">
                            <h1>Meet our SuperAgents</h1>
                        <div>
                            <Button text='See more' classN={'agent-button'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainAgent;