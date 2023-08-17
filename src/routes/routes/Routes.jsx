import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Event from "../../pages/event/Event";
import Contact from "../../pages/contact/Contact";
import Reservation from "../../pages/reservation/Reservation";
import Menu from "../../pages/menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "event",
        element: <Event />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: async () => fetch("items.json"),
      },
    ],
  },
]);

export default router;
