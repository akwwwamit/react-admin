import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

let RecipesList=()=>{

    let [recipes, setRecipes] =useState([]);
    const [loading, setLoading] = useState(true);

    let getRecipesList = async () => {
        try {
            await fetch("https://dummyjson.com/recipes").then((res)=>{
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
    },[]);

    return (
        <div>
            <Helmet>
                <title>Recipes List</title>
            </Helmet>
            <div className="container">
                 <div className="breadcrumb-header justify-content-between">	
                    <div className="left-content">
                        <h4 className="content-title mb-1">Recipes List</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Recipes List</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
						<div className="card mg-b-20">
							<div className="card-header pb-0 pd-t-25">
								<div className="d-flex justify-content-between">
									<h4 className="card-title mg-b-0">Recipes List</h4>
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