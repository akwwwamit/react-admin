import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

let UsersList=()=>{

    let [users, setUsers] =useState([]);
    const [loading, setLoading] = useState(true);

    //going to delete user.
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
                fetch(`https://dummyjson.com/users/${id}`, {
                    method: "DELETE",
                }).then((res) => {
                    return res.json();
                }
                ).then((data) => {
                    if (data?.id) {
                        Swal.fire("Deleted!", "User has been deleted.", "success");
                        setUsers(users.filter((user) => user.id !== id));
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

                <div className="row">
                    <div className="col-xl-12">
						<div className="card mg-b-20">
							<div className="card-header pb-0 pd-t-25">
								<div className="d-flex justify-content-between">
									<h4 className="card-title mg-b-0">Users List
                                         &nbsp;&nbsp;&nbsp;
                                        <Link to="/admin/add-user">
                                            <input type="button" className="btn btn-primary btn-sm" value="Add User"/>
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
												<th>First name</th>
												<th>Last name</th>
                                                <th>Username</th>
												<th>Email</th>
												<th>Phone</th>
												<th>Role</th>
												<th>Image</th>
												<th>Action</th>
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
                                                        <td>
                                                            <Link to={`/admin/user/${usr.id}`}>
                                                                <input type="button" className="btn btn-info btn-sm" value="Edit"/>
                                                            </Link>
                                                             &nbsp;
                                                            <input type="button" className="btn btn-danger btn-sm" value="Delete" onClick={()=>handleDelete(usr.id)}/>
                                                        </td>
                                                    </tr>
                                                    ))
                                                    : <tr><td colSpan="8">Sorry no record found to display.</td></tr>
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