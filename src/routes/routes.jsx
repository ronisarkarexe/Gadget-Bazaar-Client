import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../components/Home/product_details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
]);

export default router;
