import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const location = useLocation();
  let navigate= useNavigate();
  // Check login (you can use token, context, redux, etc.)

  const token = localStorage.getItem("userInfo");
 useEffect(()=>{
     if (!token) {
        navigate('/');
     }
 },[]);
 

  return <Outlet />;
};

export default AuthGuard;