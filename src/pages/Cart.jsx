import React from "react";
import { useState, useEffect } from "react";

// asset product
import Image1 from '../assets/images/cap.png';
import Image2 from '../assets/images/jeans.png';
import Image3 from '../assets/images/tshirt.png';
import Image4 from '../assets/images/pants.png';



const Cart = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "MLB Cap", price: 45, image: Image1, shopName: "Loop Wear", ammount: 1 },
        { id: 2, name: "Men's Jeans", price: 90.30, image: Image2, shopName: "Loop Wear", ammount: 2 },
        { id: 3, name: "Basic T-Shirt", price: 27.50, image: Image3, shopName: "Loop Wear", ammount: 1 },
        { id: 4, name: "Pants", price: 19.20, image: Image4, shopName: "Loop Wear", ammount: 3 },
    ]);

    return (
        <>
            <section style={styles.section}>


                <div className="container">
                    <div className="row">
                        <p className="fw-bold fs-2">Keranjang</p>

                        {
                            products.map((product) => 
                                <div className="card mb-4 border-0" style={styles.featuredCard} key={product.id}>
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
                                                
                                                <div className="d-flex justify-content-between mb-2">
                                                    <h2 style={styles.cardTitle}>{product.name}</h2>
                                                    <h2 style={styles.cardTitle}>${product.price.toFixed(2)}</h2>
                                                </div>
                                                <div className="row">
                                                    <div className="col ms-1">
                                                        <div>
                                                            <div className="btn" style={styles.ammountPart}><i class="bi bi-dash"></i></div>
                                                            <div className="ammount" style={styles.ammountPart}>{product.ammount}</div>
                                                            <div className="btn" style={styles.ammountPart}><i class="bi bi-plus-lg"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className="row">
                        <div className="col"><p className="fw-bold fs-2">Wishlist</p></div>
                        <div className="col">
                            <div class="row align-items-start mb-2">
                                <div className="col d-grid justify-content-end">
                                    <button class="btn dropdown-toggle item-category my-1 p-2 text-center border border-dark me-3 fs-5 fw-light" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '200px'}}>
                                        All
                                    </button>
                                    <ul class="dropdown-menu" >
                                        <li><a class="dropdown-item" href="#">Fav Jacket</a></li>
                                        <li><a class="dropdown-item" href="#">Interesting T-shirt</a></li>
                                        <li><a class="dropdown-item" href="#">Limited Product</a></li>
                                        <li><a class="dropdown-item" href="#"><i class="bi bi-plus-lg me-2"></i>Create New Category...</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

const styles = {
    section: {
        backgroundColor: "#FCFBF0",
        minHeight: '90vh'
    },
    featuredCard: {
        backgroundColor: "#FCFBF0",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        borderRadius: "12px",
        overflow: "hidden",
        padding: '0'
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
    ammountPart: {
        border: '1px solid #1A1816',
        padding: '7px',
    }
}

export default Cart;