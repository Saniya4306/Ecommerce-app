import * as React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {
  const state = useSelector((state) => state.HandleCart);


  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-body-light  bg-light py-2 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-2" to="/">
            FlexCart <i className="fa fa-check-square-o" aria-hidden="true"></i>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/Login" className="btn btn-outline-dark ms-2 ">
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>
              <NavLink to="/Register" className="btn btn-outline-dark  ms-2">
                <i className="fa fa-user me-1"></i>Register
              </NavLink>
              <NavLink to="/Cart" className="btn btn-outline-dark  ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length}
                )
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
