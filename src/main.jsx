import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import Übersicht from "./pages/Übersicht.";
import Jack from "./pages/Jack";
import Isi from "./pages/Isi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Übersicht /> },
      { path: "jack", element: <Jack /> },
      { path: "isi", element: <Isi /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);