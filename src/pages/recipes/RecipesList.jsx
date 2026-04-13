import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

let RecipesList=()=>{

    let [recipes, setRecipes] =useState([]);
    const [loading, setLoading] = useState(true);
    let [search, setSearch] = useState("");

    //going to delete recipes..
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
            fetch(`https://dummyjson.com/recipes/${id}`, {
                method: "DELETE",
            }).then((res) => {
                return res.json();
            }
            ).then((data) => {
                if (data?.id) {
                    Swal.fire("Deleted!", "Recipe has been deleted.", "success");
                    setRecipes(recipes.filter((recipe) => recipe.id !== id));
                }
            }).catch((error) => {
                console.error("Error deleting recipe:", error);
            });
        }

    const timerRef = useRef(null);
    let searchData=(event)=>{
        const value = event.target.value;

        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
        setSearch(value); 
        }, 500);
    }

    let getRecipesList = async () => {
        try {
            let url = "https://dummyjson.com/recipes?limit=500";
            if(search){
                url = "https://dummyjson.com/recipes/search?limit=500&q="+encodeURIComponent(search);
            }
            await fetch(url).then((res)=>{
                return res.json();
            }).then((data)=>{
                setLoading(false);
                setRecipes(data.recipes);
            });
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    useEffect(()=>{
        getRecipesList();
    },[search]);

    return (
        <div>
            <Helmet>
                <title>Recipes List</title>
            </Helmet>
            <div className="container">

                <div className="row">
                    <div className="col-xl-12">
						<div className="card mg-b-20">
							<div className="card-header pb-0 pd-t-25">
								<div className="d-flex justify-content-between">
									<h4 className="card-title mg-b-0">Recipes List &nbsp;&nbsp;&nbsp;
                                        <Link to="/admin/add-recipe">
                                            <input type="button" className="btn btn-primary btn-sm" value="Add Recipies"/>
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
												<th>Name</th>
												<th>Cuisine</th>
												<th>Difficulty</th>
												<th>Prepare Time</th>
												<th>Rating</th>
												<th>Review Count</th>
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
                                                : recipes.map((recipe) => (
                                                    <tr key={recipe.id}>
                                                        <td>{recipe.name}</td>
                                                        <td>{recipe.cuisine}</td>
                                                        <td>{recipe.difficulty}</td>
                                                        <td>{recipe.prepTimeMinutes}</td>
                                                        <td>{recipe.rating}</td>
                                                        <td>{recipe.reviewCount}</td>
                                                        <td>
                                                        <img
                                                            src={recipe.image}
                                                            alt={recipe.name}
                                                            style={{ width: "30px", height: "30px" }}
                                                        />
                                                        </td>
                                                        <td>
                                                            <Link to={`/admin/recipes/${recipe.id}`}>
                                                                <input type="button" className="btn btn-info btn-sm" value="Edit"/>
                                                            </Link>
                                                             &nbsp;
                                                            <input type="button" className="btn btn-danger btn-sm" value="Delete" onClick={()=>handleDelete(recipe.id)}/>
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

export default RecipesList;