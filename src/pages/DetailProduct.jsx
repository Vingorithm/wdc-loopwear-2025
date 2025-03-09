import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Item from '../components/Item';
import { toast } from "sonner";
import BuyModal from '../components/BuyModal';
import PictureModal from '../components/PictureModal';

// Import images
import Image1 from "../assets/images/product/cap.png";
import shop from '../assets/images/shop/shop.webp';

// Product images
import Img1 from '../assets/images/detail_product/1.jpeg';
import Img2 from '../assets/images/detail_product/2.webp';
import Img3 from '../assets/images/detail_product/3.webp';
import Img4 from '../assets/images/detail_product/4.webp';
import Img5 from '../assets/images/detail_product/5.jpeg';
import Img6 from '../assets/images/detail_product/6.jpg';
import Img7 from '../assets/images/detail_product/7.jpg';

// Styles object
const styles = {
  mainImage: {
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
    aspectRatio: "1/1.05",
    border: '1px solid #1A1816',
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
  },
  // Review section styles
  reviewCard: {
    borderRadius: "3px",
    padding: "15px",
    background: "linear-gradient(145deg, #ffffff, #f8f7ed)",
    boxShadow: "0 6px 12px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    border: "1px solid #eaeaea",
    marginBottom: "15px"
  },
  reviewerImage: {
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '100%',
    width: '40px',
    height: '40px',
    border: "1px solid #39754B",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  },
  starRating: {
    color: '#FFC107',
    fontSize: '0.9rem'
  },
  reviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px"
  },
  reviewerInfo: {
    display: "flex",
    alignItems: "center"
  },
  reviewDate: {
    fontSize: "0.8rem",
    color: "#6c757d"
  },
  reviewText: {
    fontSize: "0.95rem",
    lineHeight: "1.5",
    marginBottom: "10px"
  },
  verifiedTag: {
    backgroundColor: "#39754B",
    color: "white",
    fontSize: "0.7rem",
    padding: "2px 8px",
    borderRadius: "10px",
    marginLeft: "10px"
  },
  ratingProgressBar: {
    height: "6px",
    borderRadius: "3px",
    backgroundColor: "#E9ECEF"
  },
  ratingProgressFill: {
    backgroundColor: "#39754B",
    height: "100%",
    borderRadius: "3px"
  },
  reviewAction: {
    fontSize: "0.8rem",
    color: "#39754B",
    cursor: "pointer",
    marginRight: "15px"
  }
};

