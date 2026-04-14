import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/home/Home";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import Errorpage from "../pages/errorpage/Errorpage";
import Frienddetails from "../pages/frienddetails/Frienddetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/stats",
        Component: Stats,
      },
      {
        path: "/frienddetails/:id",
        Component: Frienddetails,
        // loader: () => fetch("/data.json"),
      }
    ],
    errorElement: <Errorpage/>,
  },
]);