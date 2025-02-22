import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <a className="navbar-brand" href="#" style={styles.logo}>Loop Wear</a>
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
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Store</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Article</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-dark" onClick={toggleDarkMode} style={styles.toggleBtn}>
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#fff",
    borderBottom: "2px solid #ddd",
    padding: "10px 20px"
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  toggleBtn: {
    marginRight: "20px"
  }
};

export default Header;
