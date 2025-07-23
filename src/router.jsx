import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ProductListPage from "./pages/ProductListPage/ProductListPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <App /> },           // Home Page
      { path: "/shop", element: <App /> },       // Shop Page (use actual Shop component)
      { path: "/mens", element: <ProductListPage /> },    // Mens
      { path: "/womens", element: <ProductListPage /> },  // Womens
      { path: "/kids", element: <ProductListPage /> },    // Kids
    ],
  },
]);

export default router;
