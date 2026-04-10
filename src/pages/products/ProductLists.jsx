import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

let ProductLists=()=>{

    let [products, setProducts] =useState([]);
    const [loading, setLoading] = useState(true);

    let getProductsList = async () => {
        try {
            await fetch("https://dummyjson.com/products?limit=500").then((res)=>{
                return res.json();
            }).then((data)=>{
                setLoading(false);
                setProducts(data.products);
            });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(()=>{
        getProductsList();
    },[]);

    return (
        <div>
            <Helmet>
                <title>Products List</title>
            </Helmet>
            <div className="container">
                 <div className="breadcrumb-header justify-content-between">	
                    <div className="left-content">
                        <h4 className="content-title mb-1">Products List</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Products List</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
						<div className="card mg-b-20">
							<div className="card-header pb-0 pd-t-25">
								<div className="d-flex justify-content-between">
									<h4 className="card-title mg-b-0">Products List</h4>
								</div>
							</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered mg-b-0 text-md-nowrap">
										<thead>
											<tr>
												<th>Title</th>
												<th>Price</th>
												<th>Brand</th>
												<th>Category</th>
												<th>Availability</th>
												<th>Rating</th>
												<th>Stock</th>
												<th>Image</th>
											</tr>
										</thead>
										<tbody>
											{loading
                                                ? Array.from({ length: 3 }).map((_, idx) => (
                                                    <tr key={idx}>
                                                        {Array.from({ length: 8 }).map((_, cellIdx) => (
                                                        <td key={cellIdx}>
                                                            <div className="skeleton"></div>
                                                        </td>
                                                        ))}
                                                    </tr>
                                                ))
                                                : products.map((product) => (
                                                    <tr key={product.id}>
                                                        <td>{product.title}</td>
                                                        <td>{product.price}</td>
                                                        <td>{product.brand}</td>
                                                        <td>{product.category}</td>
                                                        <td>{product.availabilityStatus}</td>
                                                        <td>{product.rating}</td>
                                                        <td>{product.stock}</td>
                                                        <td>
                                                        <img
                                                            src={product.thumbnail}
                                                            alt={product.title}
                                                            style={{ width: "30px", height: "30px" }}
                                                        />
                                                        </td>
                                                    </tr>
                                                    ))}
											
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

export default ProductLists;