import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../components/layouts/LoginLayout";

import Auth from "./Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      ...Auth
    ],
  },
]);

export default router;