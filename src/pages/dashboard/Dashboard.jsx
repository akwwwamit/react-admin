import { Helmet } from "react-helmet";

let Dashboard=()=>{
    return (
        <>
         
            <div className="container">

                <div className="breadcrumb-header justify-content-between mg-lg-t-0 mg-lg-b-50">
					<div className="left-content">
						<h4 className="content-title mb-2">Hi, welcome back!</h4>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="#">Dashboard</a></li>
								<li className="breadcrumb-item active" aria-current="page">Analytics &amp; Monitoring</li>
							</ol>
						</nav>
					</div>
				</div>

                <div className="row row-sm">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body iconfont text-left">
                                <div className="d-flex justify-content-between">
                                    <h4 className="card-title mb-3">Today Orders</h4>
                                    <div className="card-options ml-auto">
                                        <div className="btn-group ml-5 mb-0">
                                            <a className="btn-link option-dots" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><i className="fe fe-more-vertical tx-gray-500"></i></a>
                                            <div className="dropdown-menu shadow">
                                                <a className="dropdown-item" href="#"><i className="fe fe-plus mr-2"></i>Add New</a>
                                                <a className="dropdown-item" href="#"><i className="fe fe-eye mr-2"></i>View all new tab</a>
                                                <a className="dropdown-item" href="#"><i className="fe fe-edit mr-2"></i>Edit Card</a>
                                                <a className="dropdown-item" href="#"><i className="fe fe-settings mr-2"></i> Settings</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mb-0">
                                    <div className="">
                                        <h4 className="mb-1 font-weight-bold">5,74.12</h4>
                                        <p className="mb-2 tx-12 text-muted"><i className="fas fa-arrow-circle-up text-success"></i> Compared to Last week</p>
                                    </div>
                                    <div className="card-chart bg-primary-transparent brround ml-auto mt-0">
                                        <i className="typcn typcn-shopping-cart text-primary tx-24"></i>
                                    </div>
                                </div>
                                <div className="progress progress-sm mt-2 bg-primary-transparent">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" className="progress-bar bg-primary wd-70p" role="progressbar"></div>
                                </div>
                                <small className="mb-0 text-muted">Monthly<span className="float-right text-muted mg-t-2">70%</span></small>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body iconfont text-left">
                                <div className="d-flex justify-content-between">
                                    <h4 className="card-title mb-3">Today Orders</h4>
                                    <div className="card-options ml-auto">
                                        <div className="btn-group ml-5 mb-0">
                                            <a className="btn-link option-dots" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><i className="fe fe-more-vertical tx-gray-500"></i></a>
                                            <div className="dropdown-menu shadow">
                                                <a className="dropdown-item" href="#"><i className="fe fe-plus mr-2"></i>Add New</a>
                                                <a className="dropdown-item" href="#"><i className="fe fe-eye mr-2"></i>View all new tab</a>
                                                <a className="dropdown-item" href="#"><i className="fe fe-edit mr-2"></i>Edit Card</a>
                                                <a className="dropdown-item" href="#"><i className="fe fe-settings mr-2"></i> Settings</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mb-0">
                                    <div className="">
                                        <h4 className="mb-1 font-weight-bold">5,74.12</h4>
                                        <p className="mb-2 tx-12 text-muted"><i className="fas fa-arrow-circle-up text-success"></i> Compared to Last week</p>
                                    </div>
                                    <div className="card-chart bg-primary-transparent brround ml-auto mt-0">
                                        <i className="typcn typcn-shopping-cart text-primary tx-24"></i>
                                    </div>
                                </div>
                                <div className="progress progress-sm mt-2 bg-primary-transparent">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" className="progress-bar bg-primary wd-70p" role="progressbar"></div>
                                </div>
                                <small className="mb-0 text-muted">Monthly<span className="float-right text-muted mg-t-2">70%</span></small>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body iconfont text-left">
                                <div className="d-flex justify-content-between">
                                    <h4 className="card-title mb-3">Today Orders</h4>
                                    <div className="card-options ml-auto">
                                        <div className="btn-group ml-5 mb-0">
                                            <a className="btn-link option-dots" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><i className="fe fe-more-vertical tx-gray-500"></i></a>
                                            <div className="dropdown-menu shadow">
                                                <a className="dropdown-item" href="#"><i className="fe fe-plus mr-2"></i>Add New</a>
                                                <a className="dropdown-item" href="#"><i className="fe fe-eye mr-2"></i>View all new tab</a>
                                                <a className="dropdown-item" href="#"><i className="fe fe-edit mr-2"></i>Edit Card</a>
                                                <a className="dropdown-item" href="#"><i className="fe fe-settings mr-2"></i> Settings</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mb-0">
                                    <div className="">
                                        <h4 className="mb-1 font-weight-bold">5,74.12</h4>
                                        <p className="mb-2 tx-12 text-muted"><i className="fas fa-arrow-circle-up text-success"></i> Compared to Last week</p>
                                    </div>
                                    <div className="card-chart bg-primary-transparent brround ml-auto mt-0">
                                        <i className="typcn typcn-shopping-cart text-primary tx-24"></i>
                                    </div>
                                </div>
                                <div className="progress progress-sm mt-2 bg-primary-transparent">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" className="progress-bar bg-primary wd-70p" role="progressbar"></div>
                                </div>
                                <small className="mb-0 text-muted">Monthly<span className="float-right text-muted mg-t-2">70%</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-sm">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="card">
                        <div className="card-header pb-0 pd-t-25">
                           

                            <p className="tx-12 text-muted mb-0">
                            session by country mean that the user is from the stated country or
                            that the session.
                            <a href="#"> Learn more</a>
                            </p>
                        </div>

                        <div className="card-body">
                            <div className="table-responsive">
                            <table
                                id="example1"
                                className="table table-striped table-bordered text-nowrap"
                                style={{ width: "100%" }}
                            >
                                <thead>
                                <tr className="bold">
                                    <th>Seller</th>
                                    <th>Total Sales</th>
                                    <th>Active Stocks</th>
                                    <th>Category</th>
                                    <th>Revenue</th>
                                    <th className="text-center">Status</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td className="fw-bold">
                                    <div className="d-flex">
                                        <span className="avatar avatar-sm brround">S</span>
                                        <span className="ms-2 mt-1">SREE Enrprices</span>
                                    </div>
                                    </td>
                                    <td>20,125</td>
                                    <td>10513.00</td>
                                    <td>Watch</td>
                                    <td className="fw-bold">$13,206</td>
                                    <td>
                                    <i className="fa fa-caret-up text-danger me-1"></i>.01%
                                    </td>
                                </tr>

                                {/* Repeat rows as needed */}
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

               

            </div>
        </>
    )
}
export default Dashboard;