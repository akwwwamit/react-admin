import { Link, useNavigate } from "react-router-dom";
import {getToken} from "../library/Library";
let Header = () => {
	let navigate=useNavigate();
	let logout = () => {
		localStorage.removeItem("userInfo");
		navigate('/');
	}
 let userInfo = getToken();
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

						<div className="dropdown main-profile-menu nav nav-item nav-link">
							<a className="profile-user d-flex" href="#"><img alt="" src={userInfo.image}/>
								<div className="p-text d-none">
									<span className="p-name font-weight-bold">Mintrona Pechon</span>
									<small className="p-sub-text">Premium Member</small>
								</div>
							</a>
							<div className="dropdown-menu">
								<div className="main-header-profile header-img">
									<div className="main-img-user"><img alt={userInfo.firstName} src={userInfo.image}/></div>
									<h6>{userInfo.firstName} {userInfo.lastName}</h6><span>{userInfo.email}</span>
								</div>
								<Link className="dropdown-item" to="/admin/profile"><i className="far fa-user"></i> My Profile</Link>
								<a className="dropdown-item" href="#" onClick={logout}><i className="fas fa-sign-out-alt"></i> Sign Out</a>
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