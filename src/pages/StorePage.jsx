import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

// component item
import Item from '../components/Item';
import BiggerItem from '../components/BiggerItem';

// asset product
import Image1 from '../assets/images/cap.png';
import Image2 from '../assets/images/jeans.png';
import Image3 from '../assets/images/tshirt.png';
import Image4 from '../assets/images/pants.png';

// asset carousel
import Carousel1 from '../assets/images/ad/ad10.webp';
import Carousel2 from '../assets/images/ad/ad11.webp';
import Carousel3 from '../assets/images/ad/ad5.webp';

const StorePage = () => {

  // data product
  const products = [
    { id: 1, name: "Phone Case", price: 6.2, image: Image1 },
    { id: 2, name: "Hoodie Sweatshirt", price: 90.3, image: Image2, oldPrice: 129 },
    { id: 3, name: "Basic T-Shirt", price: 27.54, image: Image3 },
    { id: 4, name: "Baseball Cap", price: 19.2, image: Image4 },
  ];

  return (
    <>
      <section className="pt-5" style={{ backgroundColor: "#FCFBF0" }}>
        <div className="container">
          
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1000">
                <img src={ Carousel1 } className="d-block w-100" alt="advertisement" />
              </div>
              <div className="carousel-item" data-bs-interval="1000">
                <img src={ Carousel2 } className="d-block w-100" alt="advertisement" />
              </div>
              <div className="carousel-item" data-bs-interval="1000">
                <img src={ Carousel3 } className="d-block w-100" alt="advertisement" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <h2 className="mt-5 text-uppercase">Related Products</h2>
          <div className="row row-cols-4 mt-3">
            {/* {products.map((product) => (
              <div key={product.id} className="col-md-3 text-center">
                <div className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                  />
                  <h5 className="mt-2">{product.name}</h5>
                  {product.oldPrice && (
                    <span className="text-muted text-decoration-line-through me-2">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="fw-bold">${product.price.toFixed(2)}</span>
                </div>
              </div>
            ))} */}
            {products.map((product) => (
              <BiggerItem key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
            ))}
          </div>

          <div className="row">
            <div class="container my-4">
              <div class="row align-items-start ms-2">
                <a href="#" className="text-decoration-none item-category col my-1 p-2 text-center border border-dark me-3 fs-5 fw-light">
                  Chlotes
                </a>
                <a href="#" className="text-decoration-none item-category col my-1 p-2 text-center border border-dark me-3 fs-5 fw-light">
                  Jacket
                </a>
                <a href="#" className="text-decoration-none item-category col my-1 p-2 text-center border border-dark me-3 fs-5 fw-light">
                  Jeans
                </a>
                <a href="#" className="text-decoration-none item-category col my-1 p-2 text-center border border-dark me-3 fs-5 fw-light">
                  T-shirt
                </a>
              </div>
            </div>
          </div>

          <div className="row row-cols-2 justify-content-between">
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
            {products.map((product) => (
              <Item key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
            ))}
          </div>
        </div>
      </section>
    </>

  );
};

export default StorePage;

const styles = `
  .product-card {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
  .product-card img {
    border-radius: 5px;
  }
  h2 {
    font-weight: bold;
  }
`;

document.head.insertAdjacentHTML(
  "beforeend",
  `<style>${styles}</style>`
);
