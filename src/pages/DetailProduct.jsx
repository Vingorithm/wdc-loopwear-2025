import React, { useState } from 'react';
import Image1 from "../assets/images/cap.png";
import Image2 from "../assets/images/jeans.png";
import Image3 from "../assets/images/tshirt.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from '../components/Item';

// asset product
import Img1 from '../assets/images/product/1.jpeg';
import Img2 from '../assets/images/product/2.webp';
import Img3 from '../assets/images/product/3.webp';
import Img4 from '../assets/images/product/4.webp';
import Img5 from '../assets/images/product/5.jpeg';
import Img6 from '../assets/images/product/6.jpg';
import Img7 from '../assets/images/product/7.jpg';

import shop from '../assets/images/shop/shop.webp';

const styles = {
  image: {
    aspectRatio: "1/1.5",
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    margin: "0px 0px 10px 0px"
  },
  card: {
    // border: "1px solid black",
  },
  mainImage: {
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
    aspectRatio: "1/1.05",
  },
  modelImage: {
    height: "150px",
    objectFit: "cover"
  }
}

const DetailProduct = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedPhoto, setSelectedPhoto] = useState(Img2);
  
  // Mock data for the product
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

  // Mock data for related products
  const relatedProducts = [
    { id: 1, name: "iPhone Case", price: 8.29, image: Image1 },
    { id: 2, name: "HOODIE SWEATSHIRT", price: 90.30, originalPrice: 129.00, image: Image1 },
    { id: 3, name: "BASIC T-SHIRT", price: 27.54, image: Image1 },
    { id: 4, name: "BASEBALL CAP", price: 19.29, image: Image1 }
  ];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div style={{ backgroundColor: '#FCFBF0', color: '#1A1816', minHeight: '100vh', padding: '20px' }}>
      <div className="container">
        <div className="row mb-5">
          {/* Left side - Product Images */}
          <div className="col-md-7">
            <div className="row">
              <div className="col-12 mb-4">
                <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }} >
                  <img 
                    className='main-image-product'
                    src={selectedPhoto} 
                    alt="Hoodie Sweatshirt" 
                    style={styles.mainImage}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className='overflow-y-scroll' style={{ padding: '20px', display: 'flex', alignItems: 'center'}}>
                  <div className="d-flex">
                    {[Img2, Img1, Img3, Img4, Img5, Img6, Img7].map((source, index) => (
                      <a href="#" onClick={() => setSelectedPhoto(source)}>
                        <img 
                          src={source} 
                          alt="Model wearing Hoodie" 
                          style={styles.modelImage} 
                          className="me-3"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className="col-md-5">
            <div className="py-4">
              <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>{product.name}</h1>
              <p className="mt-3">{product.description}</p>
              
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
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    className="me-2"
                    style={{
                      border: selectedSize === size ? '2px solid #39754B' : '1px solid #1A1816',
                      backgroundColor: selectedSize === size ? '#39754B' : 'transparent',
                      color: selectedSize === size ? '#FCFBF0' : '#1A1816',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
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
                <button className='light-btn'
                  style={{ 
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px'
                  }}
                >
                  <i class="bi bi-heart"></i>
                </button>
                <button className='dark-btn'
                  style={{ 
                    padding: '0 30px',
                    flex: 1,
                    height: '50px',
                    fontWeight: 'bold'
                  }}
                >
                  Add to cart
                </button>
              </div>

              <div className="d-flex my-3">
                <button className='dark-btn'
                    style={{ 
                      padding: '0 30px',
                      flex: 1,
                      height: '50px',
                      fontWeight: 'bold'
                    }}
                  >
                    Buy
                  </button>
              </div>

              <div className="d-flex my-3">
                <button className='dark-btn'
                    style={{ 
                      padding: '0 30px',
                      flex: 1,
                      height: '50px',
                      fontWeight: 'bold'
                    }}
                  >
                    Swap
                  </button>
              </div>

              <div className="mt-3">
                <p>Delivery: {product.delivery}</p>
              </div>

              <div className="d-flex my-3">
                <a href="/shop" style={{ 
                  width: "100%",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                  display: "flex",
                  textDecoration: 'none',
                }}>
                  <button className='shop-account'>
                    <div className="row align-items-center">
                      <div className="col-3">
                      <img src={shop} alt="shop-icon" style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: '100%',
                        width: '70%',
                        border: "1px solid #1A1816"
                      }}  />
                      </div>
                      <div className="col-7">
                        <div className="row text-start align-items-center"><p className="fs-3 fw-bold">LoopWear</p></div>
                        <div className="row text-start align-items-center" ><p style={{
                          color: '#39754B',
                          fontWeight: 'bold',
                        }}>online</p></div>
                      </div>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-5">
          <h2 style={{ fontWeight: 'bold', marginBottom: '30px' }}>RELATED PRODUCTS</h2>
          <div className="row">
            {relatedProducts.map(item => (
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

export default DetailProduct;