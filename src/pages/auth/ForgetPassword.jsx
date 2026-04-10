import { Link } from "react-router-dom";

let ForgetPassword=()=>{
    return (
        <>
            <div className="p-5 wd-md-50p">
                <div className="main-signin-header">
                    <h2>Welcome back!</h2>
                    <h4>Please enter you email</h4>
                    <form action="https://laravel.spruko.com/dashfox/ltr/index">
                        <div className="form-group">
                            <label>Email</label><input className="form-control" placeholder="Enter your email" type="text"/>
                        </div>
                        <button className="btn btn-main-primary btn-block">Send Email</button>
                    </form>
                </div>
                <div className="main-signin-footer mt-3 mg-t-5">
                    <p><Link to="/">Login</Link></p>

                </div>
            </div>
        
        </>
    )
}

export default ForgetPassword;