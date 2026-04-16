import { useActionState, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {getToken} from '../../library/Library';

let AddComment=()=>{
    let navidate=useNavigate();
    // let [formData, setFormData] = useState({firstName: "", lastName: "", age:""});
    let {id} =useParams();
    let postId= typeof id !=='undefined' ? id : 0;

    let handleForm=(previousData, formData)=>{

        let title=formData.get('title');
        let description=formData.get('description');

        let errors={};
        let status=true;
        if (title.trim()==='') {
            errors.title='Please enter title';
            status=false;
        }

        if (description.trim()==='') {
            errors.description='Please enter views';
            status=false;
        }
        if (status) {
            let data={body:title,'postId':postId};
            saveFormData(data);
        }else {
            return errors;
        }
        
    }

    let saveFormData=async (data)=>{
        let user=getToken();
        data={...data, 'userId':user.id};
        console.log(data);
        await fetch('https://dummyjson.com/comments/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((data)=>{
            console.log(data);
            if (data?.id) {
                navidate('/admin/comments');
                toast.success("Comment has been successfully registered");
            }else {
                toast.warn("Something is went wrong ");
            }
        }).catch((error)=>{
            toast.warning("Something is went wrong "+error.message);
        });
    }

    let [data, action, pending]=useActionState(handleForm,undefined);

    return (
        <div>
             <Helmet>
                <title>Add Comment</title>
            </Helmet>
            <div className="container">
                <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="main-content-label mg-b-5">
                                Add Comment
                            </div>
                            <form action={action}>
                                <div className="row row-sm">
                                    <div className="col-sm-4">
                                        <label>Title <span className="text-danger">*</span></label>
                                        <input className="form-control" placeholder="Enter Title" name="title" type="text"/>
                                        {data?.title && <div className="text-danger">{data?.title}</div>}
                                    </div>
                                </div>

                                <div className="row row-sm">
                                    <div className="col-sm-4">
                                        <label>Description <span className="text-danger">*</span></label>
                                        <input className="form-control" placeholder="Description" name="description" type="text"/>
                                        {data?.description && <div className="text-danger">{data?.description}</div>}
                                    </div>
                                </div>

                                <div className="row row-sm">
                                    <div className="col-sm-4 pt-4">
                                        <input type="submit" disabled={pending} className="btn btn-primary btn-sm" value="Add Comment"/> &nbsp;
                                        <Link to="/admin/comments">
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
export default AddComment;