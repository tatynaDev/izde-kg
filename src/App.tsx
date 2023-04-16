import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import BuyPage from "./pages/BuyPage";
import RentPage from "./pages/RentPage";
import AgentsPage from "./pages/AgentsPage";
import ReviewPage from "./pages/ReviewPage/ReviewHero";
import LogIn from "./pages/MainPage/LogIn";
import UserProfile from "./pages/MainPage/UserProfile";
import AddPropertyDetail from "./pages/MainPage/AddPropertyDetail";
import AgentDetail from "./pages/AgentsPage/AgentsDetail/agentsDetail";
import ReviewIndex from "./pages/ReviewPage/ReviewIndex";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/buy'} element={<BuyPage/>}/>
        <Route path={'/rent'} element={<RentPage/>}/>
        <Route path={'/agents'} element={<AgentsPage/>}/>
        <Route path={'/review'} element={<ReviewIndex/>}/>
        <Route path={'/logIn'} element={<LogIn/>}/>
        <Route path={'/userProfile'} element={<UserProfile/>}/>
        <Route path={"/AddPropertyDetail"} element={<AddPropertyDetail/>}/>
        <Route path={'/agentDetail'} element={<AgentDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
