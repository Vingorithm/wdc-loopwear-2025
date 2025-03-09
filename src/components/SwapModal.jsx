import { useState } from 'react';

// asset product
import Image1 from '../assets/images/product/cap.png';
import Image2 from '../assets/images/product/jeans.png';
import Image3 from '../assets/images/product/tshirt.png';
import Image4 from '../assets/images/product/pants.png';

import SimpleItem from '../components/SimpleItem';

const swapModal = () => {

    // data product
    const [products, setProducts] = useState([
        { id: 1, name: "MLB Cap", picture: Image1},
        { id: 2, name: "Men's Jeans" , picture: Image2},
        { id: 3, name: "Basic T-Shirt", picture: Image3},
        { id: 4, name: "Pants", picture: Image4},
        { id: 5, name: "MLB Cap", picture: Image1},
        { id: 6, name: "Men's Jeans" , picture: Image2},
        { id: 7, name: "Basic T-Shirt", picture: Image3},
        { id: 8, name: "Pants", picture: Image4},
        { id: 9, name: "MLB Cap", picture: Image1},
        { id: 10, name: "Men's Jeans" , picture: Image2},
        { id: 11, name: "Basic T-Shirt", picture: Image3},
        { id: 12, name: "Pants", picture: Image4},
    ]);


    return(
        <>

        <div class="modal fade" id="swapModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Create Offer</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p className='fw-bold fs-5'>Select Item to Swap</p>
                                    <div className="container">
                                        <div className="row row-cols-4">
                                            {products.map((product)  => {
                                                return(
                                                    <div className="col">
                                                        <div className="row">
                                                            <div className="col-1"><input type="radio" name='selected-product' id={product.id} className='d-inline-block' /></div>
                                                            <div className="col"><label htmlFor={product.id}><SimpleItem name={product.name} picture={product.picture} /></label></div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer w-100">
                                <button type="button" class="btn btn-dark me-2" data-bs-dismiss="modal">Cancel</button>
                                <a href="/swap"><button type="button" class="btn btn-success">Select</button></a>
                                
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}

export default swapModal;