import HomePage from './Pages/home-page.js';
import NaplesPage from './Pages/naples.js';
import FtMyersPage from './Pages/ft-myers';
import BakerParkPage from './Pages/baker-park';

import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
{/*App.js being used to establish page routes.*/ }

function App() {

   








    return (



        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/naples" element={<NaplesPage />} />
                    <Route path="/ft-myers" element={<FtMyersPage />} />
                    <Route path="/naples/baker-park" element={<BakerParkPage />} />

                </Routes>
            </BrowserRouter>

            
                
            </div>
  );
}

export default App;
