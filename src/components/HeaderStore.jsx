import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePicture from "../assets/images/profpic/profile-picture.jpg";
import Logo from "../assets/images/logo.svg";

const HeaderStore = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/" style={styles.logoContainer}>
          <img src={Logo} alt="Loop Wear Logo" style={styles.logo} />
        </a>

        {/* Search Form */}
        <form className="d-flex mx-auto" role="search" action="/listproduct">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        {/* Profile Picture */}
        <a href="/profile">
          <img id="userProfile" src={profilePicture} alt="Profile" style={styles.profilePicture} />
        </a>
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
  profilePicture: {
    borderRadius: "100%",
    width: "45px",
    height: "45px",
    border: "1px solid black",
    objectFit: "cover",
    objectPosition: "center",
  },
};

export default HeaderStore;
