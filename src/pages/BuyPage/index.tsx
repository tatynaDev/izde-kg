import React from 'react';
import './index.scss'
import Filter from "../../UI/Filter";
import BuyHome from "./BuyHome";
import Pagination from "../../UI/Pagination";


const BuyPage = () => {
    return (
        <div className='container'>
            <Filter/>
            <section className='houses'>
               <div>
                   <BuyHome text='Apartment' title='The Grand Estate' location='Bishkek' price={'$ 100 000'}/>
                   <BuyHome text='Apartment' title='The Grand Estate' location='Bishkek' price={'$ 100 000'}/>
                   <BuyHome text='Apartment' title='The Grand Estate' location='Bishkek' price={'$ 100 000'}/>
                   <BuyHome text='Apartment' title='The Grand Estate' location='Bishkek' price={'$ 100 000'}/>
                   <BuyHome text='Apartment' title='The Grand Estate' location='Bishkek' price={'$ 100 000'}/>
                   <BuyHome text='Apartment' title='The Grand Estate' location='Bishkek' price={'$ 100 000'}/>
                   <BuyHome text='Apartment' title='The Grand Estate' location='Bishkek' price={'$ 100 000'}/>
                   <BuyHome text='Apartment' title='The Grand Estate' location='Bishkek' price={'$ 100 000'}/>
               </div>
                <div className='houses--left'>
                    <h2>Popular Searches</h2>
                    <ul>
                        <li>Properties for sale</li>
                        <li>Apartments for sale</li>
                        <li>Villas for sale</li>
                        <li>Townhouses for sale</li>
                        <li>Compounds for sale</li>
                        <li>Duplexes for sale</li>
                        <li>Land for sale</li>
                        <li>Hotel Apartments for sale</li>
                    </ul>
                </div>
            </section>
            <Pagination/>
        </div>
    );
};

export default BuyPage;