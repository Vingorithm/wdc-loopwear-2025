import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import StoreLayout from "../layouts/StoreLayout";

import LoginRegister from "../pages/LoginRegister";

import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import StorePage from "../pages/StorePage";
import Articles from "../pages/Articles";
import Profile from "../pages/Profile";
import ListProduct from "../pages/ListProduct";
import DetailProduct from "../pages/DetailProduct";

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>Routes Tidak Ditemukan!</div>,
  },
  {
    // Main Layout -> Navbar Normal
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
    ],
  },
  {
    // Auth Layout -> Ga pake navbar
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginRegister />,
      },
    ],
  },
  {
    // List Layout -> Beda Navbarnya
    element: <StoreLayout />,
    children: [
      {
        path: "/store",
        element: <StorePage />,
      },
      {
        path: "/listproduct",
        element: <ListProduct />,
      },
      {
        path: "/detailproduct",
        element: <DetailProduct />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
