import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Removed ProtectedRoute
    children: [
      { path: "Home", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "product/:id", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  {
    path: "/auth",
    element: <Layout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Register /> },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
