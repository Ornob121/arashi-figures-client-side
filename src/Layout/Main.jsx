import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-573.2px)]">
        <Outlet></Outlet>
        <ScrollRestoration></ScrollRestoration>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
