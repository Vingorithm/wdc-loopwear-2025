import { useState, useEffect } from 'react';
import ImageProduct from '../assets/images/detail_product/2.jpg';

const BuyModal = () => {
    const [product, setProduct] = useState({
        image: ImageProduct,
        name: 'Black T-shirt',
        quantity: 1,
        size: 'M',
        price: 1.9,
    });

    const [bill, setBill] = useState(product.price * product.quantity);

    useEffect(() => {
        setBill(product.quantity * product.price);
    }, [product.quantity, product.price]);

    return (
        <>
            <div className="modal fade" id="buyModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">Buy</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <img className="rounded-1" src={ImageProduct} alt="product image" style={styles.imageProduct} />
                                    </div>
                                    <p className="fw-bold fs-4">Product: {product.name}</p>

                                    <p className="fw-bold">Size</p>
                                    <div className="input-group mb-3">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                                        <select className="form-select" id="inputGroupSelect01">
                                            <option selected>Choose...</option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                        </select>
                                    </div>

                                    <p className="fw-bold">Quantity</p>

                                    <div className="input-group mb-3 w-50">
                                        <button
                                            className="input-group-text"
                                            onClick={() => setProduct(prevProduct => ({
                                                ...prevProduct,
                                                quantity: prevProduct.quantity === 1 ? 1 : prevProduct.quantity - 1
                                            }))}
                                        >
                                            <span><i className="bi bi-dash-lg"></i></span>
                                        </button>
                                        <input type="number" className="form-control text-center" aria-label="Amount" min="0" value={product.quantity} readOnly />
                                        <button
                                            className="input-group-text"
                                            onClick={() => setProduct(prevProduct => ({
                                                ...prevProduct,
                                                quantity: prevProduct.quantity + 1
                                            }))}
                                        >
                                            <span><i className="bi bi-plus-lg"></i></span>
                                        </button>
                                    </div>

                                    <p className="fw-bold">Payment Method</p>
                                    <div className="input-group mb-3">
                                        <label className="input-group-text" htmlFor="paymentSelect">Options</label>
                                        <select className="form-select" id="paymentSelect">
                                            <option selected>Choose...</option>
                                            <option value="Gopay">Gopay</option>
                                            <option value="Paypal">Paypal</option>
                                            <option value="Dana">Dana</option>
                                            <option value="Shopee Pay">Shopee Pay</option>
                                        </select>
                                    </div>

                                    <p className="fw-bold">Address</p>
                                    <div className="input-group mb-3">
                                        <textarea name="" id="" className="form-control" placeholder="Address"></textarea>
                                    </div>

                                    <p className="fw-bold">Notes</p>
                                    <div className="input-group mb-3">
                                        <textarea name="" id="" className="form-control" placeholder="Notes"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer w-100">
                            <div className="row w-100 align-items-center">
                                <div className="col-7">
                                    <p className="fs-4 fw-bold m-0">Price: ${bill.toFixed(2)}</p>
                                </div>
                                <div className="col d-flex justify-content-end">
                                    <button type="button" className="btn btn-dark me-2" data-bs-dismiss="modal">Cancel</button>
                                    <a href="/historyorder"><button type="button" className="btn btn-success">Buy</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const styles = {
    imageProduct: {
        width: '100%',
        objectFit: 'cover',
        aspectRatio: '1/0.5',
        objectPosition: 'center'
    }
};

export default BuyModal;
