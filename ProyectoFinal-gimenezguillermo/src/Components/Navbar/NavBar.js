import React from "react";
import Logo from "../Logo";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <Logo />
          </Link>
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
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={"/category/cubierta"}
                >
                  Cubiertas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={"/category/bateria"}
                >
                  Baterias
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={"/category/accesorio"}
                >
                  Accesorios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/comoComprar">
                  Como Comprar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ayuda">
                  Ayuda
                </NavLink>
              </li>
            </ul>

            <div className="nav-item col-6 d-flex justify-content-end align-items-center">
              <Link to={"/cart"}>
                <CartWidget />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
