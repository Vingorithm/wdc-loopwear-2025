const DetailModal = ({ id, name, price, boughtAt, trackingNumber, image }) => {
    return (
        <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={`${id}Label`}>Detail Order</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12">
                                {/* Order Details */}
                                <div className="row d-flex flex-column mb-3">
                                    <div className="col">
                                        <h6 style={styles.subTitle}>Order Completed</h6>
                                    </div>
                                    <div className="col d-flex justify-content-between">
                                        <span style={styles.subtleText}>Order Number</span>
                                        <span style={styles.trackingNumber}>{trackingNumber}</span>
                                    </div>
                                    <div className="col d-flex justify-content-between">
                                        <span style={styles.subtleText}>Purchase Date</span>
                                        <span>{new Date(boughtAt).toLocaleDateString("id-ID", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}</span>
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="row d-flex flex-column border-top pt-3 mb-3">
                                    <div className="col d-flex justify-content-between align-items-center">
                                        <h6 style={styles.subTitle}>Product Detail</h6>
                                        <a href="/shop" style={styles.subTitle} className="text-decoration-none d-flex align-items-center">
                                            <h6>LoopWearer</h6>
                                            <i class="bi bi-chevron-right ms-2 mb-1 fs-7"></i>
                                        </a>
                                    </div>
                                    <div className="col d-flex justify-content-start align-items-center">
                                        <img src={image} className="img-fluid rounded-start" alt="Image Product" style={styles.productImage} />
                                        <div className="row d-flex flex-column">
                                            <span style={styles.subTitle}>{name}</span>
                                            <span style={styles.subtleText}>${price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Shipping Details */}
                                <div className="row d-flex flex-column border-top pt-3 mb-3">
                                    <div className="col">
                                        <h6 style={styles.subTitle}>Shipping Information</h6>
                                    </div>
                                    <div className="col d-flex flex-column">
                                        <div className="row d-flex">
                                            <div className="col-auto text-start d-flex flex-column">
                                                <span style={styles.subtleText}>Shipping Carrier</span>
                                                <span style={styles.subtleText}>Tracking Number</span>
                                                <span style={styles.subtleText}>Address</span>
                                            </div>
                                            <div className="col text-start d-flex flex-column">
                                                <div className="d-flex">
                                                    <span>:</span><span className="ms-3">JNE+</span>
                                                </div>
                                                <div className="d-flex">
                                                    <span>:</span><span className="ms-3">TKP01-95D1XJ06</span>
                                                </div>
                                                <div className="d-flex">
                                                    <span>:</span><span className="ms-3 fw-bold">Ivan T</span>
                                                </div>
                                                <div className="d-flex">
                                                    <span style={{ color: "white" }}>:</span><span className="ms-3">6282132104930</span>
                                                </div>
                                                <div className="d-flex">
                                                    <span style={{ color: "white" }}>:</span><span className="ms-3">Jl. Dirgantara 5, Gang Mangga V no.11, Kledokan, Babarsari</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Details */}
                                <div className="row border-top d-flex flex-column pt-3 mb-3">
                                    <div className="col">
                                        <h6 style={styles.subTitle}>Payment Details</h6>
                                    </div>
                                    <div className="col d-flex justify-content-between">
                                        <span style={styles.subtleText}>Payment Method</span>
                                        <span>GoPay</span>
                                    </div>
                                    <div className="col d-flex justify-content-between">
                                        <span style={styles.subtleText}>Subtotal Price of Item</span>
                                        <span>${price.toFixed(2)}</span>
                                    </div>
                                    <div className="col d-flex justify-content-between">
                                        <span style={styles.subtleText}>Total Shipping Cost</span>
                                        <span>$3.50</span>
                                    </div>
                                    <div className="col d-flex justify-content-between">
                                        <span style={styles.subtleText}>Platform Discount Coupon for Shipping</span>
                                        <span>-$3.50</span>
                                    </div>
                                    <div className="col d-flex justify-content-between pt-2">
                                        <h6 className="fw-bold">Total Purchase</h6>
                                        <span className="fw-bold">${price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    trackingNumber: {
        color: "#39754B",
        fontWeight: "bold",
    },
    subTitle: {
        fontSize: "1rem",
        fontWeight: "bold",
        color: "#000",
    },
    productImage: {
        width: "50px",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
    },
    subtleText: {
        color: "#6D7588",
    }
}

export default DetailModal;
