import Navbar from "../component/dashboard/Navbar.jsx";
import Sidebar from "../component/dashboard/Sidebar.jsx";
import "../style/pages/dashboard.css";

const Dashboard = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
