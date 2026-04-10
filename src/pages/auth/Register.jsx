import { Link } from "react-router-dom";

let Register=()=>{
    return (
        <>
            <div className="p-5 wd-md-50p">
                <div className="main-signin-header">
                    <h2>Welcome back!</h2>
                    <h4>Please enter detail for register</h4>
                    <form action="https://laravel.spruko.com/dashfox/ltr/index">
                        <div className="form-group">
                            <label>Name</label><input className="form-control" placeholder="Enter your name" type="text"/>
                        </div>
                        <div className="form-group">
                            <label>Email</label><input className="form-control" placeholder="Enter your email" type="text"/>
                        </div>

                        <div className="form-group">
                            <label>Mobile</label><input className="form-control" placeholder="Enter your mobile" type="text"/>
                        </div>

                        <div className="form-group">
                            <label>Password</label> <input className="form-control" placeholder="Enter your password" type="password"/>
                        </div><button className="btn btn-main-primary btn-block">Sign In</button>
                    </form>
                </div>
                <div className="main-signin-footer mt-3 mg-t-5">
                    <p><Link to="/">Login?</Link></p>
                </div>
            </div>
        </>
    )
}

export default Register;