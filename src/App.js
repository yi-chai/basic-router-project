import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./modules/Home";
import Products from "./modules/Products";
import RootLayout from "./modules/Root";
import ErrorPage from "./modules/Error";
import ProductDetails from "./modules/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // alternative // path: ""
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <ProductDetails /> },
    ],
  },
  {
    path: "/admin",
    element: <></>,
    children: [],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
