import React, { useContext, useState } from "react";
import logoDrip from "../assets/logo/Vector.svg";
import cartDrip from "../assets/logo/carrinho.svg";
import { NavLink, Link } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setSearchTerm } = useContext(SearchContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const getNavLinkClass = ({ isActive }) =>
    `nav-link ${styles.linkHover} ${isActive ? styles.active : ""}`;

  return (
    <header className="sticky-top bg-light shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light px-4 py-3">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="#">
            <img
              src={logoDrip}
              alt="Logo"
              className="me-2"
              style={{ width: "40px", height: "40px" }}
            />
            <span
              className="text-pink fw-bold"
              style={{ color: "#d10f7d", fontSize: "1.5rem" }}
            >
              Digital Store
            </span>
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <form
              className="d-flex mx-auto w-100 mt-3 mt-lg-0 justify-content-lg-center"
              onSubmit={handleSearch}
            >
              <input
                className={`${styles.form}`}
                type="search"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar produto..."
                aria-label="Search"
                style={{ maxWidth: "350px", padding: "0.5rem" }}
              />
              <button
                className={`btn btn-outline ${styles.pesquisa}`}
                type="submit"
              >
                <i className="bi bi-search"></i>
              </button>
            </form>

            <ul className="navbar-nav me-auto mt-3 mt-lg-0 d-xl-flex d-lg-none">
              <li className="nav-item">
                <NavLink
                  to="/DripStore/Home"
                  className={getNavLinkClass}
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/DripStore/Produtos"
                  className={getNavLinkClass}
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    color: "black",
                  }}
                >
                  Produtos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/DripStore/Categorias"
                  className={getNavLinkClass}
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    color: "black",
                  }}
                >
                  Categoria
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/DripStore/MeusPedidos"
                  className={getNavLinkClass}
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    color: "black",
                  }}
                >
                  Meus Pedidos
                </NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center mt-3 mt-lg-0">
              <NavLink
                to="/DripStore/Formulario"
                className="me-3 text-decoration-none fw-bold"
                style={{
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  color: "#00bcd4",
                }}
              >
                Cadastre-se
              </NavLink>
              <Link
                className="btn btn-pink text-white fw-bold"
                style={{ backgroundColor: "#d10f7d" }}
              >
                Entrar
              </Link>
              <NavLink to="/DripStore/MeusPedidos" className="ms-3">
                <img
                  src={cartDrip}
                  alt="Carrinho"
                  style={{ width: "30px", height: "30px" }}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Navegação Desktop */}
      <div className="container col d-lg-flex d-none d-xl-none d-md-none">
        <ul className="navbar-nav me-auto d-flex flex-row mt-lg-0">
          <li className="nav-item mx-2">
            <NavLink
              to="/DripStore/Home"
              className={getNavLinkClass}
              style={{
                fontSize: "14px",
                whiteSpace: "nowrap",
                fontWeight: "bold",
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              to="/DripStore/Produtos"
              className={getNavLinkClass}
              style={{ fontSize: "14px", whiteSpace: "nowrap", color: "black" }}
            >
              Produtos
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              to="/DripStore/Categorias"
              className={getNavLinkClass}
              style={{ fontSize: "14px", whiteSpace: "nowrap", color: "black" }}
            >
              Categoria
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              to="/DripStore/MeusPedidos"
              className={getNavLinkClass}
              style={{ fontSize: "14px", whiteSpace: "nowrap", color: "black" }}
            >
              Meus Pedidos
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;