import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Item from '../components/Item';

// Import images
import Image1 from "../assets/images/cap.png";
import shop from '../assets/images/shop/shop.webp';

// Product images
import Img1 from '../assets/images/product/1.jpeg';
import Img2 from '../assets/images/product/2.webp';
import Img3 from '../assets/images/product/3.webp';
import Img4 from '../assets/images/product/4.webp';
import Img5 from '../assets/images/product/5.jpeg';
import Img6 from '../assets/images/product/6.jpg';
import Img7 from '../assets/images/product/7.jpg';

// Styles object
const styles = {
  mainImage: {
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
    aspectRatio: "1/1.05",
  },
  modelImage: {
    height: "150px",
    objectFit: "cover",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  sizeButton: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  actionButton: {
    height: "50px",
    fontWeight: "bold",
    transition: "all 0.3s ease"
  },
  shopImage: {
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '100%',
    width: '60px',
    height: '60px',
    border: "2px solid #39754B",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
  shopCard: {
    borderRadius: "3px",
    padding: "15px",
    background: "linear-gradient(145deg, #ffffff, #f8f7ed)",
    boxShadow: "0 6px 12px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    border: "1px solid #eaeaea",
    overflow: "hidden",
    position: "relative"
  },
  shopBadge: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#39754B",
    color: "white",
    fontWeight: "bold",
    fontSize: "0.75rem",
    padding: "3px 10px",
    borderRadius: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  },
  shopStats: {
    display: "flex",
    justifyContent: "space-around",
    borderTop: "1px solid #eaeaea",
    marginTop: "10px",
    paddingTop: "10px"
  },
  statItem: {
    textAlign: "center",
    fontSize: "0.8rem"
  },
  statValue: {
    fontWeight: "bold",
    fontSize: "1rem",
    color: "#39754B"
  }
};

const DetailProduct = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedPhoto, setSelectedPhoto] = useState(Img2);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);
  
  // Product data
  const product = {
    name: "HOODIE SWEATSHIRT",
    description: "Relaxed fit hoodie sweatshirt made of dense cotton with standard closure. Hooded collar and long sleeves. Front pouch pocket.",
    originalPrice: 129.00,
    discountPrice: 90.30,
    color: "Blue",
    sku: "234263",
    material: "100% cotton",
    delivery: "3-5 working days",
    sizes: ['S', 'M', 'L', 'XL']
  };

  // Shop data
  const shopData = {
    name: "LoopWear",
    status: "online",
    rating: 4.8,
    products: 124,
    followers: "3.2K",
    joined: "2021"
  };

  // Related products data
  const relatedProducts = [
    { id: 1, name: "iPhone Case", price: 8.29, image: Image1 },
    { id: 2, name: "HOODIE SWEATSHIRT", price: 90.30, originalPrice: 129.00, image: Image1 },
    { id: 3, name: "BASIC T-SHIRT", price: 27.54, image: Image1 },
    { id: 4, name: "BASEBALL CAP", price: 19.29, image: Image1 }
  ];

  // Thumbnail images array
  const thumbnailImages = [Img2, Img1, Img3, Img4, Img5, Img6, Img7];

  // Handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Handle thumbnail click
  const handleThumbnailClick = (image) => {
    setSelectedPhoto(image);
  };

  return (
    <div style={{ backgroundColor: '#FCFBF0', color: '#1A1816', minHeight: '100vh', padding: '20px' }}>
      <div className="container">
        <div className="row mb-5">
          {/* Left side - Product Images */}
          <div className="col-md-7" data-aos="fade-right">
            <div className="row">
              <div className="col-12 mb-4">
                <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
                  <img 
                    className="main-image-product"
                    src={selectedPhoto} 
                    alt="Hoodie Sweatshirt" 
                    style={styles.mainImage}
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  />
                </div>
              </div>
              <div className="col-12" data-aos="fade-up" data-aos-delay="300">
                <div style={{ padding: '20px', overflowX: 'auto' }}>
                  <div className="d-flex">
                    {thumbnailImages.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`Product view ${index + 1}`} 
                        style={{
                          ...styles.modelImage,
                          border: selectedPhoto === image ? '2px solid #39754B' : 'none',
                          opacity: selectedPhoto === image ? 1 : 0.7
                        }}
                        className="me-3"
                        onClick={() => handleThumbnailClick(image)}
                        data-aos="fade-up"
                        data-aos-delay={100 + (index * 50)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className="col-md-5" data-aos="fade-left" data-aos-delay="200">
            <div className="py-4">
              <h1 
                style={{ fontWeight: 'bold', fontSize: '2.5rem' }}
                data-aos="fade-up"
              >
                {product.name}
              </h1>
              <p className="mt-3" data-aos="fade-up" data-aos-delay="100">
                {product.description}
              </p>
              
              <div className="d-flex mt-4 mb-3" data-aos="fade-up" data-aos-delay="150">
                <div className="me-4">
                  <span style={{ fontWeight: 'bold' }}>Color:</span> {product.color}
                </div>
                <div>
                  <span style={{ fontWeight: 'bold' }}>SKU:</span> {product.sku}
                </div>
                <div className="ms-4">
                  <span style={{ fontWeight: 'bold' }}>Material:</span> {product.material}
                </div>
              </div>

              <div className="d-flex align-items-center my-4" data-aos="fade-up" data-aos-delay="200">
                {product.sizes.map((size, index) => (
                  <button 
                    key={size}
                    className="me-2"
                    style={{
                      ...styles.sizeButton,
                      border: selectedSize === size ? '2px solid #39754B' : '1px solid #1A1816',
                      backgroundColor: selectedSize === size ? '#39754B' : 'transparent',
                      color: selectedSize === size ? '#FCFBF0' : '#1A1816'
                    }}
                    onClick={() => handleSizeSelect(size)}
                    data-aos="zoom-in"
                    data-aos-delay={200 + (index * 50)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div 
                className="d-flex align-items-center mt-4 mb-4"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <span style={{ textDecoration: 'line-through', marginRight: '15px', fontSize: '1.2rem' }}>
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                  ${product.discountPrice.toFixed(2)}
                </span>
              </div>

              <div className="d-flex my-3" data-aos="fade-up" data-aos-delay="300">
                <button 
                  className="light-btn"
                  style={{ 
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px'
                  }}
                >
                  <i className="bi bi-heart"></i>
                </button>
                <button 
                  className="dark-btn"
                  style={{ 
                    ...styles.actionButton,
                    padding: '0 30px',
                    flex: 1
                  }}
                  data-aos="zoom-in"
                  data-aos-delay="350"
                >
                  Add to cart
                </button>
              </div>

              <div 
                className="d-flex my-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <button 
                  className="dark-btn"
                  style={{ 
                    ...styles.actionButton,
                    padding: '0 30px',
                    flex: 1
                  }}
                >
                  Buy
                </button>
              </div>

              <div 
                className="d-flex my-3"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <button 
                  className="dark-btn"
                  style={{ 
                    ...styles.actionButton,
                    padding: '0 30px',
                    flex: 1
                  }}
                >
                  Swap
                </button>
              </div>

              <div 
                className="mt-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <p>Delivery: {product.delivery}</p>
              </div>

              {/* Enhanced Shop Section */}
              <div 
                data-aos="fade-up"
                data-aos-delay="550"
                className="my-4"
              >
                <a 
                  href="/shop" 
                  style={{ 
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                  }}
                  className="shop-link"
                >
                  <div 
                    style={styles.shopCard}
                    className="shop-card-hover"
                  >
                    <span style={styles.shopBadge}>
                      <i className="bi bi-patch-check-fill me-1"></i>
                      Verified
                    </span>
                    
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <img 
                          src={shop} 
                          alt="LoopWear Shop" 
                          style={styles.shopImage}
                          className="shop-image-hover"
                        />
                      </div>
                      <div>
                        <h3 className="mb-0 fs-4 fw-bold">{shopData.name}</h3>
                        <div className="d-flex align-items-center mt-1">
                          <span 
                            className="me-2" 
                            style={{
                              color: '#39754B',
                              fontWeight: 'bold',
                            }}
                          >
                            <i className="bi bi-circle-fill me-1" style={{ fontSize: '0.5rem' }}></i>
                            {shopData.status}
                          </span>
                          <span className="d-flex align-items-center">
                            <i className="bi bi-star-fill me-1" style={{ color: '#FFC107' }}></i>
                            {shopData.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div style={styles.shopStats}>
                      <div style={styles.statItem}>
                        <div style={styles.statValue}>{shopData.products}</div>
                        <div>Products</div>
                      </div>
                      <div style={styles.statItem}>
                        <div style={styles.statValue}>{shopData.followers}</div>
                        <div>Followers</div>
                      </div>
                      <div style={styles.statItem}>
                        <div style={styles.statValue}>Since {shopData.joined}</div>
                        <div>Member</div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-3">
                      <button 
                        className="btn btn-sm" 
                        style={{ 
                          backgroundColor: '#39754B', 
                          color: 'white',
                          borderRadius: '20px',
                          padding: '5px 15px',
                          fontWeight: 'bold'
                        }}
                      >
                        <i className="bi bi-shop me-2"></i>
                        Visit Shop
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-5" data-aos="fade-up" data-aos-delay="600">
          <h2 style={{ fontWeight: 'bold', marginBottom: '30px' }}>RELATED PRODUCTS</h2>
          <div className="row">
            {relatedProducts.map((item, index) => (
              <div 
                key={item.id} 
                className="col-md-3 mb-4"
                data-aos="fade-up"
                data-aos-delay={600 + (index * 100)}
              >
                <Item
                  picture={item.image}
                  name={item.name}
                  oldPrice={item.originalPrice}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styleElement = document.createElement('style');
styleElement.textContent = `
  .shop-card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(57, 117, 75, 0.1);
  }
  
  .shop-image-hover:hover {
    transform: scale(1.05);
  }
  
  .shop-link:hover h3 {
    color: #39754B;
  }
`;
document.head.appendChild(styleElement);

export default DetailProduct;