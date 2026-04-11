import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getToken, refreshToken } from "../library/Library";

const AuthGuard = ({ children }) => {
  const location = useLocation();
  let navigate= useNavigate();

  const token = localStorage.getItem("userInfo");

  

  let checkUserToken=()=>{
    let token = getToken();
    fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + token.accessToken,
    }}).then(res => res.json())
    .then((data)=>{
        if (!data?.id) {
           refreshToken();
        }
    });
  }

  useEffect(()=>{
    checkUserToken();
      if (!token) {
          navigate('/');
      }
  },[]);

  return <Outlet />;
};

export default AuthGuard;