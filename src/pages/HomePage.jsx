import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel1 from '../assets/images/carousel/carousel1.jpg';
import Carousel2 from '../assets/images/carousel/carousel2.jpg';
import Carousel3 from '../assets/images/carousel/carousel3.jpg';

import Card1 from '../assets/images/homepage/card1.jpg';
import Card2 from '../assets/images/homepage/card2.jpg';
import Card3 from '../assets/images/homepage/card3.jpg';

const HomePage = () => {
    return (
        <>
            {/* Carousel Section */}
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active position-relative" data-bs-interval="2000">
                        <img src={Carousel1} className="d-block w-100" alt="image-carousel-1" style={styles.imgCarousel} />
                        <div className="carousel-caption d-none d-md-block" style={styles.carouselText}>
                            <h1 className='styled-text'>Revive Style, Reduce Waste</h1>
                            <p className='fw-bold styled-text fs-3'>Discover pre-loved fashion that makes a difference.</p>
                        </div>
                    </div>
                    <div className="carousel-item position-relative" data-bs-interval="2000">
                        <img src={Carousel2} className="d-block w-100" alt="image-carousel-2" style={styles.imgCarousel} />
                        <div className="carousel-caption d-none d-md-block" style={styles.carouselText}>
                            <h1 className='styled-text'>Shop Sustainably</h1>
                            <p className='fw-bold styled-text fs-3'>Join the movement to reduce fashion waste.</p>
                        </div>
                    </div>
                    <div className="carousel-item position-relative" data-bs-interval="2000">
                        <img src={Carousel3} className="d-block w-100" alt="image-carousel-3" style={styles.imgCarousel} />
                        <div className="carousel-caption d-none d-md-block" style={styles.carouselText}>
                            <h1 className='styled-text'>Your Style, Your Impact</h1>
                            <p className='fw-bold styled-text fs-3'>Every purchase helps the planet.</p>
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

            <section className='d-flex align-items-center' style={styles.section}>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-sm-evenly">
                        <div className="col-md-4 my-4">
                            <img src={Card1} alt="card-image" style={styles.cardImage} />
                        </div>
                        <div className="col-md-4">
                            <h2 style={styles.heading} className='shiny-text'>Welcome to Sustainable Fashion</h2>
                            <p style={styles.paragraph}>
                                At our store, we believe in giving pre-loved clothing a second life. By choosing second-hand fashion, you're not only saving money but also helping to reduce the environmental impact of the fashion industry. Join us in making a difference, one outfit at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex align-items-center' style={styles.section}>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-sm-evenly">
                        <div className="col-md-4 my-4 order-md-1 order-0">
                            <img src={Card2} alt="card-image" style={styles.cardImage} />
                        </div>
                        <div className="col-md-4 order-md-0 order-1">
                            <h2 style={styles.heading}>Find Clothes That Suit Your Preferences</h2>
                            <p style={styles.paragraph}>
                                Our shop has lots of second hand clothes with various themes. Find clothes that suit your preferences at low prices in decent condition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex align-items-center' style={styles.section}>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-sm-evenly">
                        <div className="col-md-4 my-4">
                            <img src={Card3} alt="card-image" style={styles.cardImage} />
                        </div>
                        <div className="col-md-4">
                            <h2 style={styles.heading}>Welcome to Sustainable Fashion</h2>
                            <p style={styles.paragraph}>
                                At our store, we believe in giving pre-loved clothing a second life. By choosing second-hand fashion, you're not only saving money but also helping to reduce the environmental impact of the fashion industry. Join us in making a difference, one outfit at a time.
                            </p>
                        </div>
                    </div>
                </div>
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
        minHeight: '80vh',
        padding: '30px 10px',
    },
    cardImage: {
        width: "100%",
        height: "auto",
        borderRadius: "10px"
    },
    heading: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#39754B",
        textShadow: '0 0 2px #1A1816'
    },
    paragraph: {
        fontSize: "1.2rem",
        lineHeight: "1.8",
        color: "#1A1816"
    },
    carouselText: {
        position: 'absolute',
        top: '50%',
    }
}

export default HomePage;