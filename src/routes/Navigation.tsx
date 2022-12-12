import {Suspense} from 'react';
import {BrowserRouter, Navigate} from "react-router-dom";
import {Routes, Route, NavLink} from "react-router-dom";

import logo from './../assets/react.svg'

import {routes} from "./routes";

const Navigation = () => {
    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React logo"/>

                        <ul>
                            {
                                routes.map(({to, name}) => (
                                    <li key={to}>
                                        <NavLink to={to}>{name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>


                    <Routes>
                        {
                            routes.map(({path, Component}) => (
                                <Route key={path} path={path} element={<Component/>}/>
                            ))
                        }
                        <Route path="/*" element={<Navigate to='/lazy1' replace/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};

export default Navigation;