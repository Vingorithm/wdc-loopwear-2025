import { useState } from 'react';
import ImageProduct from '../assets/images/product/2.webp';

const buyModal = () => {

    const [product, setProduct] = useState({
        image: ImageProduct,
        name: 'Black T-shirt',
        quantity: 1,
        size: 'M',
        price: 1.9,
    });

    return (
        <>
            <div class="modal fade" id="buyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Buy</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <img src={ImageProduct} alt="product image" style={styles.imageProduct} />
                                    </div>
                                    <p className="fw-bold fs-4">Product: {product.name}</p>

                                    <p className="fw-bold">Size</p>
                                    <div class="input-group mb-3">
                                        <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                        <select class="form-select" id="inputGroupSelect01">
                                            <option selected>Choose...</option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                        </select>
                                    </div>

                                    <p className="fw-bold">Quantity</p>

                                    <div class="input-group mb-3 w-25">
                                        <button className='input-group-text' onClick={() => setProduct({
                                            quantity: product.quantity == 1 ? product.quantity : product.quantity-1
                                        })}>
                                            <span><i class="bi bi-dash-lg"></i></span>
                                        </button>
                                        <input type="number" class="form-control text-center" aria-label="Amount (to the nearest dollar)" min='0' value={product.quantity} />
                                        <button className='input-group-text' onClick={() => setProduct({
                                            quantity: product.quantity+1
                                        })}>
                                            <span><i class="bi bi-plus-lg"></i></span>
                                        </button>
                                        
                                    </div>


                                    <p className="fw-bold">Payment Method</p>
                                    <p className="fw-bold">Size</p>
                                    <div class="input-group mb-3">
                                        <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                        <select class="form-select" id="inputGroupSelect01">
                                            <option selected>Choose...</option>
                                            <option value="Gopay">Gopay</option>
                                            <option value="Paypal">Paypal</option>
                                            <option value="Dana">Dana</option>
                                        </select>
                                    </div>

                                    <p className="fw-bold">Address</p>

                                    <div class="input-group mb-3">
                                        <textarea name="" id="" class="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon1"></textarea>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer w-100">
                            <div className="row w-100 align-items-center">
                                <div className="col-7">
                                    <p className="fs-4 fw-bold m-0">Price: ${product.quantity*product.price}</p>
                                </div>
                                <div className="col d-flex justify-content-end">
                                <button type="button" class="btn btn-dark me-2" data-bs-dismiss="modal">Cancel</button>
                                <a href="/historyorder"><button type="button" class="btn btn-dark">Buy</button></a>
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
    imageProduct: {
        width: '100%',
        objectFit: 'cover',
        aspectRatio: '1/0.5',
        objectPosition: 'center'
    }
}
export default buyModal;
