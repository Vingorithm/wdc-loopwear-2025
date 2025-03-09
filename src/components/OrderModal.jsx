import { useState } from 'react';
import { toast } from "sonner";

// asset product
import Image1 from '../assets/images/product/cap.png';
import Image2 from '../assets/images/product/jeans.png';
import Image3 from '../assets/images/product/tshirt.png';
import Image4 from '../assets/images/product/pants.png';

import profilePicture from "../assets/images/profpic/profile-picture.jpg";

const orderModal = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "MLB Cap", type: 'Product', price: 45, image: Image1, accountName: "Loop Wear", ammount: 1, address: 'Yogyakarta', methodPayment: 'Paypal', notes: 'Safety packing plz', size: 'S' },
        { id: 2, name: "Men's Jeans", type: 'Product', price: 90.30, image: Image2, accountName: "Loop Wear", ammount: 2, address: 'Jakarta', methodPayment: 'Paypal', notes: 'Safety packing plz', size: 'L' },
        { id: 3, name: "Basic T-Shirt", type: 'Product', price: 27.50, image: Image3, accountName: "Loop Wear", ammount: 1, address: 'Solo', methodPayment: 'Paypal', notes: 'Safety packing plz', size: 'M' },
        { id: 4, name: "Pants", type: 'Service', price: 50, image: Image4, accountName: "Loop Wear", description: 'Fix the hole', address: 'California', methodPayment: 'Paypal'},
    ]);

    return (
        <>
            <div class="modal fade" id="checkOrderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Check Order</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div className="row">
                                    {
                                        products.map((product) =>
                                            <div className="card mb-4 border-0" style={styles.featuredCard} key={product.id}>
                                                
                                                <div className="row">
                                                <div className="col">
                                                    <a href="/detailproduct">
                                                        <img
                                                            src={product.image}
                                                            alt="Sustainable clothing care"
                                                            className="img-fluid rounded-start"
                                                            style={styles.featuredImage}
                                                        />
                                                    </a>
                                                    </div>
                                                </div>
                                                <div className="row g-0">
                                                    <div className="col">
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
                                                                            <img src={profilePicture} alt="shop image" className="rounded-circle border border-black object-fit-cover" style={{
                                                                                width: '30px',
                                                                                height: '30px'
                                                                            }} />
                                                                            <p className="fw-bold fs-5 d-inline ms-2 ">Loopwear</p>
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

                                                            <div className="row">
                                                                <p className='mt-3 fw-bold'>Details: </p>
                                                                {
                                                                    product.type == 'Product' ? 
                                                                    <>  
                                                                        <p>Order type: {product.type}</p>
                                                                        <p>Product id: {product.id}</p>
                                                                        <p>Ammount: {product.ammount}</p>
                                                                        <p>Address: {product.address}</p>
                                                                        <p>Method Payment: {product.methodPayment}</p>
                                                                        <p>Notes: {product.notes}</p>
                                                                        <p>Size: {product.size}</p>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <p>Order type: {product.type}</p>
                                                                        <p>Product id: {product.id}</p>
                                                                        <p>Address: {product.address}</p>
                                                                        <p>Method Payment: {product.methodPayment}</p>
                                                                        <p>Description: {product.description}</p>
                                                                    </>
                                                                }
                                                            </div>

                                                            <div className="row justify-content-end p-0">
                                                                <div className="col text-end px-0 py-3">
                                                                    <button className="btn btn-dark px-5 py-1 me-2" onClick={() => {
                                                                        return toast('Request has been rejected!', {
                                                                            cancel: {
                                                                                label: <i class="bi bi-x-lg"></i>,
                                                                                onClick: () => console.log('Cancel!'),
                                                                            },
                                                                        })
                                                                    }}>Decline</button>
                                                                    <button className="btn btn-success px-5 py-1"  onClick={() => {
                                                                        return toast('Request has been accepted!', {
                                                                            cancel: {
                                                                                label: <i class="bi bi-x-lg"></i>,
                                                                                onClick: () => console.log('Accept!'),
                                                                            },
                                                                        })
                                                                    }}>Accept</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        objectFit: "cover",
        aspectRatio: '1/1'
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

export default orderModal;