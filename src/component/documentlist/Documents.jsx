import React from "react";

const Documents = () => {
  return (
    <div className="container-fluid  background rounded-bottom pb-1">
      {/* Navigation tabs */}
      <ul className="nav flex-row document-nav justify-content-between">
        {/*  Pending */}
        <li className="nav-item">
          <a className={`nav-link `} aria-current="page" href="#">
            doc 1
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link `} aria-current="page" href="#">
            data
          </a>
        </li>{" "}
        <li className="nav-item">
          <a className={`nav-link `} aria-current="page" href="#">
            computer
          </a>
        </li>{" "}
        <li className="nav-item">
          <a className={`nav-link `} aria-current="page" href="#">
            random
          </a>
        </li>{" "}
        <li className="nav-item">
          <a className={`nav-link `} aria-current="page" href="#">
            01
          </a>
        </li>{" "}
        <li className="nav-item">
          <a className={`nav-link `} aria-current="page" href="#">
            jon
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link `} aria-current="page" href="#">
            prepa
          </a>
        </li>{" "}
        <li className="nav-item">
          <a className={`nav-link `} aria-current="page" href="#">
            Action
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Documents;
