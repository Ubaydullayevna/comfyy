// rrd
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages and layoutes
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

// components
import ErrorElement from "./components/ErrorElement";

import { loader as landingLoader } from "./pages/Landing";
import {loader as singleLoader} from './pages/SingleProduct'
import {loader as productsLoader} from './pages/Products'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
          errorElement: <ErrorElement />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "products",
          element: <Products />,
          errorElement: <ErrorElement />,
          loader: productsLoader,
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          loader: singleLoader,
          errorElement: <ErrorElement />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
