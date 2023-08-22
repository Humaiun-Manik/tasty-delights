import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Event from "../../pages/event/Event";
import Contact from "../../pages/contact/Contact";
import Reservation from "../../pages/reservation/Reservation";
import Menu from "../../pages/menu/Menu";
import ItemDetail from "../../pages/itemDetail/ItemDetail";
import NotFound from "../../pages/notFound/NotFound";
import LoginLayout from "../../layout/LogInLayOut";
import Login from "../../pages/login/login/Login";
import SignUp from "../../pages/login/signup/SignUp";
import ForgotPassword from "../../pages/login/forgotPassword/ForgotPassword";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="home" />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "forgot",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "home",
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
        loader: () => fetch("/items.json"),
      },
      {
        path: "item/:id",
        element: (
          <PrivateRoute>
            <ItemDetail />
          </PrivateRoute>
        ),
        loader: () => fetch("/items.json"),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
