import { Fragment, useActionState, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let Register=()=>{
  let navigate=useNavigate();
  let handleSubmit = async (previousData, formData) => {
    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let age = formData.get('age');
    let email = formData.get('email');
    let password = formData.get('password');

    let errors = { firstName: "", lastName: "", age: "", email: "", password: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let flag = true;

    if (!firstName) {
        errors.firstName = 'Please enter first name';
        flag = false;
    }
    if (!lastName) {
        errors.lastName = 'Please enter last name';
        flag = false;
    }
    if (!age) {
        errors.age = 'Please enter your age';
        flag = false;
    }
    if (!emailRegex.test(email)) {
        errors.email = 'Please enter a valid email';
        flag = false;
    }
    if (!password) {
        errors.password = 'Please enter your password';
        flag = false;
    }

    if (flag) {
        try {
            const response = await fetch("https://dummyjson.com/users/add", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, age, email, password })
            });

            if (response.ok) {
                const resData = await response.json();
                toast.success("Your registration has been completed.");
                setTimeout(() => {
                  navigate('/'); 
                }, 1000);
                
            } else {
                const errorData = await response.json();
                toast.warn("Something bad happened");
            }
        } catch (error) {
            toast.error("Network or server error occurred");
        }
    }

    return errors;
};



let [data, action, pending]=useActionState(handleSubmit, undefined);


    return (
        <Fragment>
            <Helmet>
                 <title>Register</title>
            </Helmet>
            <div className="login-card text-white">

                <h3 className="mb-4 text-center">Register</h3>

                <form action={action}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="firstName" placeholder="First Name"/>
                        <label>First Name</label>
                        <span className="error">{data?.firstName ?? data?.firstName}</span>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="lastName" placeholder="Last Name"/>
                        <label>Last Name</label>
                        <span className="error">{data?.lastName ?? data?.lastName}</span>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" name="age" placeholder="Age"/>
                        <label>Age</label>
                        <span className="error">{data?.age ?? data?.age}</span>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" name="email" placeholder="Email"/>
                        <label>Email</label>
                        <span className="error">{data?.email ?? data?.email}</span>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" name="password" placeholder="Password"/>
                        <label>Password</label>
                        <span className="error">{data?.password ?? data?.password}</span>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                        <div></div>
                        <Link to="/">Login</Link>
                    </div>

                    <button disabled={pending} className="btn btn-login w-100 mb-3 text-white">Register</button>
                </form>

            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </Fragment>
    )
}
export default Register;