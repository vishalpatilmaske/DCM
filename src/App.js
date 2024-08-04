import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import DocumentsList from "./pages/Documents/DocumentsList";
import DocumentView from "./pages/Documents/DocumentView";
import DocumentPdfView from "./pages/Documents/DcoumentPdfView";
import DocumentCreate from "./pages/Documents/DocumentCreate";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="profile" element={<Profile />} />
          <Route path="documents" element={<DocumentsList />} />
          <Route path="documents-create" element={<DocumentCreate />} />
          <Route path="documents-view" element={<DocumentView />} />
          <Route path="documents-pdf" element={<DocumentPdfView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
