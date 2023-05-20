import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateMyToys from "../Pages/Update/UpdateMyToys";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://arashi-figures-server.vercel.app/allToys"),
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://arashi-figures-server.vercel.app/allToysLimit"),
      },
      {
        path: "toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://arashi-figures-server.vercel.app/singleToy/${params.id}`
          ),
      },
      {
        path: "addAToy",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "updateMyToys/:id",
        element: (
          <PrivateRoute>
            <UpdateMyToys></UpdateMyToys>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://arashi-figures-server.vercel.app/singleToy/${params.id}`
          ),
      },
      {
        path: "logIn",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
