import React from 'react';
import {BrowserRouter, Navigate} from "react-router-dom";
import {Routes, Route, NavLink} from "react-router-dom";

import logo from './../assets/react.svg'

import {ShoppingPage} from "../02-component-patterns/pages";

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo"/>

                    <ul>
                        <li>
                            <NavLink to="/">Shopping Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users">Users</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="/about" element={<h1>About Page</h1>}/>
                    <Route path="/users" element={<h1>User Page</h1>}/>
                    <Route path="/" element={<ShoppingPage/>}/>

                    <Route path="/*" element={<Navigate to='/home' replace/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Navigation;