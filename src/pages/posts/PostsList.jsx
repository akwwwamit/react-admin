import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

let PostsList=()=>{

    let [posts, setPosts] =useState([]);
    const [loading, setLoading] = useState(true);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to recover this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem(id);
            }
        });
        };

    let deleteItem = (id) => {
        fetch(`https://dummyjson.com/posts/${id}`, {
            method: "DELETE",
        }).then((res) => {
            return res.json();
        }
        ).then((data) => {
            if (data?.id) {
                Swal.fire("Deleted!", "Post has been deleted.", "success");
                setPosts(posts.filter((post) => post.id !== id));
            }
        }).catch((error) => {
            console.error("Error deleting user :", error);
        });
    }


    let [search, setSearch] = useState("");
    const timerRef = useRef(null);
    let searchData=(event)=>{
        const value = event.target.value;

        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
        setSearch(value); 
        }, 500);
    }

    let getPostsList = async () => {
        try {
            let url = "https://dummyjson.com/posts?limit=500";
            if(search){
                url = "https://dummyjson.com/posts/search?limit=500&q="+encodeURIComponent(search);
            }
            
            await fetch(url).then((res)=>{
                return res.json();
            }).then((data)=>{
                setLoading(false);
                setPosts(data.posts);
            });
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(()=>{
        getPostsList();
    },[search]);

    return (
        <div>
            <Helmet>
                <title>Posts List</title>
            </Helmet>
            <div className="container">

                <div className="row">
                    <div className="col-xl-12">
						<div className="card mg-b-20">
							<div className="card-header pb-0 pd-t-25">
								<div className="d-flex justify-content-between">
									<h4 className="card-title mg-b-0">Posts List
                                        &nbsp;&nbsp;&nbsp;
                                        <Link to="/admin/add-post">
                                            <input type="button" className="btn btn-primary btn-sm" value="Add Post"/>
                                        </Link>
                                    </h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" placeholder="Search..." onChange={searchData}/>
                                        </div>
                                    </div>
								</div>
							</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered mg-b-0 text-md-nowrap">
										<thead>
											<tr>
												<th>Title</th>
												<th>Views</th>
                                                <th>Liked</th>
												<th>Dislikes</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											{
                                            loading
                                                ? Array.from({ length: 3 }).map((_, idx) => (
                                                    <tr key={idx}>
                                                        {Array.from({ length: 5 }).map((_, cellIdx) => (
                                                        <td key={cellIdx}>
                                                            <div className="skeleton"></div>
                                                        </td>
                                                        ))}
                                                    </tr>
                                                ))
                                                : posts.map((post) => (
                                                    <tr key={post.id}>
                                                        <td>{post.title}</td>
                                                        <td>{post.views}</td>
                                                        <td>{post.reactions.likes}</td>
                                                        <td>{post.reactions.dislikes}</td>
                                                        <td>
                                                            <Link to={`/admin/post/${post.id}`}>
                                                                <input type="button" className="btn btn-info btn-sm" value="Edit"/>
                                                            </Link>
                                                             &nbsp;
                                                            <input type="button" className="btn btn-danger btn-sm" value="Delete" onClick={()=>handleDelete(post.id)}/>
                                                            &nbsp;
                                                            <Link to={`/admin/comments/${post.id}`}>
                                                                <input type="button" className="btn btn-primary btn-sm" value="Comment"/>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    ))
                                                }
											
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>
        </div>
    )
}

export default PostsList;