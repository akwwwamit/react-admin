import { Link } from "react-router-dom";

let Login=()=>{
    return (
        <>
            <div className="p-5 wd-md-50p">
                <div className="main-signin-header">
                    <h2>Welcome back!</h2>
                    <h4>Please sign in to continue</h4>
                    <form action="https://laravel.spruko.com/dashfox/ltr/index">
                        <div className="form-group">
                            <label>Email</label><input className="form-control" placeholder="Enter your email" type="text"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label> <input className="form-control" placeholder="Enter your password" type="password"/>
                        </div>
                        <Link to="/admin/dashboard">
                            <button className="btn btn-main-primary btn-block">Sign In</button>
                        </Link>
                        
                    </form>
                </div>
                <div className="main-signin-footer mt-3 mg-t-5">
                    <p><Link to="/forget-password">Forgot password?</Link></p>
                    <p>Don't have an account? <Link to="/register">Create an Account</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login;