import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

let CommentsList=()=>{

    let [comments, setComments] =useState([]);
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
        fetch(`https://dummyjson.com/comments/${id}`, {
            method: "DELETE",
        }).then((res) => {
            return res.json();
        }
        ).then((data) => {
            if (data?.id) {
                Swal.fire("Deleted!", "Comment has been deleted.", "success");
                setComments(comments.filter((comment) => comment.id !== id));
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

    let getCommentsList = async () => {
        try {
            let url = "https://dummyjson.com/comments?limit=500";
            await fetch(url).then((res)=>{
                return res.json();
            }).then((data)=>{
                setLoading(false);
                if (search) {
                    const filtered=data.comments.filter(item =>item.body.toLowerCase().includes(search.toLowerCase()));
                    setComments(filtered); 
                }else {
                    setComments(data.comments);
                }
            });
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    useEffect(()=>{
        getCommentsList();
    },[search]);

    return (
        <div>
            <Helmet>
                <title>Comments List</title>
            </Helmet>
            <div className="container">

                <div className="row">
                    <div className="col-xl-12">
						<div className="card mg-b-20">
							<div className="card-header pb-0 pd-t-25">
								<div className="d-flex justify-content-between">
									<h4 className="card-title mg-b-0">Posts List
                                         &nbsp;&nbsp;&nbsp;
                                        <Link to="/admin/add-comment">
                                            <input type="button" className="btn btn-primary btn-sm" value="Add Comment"/>
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
												<th>Comment</th>
                                                <th>Liked</th>
												<th>User</th>
												<th style={{minWidth:"130px"}}>Action</th>
											</tr>
										</thead>
										<tbody>
											{
                                            loading
                                                ? Array.from({ length: 3 }).map((_, idx) => (
                                                    <tr key={idx}>
                                                        {Array.from({ length: 4 }).map((_, cellIdx) => (
                                                        <td key={cellIdx}>
                                                            <div className="skeleton"></div>
                                                        </td>
                                                        ))}
                                                    </tr>
                                                ))
                                                : comments.map((comment) => (
                                                    <tr key={comment.id}>
                                                        <td>{comment.body}</td>
                                                        <td>{comment.likes}</td>
                                                        <td>{comment.user.fullName}</td>
                                                         <td>
                                                            <Link to={`/admin/comment/${comment.id}`}>
                                                                <input type="button" className="btn btn-info btn-sm" value="Edit"/>
                                                            </Link>
                                                             &nbsp;
                                                            <input type="button" className="btn btn-danger btn-sm" value="Delete" onClick={()=>handleDelete(comment.id)}/>
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

export default CommentsList;