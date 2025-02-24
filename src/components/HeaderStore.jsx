import React from "react";
import profilePicture from '../assets/images/profile-picture.jpg';

const HeaderStore = () => {
    return (
        <>
            <nav class="navbar" style={styles.navbar}>
                <div class="container-fluid">
                    <a className="navbar-brand" href="/store" style={styles.logo}>Loop Wear</a>

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <a href="/profile">
                        <img id="userProfile" src={profilePicture} alt="" style={styles.profilePicture} />
                    </a>
                </div>
            </nav>
        </>
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
    profilePicture: {
        borderRadius: "100%",
        width: "45px",
        height: "45px",
        border: "1px solid black",
        objectFit: "cover",
        objectPosition: "center"
    }
};

export default HeaderStore;
