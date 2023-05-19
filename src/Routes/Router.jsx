import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/allToys"),
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/allToysLimit"),
      },
      {
        path: "toyDetails/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleToy/${params.id}`),
      },
      {
        path: "addAToy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "logIn",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
