import { useActionState, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

let AddTodo=()=>{
    let navidate=useNavigate();
    // let [formData, setFormData] = useState({firstName: "", lastName: "", age:""});
    let [users, setUsers]=useState([]);

    let getUsers=async()=>{
        await fetch('https://dummyjson.com/users?limit=500&select=id,firstName')
        .then(res => res.json())
        .then((data)=>{
            setUsers(data.users);
        });
    }

    useEffect(()=>{
        getUsers();
    },[]);

    let handleForm=(previousData, formData)=>{

        let title=formData.get('title');
        let todoStatus=formData.get('todoStatus');
        let user=formData.get('user');

        let errors={};
        let status=true;
        if (title.trim()==='') {
            errors.title='Please enter title';
            status=false;
        }

        if (todoStatus.trim()==='') {
            errors.todoStatus='Please select todo status';
            status=false;
        }

        if (user.trim()==='') {
            errors.user='Please select user';
            status=false;
        }
        if (status) {
            let data={todo:title,completed:todoStatus, userId:user};
            saveFormData(data);
        }else {
            return errors;
        }
        
    }

    let saveFormData=async (data)=>{
        await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((data)=>{
            if (data?.id) {
                navidate('/admin/todos');
                toast.success("Todo has been successfully added");
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
                <title>Add Todo</title>
            </Helmet>
            <div className="container">
                <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="main-content-label mg-b-5">
                                Add Todo
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
                                        <label>Status <span className="text-danger">*</span></label>
                                        <select className="form-control" name="todoStatus">
                                            <option>Select status</option>
                                            <option value='false'>Pending</option>
                                            <option value='true'>Completed</option>
                                        </select>
                                        {data?.todoStatus && <div className="text-danger">{data?.todoStatus}</div>}
                                    </div>
                                </div>

                                <div className="row row-sm">
                                    <div className="col-sm-4">
                                        <label>Select user <span className="text-danger">*</span></label>
                                        <select className="form-control" name="user">
                                            <option>Select user</option>
                                            {
                                                users.map((data)=>(
                                                    <option key={data.id} value={data.id}>{data.firstName}</option>
                                                ))
                                            }
                                        </select>
                                        {data?.user && <div className="text-danger">{data?.user}</div>}
                                    </div>
                                </div>

                                <div className="row row-sm">
                                    <div className="col-sm-4 pt-4">
                                        <input type="submit" disabled={pending} className="btn btn-primary btn-sm" value="Add Todo"/> &nbsp;
                                        <Link to="/admin/todos">
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
export default AddTodo;