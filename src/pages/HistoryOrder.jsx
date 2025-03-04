import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

// component item
import Item from '../components/Item';
import DetailModal from "../components/DetailModal";
import ReviewModal from "../components/ReviewModal";

// asset product
import Image1 from '../assets/images/cap.png';
import Image2 from '../assets/images/jeans.png';
import Image3 from '../assets/images/tshirt.png';
import Image4 from '../assets/images/pants.png';

const HistoryOrder = () => {
    // data product
    const [products, setProducts] = useState([
        { id: 1, name: "MLB Cap", price: 45, image: Image1, category: "Accessories", sold: 120, boughtAt: "2024-02-20", trackingNumber: "ILW/XII/031456789" },
        { id: 2, name: "Men's Jeans", price: 90.30, image: Image2, category: "Jeans", sold: 45, boughtAt: "2024-02-22", trackingNumber: "ILW/TLL/987654321" },
        { id: 3, name: "Basic T-Shirt", price: 27.50, image: Image3, category: "T-Shirt", sold: 87, boughtAt: "2024-02-18", trackingNumber: "ILW/TLL/567891234" },
        { id: 4, name: "Pants", price: 19.20, image: Image4, category: "Clothing", sold: 65, boughtAt: "2024-02-25", trackingNumber: "ILW/XCV/345678912" },
    ]);

    const [filter, setFilter] = useState("Newest First");
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 800);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        AOS.refresh();

        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 800);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <section className="pt-3" style={{ backgroundColor: "#FCFBF0" }}>
                <div className="container">

                    {/* Search Bar, Dropdown Filters */}
                    <section className="container align-items-center">
                        <div className="page-title">
                            <h3 style={styles.pageTitle}>History Order</h3>
                        </div>
                        <div className="row align-items-center flex-column flex-md-row">
                            <div className="col-12 col-md-7 d-flex flex-column flex-sm-row justify-content-start gap-4">
                                {/* Search Bar */}
                                <div className="position-relative w-100 w-md-auto" style={{ minWidth: isLargeScreen ? "450px" : "auto" }}>
                                    <input
                                        type="text"
                                        className="form-control ps-4 py-2"
                                        placeholder="Search products..."
                                        aria-label="Search"
                                    />
                                </div>

                                {/* Filter Dropdown */}
                                <div className="dropdown w-100 w-md-auto">
                                    <button
                                        className="btn btn-outline-success dropdown-toggle py-2 w-100 w-md-auto"
                                        type="button"
                                        id="filterDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {filter}
                                    </button>
                                    <ul className="dropdown-menu w-100 w-md-auto" aria-labelledby="filterDropdown">
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
                            </div>
                        </div>
                    </section>

                    {/* Lists of History Order */}
                    <section style={styles.section} className="pt-4 pb-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    {products
                                        .sort((a, b) => {
                                            if (filter === "Newest First") {
                                                return new Date(b.boughtAt) - new Date(a.boughtAt);
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
                                                <div className="card mb-4 border-0" style={styles.featuredCard} data-aos="fade-up">
                                                    <div className="row g-0">
                                                        <div className="col-md-3">
                                                            <img
                                                                src={product.image}
                                                                alt="Sustainable clothing care"
                                                                className="img-fluid rounded-start"
                                                                style={styles.featuredImage}
                                                            />
                                                        </div>
                                                        <div className="col-md-9">
                                                            <div className="card-body p-4">
                                                                <p className="text-muted m-0" data-aos="fade-right" data-aos-delay="400">
                                                                    {new Date(product.boughtAt).toLocaleDateString("id-ID", {
                                                                        day: "2-digit",
                                                                        month: "short",
                                                                        year: "numeric",
                                                                    })} - {product.trackingNumber}
                                                                </p>
                                                                <div className="d-flex justify-content-between mb-2">
                                                                    <h2 style={styles.cardTitle} data-aos="fade-right" data-aos-delay="300">{product.name}</h2>
                                                                    <h2 style={styles.cardTitle} data-aos="fade-right" data-aos-delay="300">${product.price.toFixed(2)}</h2>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 align-items-center justify-content-end d-flex gap-2">
                                                                        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#orderDetail">
                                                                            Details
                                                                        </button>
                                                                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#reviewProduct">
                                                                            Review</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Detail Modal Component */}
                                                <DetailModal
                                                    id="orderDetail"
                                                    name={product.name}
                                                    boughtAt={product.boughtAt}
                                                    trackingNumber={product.trackingNumber}
                                                    price={product.price}
                                                    image={product.image}
                                                />

                                                {/* Review Modal Component */}
                                                <ReviewModal
                                                    id="reviewProduct"
                                                    name={product.name}
                                                    image={product.image}
                                                />
                                            </>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

const styles = {
    pageTitle: {
        fontSize: "2.5rem",
        fontWeight: "500",
        marginBottom: "24px",
        color: "1A1816",
        textShadow: "0 2px 4px rgba(0,0,0,0.2)"
    },
    section: {
        backgroundColor: "#FCFBF0",
    },
    featuredCard: {
        backgroundColor: "#FCFBF0",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        borderRadius: "12px",
        overflow: "hidden"
    },
    featuredImage: {
        height: "200px",
        width: "100%",
        objectFit: "cover"
    },
    cardTitle: {
        color: "#1A1816",
        fontWeight: "600",
        // marginTop: "8px",
        marginBottom: "8px"
    },
    cardText: {
        color: "#1A1816",
        opacity: "0.8"
    },
    button: {
        backgroundColor: "#39754B",
        color: "#FCFBF0",
        borderRadius: "6px",
        padding: "10px 20px",
        border: "none",
        fontWeight: "500",
        transition: "all 0.2s ease"
    },
}


export default HistoryOrder;