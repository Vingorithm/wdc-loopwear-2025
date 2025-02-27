import ShopProfile from '../assets/images/shop/shop.webp';

// component item
import Item from '../components/Item';

// asset product
import Image1 from '../assets/images/cap.png';
import Image2 from '../assets/images/jeans.png';
import Image3 from '../assets/images/tshirt.png';
import Image4 from '../assets/images/pants.png';

const Shop = () => {
    const products = [
        { id: 1, name: "Phone Case", price: 6.2, image: Image1 },
        { id: 2, name: "Hoodie Sweatshirt", price: 90.3, image: Image2, oldPrice: 129 },
        { id: 3, name: "Basic T-Shirt", price: 27.54, image: Image3 },
        { id: 4, name: "Baseball Cap", price: 19.2, image: Image4 },
      ];

    return(
        <>
            <section style={styles.section}>

                <div className="container pt-5">
                    <div className="shop-profile row">
                        <div className="col">
                            <img className='shop-picture' src={ShopProfile} alt="shop picture" />
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col"><p className='fw-bold fs-2'><i class="bi bi-patch-check-fill" style={{ color: "#39754B" }}></i> LoopWearer</p></div>
                            </div>
                            <div className="row">
                                <p className='fw-light fs-5'>Yogyakarta</p>
                            </div>
                            <div className="row">
                                <div className="col"><button className='dark-btn w-100'>Follow</button></div>
                                <div className="col"><button className='dark-btn w-100'>Chat</button></div>
                            </div>
                        </div>

                        <div className="col">
                            <p className='fw-bold fs-2'><i class="bi bi-star-fill text-warning"></i> 4.9</p>
                            <p>Rating & Review</p>
                        </div>
                        <div className="col">
                            <p className='fw-bold fs-2'>± 1 Hours</p>
                            <p>Seller Response</p>
                        </div>
                        <div className="col">
                            <p className='fw-bold fs-2'>24/7</p>
                            <p>Shop Open</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <form class="d-flex mx-auto w-100 my-2 " role="search">
                                <input class="search-input form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            </form>
                        </div>
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

                <div className="col d-grid">
                  <button class="btn dropdown-toggle item-category my-1 p-2 text-center border border-dark me-3 fs-5 fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop Status
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Verified</a></li>
                    <li><a class="dropdown-item" href="#">Top</a></li>
                    <li><a class="dropdown-item" href="#">Normal</a></li>
                  </ul>
                </div>
                        </div>
                        </div>
                        <div className="col">
                            <button className="dark-btn">Add Product</button>
                        </div>
                    </div>

                    <div className="row">
                        <p className='fw-bold fs-2'>Products</p>
                        <div className="row justify-content-between">
                            {products.map((product) => (
                            <Item key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
                            ))}
                            {products.map((product) => (
                            <Item key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
                            ))}
                            {products.map((product) => (
                            <Item key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
                            ))}
                            {products.map((product) => (
                            <Item key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
                            ))}
                            {products.map((product) => (
                            <Item key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
                            ))}
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

export default Shop;