import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Component/login';
import config from '../config/config';
import Dashboard from '../Component/dashboard'
import Register from '../Component/register';
import Profile from '../Component/profile';
import EditProfile from '../Component/editprofile';
import Login from '../Component/login';
import Header from '../directives/header';
import Footer from '../directives/footer';

const RouterComponent = () => {
    return (
    <BrowserRouter>
    <div>
        <Routes>
            <Route path={`${config.baseUrl}login`} element = {<Login/>}/>
            <Route path={`${config.baseUrl}dashboard`} element = {<Dashboard/>}/>
            <Route path={`${config.baseUrl}register`} element = {<Register/>}/>
            <Route path={`${config.baseUrl}profile`} element = {<Profile/>}/>
            <Route path={`${config.baseUrl}editprofile`} element = {<EditProfile/>}/>
            <Route path={`${config.baseUrl}header`} element = {<Header/>}/>
            <Route path={`${config.baseUrl}footer`} element = {<Footer/>}/>
        </Routes>
    </div>
    </BrowserRouter>
    )
}
export default RouterComponent