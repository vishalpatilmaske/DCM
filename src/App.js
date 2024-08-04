import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashboardLayout from "./pages/DashboardLayout";
import Users from "./component/dashboard/Users";
import Dashboard from "./component/dashboard/Dashboard";
import Profile from "./component/dashboard/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard-layout" element={<DashboardLayout />}>
          <Route path="users" element={<Users />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
