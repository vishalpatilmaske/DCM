import React from "react";
import "../../style/admin/sidebar.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar row">
      <div className="col-4">
        <div>
          <h3 className="py-4">Dashboard</h3>
        </div>
        <div className="sidebar-components">
          <ul className="list-unstyled">
            <li>
              <div className="d-flex align-items-center mb-4">
                <div className="icon me-3">
                  <IoHomeOutline size={23} />
                </div>
                <div className="text">
                  <p className="mb-0">Dashboard</p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <div className="icon me-3">
                  <FaRegUser size={23} />
                </div>
                <div className="text">
                  <p className="mb-0">Users</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
