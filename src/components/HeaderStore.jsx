import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import profilePicture from "../assets/images/profpic/profile-picture.jpg";
import Logo from "../assets/images/logo.svg";

const HeaderStore = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState('Product');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSearchCategory(category);
  };

  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand" href="/" style={styles.logoContainer}>
          <img className='' src={Logo} alt="Loop Wear Logo" style={styles.logo} />
        </a>

        {/* Search Form */}
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="navbar-toggler order-1 order-lg-0 search-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={styles.searchToggler}
        >
          {
            isSearchOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-search"></i>
          }
        </button>

        <div className="collapse navbar-collapse order-3 order-lg-1" id="navbarSupportedContent">
          <form
            className="d-flex mx-auto w-75 w-sm-100 my-2"
            role="search"
            action={searchCategory == 'Product' ? "/productlist" : "/servicelist"}
            style={styles.searchForm}
          >

            <div className='position-relative w-100' style={styles.searchContainer}>
              <div style={styles.searchIconLeft}>
                <i className="bi bi-search"></i>
              </div>
              <input
                className="search-input form-control"
                type="search"
                placeholder={`Search for ${searchCategory.toLowerCase()}...`}
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                  ...styles.searchInput,
                  boxShadow: isFocused ? '0 0 0 0.25rem rgba(13, 110, 253, 0.25)' : 'none',
                  borderColor: isFocused ? '#86b7fe' : '#ced4da'
                }}
              />
              <div className="position-absolute top-0 end-0">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={styles.categoryButton}
                >
                  {searchCategory}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  style={styles.dropdownMenu}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleCategorySelect('Product')}
                      style={searchCategory === 'Product' ? styles.activeDropdownItem : {}}
                    >
                      <i className="bi bi-box me-2"></i>Product
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleCategorySelect('Service')}
                      style={searchCategory === 'Service' ? styles.activeDropdownItem : {}}
                    >
                      <i className="bi bi-gear me-2"></i>Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="btn btn-search ms-2 hoverable-item"
              type="submit"
              style={styles.searchButton}
            >
              Search
            </button>
          </form>
        </div>

        {/* Profile Picture */}
        {/* <a className="order-2 order-lg-2" href="/profile" style={styles.profileLink}>
          <img id="userProfile" src={profilePicture} alt="Profile" style={styles.profilePicture} />
        </a> */}

        <div
          className="order-2 order-lg-2 position-relative"
          onMouseEnter={() => setIsProfileHovered(true)}
          onMouseLeave={() => setIsProfileHovered(false)}
          style={styles.profileContainer}
        >
          <a href="#" style={styles.profileLink}>
            <img id="userProfile" src={profilePicture} alt="Profile" style={styles.profilePicture} />
          </a>
          {/* Dropdown Menu */}
          {isProfileHovered && (
            <div style={styles.dropdownProfile}>
              <ul style={styles.dropdownProfileList}>
                <li style={styles.dropdownProfileItem} className='hoverable-item'>
                  <a href="/profile" style={styles.dropdownProfileLink}>
                    <i className="bi bi-person me-2"></i>Profile
                  </a>
                </li>
                <li style={styles.dropdownProfileItem} className='hoverable-item'>
                  <a href="/cart" style={styles.dropdownProfileLink}>
                    <i class="bi bi-cart me-2"></i>Cart & Wishlist
                  </a>
                </li>
                {/* <li style={styles.dropdownProfileItem} className='hoverable-item'>
                  <a href="/cart" style={styles.dropdownProfileLink}>
                    <i class="bi bi-ticket-detailed me-2"></i>Discount
                  </a>
                </li> */}
                <li style={styles.dropdownProfileItem} className='hoverable-item'>
                  <a href="/historyorder" style={styles.dropdownProfileLink}>
                    <i class="bi bi-clock-history me-2"></i>History
                  </a>
                </li>
                <li style={styles.dropdownProfileItem} className='hoverable-item'>
                  <a href="/myshop" style={styles.dropdownProfileLink}>
                    <i class="bi bi-shop me-2"></i>My Shop
                  </a>
                </li>
                <li style={styles.dropdownProfileItem} className='hoverable-item'>
                  <a href="/login" style={styles.dropdownProfileLink}>
                    <i className="bi bi-box-arrow-right me-2"></i>Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
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
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
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
  searchForm: {
    transition: "all 0.3s ease",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  searchIconLeft: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#aaa",
    zIndex: 10,
  },
  searchInput: {
    height: "46px",
    borderRadius: "3px",
    paddingLeft: "40px",
    paddingRight: "120px",
    fontSize: "16px",
    borderWidth: "2px",
    backgroundColor: "#fff",
    transition: "all 0.3s ease",
  },
  categoryButton: {
    height: "46px",
    backgroundColor: "transparent",
    color: "#555",
    borderLeft: "1px solid #ddd",
    borderRadius: "0 3px 3px 0",
    fontWeight: "500",
    transition: "all 0.2s ease",
  },
  dropdownMenu: {
    borderRadius: "12px",
    border: "none",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)",
    overflow: "hidden",
    padding: "8px 0",
  },
  activeDropdownItem: {
    backgroundColor: "#f8f9fa",
    color: "#0d6efd",
    fontWeight: "500",
  },
  searchButton: {
    height: "46px",
    borderRadius: "3px",
    padding: "0 20px",
    backgroundColor: "#212529",
    color: "#fff",
    fontWeight: "500",
    transition: "all 0.2s ease",
    border: "none",
  },
  searchToggler: {
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  // profileLink: {
  //   transition: "transform 0.2s ease",
  //   display: "inline-block",
  // },
  // profilePicture: {
  //   borderRadius: "100%",
  //   width: "45px",
  //   height: "45px",
  //   border: "2px solid #212529",
  //   objectFit: "cover",
  //   objectPosition: "center",
  //   boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  //   transition: "all 0.2s ease",
  // },

  profileContainer: {
    position: "relative",
  },
  profileLink: {
    transition: "transform 0.2s ease",
    display: "inline-block",
  },
  profilePicture: {
    borderRadius: "100%",
    width: "45px",
    height: "45px",
    border: "2px solid #212529",
    objectFit: "cover",
    objectPosition: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "all 0.2s ease",
  },
  dropdownProfile: {
    position: "absolute",
    top: "100%",
    right: "0",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)",
    padding: "8px 0",
    zIndex: 1000,
    minWidth: "160px",
    backgroundColor: '#FCFBF0',
    color: "#1A1816",
  },
  dropdownProfileList: {
    listStyle: "none",
    margin: "0",
    padding: "0",
    backgroundColor: '#FCFBF0',
    color: "#1A1816",
  },
  dropdownProfileItem: {
    backgroundColor: '#FCFBF0',
    color: "#1A1816",
    padding: "8px 16px",
  },
  dropdownProfileLink: {
    backgroundColor: '#FCFBF0',
    color: "#1A1816",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
  },
};

export default HeaderStore;