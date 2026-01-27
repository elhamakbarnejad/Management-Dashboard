import DashboardLayout from "./components/layouts/DashboardLayout";
import Home from "./pages/Home/page";
import Products from "./pages/Products/page";
import Users from "./pages/Users/page";
import ProductDetails from "./pages/ProductDetails/page";
import UsersDetails from "./pages/UsersDetails/page";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productID",
        element: <ProductDetails />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:userID",
        element: <UsersDetails />,
      },
    ],
  },
]);
export default router;
