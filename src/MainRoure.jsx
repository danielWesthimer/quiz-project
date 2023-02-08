

import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
// import Login from './components/Login';
import Home from './components/Home';
import Game from './components/Game';



function MainRoure() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={<Login/>} /> */}
                <Route path='/' element={<Home/>} />
                <Route path='/game/:categoryName' element={<Game/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default MainRoure;