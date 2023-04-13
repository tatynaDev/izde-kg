import React from 'react';
import {Link, NavLink} from "react-router-dom";

interface IBlock {
    img?: string
    text?: string
    classN?: string
    p?: string
    button?: string
}

const Agent: React.FC<IBlock> = ({text, classN, img, p, button}) => {
    return (<div className={classN}>
        <div id='block'>
            <div className="block">
                <div className="block-img"><img src={img} alt=""/>
                    <h1> {text}</h1>                        <p>{p}</p>
                    <div className="block-img__btn"><Link to={'/agentDetail'}>
                        <button>{button}</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Agent;
