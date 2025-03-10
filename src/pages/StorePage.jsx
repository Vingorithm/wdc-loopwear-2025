import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// component item
import Item from '../components/Item';
import BiggerItem from '../components/BiggerItem';

// asset product
import Image1 from '../assets/images/product/cap.png';
import Image2 from '../assets/images/product/jeans.png';
import Image3 from '../assets/images/product/tshirt.png';
import Image4 from '../assets/images/product/pants.png';
import Image5 from '../assets/images/product/sweater2.jpg';
import Image6 from '../assets/images/product/tshirt3.jpg';
import Image7 from '../assets/images/product/jeans2.jpg';
import Image8 from '../assets/images/product/jacket.jpg';
import Image9 from '../assets/images/product/tshirt2.jpg';
import Image10 from '../assets/images/product/dress.jpeg';
import Image11 from '../assets/images/product/beanie.jpg';

// asset carousel
import Carousel1 from '../assets/images/ad/ad10.jpg';
import Carousel2 from '../assets/images/ad/ad11.jpg';
import Carousel3 from '../assets/images/ad/ad5.jpg';

const StorePage = () => {

  // data product
  const products = [
    { id: 1, name: "MLB Cap", price: 6.2, image: Image1 },
    { id: 2, name: "Levi's Jeans", price: 90.3, image: Image2, oldPrice: 129 },
    { id: 3, name: "Light Choco T-Shirt", price: 27.54, image: Image3 },
    { id: 4, name: "Satin Jogger Pants", price: 19.2, image: Image4 },
    { id: 5, name: "Winter Sweater", price: 90.3, image: Image5, oldPrice: 129 },
    { id: 6, name: "Racoon Tee", price: 27.54, image: Image6 },
    { id: 7, name: "Nevada Jeans", price: 19.2, image: Image7 },
    { id: 8, name: "Cafe Bomber", price: 19.2, image: Image8 },
    { id: 9, name: "Japanese Cat T-Shirt", price: 27.54, image: Image9 },
    { id: 10, name: "Mini Dress", price: 19.2, image: Image10 },
    { id: 11, name: "Grey Aape Beanie", price: 19.2, image: Image11 },
  ];

  return (
    <>
      <section className="pt-5" style={{ backgroundColor: "#FCFBF0" }}>
        <div className="container">
          
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2500">
                <img src={ Carousel1 } className="d-block w-100 rounded-1" alt="advertisement" />
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <img src={ Carousel2 } className="d-block w-100 rounded-1" alt="advertisement" />
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <img src={ Carousel3 } className="d-block w-100 rounded-1" alt="advertisement" />
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

          <h2 className="mt-5">Related Products</h2>
          <div className="row row-cols-4 mt-3">
            {products.slice(0, 4).map((product) => (
              <BiggerItem key={product.id} picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
            ))}
          </div>

          <div className="row">
            <div class="container my-4">
              <div class="row align-items-start ms-2">
                <a href="#" className="text-decoration-none rounded-1 item-category col my-1 p-2 text-center border border-dark me-3 fs-5 fw-light">
                  Chlotes
                </a>
                <a href="#" className="text-decoration-none rounded-1 item-category col my-1 p-2 text-center border border-dark me-3 fs-5 fw-light">
                  Jacket
                </a>
                <a href="#" className="text-decoration-none rounded-1 item-category col my-1 p-2 text-center border border-dark me-3 fs-5 fw-light">
                  Jeans
                </a>
                <a href="#" className="text-decoration-none rounded-1 item-category col my-1 p-2 text-center border border-dark me-3 fs-5 fw-light">
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
            {products.slice(0, 9).map((product) => (
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