const DetailProduct = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedPhoto, setSelectedPhoto] = useState(Img2);
  const [activeTab, setActiveTab] = useState('all');
  
  // Product data
  const product = {
    name: "Black T-Shirt",
    description: "Relaxed fit hoodie sweatshirt made of dense cotton with standard closure. Hooded collar and long sleeves. Front pouch pocket.",
    originalPrice: 129.00,
    discountPrice: 90.30,
    color: "Blue",
    sku: "234263",
    material: "100% cotton",
    delivery: "3-5 working days",
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.7,
    reviewCount: 124
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

  // Reviews data
  const reviewsData = {
    ratings: {
      5: 98,
      4: 15,
      3: 7,
      2: 3,
      1: 1
    },
    reviews: [
      {
        id: 1,
        user: "Alex Johnson",
        avatar: "/api/placeholder/40/40", // Using placeholder for avatar
        date: "February 15, 2025",
        rating: 5,
        verified: true,
        text: "Excellent quality and fit! The material is soft and comfortable. I've worn it several times and it still looks new after washing. The color is exactly as shown in the photos.",
        helpfulCount: 28,
        size: "M",
        color: "Blue"
      },
      {
        id: 2,
        user: "Sarah Miller",
        avatar: "/api/placeholder/40/40", // Using placeholder for avatar
        date: "January 29, 2025",
        rating: 4,
        verified: true,
        text: "Really nice hoodie, comfortable and warm. Only reason for 4 stars is that it runs slightly larger than expected. Would recommend sizing down if you prefer a more fitted look.",
        helpfulCount: 15,
        size: "L",
        color: "Blue"
      },
      {
        id: 3,
        user: "Michael Chen",
        avatar: "/api/placeholder/40/40", // Using placeholder for avatar
        date: "January 12, 2025",
        rating: 5,
        verified: true,
        text: "Perfect for everyday wear. The material breathes well and the pocket is spacious. This has quickly become my go-to hoodie for casual outings.",
        helpfulCount: 7,
        size: "S",
        color: "Blue"
      }
    ]
  };

  // Related products data
  const relatedProducts = [
    { id: 1, name: "iPhone Case", price: 8.29, image: Image1 },
    { id: 2, name: "Hoodie Sweatshirt", price: 90.30, originalPrice: 129.00, image: Image1 },
    { id: 3, name: "Basic T-Shirt", price: 27.54, image: Image1 },
    { id: 4, name: "Baseball Cap", price: 19.29, image: Image1 }
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

  // Handle marking review as helpful
  const handleMarkHelpful = (reviewId) => {
    toast('Review marked as helpful!');
  };

  // Handle review tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Generate star rating component
  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="bi bi-star-fill" style={styles.starRating}></i>);
      } else if (i - 0.5 <= rating) {
        stars.push(<i key={i} className="bi bi-star-half" style={styles.starRating}></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star" style={styles.starRating}></i>);
      }
    }
    return stars;
  };

  return (
    <div style={{ backgroundColor: '#FCFBF0', color: '#1A1816', minHeight: '100vh', padding: '20px' }}>
      <BuyModal />
      <PictureModal picture={selectedPhoto}/>
      <div className="container">
        <div className="row mb-5">
          {/* Left side - Product Images */}
          <div className="col-md-7">
            <div className="row">
              <div className="col-12 mb-4">
                <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
                  <img 
                    className="main-image-product"
                    src={selectedPhoto} 
                    alt="Hoodie Sweatshirt" 
                    style={styles.mainImage}
                    type="button" data-bs-toggle="modal" data-bs-target="#pictureModal"
                  />
                </div>
              </div>
              <div className="col-12">
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
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className="col-md-5">
            <div className="py-4">
              <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                {product.name}
              </h1>
              <p className="mt-3">
                {product.description}
              </p>
              
              <div className="d-flex mt-4 mb-3">
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

              <div className="d-flex align-items-center my-4">
                {product.sizes.map((size) => (
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
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className="d-flex align-items-center mt-4 mb-4">
                <span style={{ textDecoration: 'line-through', marginRight: '15px', fontSize: '1.2rem' }}>
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                  ${product.discountPrice.toFixed(2)}
                </span>
              </div>

              <div className="d-flex my-3">
                <button 
                  className="light-btn rounded-1"
                  style={{ 
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px'
                  }}
                  onClick={() => {
                    return toast('Product has been added to wishlist!', {
                      cancel: {
                        label: <i className="bi bi-x-lg"></i>,
                        onClick: () => console.log('Cancel!'),
                      },
                    })
                  }}
                >
                  <i className="bi bi-heart"></i>
                </button>
                <button 
                  type="button"
                  className="btn dark-btn rounded-1"
                  style={{ 
                    ...styles.actionButton,
                    padding: '0 30px',
                    flex: 1,
                    borderRadius: 0,
                  }}
                  onClick={() => {
                    return toast('Product has been added to cart!', {
                      cancel: {
                        label: <i className="bi bi-x-lg"></i>,
                        onClick: () => console.log('Cancel!'),
                      },
                    })
                  }}
                >
                  Add to cart
                </button>
              </div>

              <div className="d-flex my-3">
                <button 
                  className="dark-btn rounded-1"
                  style={{ 
                    ...styles.actionButton,
                    padding: '0 30px',
                    flex: 1
                  }}
                  type="button" data-bs-toggle="modal" data-bs-target="#buyModal"
                >
                  Buy
                </button>
              </div>

              <div className="d-flex my-3">
                <a href="/swap" className='d-flex w-100 text-decoration-none'>
                <button 
                  className="dark-btn rounded-1"
                  style={{ 
                    ...styles.actionButton,
                    padding: '0 30px',
                    flex: 1
                  }}
                >
                  Swap
                </button>
                </a>
              </div>

              <div className="mt-3">
                <p>Delivery: {product.delivery}</p>
              </div>

              {/* Enhanced Shop Section */}
              <div className="my-4">
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

        {/* Buyer Reviews Section */}
        <div className="mt-5 mb-5">
          <h2 style={{ fontWeight: 'bold', marginBottom: '30px' }}>Customer Reviews</h2>
          
          <div className="row">
            {/* Rating Summary */}
            <div className="col-md-4 mb-4">
              <div style={styles.reviewCard}>
                <div className="text-center mb-3">
                  <h3 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0' }}>{product.rating}</h3>
                  <div className="mb-2">
                    {renderStarRating(product.rating)}
                  </div>
                  <p className="mb-0">{product.reviewCount} Reviews</p>
                </div>
                
                <div className="mt-4">
                  {Object.keys(reviewsData.ratings)
                    .sort((a, b) => b - a)
                    .map(rating => (
                      <div key={rating} className="d-flex align-items-center mb-2">
                        <div style={{ width: '30px' }}>{rating}</div>
                        <i className="bi bi-star-fill me-2" style={styles.starRating}></i>
                        <div style={{ flex: 1 }}>
                          <div style={styles.ratingProgressBar}>
                            <div 
                              style={{
                                ...styles.ratingProgressFill,
                                width: `${(reviewsData.ratings[rating] / product.reviewCount) * 100}%`
                              }}
                            ></div>
                          </div>
                        </div>
                        <div style={{ width: '40px', textAlign: 'right', fontSize: '0.8rem' }}>
                          {reviewsData.ratings[rating]}
                        </div>
                      </div>
                    ))}
                </div>
                
                <div className="text-center mt-4">
                  <button 
                    className="btn"
                    style={{ 
                      backgroundColor: '#39754B',
                      color: 'white',
                      borderRadius: '3px',
                      fontWeight: 'bold',
                      padding: '8px 20px'
                    }}
                  >
                    Write a Review
                  </button>
                </div>
              </div>
            </div>
            
            {/* Reviews List */}
            <div className="col-md-8">
              {/* Review Tabs */}
              <div className="mb-4 d-flex">
                {['all', 'positive', 'critical', 'star'].map(tab => (
                  <button
                    key={tab}
                    className="me-3"
                    style={{
                      backgroundColor: activeTab === tab ? '#39754B' : 'transparent',
                      color: activeTab === tab ? 'white' : '#1A1816',
                      border: activeTab === tab ? 'none' : '1px solid #1A1816',
                      padding: '5px 15px',
                      borderRadius: '3px',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => handleTabChange(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)} Reviews
                  </button>
                ))}
              </div>
              
              {/* Individual Reviews */}
              {reviewsData.reviews.map((review) => (
                <div 
                  key={review.id} 
                  style={styles.reviewCard}
                >
                  <div style={styles.reviewHeader}>
                    <div style={styles.reviewerInfo}>
                      <img 
                        src={review.avatar} 
                        alt={review.user} 
                        style={styles.reviewerImage}
                      />
                      <div className="ms-2">
                        <div className="d-flex align-items-center">
                          <strong>{review.user}</strong>
                          {review.verified && (
                            <span style={styles.verifiedTag}>
                              <i className="bi bi-patch-check-fill me-1" style={{ fontSize: '0.7rem' }}></i>
                              Verified
                            </span>
                          )}
                        </div>
                        <small style={styles.reviewDate}>{review.date}</small>
                      </div>
                    </div>
                    <div>
                      {renderStarRating(review.rating)}
                    </div>
                  </div>
                  
                  <div style={styles.reviewText}>
                    {review.text}
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <small className="me-3">
                        <strong>Size:</strong> {review.size}
                      </small>
                      <small>
                        <strong>Color:</strong> {review.color}
                      </small>
                    </div>
                    <div className="d-flex">
                      <div 
                        style={styles.reviewAction}
                        onClick={() => handleMarkHelpful(review.id)}
                      >
                        <i className="bi bi-hand-thumbs-up me-1"></i>
                        Helpful ({review.helpfulCount})
                      </div>
                      <div style={styles.reviewAction}>
                        <i className="bi bi-flag me-1"></i>
                        Report
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Load More Button */}
              <div className="text-center mt-4">
                <button 
                  className="btn"
                  style={{ 
                    border: '1px solid #1A1816',
                    color: '#39754B',
                    fontWeight: 'bold',
                    padding: '8px 30px',
                    borderRadius: '3px'
                  }}
                >
                  Load More Reviews
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-5">
          <h2 style={{ fontWeight: 'bold', marginBottom: '30px' }}>Related Products</h2>
          <div className="row row-cols-2">
            {relatedProducts.map((item) => (
              <div key={item.id} className="col-md-3 mb-4">
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
  
  ${styles.reviewAction}:hover {
    color: #1A1816;
    text-decoration: underline;
  }
`;
document.head.appendChild(styleElement);

export default DetailProduct;