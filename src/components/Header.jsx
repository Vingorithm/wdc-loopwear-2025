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
        {/* <button className="btn btn-outline-dark" onClick={toggleDarkMode} style={styles.toggleBtn}>
          {darkMode ? "Light" : "Dark"}
        </button> */}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#FCFBF0",
    borderBottom: "2px solid #ddd",
    padding: "15px 30px"
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
