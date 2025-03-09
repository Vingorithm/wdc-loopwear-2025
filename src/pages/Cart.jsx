import React from "react";
import { toast } from "sonner"
import { useState, useEffect } from "react";

// asset product
import Image1 from '../assets/images/product/pants2.jpg';
import Image2 from '../assets/images/product/dress.jpeg';
import Image3 from '../assets/images/product/tshirt.png';
import Image4 from '../assets/images/product/tshirt2.jpg';
import Image5 from '../assets/images/product/sweater.jpg';
import Image6 from '../assets/images/product/jeans2.jpg';
import Image7 from '../assets/images/product/tshirt6.jpg';

import Shop2 from '../assets/images/shop/shop2.png';
import Shop3 from '../assets/images/shop/shop3.png';
import Shop4 from '../assets/images/shop/shop4.png';
import Shop5 from '../assets/images/shop/shop5.png';
import BuyModal from '../components/BuyModal';

// component item
import Item from '../components/Item';

const Cart = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "Giordano Hotpants", price: 45, image: Image1, shop: Shop2, shopName: "Liceria", ammount: 1 },
        { id: 2, name: "Mini Dress", price: 90.30, image: Image2, shop: Shop3, shopName: "Larana Official Store", ammount: 2 },
        { id: 3, name: "Basic T-Shirt", price: 27.50, image: Image3, shop: Shop4, shopName: "Borcelle Streetwear", ammount: 1 },
        { id: 4, name: "Japanese Cat T-Shirt", price: 19.20, image: Image4, shop: Shop5, shopName: "Hanover", ammount: 3 },
    ]);

    const [otherProducts, setOtherProducts] = useState([
        { id: 5, name: "Maevy Sweater", price: 45, image: Image5, ammount: 1 },
        { id: 6, name: "Nevada Jeans", price: 90.30, image: Image6, ammount: 2 },
        { id: 7, name: "Light Blue T-Shirt", price: 27.50, image: Image7, ammount: 1 },
    ]);

    return (
        <>
            <section className="py-3 py-sm-5" style={styles.section}>

                <BuyModal />
                <div className="container">

                    <p className="fw-bold fs-2"><i class="bi bi-cart-fill me-2"></i>Cart</p>

                    <div className="row overflow-y-scroll px-2" style={{
                        height: '50vh',
                    }}>

                        {
                            products.map((product) =>
                                <div className="card mb-4 border-0" style={styles.featuredCard} key={product.id}>
                                    <div className="row g-0">
                                        <div className="col-md-3">
                                            <a href="/detailproduct">
                                            <img
                                                src={product.image}
                                                alt="Sustainable clothing care"
                                                className="img-fluid rounded-start"
                                                style={styles.featuredImage}
                                            />
                                            </a>
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
                                                                <img src={product.shop} alt="shop image" className="rounded-circle border border-black object-fit-cover" style={{
                                                                    width: '30px',
                                                                }} />
                                                                <p className="fw-bold fs-5 d-inline ms-2 ">{product.shopName}</p>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    {/* <div className="col">
                                                        <div className="row column-gap-1">
                                                            <div className="col d-flex justify-content-center align-items-center hoverable-item light-btn" style={styles.ammountPart}><i class="bi bi-dash"></i></div>
                                                            <div className="col ammount d-flex justify-content-center align-items-center hoverable-item" style={styles.ammountPart}>{product.ammount}</div>
                                                            <input type="number" className="col ammount d-flex justify-content-center align-items-center hoverable-item text-center" min='1' style={styles.ammountPart} />
                                                            <div className="col d-flex justify-content-center align-items-center hoverable-item light-btn" style={styles.ammountPart}><i class="bi bi-plus-lg"></i></div>
                                                        </div>
                                                    </div> */}
                                                </div>

                                                <div className="row justify-content-end p-0">
                                                    <div className="col text-end px-0 py-3">
                                                        <button className="dark-btn px-5 py-1 me-2 rounded-1" onClick={() => {
                                                            return toast('Product has been removed from cart!', {
                                                                cancel: {
                                                                    label: <i class="bi bi-x-lg"></i>,
                                                                    onClick: () => console.log('Cancel!'),
                                                                },
                                                            })
                                                        }}>Remove</button>
                                                        <button className="px-5 py-1 rounded-1 green-dark-btn" type="button" data-bs-toggle="modal" data-bs-target="#buyModal">Buy</button>
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
                        <div className="col"><p className="fw-bold fs-2"><i class="bi bi-heart-fill me-2"></i>Wishlist</p></div>
                        <div className="col">
                            <div class="row align-items-start mb-2">
                                <div className="col d-grid justify-content-end">
                                    <button class="black-dropdown rounded-1 dropdown-toggle item-category my-1 p-2 text-center border border-dark me-3 fs-5 fw-light" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '200px' }}>
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

                    <div className="row ">
                        <div className="col">
                            <div className="row row-cols-2 justify-content-between mb-4 overflow-y-scroll" style={{
                                height: '50vh',
                            }}>
                                {products.map((product) => (
                                    <Item key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
                                ))}
                                {otherProducts.map((product) => (
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
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        borderRadius: "12px",
        overflow: "hidden",
        padding: '0'
    },
    featuredImage: {
        height: "210px",
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
        backgroundColor: '#FCFBF0',
    }
}

export default Cart;