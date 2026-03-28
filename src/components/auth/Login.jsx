import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {encryptJSON, decryptJSON} from '../../library/Encrypt';

let Login=()=>{
    let navigate=useNavigate();

    let [formData, setFormData]=useState({email:'emilys', password:'emilyspass', rememberMe:false});

    let handleChange=(event)=>{
       if (event.target.name==='email' || event.target.name==='password') {
         setFormData({...formData, [event.target.name]:event.target.value});
       }else {
        setFormData({...formData, [event.target.name]:event.target.checked});
       }
    }

    let handleSubmit=async (event)=>{
         event.preventDefault();
        let loginInfo=await fetch("https://dummyjson.com/auth/login", {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username:formData.email,
                password:formData.password,
                expiresInMins: 30,
            })
        });
        
        if (loginInfo.ok) {
            let jsonData=await loginInfo.json();
            toast.success("Login successfull");
            jsonData=JSON.stringify(jsonData);
            jsonData=encryptJSON(jsonData);
            localStorage.setItem('userInfo', jsonData);
            setTimeout(()=>navigate('admin/dashboard'),2000)
        }else {
             let jsonData=await loginInfo.json();
             toast.warn(jsonData.message);
        }
    }
    useEffect(()=>{
        checkUserAuth();
    },[]);
    let checkUserAuth=()=>{
        let checkAuth=localStorage.getItem('userInfo');
        if (checkAuth) {
            setTimeout(()=>navigate('/admin/dashboard'),1000)
        }
    }

    return (
        <Fragment>
            <Helmet>
                 <title>Sign In</title>
            </Helmet>
            <div className="login-card text-white">

                <h3 className="mb-4 text-center">Sign In</h3>

                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value={formData.email} name="email" placeholder="User Id" onChange={handleChange}/>
                        <label>User Id</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" value={formData.password} name="password" placeholder="Password"  onChange={handleChange}/>
                        <label>Password</label>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                        <div>
                            <input type="checkbox" id="rememberMe" name="rememberMe" onChange={handleChange}/> <label htmlFor="rememberMe">Remember me</label>
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
            <ToastContainer position="top-right" autoClose={3000} />
        </Fragment>
    )
}
export default Login;