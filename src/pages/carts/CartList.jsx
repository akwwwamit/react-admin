import { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CartLoader from "./CartLoader";

let CartList=()=>{

    let [carts, setCarts] =useState([]);
    const [loading, setLoading] = useState(true);

    let getCartsList = async () => {
        try {
            await fetch("https://dummyjson.com/carts").then((res)=>{
                return res.json();
            }).then((data)=>{
                console.log(data);
                setLoading(false);
                setCarts(data.carts);
            });
        } catch (error) {
            console.error("Error fetching carts:", error);
        }
    };

    useEffect(()=>{
        getCartsList();
    },[]);

    return (
        <div>
            <Helmet>
                <title>Carts List</title>
            </Helmet>
            <div className="container">
                 <div className="breadcrumb-header justify-content-between">	
                    <div className="left-content">
                        <h4 className="content-title mb-1">Carts List</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Carts List</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
						<div className="card mg-b-20">
							<div className="card-header pb-0 pd-t-25">
								<div className="d-flex justify-content-between">
									<h4 className="card-title mg-b-0">Carts List</h4>
								</div>
							</div>
							<div className="card-body">
								<div className="table-responsive">
                                    {
                                        loading ? <CartLoader /> :
                                        carts.map((cart)=>(
                                            <table className="table table-bordered mg-b-0 text-md-nowrap">
                                                <thead>
                                                    <tr style={{backgroundColor:'#008acc'}}>
                                                        <th>Total Products</th>
                                                        <th>Total Quantity</th>
                                                        <th>Discount</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>&#8377;{cart.totalProducts}</td>
                                                        <td>&#8377;{cart.totalQuantity}</td>
                                                        <td>&#8377;{cart.discountedTotal}</td>
                                                        <td>&#8377;{cart.total}</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>
                                                            <table className="table table-bordered mg-b-0 text-md-nowrap">
                                                            <thead>
                                                                <tr style={{backgroundColor:'#81bdee'}}>
                                                                    <th>Product</th>
                                                                    <th>Price</th>
                                                                    <th>Quantity</th>
                                                                    <th>Discount Percentage</th>
                                                                    <th>Discount Total</th>
                                                                    <th>Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    cart.products.map((product)=>(
                                                                        <tr key={product.id}>
                                                                            <td>{product.title}</td>
                                                                            <td>&#8377;{product.price}</td>
                                                                            <td>{product.quantity}</td>
                                                                            <td>&#8377;{product.discountPercentage}</td>
                                                                            <td>&#8377;{product.discountedTotal}</td>
                                                                            <td>&#8377;{product.total.toFixed(2)}</td>
                                                                        </tr>
                                                                    ))  
                                                                }
                                                            </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        ))
                                    }
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>
        </div>
    )
}

export default CartList;