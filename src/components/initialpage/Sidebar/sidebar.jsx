
/**
 * App Header
 */

 import React from 'react';
 import { withRouter } from 'react-router-dom';
 import { Link } from 'react-router-dom';
 import 'font-awesome/css/font-awesome.min.css';

 import '../../assets/css/font-awesome.min.css';
 import '../../assets/css/line-awesome.min.css';
 
 import 'bootstrap/dist/css/bootstrap.min.css';
 import "../../assets/css/bootstrap.min.css";
 import '../../assets/css/select2.min.css';
 import '../../assets/js/app';
 import "../../assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css";
 import "../../assets/css/bootstrap-datetimepicker.min.css";
 import '../../assets/css/style.css';
 import { useLocation } from 'react-router-dom';

 const Sidebar = () => {

  const location = useLocation();
  let pathname = location.pathname;

  return (
      <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className={pathname.includes('/') ?"active" :""}> 
              <Link to = "/"><i className="la la-home" /> <span> Dashboard</span></Link>
            </li>
                {/* Vendor */}
                <li className="submenu text-start">
              <a href="#"><i className="la la-gift" /> <span> Vendor</span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
              <li>
                  <Link className={pathname.includes('/vendor') ?"active" :""} to="/vendor/add">
                  Add  Vendor
                  </Link>
                </li>
                <li>
                  <Link className={pathname.includes('/vendor') ?"active" :""} to="/vendor/status">
                    Vendor details
                  </Link>
                </li>

               
              </ul>
            </li>
            
           
          </ul>
        </div>
      </div>
    </div>
     
    );
 
}

export default Sidebar;