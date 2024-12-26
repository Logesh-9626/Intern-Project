import React from "react";
import { Link } from "react-router-dom";


const NavBar=()=>{

  
    
    return(
        <>
       
       <div  style={{ zIndex: 1000,backgroundColor :"#77b1b5",position: "sticky",top:0 }}>
      <nav className="navbar navbar-expand-lg navbar-light px-5 shadow " >
        <div className="container-fluid">
    
          <a className="navbar-brand" href="#">
           INTER PRO
          </a>
      
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item me-5">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to="/RegisterPage" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to="/Login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>


        </>
    )
}

export default NavBar;