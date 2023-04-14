import React, {useState} from 'react';

import MainHome from "./Mainhome";
import EasyHome from "./EasyHome";
import ExploreHome from "./ExploreHome";
import GrandHome from "./GrandHome";
import MainAgent from "./MainAgent/MainAgent";
import SliderAgent from "./SliderAgent/SliderAgent";
import MainList from "./MainList/MainList";
const MainPage = () => {

    return (
        <>
            <MainHome/>
            <EasyHome/>
            <ExploreHome/>
            <GrandHome/>
            <MainAgent/>
            <SliderAgent/>
            <MainList/>
        </>
    );
};

export default MainPage;