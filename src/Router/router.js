import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Component/home';
import config from '../config/config';
import Dashboard from '../Component/dashboard'
import Register from '../Component/register';
import Profile from '../Component/profile';
import EditProfile from '../Component/editprofile';

const RouterComponent = () => {
    return (
    <BrowserRouter>
    <div>
        <Routes>
            <Route path={`${config.baseUrl}`} element = {<Home/>}/>
            <Route path={`${config.baseUrl}dashboard`} element = {<Dashboard/>}/>
            <Route path={`${config.baseUrl}register`} element = {<Register/>}/>
            <Route path={`${config.baseUrl}profile`} element = {<Profile/>}/>
            <Route path={`${config.baseUrl}editprofile`} element = {<EditProfile/>}/>
        </Routes>
    </div>
    </BrowserRouter>
    )
}
export default RouterComponent