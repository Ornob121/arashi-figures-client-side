import { useContext } from "react";
import logo from "../../../../public/image/globalfreakslogo1-svg.jpg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Log Out Successful");
      })
      .catch();
  };
  const nav1 = (
    <>
      <li className="font-semibold text-xl">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="font-semibold text-xl">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to="/allToys"
        >
          All Toys
        </NavLink>
      </li>
      <li className="font-semibold text-xl">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to="/myToys"
        >
          My Toys
        </NavLink>
      </li>
      <li className="font-semibold text-xl">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to="/addAToy"
        >
          Add A Toy
        </NavLink>
      </li>
      <li className="font-semibold text-xl">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  const nav2 = (
    <>
      <li className="font-semibold text-xl">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="font-semibold text-xl">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to="/allToys"
        >
          All Toys
        </NavLink>
      </li>
      <li className="font-semibold text-xl">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  const logUser = (
    <>
      <li onClick={() => navigate("/login")} className="btn btn-outline">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600" : "")}
          to="/login"
        >
          Login
        </NavLink>
      </li>
    </>
  );

  const loggedUser = (
    <>
      <li>
        <img
          title={user?.displayName}
          src={user?.photoURL || "https://i.ibb.co/Mg3s53G/user.jpg"}
          className="w-12 h-12 rounded-full mr-6 cursor-pointer"
          alt=""
        />
      </li>
      <li>
        <Link onClick={handleLogOut} className="btn btn-outline">
          LogOut
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-black text-white"
          >
            {nav1}
          </ul>
        </div>
        <Link className="flex items-center gap-2" to="/">
          <img src={logo} className="h-20" alt="" />
          <span className="text-green-800 text-3xl font-bold">
            Arashi Figures
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {user ? (
          <ul className="menu menu-horizontal px-3">{nav1}</ul>
        ) : (
          <ul className="menu menu-horizontal px-3">{nav2}</ul>
        )}
      </div>
      {user ? (
        <ul className="navbar-end">{loggedUser}</ul>
      ) : (
        <ul className="navbar-end">{logUser}</ul>
      )}
    </div>
  );
};

export default NavBar;
