import React from "react";
import { Link} from "react-router-dom";

const Navbar =() =>{

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
      <a className="navbar-brand" href="#">React User</a>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
        
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
         
        </div>
        <Link className="btn btn-outline-light" to="/AddUser">Add User</Link>
      </div>
      </nav>
    );
};

export default Navbar;