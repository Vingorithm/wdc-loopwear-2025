import React from "react";
import { useState, useEffect } from "react";

// asset product
import Image1 from '../assets/images/cap.png';
import Image2 from '../assets/images/jeans.png';
import Image3 from '../assets/images/tshirt.png';
import Image4 from '../assets/images/pants.png';

import Shop from '../assets/images/shop/shop.webp';

// component item
import Item from '../components/Item';

const Cart = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "MLB Cap", price: 45, image: Image1, shopName: "Loop Wear", ammount: 1 },
        { id: 2, name: "Men's Jeans", price: 90.30, image: Image2, shopName: "Loop Wear", ammount: 2 },
        { id: 3, name: "Basic T-Shirt", price: 27.50, image: Image3, shopName: "Loop Wear", ammount: 1 },
        { id: 4, name: "Pants", price: 19.20, image: Image4, shopName: "Loop Wear", ammount: 3 },
    ]);

    const items = [
        { id: 1, name: "Phone Case", price: 6.2, image: Image1 },
        { id: 2, name: "Hoodie Sweatshirt", price: 90.3, image: Image2, oldPrice: 129 },
        { id: 3, name: "Basic T-Shirt", price: 27.54, image: Image3 },
        { id: 4, name: "Baseball Cap", price: 19.2, image: Image4 },
      ];

    return (
        <>
            <section className="py-3 py-sm-5" style={styles.section}>


                <div className="container">

                    <p className="fw-bold fs-2">Keranjang</p>

                    <div className="row overflow-y-scroll" style={{
                        height: '50vh',
                    }}>

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
                                                    <div className="col-7 ms-1">
                                                        <a href="/shop" className="text-decoration-none" style={{
                                                            color: '#1A1816'
                                                        }}>
                                                            <div>
                                                                <img src={Shop} alt="shop image" className="rounded-circle border border-black object-fit-cover" style={{
                                                                    width: '30px',
                                                                }}/>
                                                                <p className="fw-bold fs-5 d-inline ms-2 ">Loopwear</p>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    <div className="col">
                                                        <div className="row column-gap-1">
                                                            <div className="col d-flex justify-content-center align-items-center hoverable-item" style={styles.ammountPart}><i class="bi bi-dash"></i></div>
                                                            <div className="col ammount d-flex justify-content-center align-items-center hoverable-item" style={styles.ammountPart}>{product.ammount}</div>
                                                            <div className="col d-flex justify-content-center align-items-center hoverable-item" style={styles.ammountPart}><i class="bi bi-plus-lg"></i></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row justify-content-end p-0">
                                                    <div className="col text-end px-0 py-3">
                                                        <button className="dark-btn px-5 py-1" >Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className="row mt-5">
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

                    <div className="row">
                        <div className="col">
                            <div className="row justify-content-between mb-4 overflow-y-scroll" style={{
                        height: '50vh',
                    }}>
                            {products.map((product) => (
              <Item key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
            ))}
            {products.map((product) => (
              <Item key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
            ))}
            {products.map((product) => (
              <Item key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
            ))}
            {products.map((product) => (
              <Item key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
            ))}
            {products.map((product) => (
              <Item key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
            ))}
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