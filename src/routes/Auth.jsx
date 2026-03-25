import Login from "../components/auth/Login";
import ForgotPassword from "../components/auth/ForgotPassword";
import Register from '../components/auth/Register';
const Auth = [
  {
  path: "/",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default Auth;