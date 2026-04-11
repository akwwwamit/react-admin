import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

let PostsList=()=>{

    let [posts, setPosts] =useState([]);
    const [loading, setLoading] = useState(true);

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
                console.log(data);
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
                 <div className="breadcrumb-header justify-content-between">	
                    <div className="left-content">
                        <h4 className="content-title mb-1">Posts List</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Posts List</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
						<div className="card mg-b-20">
							<div className="card-header pb-0 pd-t-25">
								<div className="d-flex justify-content-between">
									<h4 className="card-title mg-b-0">Posts List</h4>
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
                                                : posts.map((post) => (
                                                    <tr key={post.id}>
                                                        <td>{post.title}</td>
                                                        <td>{post.views}</td>
                                                        <td>{post.reactions.likes}</td>
                                                        <td>{post.reactions.dislikes}</td>
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