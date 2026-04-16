import { useActionState, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {getToken} from '../../library/Library';

let EditPost=()=>{
    let navidate=useNavigate();
    let [formData, setFormData] = useState({title: "", views: "", likes:"", dislikes:""});
    let {id}=useParams();
  
    let handleForm=(previousData, formData)=>{

        let title=formData.get('title');
        let views=formData.get('views');
        let likes=formData.get('likes');
        let dislikes=formData.get('dislikes');

        let errors={};
        let status=true;
        if (title.trim()==='') {
            errors.title='Please enter title';
            status=false;
        }

        if (views.trim()==='') {
            errors.views='Please enter views';
            status=false;
        }

        if (likes.trim()==='') {
            errors.likes='Please enter likes';
            status=false;
        }

         if (dislikes.trim()==='') {
            errors.dislikes='Please enter dislikes';
            status=false;
        }
        if (status) {
            let data={title,views,likes,dislikes}
            saveFormData(data);
        }else {
            return errors;
        }
        
    }

    let saveFormData=async (data)=>{
        let user=getToken();
        data={...data, 'userId':user.id};
        await fetch('https://dummyjson.com/posts/'+id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((data)=>{
            if (data?.id) {
                navidate('/admin/posts');
                toast.success("Post has been successfully updated");
            }else {
                toast.warn("Something is went wrong ");
            }
        }).catch((error)=>{
            toast.warning("Something is went wrong "+error.message);
        });
    }

    let getPostInfo=()=>{
        fetch('https://dummyjson.com/posts/'+id)
        .then(res => res.json())
        .then((data)=>{
            console.log(data);
            setFormData({title: data.title, views: data.views, likes:data.reactions.likes, dislikes:data.reactions.dislikes});
        });
    }

    useEffect(()=>{
        getPostInfo();
    },[]);


    let [data, action, pending]=useActionState(handleForm,undefined);

    return (
        <div>
             <Helmet>
                <title>Manage Post</title>
            </Helmet>
            <div className="container">
                <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="main-content-label mg-b-5">
                                Manage Post
                            </div>
                            <form action={action}>
                                <div className="row row-sm">
                                    <div className="col-sm-4">
                                        <label>Title <span className="text-danger">*</span></label>
                                        <input className="form-control" placeholder="Enter Title" name="title" type="text" value={formData.title}/>
                                        {data?.title && <div className="text-danger">{data?.title}</div>}
                                    </div>
                                </div>

                                <div className="row row-sm">
                                    <div className="col-sm-4">
                                        <label>Views<span className="text-danger">*</span></label>
                                        <input className="form-control" placeholder="Views" name="views" type="number" value={formData.views}/>
                                        {data?.views && <div className="text-danger">{data?.views}</div>}
                                    </div>
                                </div>

                                <div className="row row-sm">
                                    <div className="col-sm-4">
                                        <label>Likes <span className="text-danger">*</span></label>
                                        <input className="form-control" placeholder="Likes" name="likes" type="number" value={formData.likes}/>
                                        {data?.likes && <div className="text-danger">{data?.likes}</div>}
                                    </div>
                                </div>

                                <div className="row row-sm">
                                    <div className="col-sm-4">
                                        <label>Dislikes <span className="text-danger">*</span></label>
                                        <input className="form-control" placeholder="Dislikes" name="dislikes" type="number" value={formData.dislikes}/>
                                        {data?.dislikes && <div className="text-danger">{data?.dislikes}</div>}
                                    </div>
                                </div>

                                <div className="row row-sm">
                                    <div className="col-sm-4 pt-4">
                                        <input type="submit" disabled={pending} className="btn btn-primary btn-sm" value="Update Post"/> &nbsp;
                                        <Link to="/admin/posts">
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
export default EditPost;