import Header from '../common/Header';
import Footer from '../common/Footer';
import MenuBar from '../common/MenuBar';
import { Outlet } from 'react-router-dom';
let AdminLayout=()=>{
    return (
        <div> 
           <Header/>
           <MenuBar/>
             <div className="main-content horizontal-content">
                <Outlet/>
             </div>
           <Footer/>
        </div>
    )
}

export default AdminLayout;