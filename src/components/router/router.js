import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../login/login'

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={<Login/>} />
                <Route path='/*' element={(
                    <h1 style={{marginTop:300}}> 404 <br/> página no encontrada</h1>
                )} />
            </Routes>
        </Router>
    )
}