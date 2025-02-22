import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import ListLayout from "../layouts/ListLayout";
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
    // Main Layout -> Navbar Normal
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
    element: <AuthLayout />,
    children: [
      {
        path: "/list",
        element: <ListProduct />,
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
