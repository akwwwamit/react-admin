import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

let Login=()=>{
    return (
        <Fragment>
            <Helmet>
                 <title>Sign In</title>
            </Helmet>
            <div className="login-card text-white">

                <h3 className="mb-4 text-center">Sign In</h3>

                <form>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" placeholder="Email"/>
                        <label>Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" placeholder="Password"/>
                        <label>Password</label>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                        <div>
                            <input type="checkbox" id="rememberMe"/> <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <Link to="/forgot-password">Forgot?</Link>
                    </div>

                    <button className="btn btn-login w-100 mb-3 text-white">Login</button>

                    <div className="text-center mb-3">or login with</div>

                    <div className="d-flex justify-content-center gap-3 mb-3">
                        <div className="social-btn"><i className="bi bi-google"></i></div>
                        <div className="social-btn"><i className="bi bi-facebook"></i></div>
                        <div className="social-btn"><i className="bi bi-twitter"></i></div>
                    </div>

                    <p className="text-center">
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>

                </form>

            </div>
        </Fragment>
    )
}
export default Login;