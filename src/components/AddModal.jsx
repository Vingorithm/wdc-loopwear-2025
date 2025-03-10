import { useState } from 'react';

const addModal = () => {
    return (
        <>
            <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Add Item</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="productName" className='fw-bold fs-6'>Product's Name</label>
                                        <div class="input-group mb-3">
                                            <input required id="productName" type="text" class="form-control" placeholder="Product's Name" aria-label="Product Name" aria-describedby="basic-addon1" />
                                        </div>

                                        <label htmlFor="productDescription" className='fw-bold fs-6'>Product's Description</label>
                                        <div class="input-group mb-3">
                                            <textarea class="form-control" aria-label="With textarea" name="productDescription" id="productDescription" placeholder="Product's Description"></textarea>
                                        </div>

                                        <p className='fw-bold fs-6'>Product's Color</p>
                                        <div class="input-group mb-3">
                                            <input id="Color" type="text" class="form-control" placeholder="Product's Color" aria-label="Color" aria-describedby="basic-addon1" />
                                        </div>

                                        <p className='fw-bold fs-6'>Product's SKU</p>
                                        <div class="input-group mb-3">
                                            <input id="SKU" type="text" class="form-control" placeholder="Product's SKU" aria-label="SKU" aria-describedby="basic-addon1" />
                                        </div>

                                        <p className='fw-bold fs-6'>Product's Material</p>
                                        <div class="input-group mb-3">
                                            <input id="Material" type="text" class="form-control" placeholder="Product's Material" aria-label="Material" aria-describedby="basic-addon1" />
                                        </div>

                                        <label htmlFor="productPicture" className='fw-bold fs-6'>Upload Picture</label>
                                        <div class="input-group mb-3">
                                            <input type="file" multiple class="form-control" id="productPicture" />
                                        </div>

                                        <label htmlFor="productName" className='fw-bold fs-6'>Product's Price</label>
                                        <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                            <input id="productPrice" type="number" min='0' step='0.001' class="form-control" placeholder="Product's Price" aria-label="Product Price" aria-describedby="basic-addon1" />
                                        </div>

                                        <p className='fw-bold fs-6'>Sell Option</p>
                                        <input id="Sell" name="Sell-Option" value="Sell" type="radio" className='me-2' />
                                        <label htmlFor="Sell">Sell</label>
                                        <br />
                                        <input id="Swap" name="Sell-Option" value="Swap" type="radio" className='me-2' />
                                        <label htmlFor="Swap">Swap</label>
                                        <br />
                                        <input id="Both" name="Sell-Option" value="Both" type="radio" className='me-2' />
                                        <label htmlFor="Both">Both</label>
                                        <br />
                                        <br />

                                        <p className='fw-bold fs-6'>Available Size</p>
                                        <input id="S" name="S" value="S" type="checkbox" className='me-2' />
                                        <label htmlFor="S">S</label>
                                        <br />
                                        <input id="M" name="M" value="M" type="checkbox" className='me-2' />
                                        <label htmlFor="M">M</label>
                                        <br />
                                        <input id="L" name="L" value="L" type="checkbox" className='me-2' />
                                        <label htmlFor="L">L</label>
                                        <br />
                                        <input id="XL" name="XL" value="XL" type="checkbox" className='me-2' />
                                        <label htmlFor="XL">XL</label>
                                        <br />
                                        <input id="XXL" name="XXL" value="XXL" type="checkbox" className='me-2' />
                                        <label htmlFor="XXL">XXL</label>
                                        <br />
                                        <input id="XXXL" name="XXXL" value="XXXL" type="checkbox" className='me-2' />
                                        <label htmlFor="XXXL">XXXL</label>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer w-100">
                            <button type="button" class="btn btn-dark me-2" data-bs-dismiss="modal">Cancel</button>
                            <a href="/myshop"><button type="button" class="btn btn-success">Save Changes</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default addModal;