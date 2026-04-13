import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

let EditProduct = () => {
    let navigate=useNavigate();
    let { id } = useParams();
   
    let [formData, setFormData] = useState({title: "", description: ""});
    let [errors, setErrors] = useState({title: "", description: ""});

    let handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    let getProductInfo = async () => {
        try {
            await fetch('https://dummyjson.com/products/'+id).then((res)=>{
                return res.json();
            }).then((data)=>{
                setFormData({title: data.title, description: data.description});
            }).catch((error)=>{
                 toast.error("Error fetching product details. Please try again. "+error.message);
            });
        }catch (error) {
           toast.error("Error fetching product details. Please try again. "+error.message);
        }
    }

    useEffect(()=>{
        getProductInfo();
    },[]);

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
            
            fetch("https://dummyjson.com/products/"+id, {
                method: "PUT",
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
                    toast.success("Product updated successfully!");
                    navigate("/admin/products");
                }else {
                    toast.error("Failed to update product. Please try again.");
                }
            }).catch((error) => {
                console.error("Error updating product:", error);
            });
            
        }
        
        event.preventDefault();
    };
  return (
    <div>
        <Helmet>
           <title>Edit Product</title>
        </Helmet>
      <div className="container">
        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <div className="main-content-label mg-b-5">
                        Edit Product
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
                                <input type="submit" className="btn btn-primary btn-sm" value="Update Product"/> &nbsp;
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
export default EditProduct;
