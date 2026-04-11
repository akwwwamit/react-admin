import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

let Register=()=>{
    let nevigate= useNavigate();
    
    let [formData, setFormData] = useState({firstName: "", lastName: "", email: "", gender: ""});
    let [error, setError] = useState({firstName: "", lastName: "", email: "", gender: ""});
    let [processing, setProcessing] = useState(false);

    let handleChange =(e)=> {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    let validateForm=()=>{
        let errors={};
        let flag=true;
        if (formData.firstName.trim() === "") {
            errors.firstName = "Please enter your first name";
            flag=false;
        }
        if (formData.lastName.trim() === "") {
            errors.lastName = "Please enter your last name";
            flag=false;
        }
        if (formData.email.trim() === "") {
            errors.email = "Please enter your email";
            flag=false;
        }
        if (formData.gender.trim() === "") {
            errors.gender = "Please select your gender";
            flag=false;
        }
        setError(errors);
        return flag;
    }

    let handleSubmit=(e)=>{
       let isValid = validateForm();
        if (isValid) {
            setProcessing(true);
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    
                    username: 'emilys',
                    password: 'emilyspass',
                    expiresInMins: 30, // optional, defaults to 60
                })
            })
            .then(res => res.json())
            .then((data)=>{
                setProcessing(false);
                if (data?.accessToken) {
                    data.firstName = formData.firstName;
                    data.lastName = formData.lastName;
                    data.email = formData.email;
                    data.gender = formData.gender;
                     let loginData=JSON.stringify(data);
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
                    <h4>Please enter detail for register</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>First Name <span className="text-danger">*</span></label>
                            <input className="form-control" placeholder="First Name" name="firstName" type="text" onChange={(e)=>{handleChange(e)}}/>
                            <span className="text-danger">{error.firstName}</span>
                        </div>
                        <div className="form-group">
                            <label>Last Name <span className="text-danger">*</span></label>
                            <input className="form-control" placeholder="Last Name" name="lastName" type="text"  onChange={(e)=>{handleChange(e)}}/>
                            <span className="text-danger">{error.lastName}</span>
                        </div>
                        <div className="form-group">
                            <label>Email <span className="text-danger">*</span></label>
                            <input className="form-control" placeholder="Enter your email" name="email" type="text" onChange={(e)=>{handleChange(e)}}/>
                            <span className="text-danger">{error.email}</span>
                        </div>

                        <div className="form-group">
                            <label>Gender <span className="text-danger">*</span></label>
                            <select className="form-control" name="gender" onChange={(e)=>{handleChange(e)}}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <span className="text-danger">{error.gender}</span>
                        </div>

                        <button disabled={processing} className="btn btn-main-primary btn-block">Sign In</button>
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