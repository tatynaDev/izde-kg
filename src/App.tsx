import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import BuyPage from "./pages/BuyPage";
import RentPage from "./pages/RentPage";
import AgentsPage from "./pages/AgentsPage";
import ReviewPage from "./pages/ReviewPage";
import AgentDetail from "./pages/AgentsPage/AgentsDetail/agentsDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/buy'} element={<BuyPage/>}/>
        <Route path={'/rent'} element={<RentPage/>}/>
        <Route path={'/agents'} element={<AgentsPage/>}/>
        <Route path={'/review'} element={<ReviewPage/>}/>
        <Route path={'/agentDetail'} element={<AgentDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
