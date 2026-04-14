import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { BrowserRouter, createBrowserRouter, Routes } from "react-router";
import Mainlayout from "./layout/Mainlayout.jsx";
import Home from "./pages/home/Home.jsx";
import Timeline from "./pages/timeline/Timeline.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "timeline",
        Component: Timeline,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
