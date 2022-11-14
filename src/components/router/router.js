import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../login/login'

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/home' element={<Home/>} />
            </Routes>
        </Router>
    )
}

function Home() {
    return (
        <div>
            <h2 style={{marginTop:300}}> Home </h2>
        </div>
    )
}