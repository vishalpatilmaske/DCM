import React from "react";
import Documents from "./Documents";
const DocumentPending = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h5>List of Documents </h5>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="container-fluid mt-2 background rounded-top pb-1">
        {/* Navigation tabs */}
        <ul className="nav flex-row justify-content-between">
          {/*  Pending */}
          <li className="nav-item color">
            <a className={`nav-link `} aria-current="page" href="#">
              Doc No.
            </a>
          </li>
          <li className="nav-item color">
            <a className={`nav-link `} aria-current="page" href="#">
              Title
            </a>
          </li>{" "}
          <li className="nav-item color">
            <a className={`nav-link `} aria-current="page" href="#">
              Department
            </a>
          </li>{" "}
          <li className="nav-item color">
            <a className={`nav-link `} aria-current="page" href="#">
              Format Name
            </a>
          </li>{" "}
          <li className="nav-item color">
            <a className={`nav-link `} aria-current="page" href="#">
              Version No
            </a>
          </li>{" "}
          <li className="nav-item color">
            <a className={`nav-link `} aria-current="page" href="#">
              Prepade By
            </a>
          </li>
          <li className="nav-item color">
            <a className={`nav-link `} aria-current="page" href="#">
              Status
            </a>
          </li>{" "}
          <li className="nav-item color">
            <a className={`nav-link `} aria-current="page" href="#">
              Action
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <Documents />
    </div>
  );
};

export default DocumentPending;
