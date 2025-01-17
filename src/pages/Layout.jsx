// src/Layout.js
import React from "react";
import Sidebar from "../component/dashboard/Sidebar";
import Navbar from "../component/dashboard/Navbar";
import "../style/pages/dashboard.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10 mt-2 ">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
