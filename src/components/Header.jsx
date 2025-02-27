import React, { useState } from "react";

// asset logo
import Logo from "../assets/images/logo.svg";

// inline style
import style from '../inline-styles/style.js';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#222";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={styles.logoContainer}>
          <img src={Logo} alt="Loop Wear Logo" style={styles.logo} />
        </a>
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
              <a className="nav-link fs-4 mx-3" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4 mx-3" href="/aboutus">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4 mx-3" href="/store">Store</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4 mx-3" href="/articles">Articles</a>
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
    transform: "scale(5)",
    transformOrigin: "center", 
    marginLeft: "30px",
    marginTop: "3px",
  },
};

export default Header;
