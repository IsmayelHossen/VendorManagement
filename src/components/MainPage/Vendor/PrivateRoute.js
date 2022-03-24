import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  const [isLogged, setisLogged] = useState(true);
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
