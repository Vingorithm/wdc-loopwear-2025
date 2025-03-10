import React from "react";
import Shop from '../assets/images/shop/shop.webp';

const ListService = () => {

    const shops = [
        { id: 1, name: 'Loop Wear', desc: 'We are providing clothing repair and modification services', image: Shop, status: 'Verified' },
        { id: 2, name: 'Fix Wear', desc: 'Damaged clothes? contact us', image: Shop, status: 'Verified'},
        { id: 3, name: 'Mod Wear', desc: 'We are experts in modifying clothes', image: Shop, status: 'Top' },
        { id: 4, name: 'New Wear', desc: 'Make your old clothes look like new clothes', image: Shop, status: 'Normal' },
        { id: 5, name: 'Repair Wear', desc: 'No matter how damaged the clothes are, we will repair them', image: Shop, status: 'Top' }
    ];
    return (
        <>
            <section className="pt-5" style={{ backgroundColor: "#FCFBF0", minHeight: '100vh' }}>
                <div className="container">
                    <div className="row">
                        <div class="container">

                            <h2>Sort By</h2>
                            <div class="row align-items-start mb-2">
                                <div className="col d-grid">
                                    <button class="black-dropdown rounded-1 dropdown-toggle item-category my-1 p-2 text-center border border-dark me-3 fs-5 fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                                        Location
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li className='hoverable-item'><a class="dropdown-item" href="#">Yogyakarta</a></li>
                                        <li className='hoverable-item'><a class="dropdown-item" href="#">Jakarta</a></li>
                                        <li className='hoverable-item'><a class="dropdown-item" href="#">Surabaya</a></li>
                                    </ul>
                                </div>

                                <div className="col d-grid">
                                    <button class="black-dropdown rounded-1 dropdown-toggle item-category my-1 p-2 text-center border border-dark me-3 fs-5 fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shop Status
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li className='hoverable-item'><a class="dropdown-item" href="#">Verified</a></li>
                                        <li className='hoverable-item'><a class="dropdown-item" href="#">Top</a></li>
                                        <li className='hoverable-item'><a class="dropdown-item" href="#">Normal</a></li>
                                    </ul>
                                </div>

                                <div className="col d-grid">
                                    <button class="black-dropdown rounded-1 dropdown-toggle item-category my-1 p-2 text-center border border-dark me-3 fs-5 fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                                        Discount
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li className='hoverable-item'><a class="dropdown-item" href="#">Free Delivery</a></li>
                                        <li className='hoverable-item'><a class="dropdown-item" href="#">Cashback</a></li>
                                    </ul>
                                </div>

                                <div className="col d-grid">
                                    <button class="black-dropdown rounded-1 dropdown-toggle item-category my-1 p-2 text-center border border-dark me-3 fs-5 fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                                        Rating
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li className='hoverable-item'><a class="dropdown-item" href="#">5</a></li>
                                        <li className='hoverable-item'><a class="dropdown-item" href="#">4</a></li>
                                        <li className='hoverable-item'><a class="dropdown-item" href="#">3</a></li>
                                        <li className='hoverable-item'><a class="dropdown-item" href="#">2</a></li>
                                        <li className='hoverable-item'><a class="dropdown-item" href="#">1</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2>Search Result </h2>
                    <div className="row justify-content-between mb-4">
                        {
                            shops.map((shop) => {
                                return <a className="text-decoration-none hoverable-item" href="/shop">
                                    <div className="card mb-4 border-0" style={styles.featuredCard} key={shop.id}>
                                        <div className="row g-0">
                                            <div className="col-md-1 me-4">
                                                <img
                                                    src={shop.image}
                                                    alt="Sustainable clothing care"
                                                    className="img-fluid rounded-circle border border-black"
                                                    style={styles.featuredImage}
                                                />
                                            </div>
                                            <div className="col-md-9">
                                                <div className="card-body p-4">

                                                    <div className="d-flex justify-content-between mb-2">
                                                        
                                                        <h2 style={styles.cardTitle}>
                                                            {
                                                                shop.status == 'Verified' ? <i class="bi bi-patch-check-fill fs-4 me-2" style={styles.tierStore}></i> : <></>
                                                            } 
                                                            {
                                                                shop.status == 'Top' ? <i class="bi bi-hand-thumbs-up-fill fs-4 me-2" style={styles.tierStore}></i> : <></>
                                                            }
                                                            {shop.name}</h2>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-7 ms-1">
                                                            <p>{shop.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            })
                        }
                    </div>

                    <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

const styles = {
    featuredCard: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        overflow: "hidden",
        padding: "15px",
        boxShadow: "0 6px 12px rgba(0,0,0,0.05)",
    },
    featuredImage: {
        width: "100%",
        aspectRatio: '1/1',
        objectFit: "cover",
        margin: '10px'
    },
    cardTitle: {
        color: "#1A1816",
        fontWeight: "600",
        marginBottom: "8px"
    },
    cardText: {
        color: "#1A1816",
        opacity: "0.8"
    },
    tierStore: {
        borderRadius: "100%",
        width: "35px",
        height: "35px",
        objectFit: "cover",
        objectPosition: "center",
        color: "#39754B",
    },
}
export default ListService;