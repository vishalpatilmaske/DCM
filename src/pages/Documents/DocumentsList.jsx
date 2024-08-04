import "../../style/pages/documentlist.css";
import DocumentListNav from "../../component/documentlist/DocumentListNav";

const DocumentList = () => {
  return (
    <div>
      {/* Heading of the page */}
      <div className="d-flex justify-content-between mt-5 ">
        <h2>Document List</h2>

        <button type="button" class="btn btn-success ">
          New Document
        </button>
      </div>

      <div className="d-flex justify-content-around mt-2 background p-2 rounded">
        <div class="dropdown-center">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Document
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Document 1
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Document 2
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Document 3
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown-center">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Format Name
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Document 1
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Document 2
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Document 3
              </a>
            </li>
          </ul>
        </div>
        <div className="filter">
          <button type="button" class="btn btn-success me-3">
            Filter
          </button>
          <button type="button" class="btn btn-success">
            Rest Filter
          </button>
        </div>
        <button type="button" class="btn btn-success">
          Export
        </button>
      </div>

      {/* documentlist */}
      <DocumentListNav />
    </div>
  );
};

export default DocumentList;
