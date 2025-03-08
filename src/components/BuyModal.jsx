import ImageProduct from '../assets/images/product/2.webp';

const buyModal = () => {

    const product = {
        image: ImageProduct,
        name: 'Black T-shirt',
        quantity: 5,
        size: 'M',
    }

    return (
        <>
            <div class="modal fade" id="buyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Buy</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <img src={ImageProduct} alt="product image" style={styles.imageProduct} />
                                    </div>
                                    <p className="fw-bold fs-4">Product: Black T-Shirt</p>

                                    <p className="fw-bold">Size</p>
                                    <div class="input-group mb-3">
                                        <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                        <select class="form-select" id="inputGroupSelect01">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <p className="fw-bold">Quantity</p>

                                    <div class="input-group mb-3">
                                        <span class="input-group-text">-</span>
                                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <span class="input-group-text">+</span>
                                    </div>


                                    <p className="fw-bold">Payment Method</p>
                                    <p className="fw-bold">Size</p>
                                <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Options</label>
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
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
                            <button type="button" class="btn btn-dark">Cancel</button>
                            <button type="button" class="btn btn-dark">Buy</button>
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
