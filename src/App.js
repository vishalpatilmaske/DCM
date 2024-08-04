import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Layout from "./component/dashboard/Layout";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import DocumentList from "./pages/Documents/DocumentsList";
import DocumentView from "./pages/Documents/DocumentView";
import DocumentPdfView from "./pages/Documents/DcoumentPdfView";
import DocumentCreate from "./pages/Documents/DocumentCreate";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" exact element={<Layout><Dashboard /></Layout>} />
        <Route path="/users" exact element={<Layout><Users /></Layout>} />
        <Route path="/profile" exact element={<Layout><Profile /></Layout>} />
        {/* Documents route */}
        <Route path="/documents" exact element={<Layout><DocumentList /></Layout>} />
        <Route path="/documents/create" exact element={<Layout><DocumentCreate /></Layout>} />
        <Route path="/documents/view" exact element={<Layout><DocumentView /></Layout>} />
        <Route path="/documents/pdf" exact element={<Layout><DocumentPdfView /></Layout>} />

        {/*  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
