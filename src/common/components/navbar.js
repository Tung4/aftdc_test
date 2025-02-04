import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Navbar Start */}
      <div className="container-fluid p-0 mb-3">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-2 py-lg-0 px-lg-5">
          <a href className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-5 text-uppercase">
              <span className="text-primary">News</span>Room
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto py-0">
              {/* <a
                href="/"
                className={`nav-item nav-link ${
                  currentPath === "/" ? "active" : ""
                }`}
              >
                Home
              </a> */}
              <NavLink
                to="/home"
                activeClassName="active"
                className="nav-item nav-link"
              >
                Home
              </NavLink>
              <NavLink
                to="/category"
                activeClassName="active"
                className="nav-item nav-link"
              >
                Categories
              </NavLink>
              <NavLink
                to="/news"
                activeClassName="active"
                className="nav-item nav-link"
              >
                Single News
              </NavLink>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="#" className="dropdown-item">
                    Menu item 1
                  </a>
                  <a href="#" className="dropdown-item">
                    Menu item 2
                  </a>
                  <a href="#" className="dropdown-item">
                    Menu item 3
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>

            <div
              className="input-group ml-auto"
              style={{ width: "100%", maxWidth: "300px" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Keyword"
              />
              <div className="input-group-append">
                <button className="input-group-text text-secondary">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </>
  );
}

export default Navbar;
