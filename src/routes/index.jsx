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
import DetailArticles from "../pages/DetailArticles";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import HistoryOrder from "../pages/HistoryOrder";
import ListService from "../pages/ListService";

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
      {
        path: "/detailarticles",
        element: <DetailArticles />,
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
        path: "/productlist",
        element: <ListProduct />,
      },
      {
        path: "/servicelist",
        element: <ListService />,
      },
      {
        path: "/detailproduct",
        element: <DetailProduct />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/myshop",
        element: <Shop isUser='true' />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/historyorder",
        element: <HistoryOrder />,
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
