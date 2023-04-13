import React from 'react';
import agent from '../../../assets/img/Agents-1.png'
import './agentPage.scss'
import {BiSearch} from "react-icons/bi";

const AgentHero = () => {
    return (
        <div id='agent'>
            <div className="agent">
                <div className="agent-hero">
                    <img src={agent} alt=""/>
                    <div className="agent-hero__text">
                        <h1>Find your agent to <br/> find your home</h1></div>
                </div>
                <div className="agent-search">
                    <div className="agent-search__holder">
                        <div className='agent-search__holder-input'>
                            <input type="text" placeholder='Name or the location of the agent'/>
                            <button className='button-search'>
                                <BiSearch style={{fontSize: '30px', padding: '0 8px 0 0 '}}/> search
                            </button>
                        </div>
                        <div className='agent-search__holder-select'>
                            <div className="agent-search__holder-select__option"><select>
                                <option className='language' defaultChecked>language</option>
                                <option className='language'>English</option>
                                <option className='language'>Kyrgyz</option>
                                <option className='language'>Russian</option>
                            </select></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AgentHero;
