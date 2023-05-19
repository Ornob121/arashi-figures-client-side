import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-573.2px)]">
        <Outlet></Outlet>
        <ScrollRestoration></ScrollRestoration>
        <ToastContainer></ToastContainer>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
