import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// component item
import Item from '../components/Item';

// asset product
import Image1 from '../assets/images/cap.png';
import Image2 from '../assets/images/jeans.png';
import Image3 from '../assets/images/tshirt.png';
import Image4 from '../assets/images/pants.png';

const ListProduct = () => {

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

          <div className="row">
            <div class="container">

              <h2>Sort By</h2>
              <div class="row align-items-start mb-2">
                <div className="col d-grid">
                  <button class="btn dropdown-toggle item-category my-1 p-2 text-center border border-dark me-3 fs-5 fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </button>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>

                <div className="col d-grid">
                  <button class="btn dropdown-toggle item-category my-1 p-2 text-center border border-dark me-3 fs-5 fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </button>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>

                <div className="col d-grid">
                  <button class="btn dropdown-toggle item-category my-1 p-2 text-center border border-dark me-3 fs-5 fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </button>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>

                <div className="col d-grid">
                  <button class="btn dropdown-toggle item-category my-1 p-2 text-center border border-dark me-3 fs-5 fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </button>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Search Result </h2>
          <div className="row justify-content-between mb-4">
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
};

export default ListProduct;