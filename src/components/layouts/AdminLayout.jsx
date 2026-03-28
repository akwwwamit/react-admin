import { Outlet } from "react-router-dom";
import Header from '../common/Header';
// import '../../assets/materialize/css/materialize.min.css';
// import '../../assets/css/bootstrap.css';
// import '../../assets/css/font-awesome.css';
// import '../../assets/js/morris/morris-0.4.3.min.css';
// import '../../assets/css/custom-styles.css';
// import '../../assets/js/Lightweight-Chart/cssCharts.css';

// import '../../assets/js/jquery-1.10.2';
// import '../../assets/js/bootstrap.min.js';
// //import '../../assets/materialize/js/materialize.min.js';
// import '../../assets/js/jquery.metisMenu.js';

// //import '../../assets/js/morris/raphael-2.1.0.min.js';
//  import '../../assets/js/morris/morris.js';
// // import '../../assets/js/easypiechart.js';
// // import '../../assets/js/easypiechart-data.js';
//  import '../../assets/js/Lightweight-Chart/jquery.chart.js';
// // import '../../assets/js/custom-scripts.js';
let AdminLayout=()=>{
    return (
        <div>
            <div id="wrapper">
                 <nav className="navbar navbar-default top-navbar" role="navigation">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle waves-effect waves-dark" data-toggle="collapse"
					data-target=".sidebar-collapse">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<a className="navbar-brand waves-effect waves-dark" href="index-2.html"><i
						className="large material-icons">track_changes</i> <strong>target</strong></a>

				<div id="sideNav" href="#"><i className="material-icons dp48">toc</i></div>
			</div>

			<ul className="nav navbar-top-links navbar-right">
				<li><a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown4"><i
							className="fa fa-envelope fa-fw"></i> <i className="material-icons right">arrow_drop_down</i></a>
				</li>
				<li><a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown3"><i
							className="fa fa-tasks fa-fw"></i> <i className="material-icons right">arrow_drop_down</i></a></li>
				<li><a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown2"><i
							className="fa fa-bell fa-fw"></i> <i className="material-icons right">arrow_drop_down</i></a></li>
				<li><a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown1"><i
							className="fa fa-user fa-fw"></i> <b>John Doe</b> <i
							className="material-icons right">arrow_drop_down</i></a></li>
			</ul>
		</nav>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout;