import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

import Image1 from '../assets/images/cap.png';
import Image2 from '../assets/images/jeans.png';
import Image3 from '../assets/images/tshirt.png';
import Image4 from '../assets/images/pants.png';


const StorePage = () => {
  const products = [
    { id: 1, name: "Phone Case", price: 6.2, image: Image1 },
    { id: 2, name: "Hoodie Sweatshirt", price: 90.3, image: Image2, oldPrice: 129 },
    { id: 3, name: "Basic T-Shirt", price: 27.54, image: Image3 },
    { id: 4, name: "Baseball Cap", price: 19.2, image: Image4 },
  ];

  return (
    
    <div className="container mt-5">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="carousel1.jpg" alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="carousel2.jpg" alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="carousel3.jpg" alt="Slide 3" />
        </Carousel.Item>
      </Carousel>

      <h2 className="mt-5 text-uppercase">Related Products</h2>
      <div className="row mt-3">
        {products.map((product) => (
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
        ))}
      </div>
    </div>
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
