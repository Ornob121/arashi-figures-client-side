import { useContext, useState } from "react";
import logo from "../../../public/image/globalfreakslogo1-svg.jpg";
import googleLogo from "../../../public/icons/google-white.png";
import gitHubLogo from "../../../public/icons/whitebg-github.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { handleLogInUser, handleGoogleLogin, handleGitHubLogin } =
    useContext(AuthContext);

  useTitle("| Login");

  const [viewPass, setViewPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(location);

  //   ! Google Log in
  const googleLogIn = () => {
    handleGoogleLogin()
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        setError("");
        navigate(from, { replace: true });
        toast("Login Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const gitHubLogIn = () => {
    handleGitHubLogin()
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        setError("");
        navigate(from, { replace: true });
        toast("Login Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    handleLogInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        navigate(from, { replace: true });
        toast("Login Successful");
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message.includes("auth/user-not-found")) {
          setError("User Not found please sign up");
        }
      });
  };

  return (
    <div className="w-[500px] h-auto mx-auto border my-16 border-[whitesmoke] shadow-xl rounded-xl">
      <img className="pt-12 mx-auto" src={logo} alt="" />
      <h3 className="text-2xl text-green-700 font-semibold pt-8 text-center">
        Welcome
      </h3>
      <p className="text-xl font-medium text-green-700 text-center pt-2 capitalize">
        Login to continue to Arashi Figures
      </p>
      <p className="text-xl text-center text-red-500">{error}</p>
      <form onSubmit={handleLogin}>
        <div className="mx-auto w-[80%] pt-7">
          <input
            type="email"
            name="email"
            id="email"
            required
            className="border border-[#fef7f7] w-full bg-gray-100 py-3 px-4 text-lg rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div className="mx-auto w-[80%] pt-4">
          <input
            type={`${viewPass ? "text" : "password"}`}
            name="password"
            required
            className="border border-[#fef7f7] w-full bg-gray-100 py-3 px-4 text-lg rounded-md"
            placeholder="Your Password"
          />
          {viewPass ? (
            <FontAwesomeIcon
              onClick={() => setViewPass(!viewPass)}
              className="relative -top-10  left-[365px] text-2xl w-8 cursor-pointer text-blue-300"
              icon={faEye}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setViewPass(!viewPass)}
              className="relative -top-10 left-[365px] text-2xl w-8 cursor-pointer text-blue-300"
              icon={faEyeSlash}
            />
          )}
        </div>
        <div className=" w-[80%] mx-auto">
          <button
            className="btn-block bg-green-700 font-semibold text-lg rounded py-3 text-white"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className=" w-[80%] mx-auto mt-4">
          <p className="capitalize text-lg">
            Don't have an account?{" "}
            <Link to="/signUp" className=" btn-link">
              SignUp
            </Link>
          </p>
        </div>
      </form>
      <div className="grid grid-cols-5 w-[80%] mx-auto py-8 items-center text-center">
        <hr className="border col-span-2" />
        <span className="text-xl font-bold">Or</span>
        <hr className="border col-span-2" />
      </div>
      <div
        className="mx-auto w-[80%] py-3 px-4 h-14 mb-4 border border-gray-300 pb-6 flex items-center gap-4 rounded-md cursor-pointer"
        onClick={googleLogIn}
      >
        <img
          src={googleLogo}
          className="w-10 mt-4 h-10"
          alt="Google Icon For SignUp"
        />
        <span className="mt-3 text-xl font-semibold">Login With Google</span>
      </div>
      <div
        onClick={gitHubLogIn}
        className="mx-auto w-[80%] py-3 px-4 h-14 mb-16 border border-gray-300 pb-6 flex items-center gap-4 rounded-md cursor-pointer"
      >
        <img
          src={gitHubLogo}
          className="w-10 mt-4 h-10"
          alt="GitHub Icon for sign up"
        />
        <span className="mt-3 text-xl font-semibold">Login With GitHub</span>
      </div>
    </div>
  );
};

export default Login;
