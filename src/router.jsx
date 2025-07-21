import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import App from "./App";
import ProductListPage from "./pages/ProductListPage/ProductListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/women", element: <ProductListPage /> },
    ],
  },
]);

export default router;
