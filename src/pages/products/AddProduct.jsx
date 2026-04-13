import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

let AddProduct = () => {
    let navigate=useNavigate();

    let [formData, setFormData] = useState({title: "", description: ""});
    let [errors, setErrors] = useState({title: "", description: ""});

    let handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    let validateForm = () => {
        let status=true;
        let errores={};
        if (formData.title.trim() === "") {
            errores.title = "Product name is required.";
            status=false;
        }
        if (formData.description.trim() === "") {
            errores.description = "Product description is required.";
            status=false;
            console.log('Amit');
        }
        setErrors(errores);
        return status;
    };

    let handleSubmit = (event) => {
        if (validateForm()) {
            
            fetch("https://dummyjson.com/products/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description
                })
            }).then((res) => {
                return res.json();
            }).then((data) => {
                if (data?.id) {
                    toast.success("Product added successfully!");
                    setFormData({title: "", description: ""});
                    navigate("/admin/products");
                }else {
                    toast.error("Failed to add product. Please try again.");
                }
            }).catch((error) => {
                console.error("Error adding product:", error);
            });
            
        }
        
        event.preventDefault();
    };
  return (
    <div>
    <Helmet>
        <title>Add Product</title>
    </Helmet>
      <div className="container">
        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <div className="main-content-label mg-b-5">
                        Add Product
                    </div>
                    <form method="POST" onSubmit={handleSubmit}>
                        <div className="row row-sm">
                            <div className="col-sm-4">
                                <label>Product Name <span className="text-danger">*</span></label>
                                <input className="form-control" placeholder="Enter product name" name="title" value={formData.title} type="text" onChange={handleChange}/>
                                {errors.title && <div className="text-danger">{errors.title}</div>}
                            </div>
                        </div>

                        <div className="row row-sm">
                            <div className="col-sm-4 pt-2">
                                <label>Description <span className="text-danger">*</span></label>
                                <textarea className="form-control" placeholder="Enter product description" name="description" rows="3" onChange={handleChange} value={formData.description}></textarea>
                                {errors.description && <div className="text-danger">{errors.description}</div>}
                            </div>
                        </div>

                        <div className="row row-sm">
                            <div className="col-sm-4 pt-4">
                                <input type="submit" className="btn btn-primary btn-sm" value="Add Product"/> &nbsp;
                                <Link to="/admin/products">
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
  );
};
export default AddProduct;
