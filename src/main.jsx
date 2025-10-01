import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

import Übersicht from "./pages/Übersicht.jsx";
import Isi from "./pages/Isi.jsx";
import JackDashboard from "./pages/JackDashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path= "/übersicht" element={<Übersicht />} />
      <Route path="/jack" element={<JackDashboard />} />
      <Route path="/isi" element={<Isi />} />
    </Routes>
  </BrowserRouter>
);