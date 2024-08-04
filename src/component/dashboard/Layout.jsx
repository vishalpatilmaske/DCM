// src/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar'
import "../../style/pages/dashboard.css";

const Layout = ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10 mt-2 ">
                    <Navbar />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
