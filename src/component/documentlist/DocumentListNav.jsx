import React from "react";
import "../../style/pages/documentlist.css";
import { Link } from "react-router-dom";
const DocumentList = () => {
  return (
    <div>
      {/* Heading of the page */}
      <div className="d-flex justify-content-between mt-5">
        <h2>Document List</h2>

        <Link to={"/documents-create"} className="btn btn-success">
          New Document
        </Link>
      </div>

      <div className="d-flex justify-content-around mt-2 background p-2 rounded">
        <div className="dropdown-center">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Document
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Document 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Document 2
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Document 3
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown-center">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Format Name
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Document 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Document 2
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Document 3
              </a>
            </li>
          </ul>
        </div>
        <div className="filter">
          <button type="button" className="btn btn-success me-3">
            Filter
          </button>
          <button type="button" className="btn btn-success">
            Reset Filter
          </button>
        </div>
        <button type="button" className="btn btn-success">
          Export
        </button>
      </div>
    </div>
  );
};

export default DocumentList;
