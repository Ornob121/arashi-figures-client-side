import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (user) {
    return children;
  }

  if (loading) {
    return (
      <div>
        <progress className="progress w-56"></progress>
        <br />
        <progress className="progress w-56"></progress>
        <br />
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
