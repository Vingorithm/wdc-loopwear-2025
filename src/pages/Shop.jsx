import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopProfile from '../assets/images/shop/shop.jpg';
import { toast } from "sonner"

// component item
import Item from '../components/Item';
import ChatModal from '../components/ChatModal';
import AddModal from '../components/AddModal';
import OrderServiceModal from '../components/ServiceModal';
import OrderModal from '../components/OrderModal';

// assets
import Image1 from '../assets/images/product/beanie.jpg';
import Image2 from '../assets/images/product/beanie2.jpg';
import Image3 from '../assets/images/product/dress2.jpg';
import Image4 from '../assets/images/product/pants3.jpg';
import Image5 from '../assets/images/product/tshirt3.jpg';
import Image6 from '../assets/images/product/tshirt5.jpg';

const Shop = ({ isUser }) => {
    // status follow
    const [isFollow, setIsFollow] = useState(false);

    // data product
    const [products, setProducts] = useState([
        { id: 1, name: "Grey Aape Beanie", price: 6.2, image: Image1, category: "Accessories", sold: 120, uploadedAt: "2024-02-20" },
        { id: 2, name: "Dark Blue Aape Beanie", price: 90.3, image: Image2, category: "Accessories", sold: 45, uploadedAt: "2024-02-22" },
        { id: 3, name: "Sky Blue Dress", price: 27.54, image: Image3, category: "Clothing", sold: 87, uploadedAt: "2024-02-18" },
        { id: 4, name: "Striped Pants", price: 19.2, image: Image4, category: "Clothing", sold: 65, uploadedAt: "2024-03-25" },
        { id: 5, name: "Racoon Tee", price: 19.2, image: Image5, category: "T-Shirt", sold: 65, uploadedAt: "2024-01-23" },
        { id: 6, name: "Whale T-Shirt", price: 19.2, image: Image6, category: "T-Shirt", sold: 65, uploadedAt: "2024-01-11" },
    ]);

    const [category, setCategory] = useState("All Categories");
    const [filter, setFilter] = useState("Newest First");

    return (
        <>
            <section className="pt-5 pb-5" style={{ backgroundColor: "#FCFBF0" }}>
                {/* Store Information & Details Container  */}
                <section className="container d-flex align-items-center mb-4" style={styles.storeProfileContainer}>
                    <div className="row m-0 d-flex justify-content-between align-items-center w-100">
                        <div className="col-auto d-flex align-items-center p-0">
                            {/* Store Profile */}
                            <img
                                id="shop-picture"
                                src={ShopProfile}
                                alt="Shop Picture"
                                className="img-fluid me-3"
                                style={styles.profilePicture}
                            />

                            {/* Store Details */}
                            <div className="text-start d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center">
                                    <i class="bi bi-patch-check-fill fs-4" style={styles.tierStore}></i>
                                    <h3 className="m-0 me-3" style={styles.storeName}>{isUser ? 'Atma Wear' : 'LoopWearer'}</h3>
                                    <span style={styles.storeStatus}>● Online</span>
                                </div>

                                <span className="mb-2" style={styles.storeLocation}>Yogyakarta</span>

                                {
                                    isUser ?
                                        <button className="btn green-light-btn rounded-1" onClick={() => {
                                            return toast('Link has been copied to clipboard!', {
                                                cancel: {
                                                    label: <i class="bi bi-x-lg"></i>,
                                                    onClick: () => console.log('Cancel!'),
                                                },
                                            })
                                        }}>
                                            <i className="bi bi-share"></i>
                                        </button>
                                        :
                                        <div className="row">
                                            <div className="col">
                                                <button className="btn green-light-btn rounded-1" type="button" data-bs-toggle="modal" data-bs-target="#chatModal" >
                                                    <p className="fw-bold m-0">Chat</p>
                                                </button>
                                            </div>
                                            <ChatModal />
                                            <div className="col">
                                                <button className="btn green-light-btn rounded-1" onClick={() => setIsFollow(!isFollow)}>
                                                    <p className="fw-bold m-0">{isFollow ? 'Unfollow' : 'Follow'}</p>
                                                </button>
                                            </div>
                                            <div className="col">
                                                <button className="btn green-light-btn rounded-1" onClick={() => {
                                                    return toast('Link has been copied to clipboard!', {
                                                        cancel: {
                                                            label: <i class="bi bi-x-lg"></i>,
                                                            onClick: () => console.log('Cancel!'),
                                                        },
                                                    })
                                                }}>
                                                    <i className="bi bi-share"></i>
                                                </button>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>

                        <div className="col-auto d-flex align-items-center gap-4 mt-4 mt-lg-0">
                            <div className="text-center mr-4">
                                <p className="m-0" style={styles.storeInfoStatus}><i className="fas fa-star rating-icon"></i> 4.9</p>
                                <p className="m-0" style={styles.storeInfoDetails}>Rating & Reviews</p>
                            </div>

                            <div className="text-center mr-4">
                                <p className="m-0" style={styles.storeInfoStatus}>± 3 hours</p>
                                <p className="m-0" style={styles.storeInfoDetails}>Seller Response Time</p>
                            </div>

                            <div className="text-center">
                                <p className="m-0" style={styles.storeInfoStatus}>24/7</p>
                                <p className="m-0" style={styles.storeInfoDetails}>Store Operating Hours</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Search Bar, Dropdowns, Add item, etc. */}
                <section className="container align-items-center py-4">
                    <div className="row align-items-center flex-column flex-md-row">
                        <div className="col-md-7 p-0 px-3 px-md-0">
                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-start gap-3">
                                {/* Search Bar */}
                                <div className="position-relative flex-grow-1 w-100 w-md-auto" style={{ minWidth: "200px" }}>
                                    <input
                                        type="text"
                                        className="form-control ps-4 py-2"
                                        placeholder="Search products..."
                                        aria-label="Search"
                                    />
                                </div>

                                {/* Category Dropdown */}
                                <div className="dropdown w-100 w-md-auto">
                                    <button
                                        className="btn green-light-btn rounded-1 dropdown-toggle py-2 w-100 w-md-auto"
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
                                <div className="dropdown w-100 w-md-auto">
                                    <button
                                        className="btn green-light-btn rounded-1 dropdown-toggle py-2 w-100 w-md-auto"
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

                                {
                                    isUser ?
                                        <></>
                                        :
                                        <>
                                            <button className="btn green-light-btn rounded-1 py-2 w-100 w-md-auto"
                                                type="button" data-bs-toggle="modal" data-bs-target="#orderServiceModal"
                                            >
                                                Order Service
                                            </button>
                                            <OrderServiceModal />
                                        </>
                                }

                            </div>
                        </div>
                        <div className="col-md-5 mt-3 mt-md-0 p-0 px-3 px-md-0 ps-md-5 justify-content-center justify-content-md-end d-flex align-items-center">
                            {
                                isUser ?
                                    <>
                                        <button className="btn green-light-btn rounded-1 d-flex justify-content-center align-items-center gap-2 py-2 w-100 w-md-auto me-2" type="button" data-bs-toggle="modal" data-bs-target="#checkOrderModal">
                                            <span>Check Order</span>
                                        </button>
                                        <OrderModal />
                                    </>
                                    :
                                    <></>
                            }

                            {
                                isUser ?
                                    <a className="btn green-light-btn rounded-1 d-flex justify-content-center align-items-center gap-2 py-2 w-100 w-md-auto me-2" href="/checkswap">
                                        <span>Check Swap</span>
                                    </a>
                                    :
                                    <></>
                            }

                            {
                                isUser ?
                                    <>
                                        <button
                                            className="btn green-light-btn rounded-1 d-flex justify-content-center align-items-center gap-2 py-2 w-100 w-md-auto"
                                            type="button" data-bs-toggle="modal" data-bs-target="#addModal">
                                            <span>Add Item</span>
                                        </button>
                                        <AddModal />
                                    </>
                                    :
                                    <></>
                            }


                        </div>
                    </div>
                </section>

                {/* Product List */}
                <section className="container p-0">
                    <div className="row row-cols-2 px-2 justify-content-start p-0">
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
        backgroundColor: '#FCFBF0',
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
    profilePicture: {
        borderRadius: "100%",
        width: "60px",
        height: "60px",
        border: "1px solid black",
        objectFit: "cover",
        objectPosition: "center",
    },
    tierStore: {
        borderRadius: "100%",
        width: "35px",
        height: "35px",
        objectFit: "cover",
        objectPosition: "center",
        color: "#39754B",
    },
};

export default Shop;