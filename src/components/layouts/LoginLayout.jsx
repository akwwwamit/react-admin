import { Outlet } from "react-router-dom";
import './LoginLayout.css';

const LoginLayout = () => {
  return (
    <>
        <div className="container-fluid container-box">
            <div className="row h-100">
                <div className="col-md-6 left-side d-none d-md-block">
                    <div className="left-overlay"></div>
                    <div className="left-text">
                        <h2>Welcome Back</h2>
                        <p>Login to continue your journey with us.</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <Outlet />
                </div>

            </div>
        </div>
    </> 
  );
};
export default LoginLayout;