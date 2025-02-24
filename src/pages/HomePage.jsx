import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel1 from '../assets/images/carousel1.jpg';
import Carousel2 from '../assets/images/carousel2.jpg';
import Carousel3 from '../assets/images/carousel3.jpg';

const HomePage = () => {
    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={Carousel1} className="d-block w-100" alt="image-carousel-1" style={styles.imgCarousel} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Carousel2} className="d-block w-100" alt="image-carousel-2" style={styles.imgCarousel} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Carousel3} className="d-block w-100" alt="image-carousel-3" style={styles.imgCarousel} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
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

            <section className='min-vh-100' style={styles.section}>

            </section>
        </>
    );
}

const styles = {
    imgCarousel: {
        width: "100%",
        height: "90vh",
        objectFit: "cover",
        objectPosition: "center"
    },
    section: {
        backgroundColor: "#FCFBF0",
    }
}

export default HomePage;