import React from "react";
import "../components/style.css";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md bg-body-tertiary fixed-top bg-opacity-75"
      data-bs-theme="dark"
    >
      <div className="container">
        <div className="d-flex">
          <Link to={"/"}>
            <a className="navbar-brand">
              <img
                src="/images/Logo.svg"
                style={{ transform: "scale(4)" }}
                width="70px"
                height="70px"
                alt="Secuirty"
              />
            </a>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse gap-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
            <Link to={"/"} className="nav-item">
              <a className="nav-link" href="">
                Home
              </a>
            </Link>

            {/* <Link to={"/products"} className="nav-item">
              <a className="nav-link" href="">
                Products
              </a>
            </Link> */}
            <Link to={"/about"} className="nav-item">
              <a className="nav-link" href="">
                About
              </a>
            </Link>
            <Link to={"/plans"} className="nav-item">
              <a className="nav-link" href="">
                Plans
              </a>
            </Link>
          </ul>
          <Link to={"/cart"} className="nav-item fs-4 text-white">
            <a className="nav-link" href="cart">
              <FaCartPlus />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
