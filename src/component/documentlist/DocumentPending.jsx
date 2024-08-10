import React from "react";
import Documents from "./Documents";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { MdCompare, MdOutlineDownload, MdReviews } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

const DocumentPending = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h5>List of Documents </h5>
        <form class="d-flex mb-1" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-info" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* Navigation tabs */}
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Doc No.</th>
            <th scope="col">Title</th>
            <th scope="col">Department</th>
            <th scope="col">Format Name</th>
            <th scope="col">Version No</th>
            <th scope="col">Prepade By</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            new Array(10).fill(0).map((ar, index) => {
              return (
                <tr>
                  <th scope="row">SOP/00{index + 1}</th>
                  <td>SOP-00{index + 1}</td>
                  <td>QA</td>
                  <td>SOP</td>
                  <td>01</td>
                  <td>GANA</td>
                  <td>Created</td>
                  <td>
                    {/* <Link to="/documents-view" className="text-dark">
                      <IoEyeOutline />
                    </Link>
                    <Link to="/documents-pdf">
                      <IoEyeOutline className="view" />
                    </Link>
                    <MdOutlineDownload /> */}
                    <Link to={`/update/1`} className="btn btn-sm btn-warning"> <FaPencilAlt></FaPencilAlt></Link>  &nbsp;
                    <Link to={`/revise/1`} className="btn btn-sm btn-secondary text-white"><MdReviews/></Link>  &nbsp;
                    <Link to={`/compare/1`} className="btn btn-sm btn-info text-white"> <MdCompare/></Link>
                    &nbsp;


                    <button className="btn btn-sm btn-success text-white"> <MdOutlineDownload /></button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  );
};

export default DocumentPending;
