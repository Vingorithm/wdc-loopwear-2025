import React, { useState } from 'react';

const serviceModal = () => {

    const [service, setService] = useState('');

    return (
        <>
            <div class="modal fade" id="orderServiceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Order Service</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <label className='fw-bold fs-6'>Service Option</label>
                                        <div class="input-group mb-3">
                                            <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                            <select class="form-select" id="inputGroupSelect01" onChange={(e) => setService(e.target.value)}>
                                                <option selected>Choose...</option>
                                                <option value="Repair">Repair</option>
                                                <option value="Modification">Modification</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>

                                        <label htmlFor="requestDescription" className='fw-bold fs-6'>Request's Description</label>
                                        <div class="input-group mb-3">
                                            <textarea class="form-control" aria-label="With textarea" name="requestDescription" id="requestDescription" placeholder="Request's Description"></textarea>
                                        </div>

                                        <p className="fw-bold">Payment Method</p>
                                        <div class="input-group mb-3">
                                            <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                            <select class="form-select" id="inputGroupSelect01">
                                                <option selected>Choose...</option>
                                                <option value="Gopay">Gopay</option>
                                                <option value="Paypal">Paypal</option>
                                                <option value="Dana">Dana</option>
                                                <option value="Dana">Shopee Pay</option>
                                            </select>
                                        </div>

                                        <label htmlFor="address" className='fw-bold fs-6'>Address</label>
                                        <div class="input-group mb-3">
                                            <textarea class="form-control" aria-label="With textarea" name="address" id="address" placeholder="Address"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer w-100">
                            <div className="row w-100 align-items-center">
                                <div className="col-7">
                                    <p className="fs-4 fw-bold m-0">Price: $
                                        {service == 'Repair' ? '20' : ''}
                                        {service == 'Modification' ? '50' : ''}
                                        {service == 'Others' ? '100' : ''}
                                    </p>
                                </div>
                                <div className="col d-flex justify-content-end">
                                    <button type="button" class="btn btn-dark me-2" data-bs-dismiss="modal">Cancel</button>
                                    <a href="/historyorder"><button type="button" class="btn btn-success">Buy</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default serviceModal;