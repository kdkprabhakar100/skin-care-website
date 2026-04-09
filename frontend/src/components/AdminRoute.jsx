// components/AdminRoute.jsx
import { Navigate } from "react-router-dom";
import  { getUser } from "../Utils/auth";

const AdminRoute = ({ children }) => {
  const user = getUser();

  if (!user || user.role !== "admin") {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default AdminRoute;