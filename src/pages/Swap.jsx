import { useState, useEffect } from "react";
import { toast } from "sonner";

// asset product
import Image1 from '../assets/images/product/cap.png';
import Image2 from '../assets/images/product/jeans.png';
import Image3 from '../assets/images/product/tshirt.png';
import Image4 from '../assets/images/product/pants.png';

import Image0 from '../assets/images/detail_product/2.webp';

import ProfilePicture from '../assets/images/shop/shop.webp';

import SwapModal from '../components/SwapModal';

const Swap = ({ isUser }) => {

    const [products, setProducts] = useState([
        { id: 1, name: "MLB Cap", image: Image1, shopName: "Everyday Wear" },
        { id: 2, name: "Men's Jeans", price: 90.30, image: Image2, shopName: "Next Wear" },
        { id: 3, name: "Basic T-Shirt", price: 27.50, image: Image3, shopName: "Fix Wear" },
        { id: 4, name: "Pants", price: 19.20, image: Image4, shopName: "Wears" },
    ]);

    const mainProduct = {
        id: 0,
        name: 'Black T-shirt',
        shopName: 'Loop Wear',
        image: Image0,
    }

    return (
        <>
            <section className="pt-5 pb-5" style={{ backgroundColor: "#FCFBF0", minHeight: '100vh' }}>
                <SwapModal />
                <div className="container">

                    <h1 className="fw-bold mb-4">Main Product</h1>
                    <div className="row">
                        <div className="col p-0">
                            <div className="card mb-4 border-0" style={styles.featuredCard} key={mainProduct.id}>
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <a className='hoverable-item' href="/detailproduct">
                                            <img
                                                src={mainProduct.image}
                                                alt="Sustainable clothing care"
                                                className="img-fluid rounded-start"
                                                style={styles.featuredImage}
                                            />
                                        </a>

                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body p-4">

                                            <div className="d-flex justify-content-between mb-2">
                                                <h2 style={styles.cardTitle}>{mainProduct.name}</h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-7 ms-1">
                                                    <a href="/shop" className="text-decoration-none" style={{
                                                        color: '#1A1816'
                                                    }}>
                                                        <div>
                                                            <img src={ProfilePicture} alt="account image" className="rounded-circle border border-black object-fit-cover hoverable-item" style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }} />
                                                            <p className="fw-bold fs-5 d-inline ms-2 ">{mainProduct.shopName}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row mb-4">
                        <div className="col"> <h1 className="fw-bold">Offer</h1></div>
                        {
                            isUser ?
                                <></>
                                :
                                <div className="col d-flex justify-content-end align-items-center">
                                    <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#swapModal">Create Offer</button>
                                </div>
                        }
                    </div>

                    <div className="row overflow-y-scroll" style={{
                        height: '50vh',
                    }}>

                        {
                            products.map((product) =>
                                <div className="card mb-4 border-0" style={styles.featuredCard} key={product.id}>
                                    <div className="row g-0">
                                        <div className="col-md-3">
                                            <a className="hoverable-item" href="/detailproduct">
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
                                                </div>
                                                <div className="row">
                                                    <div className="col-7 ms-1">
                                                        <a href="/shop" className="text-decoration-none" style={{
                                                            color: '#1A1816'
                                                        }}>
                                                            <div>
                                                                <img src={ProfilePicture} alt="account image" className="rounded-circle border border-black object-fit-cover hoverable-item" style={{
                                                                    width: '30px',
                                                                    height: '30px'
                                                                }} />
                                                                <p className="fw-bold fs-5 d-inline ms-2 ">{product.shopName}</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                                {isUser ?
                                                    <div className="row justify-content-end p-0">
                                                        <div className="col text-end px-0 py-3">
                                                            <button className="rounded dark-btn px-5 py-1 me-2" onClick={() => {
                                                                return toast('Swap request has been rejected!', {
                                                                    cancel: {
                                                                        label: <i class="bi bi-x-lg"></i>,
                                                                        onClick: () => console.log('Cancel!'),
                                                                    },
                                                                })
                                                            }} >Reject</button>
                                                            <button className="rounded green-dark-btn px-5 py-1 me-2" onClick={() => {
                                                                return toast('Swap request has been accepted!', {
                                                                    cancel: {
                                                                        label: <i class="bi bi-x-lg"></i>,
                                                                        onClick: () => console.log('Cancel!'),
                                                                    },
                                                                })
                                                            }} >Accept</button>
                                                        </div>
                                                    </div>
                                                    :
                                                    <></>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

const styles = {
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

export default Swap;