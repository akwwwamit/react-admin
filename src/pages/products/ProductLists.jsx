import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

let ProductLists=()=>{

    let [products, setProducts] =useState([]);
    let [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const timerRef = useRef(null);
    let searchData=(event)=>{
        const value = event.target.value;

        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
        setSearch(value); 
        }, 500);
    }

    let getProductsList = async (searchValue='') => {
        try {
            let url = "https://dummyjson.com/products?limit=500";
            if(searchValue){
                url = "https://dummyjson.com/products/search?limit=500&q="+encodeURIComponent(searchValue);
            }
            await fetch(url).then((res)=>{
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
        getProductsList(search);
    },[search]);

    return (
        <div>
            <Helmet>
                <title>Products List</title>
            </Helmet>
            <div className="container">

                <div className="row">
                    <div className="col-xl-12">
						<div className="card mg-b-20">
							<div className="card-header pb-0 pd-t-25">
								<div className="d-flex justify-content-between">
									<h4 className="card-title mg-b-0">Products List</h4>
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
                                                : products.length ? products.map((product) => (
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
                                                    ))
                                                : <tr><td colSpan="8">Sorry no record found to display.</td></tr>}
											
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