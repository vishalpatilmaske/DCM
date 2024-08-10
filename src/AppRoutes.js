import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
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

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Layout> <Dashboard /></Layout>} />
                <Route path="dashboard" element={<Layout> <Dashboard /></Layout>} />
                <Route path="users" element={<Layout> <Users /> </Layout>} />
                <Route path="profile" element={<Layout> <Profile /> </Layout>} />
                <Route path="documents" element={<Layout> <DocumentsList /> </Layout>} />
                <Route path="documents-create" element={<Layout> <DocumentCreate /> </Layout>} />
                <Route path="documents-view" element={<Layout>  <DocumentView /></Layout>} />
                <Route path="documents-pdf" element={<Layout> <DocumentPdfView />  </Layout>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
