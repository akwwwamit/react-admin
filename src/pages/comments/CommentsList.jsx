import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

let CommentsList=()=>{

    let [comments, setComments] =useState([]);
    const [loading, setLoading] = useState(true);

    let getCommentsList = async () => {
        try {
            await fetch("https://dummyjson.com/comments?limit=500").then((res)=>{
                return res.json();
            }).then((data)=>{
                console.log(data);
                setLoading(false);
                setComments(data.comments);
            });
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    useEffect(()=>{
        getCommentsList();
    },[]);

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
									<h4 className="card-title mg-b-0">Posts List</h4>
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
											</tr>
										</thead>
										<tbody>
											{
                                            loading
                                                ? Array.from({ length: 3 }).map((_, idx) => (
                                                    <tr key={idx}>
                                                        {Array.from({ length: 3 }).map((_, cellIdx) => (
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