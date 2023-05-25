import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blogs from "../Pages/Blogs/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import ALlToys from "../Pages/AllToys/ALlToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Update from "../Pages/Update/Update";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/addtoy',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: '/alltoys',
          element: <ALlToys></ALlToys>
        },
        {
          path: '/toydetails/:id',
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
        },
        {
          path: '/mytoys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: '/updatetoy/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;