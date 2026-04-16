import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

let TodosList=()=>{

    let [todos, setTodos] =useState([]);
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
        fetch(`https://dummyjson.com/todos/${id}`, {
            method: "DELETE",
        }).then((res) => {
            return res.json();
        }
        ).then((data) => {
            if (data?.id) {
                Swal.fire("Deleted!", "Todo has been deleted.", "success");
                setTodos(todos.filter((todo) => todo.id !== id));
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

    let getTodosList = async () => {
        try {
            let url = "https://dummyjson.com/todos?limit=500";
            await fetch(url).then((res)=>{
                return res.json();
            }).then((data)=>{
                setLoading(false);
                 if (search) {
                    const filtered=data.todos.filter(item =>item.todo.toLowerCase().includes(search.toLowerCase()));
                    setTodos(filtered);
                    console.log(search);
                }else {
                    setTodos(data.todos);
                }
            });
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    useEffect(()=>{
        getTodosList();
    },[search]);

    return (
        <div>
            <Helmet>
                <title>Todos List</title>
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
						<div className="card mg-b-20">
							<div className="card-header pb-0 pd-t-25">
								<div className="d-flex justify-content-between">
									<h4 className="card-title mg-b-0">Todos List
                                         &nbsp;&nbsp;&nbsp;
                                        <Link to="/admin/add-todo">
                                            <input type="button" className="btn btn-primary btn-sm" value="Add Todo"/>
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
												<th>Todo</th>
												<th>Completed</th>
												<th>Action</th>
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
                                                : todos.length>0 ? todos.map((todo) => (
                                                    <tr key={todo.id}>
                                                        <td>{todo.todo}</td>
                                                        <td>{todo.completed ? "Yes" : "No"}</td>
                                                        <td>
                                                            <Link to={`/admin/todo/${todo.id}`}>
                                                                <input type="button" className="btn btn-info btn-sm" value="Edit"/>
                                                            </Link>
                                                             &nbsp;
                                                            <input type="button" className="btn btn-danger btn-sm" value="Delete" onClick={()=>handleDelete(todo.id)}/>
                                                        </td>
                                                    </tr>
                                                    )) : <tr><td colSpan={3}>Sorry no record found to display.</td></tr>
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

export default TodosList;