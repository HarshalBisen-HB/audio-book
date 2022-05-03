import React from "react";
import Home from "./components/Home";
import Player from "./components/Player";
import LandingPage from "./components/LandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = ()=>{
    return(
        <BrowserRouter>

        <Routes>
            {/* <Route path="/" element={<LandingPage />} exact /> */}
            <Route path="/home" element={<Home />} exact />
            <Route path="/play" element={<Player />} exact />
        </Routes>
       
        </BrowserRouter>
        
    );
}

export default App;