import React, { useState } from "react";
import DocumentPending from "./DocumentPending";
import DocumentCompleted from "./DocumentCompleted";
import DocumentTask from "./DocumentTask";
import DocumentDistributed from "./DocumentDistributed";
import DocumentInProcessReport from "./DocumentInProcessReport";
import DocumentPendingFeedBack from "./DocumentPendingFeedBack";
import DocumentDeactivetd from "./DocumentDeactiveted";

const DocumentListHeader = () => {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <div className="container-fluid mt-5 background rounded pb-1 pt-2">
      {/* Navigation tabs */}
      <ul className="nav flex-row">
        {/*  Pending */}
        <li className="nav-item ">
          <a
            className={`nav-link ${activeTab === "pending" ? "active" : ""} `}
            aria-current="page"
            href="#"
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </a>
        </li>
        {/* Completed */}
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "completed" ? "active" : ""}`}
            href="#"
            onClick={() => setActiveTab("completed")}
          >
            Completed
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
        <div className="mb-2 rounded bg-dark p-2">
          <DocumentPending />
        </div>
      )}
      {activeTab === "completed" && (
        <div className="mb-2 rounded bg-dark p-2">
          <DocumentCompleted />
        </div>
      )}
      {activeTab === "deactivetd" && (
        <div className="mb-2 rounded bg-dark p-2">
          <DocumentDeactivetd />
        </div>
      )}
      {activeTab === "task" && (
        <div className="mb-2 rounded bg-dark p-2">
          <DocumentTask />
        </div>
      )}
      {activeTab === "distributed" && (
        <div className="mb-2 rounded bg-dark p-2">
          <DocumentDistributed />
        </div>
      )}
      {activeTab === "in_process_report" && (
        <div className="mb-2 rounded bg-dark p-2">
          <DocumentInProcessReport />
        </div>
      )}
      {activeTab === "pending_feedback_report" && (
        <div className="mb-2 rounded bg-dark p-2">
          <DocumentPendingFeedBack />
        </div>
      )}
    </div>
  );
};

export default DocumentListHeader;
