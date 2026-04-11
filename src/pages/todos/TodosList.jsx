import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

let TodosList=()=>{

    let [todos, setTodos] =useState([]);
    const [loading, setLoading] = useState(true);

    let getTodosList = async () => {
        try {
            await fetch("https://dummyjson.com/todos?limit=500").then((res)=>{
                return res.json();
            }).then((data)=>{
                console.log(data);
                setLoading(false);
                setTodos(data.todos);
            });
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    useEffect(()=>{
        getTodosList();
    },[]);

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
									<h4 className="card-title mg-b-0">Posts List</h4>
								</div>
							</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered mg-b-0 text-md-nowrap">
										<thead>
											<tr>
												<th>Todo</th>
												<th>Completed</th>
											</tr>
										</thead>
										<tbody>
											{
                                            loading
                                                ? Array.from({ length: 3 }).map((_, idx) => (
                                                    <tr key={idx}>
                                                        {Array.from({ length: 2 }).map((_, cellIdx) => (
                                                        <td key={cellIdx}>
                                                            <div className="skeleton"></div>
                                                        </td>
                                                        ))}
                                                    </tr>
                                                ))
                                                : todos.map((todo) => (
                                                    <tr key={todo.id}>
                                                        <td>{todo.todo}</td>
                                                        <td>{todo.completed ? "Yes" : "No"}</td>
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

export default TodosList;