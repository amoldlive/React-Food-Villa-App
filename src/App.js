import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Aboutus from "./component/Aboutus";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Menu from "./component/Menu";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/restaurant/:restaurantId/menu",
        element:<Menu/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
