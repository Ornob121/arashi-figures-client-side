import logo from "../../../../public/image/globalfreakslogo1-svg.jpg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const nav = (
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
    </>
  );
  const logUser = (
    <>
      <li className="btn btn-outline">
        <NavLink
          className={({ isActive }) => (isActive ? "btn-success" : "")}
          to="/login"
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            {nav}
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
        <ul className="menu menu-horizontal px-3">{nav}</ul>
      </div>
      <ul className="navbar-end">{logUser}</ul>
    </div>
  );
};

export default NavBar;
