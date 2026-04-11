import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
let Login=()=>{
    let nevigate= useNavigate();

    let [formData, setFormData] = useState({username: "emilys", password: "emilyspass", expiresInMins: 60});
    let [formError, setFormError] = useState({username: "", password: ""});
    let [processing, setProcessing] = useState(false);

    let handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    let validateForm = () => {
        let flag=true;
        let errors = {};
        if (formData.username.trim() === "") {
            errors.username = "Please enter your username";
            flag = false;
        }

        if (formData.password.trim() === "") {
            errors.password = "Please enter your password";
            flag = false;
        }
       setFormError(errors);
        return flag;
    }

    let handleSubmit=async (e)=>{
        let isValid = validateForm();
        if (isValid) {
            setProcessing(true);
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    
                    username: formData.username.trim(),
                    password: formData.password.trim(),
                    expiresInMins: 30, // optional, defaults to 60
                })
            })
            .then(res => res.json())
            .then((data)=>{
                let loginData=JSON.stringify(data);
                setProcessing(false);
                if (data?.accessToken) {
                    localStorage.setItem("userInfo", loginData);
                    nevigate("/admin/dashboard", { replace: true });
                }else {
                    toast.error("Login failed. Please check your credentials.");
                }
            })
            .catch(err => console.error('Login error:', err));
        }
        e.preventDefault();
    }

    return (
        <>
            <div className="p-5 wd-md-50p">
                <div className="main-signin-header">
                    <h2>Welcome back!</h2>
                    <h4>Please sign in to continue</h4>
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="form-group">
                            <label>Username</label><input className="form-control" placeholder="Enter your username" type="text" value={formData.username} name="username" onChange={(e)=>handleChange(e)}/>
                            <span className="text-danger">{formError.username}</span>
                        </div>
                        <div className="form-group">
                            <label>Password</label> <input className="form-control" placeholder="Enter your password" type="password" value={formData.password} name="password" onChange={(e)=>handleChange(e)}/>
                            <span className="text-danger">{formError.password}</span>
                        </div>
                        <button type="submit" disabled={processing} className="btn btn-main-primary btn-block">Sign In</button>
                        
                    </form>
                </div>
                <div className="main-signin-footer mt-3 mg-t-5">
                    <p><Link to="/forget-password">Forgot password?</Link></p>
                    <p>Don't have an account? <Link to="/register">Create an Account</Link></p>

                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default Login;