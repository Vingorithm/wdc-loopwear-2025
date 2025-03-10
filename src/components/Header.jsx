import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// asset logo
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#222";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  return (
    <nav className="navbar navbar-expand-lg ps-0" style={styles.navbar}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={styles.logoContainer}>
          <img src={Logo} alt="Loop Wear Logo" style={styles.logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link fs-4 mx-sm-3 w-100 mx-auto ${location.pathname === '/' ? 'fw-bold' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fs-4 mx-sm-3 w-100 mx-auto ${location.pathname === '/aboutus' ? 'fw-bold' : ''}`} to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fs-4 mx-sm-3 w-100 mx-auto ${location.pathname.startsWith('/store') ? 'fw-bold' : ''}`} to="/store">Store</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fs-4 mx-sm-3 w-100 mx-auto ${location.pathname === '/articles' ||  location.pathname === '/detailarticles' ? 'fw-bold' : ''}`} to="/articles">Articles</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#FCFBF0",
    borderBottom: "2px solid #ddd",
    padding: "15px 30px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "50px",
    transformOrigin: "center", 
  },
};

export default Header;
