import "../../style/pages/documentlist.css";
import DocumentListNav from "../../component/documentlist/DocumnetListNav";
import DocumentListHeader from "../../component/documentlist/DocumentListHeader";

const DocumentList = () => {
  return (
    <div className="p-2">
      <DocumentListHeader />
      <DocumentListNav />
    </div>
  );
};

export default DocumentList;
