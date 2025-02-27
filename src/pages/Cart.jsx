const Cart = () => {
    return (
        <>
            <section style={styles.section}>

                <div className="row">
                    <p className="fw-bold fs-2">Keranjang</p>
                </div>

                <div className="row">
                    <div className="col"><p className="fw-bold fs-2">Wishlist</p></div>
                    <div className="col">
                        <div class="row align-items-start mb-2">
                            <div className="col d-grid">
                                <button class="btn dropdown-toggle item-category my-1 p-2 text-center border border-dark me-3 fs-5 fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                                    Location
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Yogyakarta</a></li>
                                    <li><a class="dropdown-item" href="#">Jakarta</a></li>
                                    <li><a class="dropdown-item" href="#">Surabaya</a></li>
                                </ul>
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
    }
}

export default Cart;