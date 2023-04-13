import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from "./component/Cart";
import Menu from "./component/Menu";
import AboutusComponent from "./component/AboutusComponent";
import ContactComponent from "./component/ContactComponent";
import Error from "./component/Error";
import ShimmerUi from "./component/Shimmer";
//import Instamart from "./component/Instamart";
import Profile from "./component/Profile";
import Contact from "./component/Contact"
/* lazy loading / dynamic import / chuncking  */
/* To generate seperate js file */
const Instamart = lazy(() => import("./component/Instamart"));

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
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        /* element: <Aboutus />, */ /* fundtional component */
        element: <AboutusComponent /> /* class component */,
      },
      {
        path: "/contact",
        element: <Contact />,
        /* element: <ContactComponent /> */
        children: [
          {
            path: "profile",
            element: <Profile />,
            //element: <ProfileComponent /> /* class component */,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:restaurantId/menu",
        element: <Menu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<ShimmerUi />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
