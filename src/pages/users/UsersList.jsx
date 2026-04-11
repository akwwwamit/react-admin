import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

let UsersList=()=>{

    let [users, setUsers] =useState([]);
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

    let getUsersList = async () => {
        try {
            let url = "https://dummyjson.com/users?limit=500";
            if(search){
                url = "https://dummyjson.com/users/search?limit=500&q="+encodeURIComponent(search);
            }

            await fetch(url).then((res)=>{
                return res.json();
            }).then((data)=>{
                setLoading(false);
                setUsers(data.users);
            });
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(()=>{
        getUsersList();
    },[search]);

    return (
        <div>
            <Helmet>
                <title>Users List</title>
            </Helmet>
            <div className="container">
                 <div className="breadcrumb-header justify-content-between">	
                    <div className="left-content">
                        <h4 className="content-title mb-1">Users List</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Users List</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
						<div className="card mg-b-20">
							<div className="card-header pb-0 pd-t-25">
								<div className="d-flex justify-content-between">
									<h4 className="card-title mg-b-0">Users List</h4>
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
												<th>First name</th>
												<th>Last name</th>
                                                <th>Username</th>
												<th>Email</th>
												<th>Phone</th>
												<th>Role</th>
												<th>Image</th>
											</tr>
										</thead>
										<tbody>
											{
                                            loading
                                                ? Array.from({ length: 3 }).map((_, idx) => (
                                                    <tr key={idx}>
                                                        {Array.from({ length: 8 }).map((_, cellIdx) => (
                                                        <td key={cellIdx}>
                                                            <div className="skeleton"></div>
                                                        </td>
                                                        ))}
                                                    </tr>
                                                ))
                                                : users.length ? users.map((usr) => (
                                                    <tr key={usr.id}>
                                                        <td>{usr.firstName}</td>
                                                        <td>{usr.lastName}</td>
                                                        <td>{usr.username}</td>
                                                        <td>{usr.email}</td>
                                                        <td>{usr.phone}</td>
                                                        <td>{usr.role}</td>
                                                        <td>
                                                        <img
                                                            src={usr.image}
                                                            alt={usr.firstName}
                                                            style={{ width: "30px", height: "30px" }}
                                                        />
                                                        </td>
                                                    </tr>
                                                    ))
                                                    : <tr><td colSpan="7">Sorry no record found to display.</td></tr>
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

export default UsersList;