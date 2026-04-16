import { useActionState, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

let EditUser=()=>{
    let {id} =useParams();
    let navigate=useNavigate();
    let [formData, setFormData] = useState({firstName: "", lastName: "", age:""});

    let handleForm=(previousData, formData)=>{

        let firstName=formData.get('firstName');
        let lastName=formData.get('lastName');
        let age=formData.get('age');

        let errors={};
        let status=true;
        if (firstName.trim()==='') {
            errors.firstName='Please enter your first name';
            status=false;
        }

        if (lastName.trim()==='') {
            errors.lastName='Please enter your last name';
            status=false;
        }

        if (age.trim()==='') {
            errors.age='Please enter your age';
            status=false;
        }
        if (status) {
            saveFormData(firstName, lastName, age);
        }else {
            return errors;
        }
        
    }

    let saveFormData=async (firstName, lastName, age)=>{
        await fetch('https://dummyjson.com/users/'+id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            age: age
        })
        }).then(res => res.json())
        .then((data)=>{
            if (data?.id) {
                navigate('/admin/users');
                toast.success("User has been successfully updated");
            }else {
                toast.warn("Something is went wrong ");
            }
             
        }).catch((error)=>{
            toast.warning("Something is went wrong "+error.message);
        });
    }

    let [data, action, pending]=useActionState(handleForm,undefined);

    let getData=async ()=>{
        try {
            await fetch('https://dummyjson.com/users/'+id)
            .then(res => res.json())
            .then((data)=>{
                if (data?.id) {
                    setFormData({firstName:data?.firstName, lastName:data?.lastName, age:data?.age});
                }
            });
        }catch(error){
            toast.warn("Something is went wrong "+error.message);
        }
        
    }

    useEffect(()=>{
        getData();
    },[]);


    return (
        <div>
             <Helmet>
                <title>Manage User</title>
            </Helmet>
            <div className="container">
                <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="main-content-label mg-b-5">
                                Manage User
                            </div>
                            <form action={action}>
                                <div className="row row-sm">
                                    <div className="col-sm-4">
                                        <label>First name <span className="text-danger">*</span></label>
                                        <input className="form-control" placeholder="Enter first name" name="firstName" value={formData.firstName} type="text"/>
                                        {data?.firstName && <div className="text-danger">{data?.firstName}</div>}
                                    </div>
                                </div>

                                <div className="row row-sm">
                                    <div className="col-sm-4">
                                        <label>Last name <span className="text-danger">*</span></label>
                                        <input className="form-control" placeholder="Enter last name" name="lastName" value={formData.lastName} type="text"/>
                                        {data?.lastName && <div className="text-danger">{data?.lastName}</div>}
                                    </div>
                                </div>

                                <div className="row row-sm">
                                    <div className="col-sm-4">
                                        <label>Age <span className="text-danger">*</span></label>
                                        <input className="form-control" placeholder="Enter your age" name="age" value={formData.age} type="number"/>
                                        {data?.age && <div className="text-danger">{data?.age}</div>}
                                    </div>
                                </div>

                                <div className="row row-sm">
                                    <div className="col-sm-4 pt-4">
                                        <input type="submit" disabled={pending} className="btn btn-primary btn-sm" value="Update User"/> &nbsp;
                                        <Link to="/admin/users">
                                            <input type="button" className="btn btn-secondary btn-sm" value="Back to List"/>
                                        </Link>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditUser;