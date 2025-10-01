import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Übersicht from "./pages/Übersicht.jsx";
import Isi from "./pages/Isi.jsx";
import JackDashboard from "./pages/JackDashboard.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/übersicht" element={<Übersicht />} />
      <Route path="/jack" element={<JackDashboard />} />
      <Route path="/isi" element={<Isi />} />
    </Routes>
  </HashRouter>
);