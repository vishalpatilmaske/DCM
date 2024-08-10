import React from "react";
import "../../style/pages/documentcreate.css";
import { CgAsterisk } from "react-icons/cg";
import { CKEditor } from "ckeditor4-react";
import Editor from "../../component/Editor";

const DocumentCreate = () => {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-offset="0"
      data-bs-smooth-scroll="true"
      className="scrollspy-example h-100"
      tabIndex="0"
    >
      <div>
        <h2 className="py-3">Document Preparer</h2>
      </div>
      <div className="create-doccument-container border-top border-info border-3">
        <form className="row g-3 px-3 pb-3 mt-3 ">
          <div className="col-md-6">
            <label htmlFor="selectProduct" className="form-label">
              Product
            </label>
            <select id="selectProduct" className="form-select">
              <option defaultValue>Select Product</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="selectProcess" className="form-label">
              Select Process
            </label>
            <select id="selectProcess" className="form-select">
              <option defaultValue>Select Process</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="inputTitle" className="form-label ">
              Title
              <sup>
                <CgAsterisk className="asterisk" />
              </sup>
            </label>
            <input type="text" className="form-control" id="inputTitle" />
          </div>
          <div className="col-md-4">
            <label htmlFor="currentRevisonNo" className="form-label">
              Current Rivision No
            </label>
            <input type="text" className="form-control" id="currentRevisonNo" />
          </div>
          <div className="col-md-4">
            <label htmlFor="documentNo" className="form-label">
              Document No{" "}
              <sup>
                <CgAsterisk className="asterisk" />
              </sup>
            </label>
            <input type="text" className="form-control" id="documentNo" />
          </div>
          <div className="col-md-4">
            <label htmlFor="ccNo" className="form-label">
              Cc No
            </label>
            <input type="text" className="form-control" id="ccNo" />
          </div>
          <div className="col-md-4">
            <label htmlFor="formateName" className="form-label">
              Formate Name{" "}
              <sup>
                <CgAsterisk className="asterisk" />
              </sup>
            </label>
            <select id="formateName" className="form-select">
              <option defaultValue>Select Formant</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="selectRefDoc" className="form-label">
              Ref. Documnet
            </label>
            <select id="selectRefDoc" className="form-select">
              <option defaultValue>Select Ref Documnet</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputHeader" className="form-label">
              Header Description
            </label>
            <input type="text" className="form-control" id="inputHeader" />
          </div>
          <div className="col-12 d-flex justify-content-between">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Is Sub Document
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Has Review Date
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Has Training
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Is Parent SOP
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Has Coustomer Signature
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="formateName" className="form-label">
              Print Formate
            </label>
            <select id="formateName" className="form-select">
              <option defaultValue>Select Formant</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="uploadDocument" className="form-label">
              Upload Document File
            </label>
            <input type="file" className="form-control" id="uploadDocument" />
          </div>
          <div className="col-md-4">
            <label htmlFor="uploadDocument" className="form-label">
              Upload Docx File
            </label>
            <input type="file" className="form-control" id="uploadDocument" />
          </div>
          <div className="col-md-12">
            <Editor />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentCreate;
