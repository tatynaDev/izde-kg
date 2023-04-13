import React from 'react';
import div from '../../../UI/Agents/index'
import leslie from '../../../assets/img/Rectangle 73.png'
import Agent from "../../../UI/Agents/index";
import pena from '../../../assets/img/Rectangle 73 (1).png'
import marvin from '../../../assets/img/Rectangle 73 (2).png'
import robert from '../../../assets/img/Rectangle 73 (3).png'
import bessie from '../../../assets/img/Rectangle 73 (4).png'
import jenny from '../../../assets/img/Rectangle 73 (5).png'
import jacob from '../../../assets/img/Rectangle 73 (6).png'
import brooklyn from '../../../assets/img/Rectangle 73 (7).png'
import '../AgentsBlock/AgentBlock.scss'

const AgentsBlock = () => {
    return (<section>
            <div className="container">
                <div className="block-one">
                    <Agent
                        text='Leslie Alexander' img={leslie}
                        classN='block' p='SENIOR PROPERTY ADVISOR'
                        button='SUPERAGENT'/>
                    <Agent text='Leslie Alexander'
                           img={pena} classN='block'
                           p='SENIOR PROPERTY ADVISOR' button='SUPERAGENT'
                    /> <Agent
                    text='Leslie Alexander' img={marvin}
                    classN='block' p='SENIOR PROPERTY ADVISOR'
                    button='SUPERAGENT'/>
                    <Agent text='Leslie Alexander'
                           img={robert} classN='block'
                           p='SENIOR PROPERTY ADVISOR' button='SUPERAGENT'
                    /> <Agent
                    text='Leslie Alexander' img={bessie}
                    classN='block' p='SENIOR PROPERTY ADVISOR'
                    button='SUPERAGENT'/>
                    <Agent text='Leslie Alexander'
                           img={jenny} classN='block'
                           p='SENIOR PROPERTY ADVISOR' button='SUPERAGENT'
                    /> <Agent
                    text='Leslie Alexander' img={jacob}
                    classN='block' p='SENIOR PROPERTY ADVISOR'
                    button='SUPERAGENT'
                /> <Agent
                    text='Leslie Alexander' img={brooklyn}
                    classN='block' p='SENIOR PROPERTY ADVISOR'
                    button='SUPERAGENT'/>
                </div>
                <div className="see">
                    <button>See more</button>
                </div>
            </div>
        </section>
    );
};
export default AgentsBlock;
