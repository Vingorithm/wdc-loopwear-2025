import React, { use, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import profilePicture from "../assets/images/profpic/profile-picture.jpg";
import Logo from "../assets/images/logo.svg";

const HeaderStore = () => {
  const [isSeacrhOpen, setIsSeacrhOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState('Barang');

  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand" href="/" style={styles.logoContainer}>
          <img className='' src={Logo} alt="Loop Wear Logo" style={styles.logo} />
        </a>

        {/* Search Form */}
        <button onClick={() => setIsSeacrhOpen(!isSeacrhOpen)} class="navbar-toggler order-1 order-lg-0 search-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {
            isSeacrhOpen == true ? <i class="bi bi-x-lg"></i> : <i class="bi bi-search"></i>
          }
        </button>

        <div class="collapse navbar-collapse order-3 order-lg-1" id="navbarSupportedContent">
          <form class="d-flex mx-auto w-75 w-sm-100 my-2 " role="search" action="/listproduct">

            <div className='position-relative w-100'>
              <input class="search-input form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-dark dropdown-toggle position-absolute top-0 end-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {searchCategory}
              </button>
              <ul class="dropdown-search dropdown-menu position-absolute top-25 end-0">
                <li><a class="dropdown-item" href="#" onClick={() => setSearchCategory('Barang')}>Barang</a></li>
                <li><a class="dropdown-item" href="#" onClick={() => setSearchCategory('Jasa')}>Jasa</a></li>
              </ul>
            </div>
            <button class="btn btn-search ms-2" type="submit"><i class="bi bi-search"></i></button>
          </form>
        </div>

        {/* Profile Picture */}
        <a className="order-2 order-lg-2" href="/profile">
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
