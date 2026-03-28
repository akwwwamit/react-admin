import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../components/layouts/LoginLayout";
import AdminLayout from "../components/layouts/AdminLayout";
import Auth from "./Auth";
import Admin from './Admin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      ...Auth
    ],
  },{
    path: "/admin",
    element: <AdminLayout />,
    children: [
      ...Admin
    ],
  }
]);

export default router;