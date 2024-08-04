import { Outlet } from "react-router-dom";
import Navbar from "../component/dashboard/Navbar.jsx";
import Sidebar from "../component/dashboard/Sidebar.jsx";
import "../style/pages/dashboard.css";

const DashboardLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-2">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-10 container">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
