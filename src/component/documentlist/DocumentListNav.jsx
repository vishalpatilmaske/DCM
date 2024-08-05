import React, { useState } from "react";
// Ensure Bootstrap CSS is imported

const DocumentListNav = () => {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <div className="container-fluid">
      {/* Navigation tabs */}
      <ul className="nav nav-tabs flex-row ">
        {/*  Pending */}
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "pending" ? "active" : ""}`}
            aria-current="page"
            href="#"
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </a>
        </li>
        {/* Conpleted */}
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "completed" ? "active" : ""}`}
            href="#"
            onClick={() => setActiveTab("completed")}
          >
            Conpleted
          </a>
        </li>
        {/* Deactiveted */}
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "deactivetd" ? "active" : ""}`}
            href="#"
            onClick={() => setActiveTab("deactivetd")}
          >
            Deactivated
          </a>
        </li>
        {/* Task  */}
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "task" ? "active" : ""} `}
            href="#"
            onClick={() => setActiveTab("task")}
          >
            Task
          </a>
        </li>
        {/* Distributed */}
        <li className="nav-item">
          <a
            className={`nav-link ${
              activeTab === "distributed" ? "active" : ""
            } `}
            href="#"
            onClick={() => setActiveTab("distributed")}
          >
            Distributed
          </a>
        </li>
        {/* In Process Report */}
        <li className="nav-item">
          <a
            className={`nav-link ${
              activeTab === "in_process_report" ? "active" : ""
            } `}
            href="#"
            onClick={() => setActiveTab("in_process_report")}
          >
            In Process Report
          </a>
        </li>
        {/* Pending Feedback Report */}
        <li className="nav-item">
          <a
            className={`nav-link ${
              activeTab === "pending_feedback_report" ? "active" : ""
            } `}
            href="#"
            onClick={() => setActiveTab("pending_feedback_report")}
          >
            Pending Feedback Report
          </a>
        </li>
      </ul>
      {/* Conditionally render the card based on the active tab */}
      {activeTab === "pending" && (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Active Tab Description</h5>
            <p className="card-text">
              Description for the Active tab. This provides additional
              information related to the first tab.
            </p>
          </div>
        </div>
      )}
      {activeTab === "completed" && (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Link 1 Description</h5>
            <p className="card-text">
              Description for Link 1. This provides additional information
              related to the first link tab.
            </p>
          </div>
        </div>
      )}
      {activeTab === "deactivetd" && (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Link 2 Description</h5>
            <p className="card-text">
              Description for Link 2. This provides additional information
              related to the second link tab.
            </p>
          </div>
        </div>
      )}
      {activeTab === "task" && (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Disabled Tab Description</h5>
            <p className="card-text">
              Description for the Disabled tab. This provides additional
              information related to the disabled tab.
            </p>
          </div>
        </div>
      )}
      {activeTab === "distributed" && (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Disabled Tab Description</h5>
            <p className="card-text">
              Description for the Disabled tab. This provides additional
              information related to the disabled tab.
            </p>
          </div>
        </div>
      )}
      {activeTab === "in_process_report" && (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Disabled Tab Description</h5>
            <p className="card-text">
              Description for the Disabled tab. This provides additional
              information related to the disabled tab.
            </p>
          </div>
        </div>
      )}
      {activeTab === "pending_feedback_report" && (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Disabled Tab Description</h5>
            <p className="card-text">
              Description for the Disabled tab. This provides additional
              information related to the disabled tab.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentListNav;
