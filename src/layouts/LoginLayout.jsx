// import "../assets/plugins/bootstrap/css/bootstrap.css";
// import "../assets/plugins/icons/icons.css";
// import "../assets/plugins/sidebar/sidebar.css";
// import "../assets/css/sidemenu.css";
// import "../assets/css/style.css";
// import "../assets/css/style-dark.css";
// import "../assets/css/colors/color.css";
// import "../assets/css/skin-modes.css";
// import "../assets/css/animate.css";
import logo from "../assets/img/brand/logo-white.png";
import { Outlet } from "react-router-dom";

let LoginLayout = () => {
  return (
    <>
      <div className="my-auto page page-h">
        <div className="my-auto page page-h">
          <div className="main-signin-wrapper error-wrapper">
            <div className="main-card-signin d-md-flex wd-100p">
              <div className="wd-md-50p login d-none d-md-block page-signin-style p-5 text-white">
                <div className="my-auto authentication-pages">
                  <div>
                    <img src={logo} className=" m-0 mb-4" alt="logo" />
                    <h5 className="mb-4">
                      Responsive Modern Dashboard &amp; Admin Template
                    </h5>
                    <p className="mb-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <a href="#" className="btn btn-danger">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
