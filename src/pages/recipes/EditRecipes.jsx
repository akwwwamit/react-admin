import { useActionState, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

let EditRecipes = () => {
    let navigate=useNavigate();
    let { id } = useParams();

    let [formData, setFormData] = useState({title: "", description: ""});

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFormData({ title: data.name || "", description: data.difficulty || "" });
            })
            .catch(err => {
                toast.error("Failed to load recipe data");
            });
    }, [id]);

    let handleSubmit= async (previousData, formData)=>{
        let title=formData.get("title").trim();
        let description=formData.get("description").trim();

        let status=true;
        let errorsData={title: "", description: ""};
        if(!title){
            status=false;
            errorsData.title="Recipe name is required";
        }
        if(!description){
            status=false;
            errorsData.description="Description is required";
        }
        if (status) {
            handleSuccess(title, description, id);
        }
        return {errors: errorsData, status: status, data: {title, description}};
    }

    let handleSuccess=(title, description, id)=>{
        try {
            fetch(`https://dummyjson.com/recipes/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name: title, description:description})
            }).then(res=>res.json()).then(data=>{
                if(data.id){
                    toast.success("Recipe updated successfully");
                    navigate("/admin/recipes");
                } else {
                    toast.error("Failed to update recipe");
                }
            }).catch(err=>{
                toast.error("An error occurred while updating the recipe");
            });
        }catch (error) {
            toast.error("An error occurred while updating the recipe");
        }
       
    }
    let [data, action, pending]=useActionState(handleSubmit, undefined);
    console.log((data?.errors));
    
  return (
    <div>
    <Helmet>
        <title>Edit Recipe</title>
    </Helmet>
      <div className="container">
        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <div className="main-content-label mg-b-5">
                        Edit Recipe
                    </div>
                    <form action={action}>
                        <div className="row row-sm">
                            <div className="col-sm-4">
                                <label>Recipe Name <span className="text-danger">*</span></label>
                                <input className="form-control" placeholder="Enter recipe name" name="title" type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}/>
                                {data?.errors?.title && <div className="text-danger">{data?.errors?.title}</div>}
                            </div>
                        </div>

                        <div className="row row-sm">
                            <div className="col-sm-4 pt-2">
                                <label>Description <span className="text-danger">*</span></label>
                                <textarea className="form-control" placeholder="Enter recipe description" name="description" rows="3" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}></textarea>
                                {data?.errors?.description && <div className="text-danger">{data?.errors?.description}</div>}
                            </div>
                        </div>

                        <div className="row row-sm">
                            <div className="col-sm-4 pt-4">
                                <input type="submit" disabled={pending} className="btn btn-primary btn-sm" value="Update Recipe"/> &nbsp;
                                <Link to="/admin/recipes">
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
export default EditRecipes;
