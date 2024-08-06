import "../../style/pages/documentlist.css";
import DocumentListNav from "../../component/documentlist/DocumentListNav";
import DocumentListHeader from "../../component/documentlist/DocumnetListHeader";

const DocumentList = () => {
  return (
    <div className="p-2">
      <DocumentListNav />
      <DocumentListHeader />
    </div>
  );
};

export default DocumentList;
