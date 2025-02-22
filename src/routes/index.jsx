import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "../pages/HomePage";
import LoginRegister from "../pages/LoginRegister";
import About from "../pages/AboutUs";
import ListProduct from "../pages/ListProduct";

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>Routes Tidak Ditemukan!</div>,
  },
  {
    // Main Layout
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/list",
        element: <ListProduct />,
      },
    ],
  },
  {
    // Main Layout
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginRegister />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <>
      <Toaster position="top-center" richColors />
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
