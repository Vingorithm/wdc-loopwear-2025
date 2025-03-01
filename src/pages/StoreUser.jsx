import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// component item
import Item from '../components/Item';

// assets
import Image1 from '../assets/images/cap.png';
import Image2 from '../assets/images/jeans.png';
import Image3 from '../assets/images/tshirt.png';
import Image4 from '../assets/images/pants.png';
import profilePicture from "../assets/images/profpic/profile-picture.jpg";

const StoreUser = () => {
    // data product
    const [products, setProducts] = useState([
        { id: 1, name: "MLB Cap", price: 6.2, image: Image1, category: "Accessories", sold: 120, uploadedAt: "2024-02-20" },
        { id: 2, name: "Men's Jeans", price: 90.3, image: Image2, category: "Jeans", sold: 45, uploadedAt: "2024-02-22" },
        { id: 3, name: "Basic T-Shirt", price: 27.54, image: Image3, category: "T-Shirt", sold: 87, uploadedAt: "2024-02-18" },
        { id: 4, name: "Pants", price: 19.2, image: Image4, category: "Clothing", sold: 65, uploadedAt: "2024-02-25" },
    ]);

    const [category, setCategory] = useState("All Categories");
    const [filter, setFilter] = useState("Newest First");

    return (
        <>
            <section className="pt-5" style={{ backgroundColor: "#FCFBF0" }}>
                {/* Store Information & Details Container  */}
                <section className="container d-flex align-items-center mb-4" style={styles.storeProfileContainer}>
                    <div className="row m-0 d-flex justify-content-between align-items-center w-100">
                        <div className="col-auto d-flex align-items-center p-0">
                            {/* Store Profile */}
                            <img
                                id="userProfile"
                                src={profilePicture}
                                alt="Profile Picture"
                                className="img-fluid me-3"
                                style={styles.profilePicture}
                            />

                            {/* Store Details */}
                            <div className="text-start d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center">
                                    <img
                                        id="tierStore"
                                        src={profilePicture}
                                        alt="Tier Store"
                                        className="img-fluid me-2"
                                        style={styles.tierStore}
                                    />
                                    <h3 className="m-0 me-3" style={styles.storeName}>I&K Official Store</h3>
                                    <span style={styles.storeStatus}>● Online</span>
                                </div>

                                {/* <span style={styles.storeLocation}>Jakarta Pusat</span> */}
                                <span className="mb-2" style={styles.storeDescription}>Senantiasa hadir memenuhi kebutuhan Anda!</span>

                                <button className="btn btn-outline-success" >
                                    <i className="bi bi-share"></i>
                                </button>
                            </div>
                        </div>

                        <div className="col-auto d-flex align-items-center gap-4">
                            <div className="text-center mr-4">
                                <p className="m-0" style={styles.storeInfoStatus}><i className="fas fa-star rating-icon"></i> 4.9</p>
                                <p className="m-0" style={styles.storeInfoDetails}>Rating & Reviews</p>
                            </div>

                            {/* <div className="vertical-divider"></div> */}

                            <div className="text-center mr-4">
                                <p className="m-0" style={styles.storeInfoStatus}>± 3 hours</p>
                                <p className="m-0" style={styles.storeInfoDetails}>Order Processing Time</p>
                            </div>

                            {/* <div className="vertical-divider"></div> */}

                            <div className="text-center">
                                <p className="m-0" style={styles.storeInfoStatus}>Buka 24 jam</p>
                                <p className="m-0" style={styles.storeInfoDetails}>Store Operating Hours</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Search Bar, Dropdowns, Add item, etc. */}
                <section className="container align-items-center py-4">
                    <div className="row align-items-center">
                        <div className="col-9 p-0">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                {/* Search Bar */}
                                <div className="position-relative flex-grow-1" style={{ minWidth: "200px" }}>
                                    <input
                                        type="text"
                                        className="form-control ps-4 py-2"
                                        placeholder="Search products..."
                                        aria-label="Search"
                                    />
                                </div>

                                {/* Category Dropdown */}
                                <div className="dropdown">
                                    <button
                                        className="btn btn-outline-success dropdown-toggle py-2"
                                        type="button"
                                        id="categoryDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {category}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                                        <li>
                                            <button className="dropdown-item" onClick={() => setCategory("All Categories")}>
                                                All Categories
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" onClick={() => setCategory("Clothing")}>
                                                Clothing
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" onClick={() => setCategory("Jacket")}>
                                                Jacket
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" onClick={() => setCategory("Jeans")}>
                                                Jeans
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" onClick={() => setCategory("T-Shirt")}>
                                                T-Shirt
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" onClick={() => setCategory("Accessories")}>
                                                Accessories
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                {/* Filter Dropdown */}
                                <div className="dropdown">
                                    <button
                                        className="btn btn-outline-success dropdown-toggle py-2"
                                        type="button"
                                        id="filterDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {filter}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="filterDropdown">
                                        <li>
                                            <button className="dropdown-item" onClick={() => setFilter("Newest First")}>
                                                Newest First
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" onClick={() => setFilter("Price: Low to High")}>
                                                Price: Low to High
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" onClick={() => setFilter("Price: High to Low")}>
                                                Price: High to Low
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" onClick={() => setFilter("Best Selling")}>
                                                Best Selling
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex flex-grow-1"></div>
                            </div>
                        </div>
                        <div className="col-3 p-0 justify-content-end d-flex">
                            {/* Add Item Button */}
                            <button className="btn btn-outline-success d-flex align-items-center gap-2 py-2">
                                <span>Add Item</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Product List */}
                <section className="container p-0">
                    <div className="row justify-content-between p-0">
                        {products
                            .filter((product) => {
                                if (category !== "All Categories") {
                                    return product.category === category;
                                }
                                return true;
                            })
                            .sort((a, b) => {
                                if (filter === "Newest First") {
                                    return new Date(b.uploadDate) - new Date(a.uploadDate);
                                } else if (filter === "Price: Low to High") {
                                    return a.price - b.price;
                                } else if (filter === "Price: High to Low") {
                                    return b.price - a.price;
                                } else if (filter === "Best Selling") {
                                    return b.sold - a.sold;
                                }
                                return 0;
                            })
                            .map((product) => (
                                <>
                                    <Item key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
                                </>
                            ))}
                    </div>
                </section>
            </section>
        </>
    );

};

const styles = {
    storeProfileContainer: {
        padding: "15px",
        border: "0.8px solid rgba(46, 49, 55, 0.12)",
        borderRadius: "8px",
    },
    storeName: {
        fontSize: "25px",
        fontWeight: "bold",
    },
    storeStatus: {
        fontSize: "14px",
        color: "#39754B",
        fontWeight: "bold",

    },
    storeLocation: {
        fontSize: "14px",
        color: "#6c757d",
    },
    storeDescription: {
        fontSize: "14px",
        color: "#6c757d",
    },
    storeInfoStatus: {
        fontWeight: "bold",
    },
    storeInfoDetails: {
        color: "#6c757d",
    },
    profilePicture: {
        borderRadius: "100%",
        width: "50px",
        height: "50px",
        border: "1px solid black",
        objectFit: "cover",
        objectPosition: "center",
    },
    tierStore: {
        borderRadius: "100%",
        width: "20px",
        height: "20px",
        border: "1px solid black",
        objectFit: "cover",
        objectPosition: "center",
    },
};

export default StoreUser;