import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

let ForgotPassword=()=>{
    return (
        <Fragment>
             <Helmet>
                    <title>Forgot Password</title>
            </Helmet>
            <div className="login-card text-white">

                <h3 className="mb-4 text-center">Forget Password</h3>

                <form>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" placeholder="Email"/>
                        <label>Email address</label>
                    </div>

      

                    <div className="d-flex justify-content-between mb-3">
                   
                        <Link to="/">Login?</Link>
                    </div>

                    <button className="btn btn-login w-100 mb-3 text-white">Send Link</button>


                    <p className="text-center">
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>

                </form>

            </div>
        </Fragment>
    )
}
export default ForgotPassword;