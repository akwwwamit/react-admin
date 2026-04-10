import { Link } from "react-router-dom";

let Header = () => {
  return (
    <div>
 
      <div className="main-header nav nav-item hor-header" style={{backgroundColor:'#ffffff'}}>
			<div className="container">
				<div className="main-header-left ">
                    <Link className="header-brand" to="/admin/dashboard">
                        <img src="../src/assets/img/brand/logo4.png" className="desktop-dark" alt="img" />
                    </Link>
				</div>
				<div className="main-header-right">
					<div className="nav nav-item  navbar-nav-right ml-auto">
						<div className="nav-link" id="bs-example-navbar-collapse-1">
                            <form className="navbar-form" role="search">
                                <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" />
                                <span className="input-group-btn">
                                    <button type="reset" className="btn btn-default">
                                    <i className="fas fa-times"></i>
                                    </button>
                                    <button type="submit" className="btn btn-default nav-link resp-btn">
                                    <i className="fe fe-search"></i>
                                    </button>
                                </span>
                                </div>
                            </form>
						</div>
                        <div className="main-header-search ml-0 d-sm-none d-none d-lg-block">
                            <input className="form-control shadow" id="search-input" placeholder="Search for anything..." type="text" /> <button className="btn"><i className="fas fa-search d-none d-md-block"></i></button>
                        </div>
						<div className="dropdown nav-item main-header-notification">
							<a className="new nav-link" href="#"><i className="fe fe-bell"></i><span className=" pulse"></span></a>
							<div className="dropdown-menu">
								<div className="menu-header-content bg-primary text-left d-flex">
									<div className="">
										<h6 className="menu-header-title text-white mb-0">7 new Notifications</h6>
									</div>
									<div className="my-auto ml-auto">
										<span className="badge badge-pill badge-warning float-right">Mark All Read</span>
									</div>
								</div>
								<div className="main-notification-list Notification-scroll ps">
									<a className="d-flex p-3 border-bottom" href="#">
										<div className="notifyimg bg-success-transparent">
											<i className="la la-shopping-basket text-success"></i>
										</div>
										<div className="ml-3">
											<h5 className="notification-label mb-1">New Order Received</h5>
											<div className="notification-subtext">1 hour ago</div>
										</div>
										<div className="ml-auto">
											<i className="las la-angle-right text-right text-muted"></i>
										</div>
									</a>
									<a className="d-flex p-3 border-bottom" href="#">
										<div className="notifyimg bg-danger-transparent">
											<i className="la la-user-check text-danger"></i>
										</div>
										<div className="ml-3">
											<h5 className="notification-label mb-1">22 verified registrations</h5>
											<div className="notification-subtext">2 hour ago</div>
										</div>
										<div className="ml-auto">
											<i className="las la-angle-right text-right text-muted"></i>
										</div>
									</a>
									<a className="d-flex p-3 border-bottom" href="#">
										<div className="notifyimg bg-primary-transparent">
											<i className="la la-check-circle text-primary"></i>
										</div>
										<div className="ml-3">
											<h5 className="notification-label mb-1">Project has been approved</h5>
											<div className="notification-subtext">4 hour ago</div>
										</div>
										<div className="ml-auto">
											<i className="las la-angle-right text-right text-muted"></i>
										</div>
									</a>
									<a className="d-flex p-3 border-bottom" href="#">
										<div className="notifyimg bg-pink-transparent">
											<i className="la la-file-alt text-pink"></i>
										</div>
										<div className="ml-3">
											<h5 className="notification-label mb-1">New files available</h5>
											<div className="notification-subtext">10 hour ago</div>
										</div>
										<div className="ml-auto">
											<i className="las la-angle-right text-right text-muted"></i>
										</div>
									</a>
									<a className="d-flex p-3 border-bottom" href="#">
										<div className="notifyimg bg-warning-transparent">
											<i className="la la-envelope-open text-warning"></i>
										</div>
										<div className="ml-3">
											<h5 className="notification-label mb-1">New review received</h5>
											<div className="notification-subtext">1 day ago</div>
										</div>
										<div className="ml-auto">
											<i className="las la-angle-right text-right text-muted"></i>
										</div>
									</a>
									<a className="d-flex p-3" href="#">
										<div className="notifyimg bg-purple-transparent">
											<i className="la la-gem text-purple"></i>
										</div>
										<div className="ml-3">
											<h5 className="notification-label mb-1">Updates Available</h5>
											<div className="notification-subtext">2 days ago</div>
										</div>
										<div className="ml-auto">
											<i className="las la-angle-right text-right text-muted"></i>
										</div>
									</a>
									<div className="dropdown-footer">
										<a href="#">VIEW ALL</a>
									</div>
								</div>
							</div>
						</div>
						<div className="dropdown main-profile-menu nav nav-item nav-link">
							<a className="profile-user d-flex" href="#"><img alt="" src="/src/assets/img/faces/6.jpg"/>
								<div className="p-text d-none">
									<span className="p-name font-weight-bold">Mintrona Pechon</span>
									<small className="p-sub-text">Premium Member</small>
								</div>
							</a>
							<div className="dropdown-menu">
								<div className="main-header-profile header-img">
									<div className="main-img-user"><img alt="" src="/src/assets/img/faces/6.jpg"/></div>
									<h6>Mintrona Pechon</h6><span>Premium Member</span>
								</div>
								<Link className="dropdown-item" to="/admin/profile"><i className="far fa-user"></i> My Profile</Link>
								<Link className="dropdown-item" to="/"><i className="fas fa-sign-out-alt"></i> Sign Out</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
};
export default Header;