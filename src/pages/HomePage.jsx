import React, { useEffect, useState, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Carousel1 from '../assets/images/carousel/carousel1.jpg';
import Carousel2 from '../assets/images/carousel/carousel2.jpg';
import Carousel3 from '../assets/images/carousel/carousel3.jpg';
import Item from '../components/Item';
import ItemArticles from '../components/ItemArticles';

import Card1 from '../assets/images/homepage/card1.jpg';
import Card2 from '../assets/images/homepage/card2.jpg';
import Card3 from '../assets/images/homepage/card3.jpg';

import StatsBackground from '../assets/images/carousel/carousel4.jpg';
import Image1 from '../assets/images/product/cap.png';
import Image2 from '../assets/images/product/jeans.png';
import Image3 from '../assets/images/product/tshirt.png';
import Image4 from '../assets/images/product/pants.png';

import Team1 from '../assets/images/team/team1.jpg';
import Team2 from '../assets/images/team/team2.jpg';

const products = [
    { id: 1, name: "Phone Case", price: 6.2, image: Image1 },
    { id: 2, name: "Hoodie Sweatshirt", price: 90.3, image: Image2, oldPrice: 129 },
    { id: 3, name: "Basic T-Shirt", price: 27.54, image: Image3 },
    { id: 4, name: "Baseball Cap", price: 19.2, image: Image4 },
];

const HomePage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const aboutSectionRef = useRef(null);
    const featuredProductsRef = useRef(null);
    const sustainableMovementRef = useRef(null);
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % 3);
        }, 5000);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    // Function to scroll to a section
    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const carouselItems = [
        {
            image: Carousel1,
            title: "Revive Style, Reduce Waste",
            subtitle: "Discover pre-loved fashion that makes a difference.",
            buttonText: "Shop Now",
            scrollToRef: featuredProductsRef
        },
        {
            image: Carousel2,
            title: "Shop Sustainably",
            subtitle: "Join the movement to reduce fashion waste.",
            buttonText: "Explore Collection",
            scrollToRef: aboutSectionRef
        },
        {
            image: Carousel3,
            title: "Your Style, Your Impact",
            subtitle: "Every purchase helps the planet.",
            buttonText: "Learn More",
            scrollToRef: sustainableMovementRef
        }
    ];

    return (
        <>
            {/* Parallax Carousel Section */}
            <div className="parallax-carousel-container position-relative overflow-hidden" style={{ height: '90vh' }}>
                {carouselItems.map((item, index) => (
                    <div 
                        key={index}
                        className={`parallax-slide position-absolute w-100 h-100 transition-opacity ${index === activeSlide ? 'active-slide' : ''}`}
                        style={{ 
                            opacity: index === activeSlide ? 1 : 0,
                            transition: 'opacity 1.5s ease-in-out'
                        }}
                    >
                        <div 
                            className="parallax-image w-100 h-100" 
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transform: `translateY(${scrollPosition * 0.4}px)`,
                                transition: 'transform 0.5s ease-out',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                            }}
                        />
                        <div className="carousel-overlay position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
                        <div className="carousel-content d-flex flex-column justify-content-center align-items-center position-absolute w-100 h-100 text-center px-3">
                            <h1 
                                className="display-3 fw-bold text-white mb-3 animation-slide-up"
                                style={{ 
                                    textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
                                    transform: index === activeSlide ? 'translateY(0)' : 'translateY(50px)',
                                    opacity: index === activeSlide ? 1 : 0,
                                    transition: 'transform 1s ease, opacity 1s ease',
                                    transitionDelay: '0.3s'
                                }}
                            >
                                {item.title}
                            </h1>
                            <p 
                                className="fs-4 text-white mb-4 animation-slide-up"
                                style={{ 
                                    textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
                                    maxWidth: '800px',
                                    transform: index === activeSlide ? 'translateY(0)' : 'translateY(50px)',
                                    opacity: index === activeSlide ? 1 : 0,
                                    transition: 'transform 1s ease, opacity 1s ease',
                                    transitionDelay: '0.5s'
                                }}
                            >
                                {item.subtitle}
                            </p>
                            <button 
                                className="btn btn-lg animation-zoom-in hoverable-item"
                                style={{ 
                                    backgroundColor: '#39754B',
                                    color: '#FCFBF0',
                                    borderRadius: '6px',
                                    padding: '12px 30px',
                                    transform: index === activeSlide ? 'scale(1)' : 'scale(0.8)',
                                    opacity: index === activeSlide ? 1 : 0,
                                    transition: 'transform 1s ease, opacity 1s ease, background-color 0.3s ease',
                                    transitionDelay: '0.7s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2c5d3b'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#39754B'}
                                onClick={() => scrollToSection(item.scrollToRef)}
                            >
                                {item.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
                
                {/* Carousel Navigation */}
                <div className="carousel-indicators-custom position-absolute bottom-0 start-0 end-0 mb-4 d-flex justify-content-center">
                    {carouselItems.map((_, index) => (
                        <button 
                            key={index} 
                            className={`carousel-indicator mx-2 border-0 ${index === activeSlide ? 'active' : ''}`}
                            style={{ 
                                width: index === activeSlide ? '30px' : '12px',
                                height: '12px',
                                borderRadius: index === activeSlide ? '6px' : '50%',
                                backgroundColor: index === activeSlide ? '#39754B' : 'rgba(255,255,255,0.7)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onClick={() => setActiveSlide(index)}
                        />
                    ))}
                </div>
                
                {/* Arrow Navigation */}
                <button 
                    className="carousel-control position-absolute top-50 start-0 translate-middle-y bg-transparent border-0 p-3"
                    style={{ 
                        zIndex: 10, 
                        opacity: 0.7,
                        transition: 'opacity 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                    onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
                    onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)}
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button 
                    className="carousel-control position-absolute top-50 end-0 translate-middle-y bg-transparent border-0 p-3"
                    style={{ 
                        zIndex: 10, 
                        opacity: 0.7,
                        transition: 'opacity 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                    onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
                    onClick={() => setActiveSlide((prev) => (prev + 1) % 3)}
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                
                {/* Scroll Down Indicator */}
                <div 
                    className="scroll-down position-absolute bottom-0 start-50 translate-middle-x mb-4 d-none d-md-block"
                    style={{ 
                        animation: 'bounce 2s infinite',
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                    onClick={() => window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    })}
                >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            {/* About Section 1 */}
            <section ref={aboutSectionRef} className='d-flex align-items-center' style={styles.section}>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-sm-evenly">
                        <div className="col-md-4 my-4" data-aos="fade-right">
                            <img src={Card1} alt="card-image" style={styles.cardImage} className="shadow" />
                        </div>
                        <div className="col-md-4" data-aos="fade-left" data-aos-delay="200">
                            <h2 style={styles.heading} className='shiny-text'>Welcome to Sustainable Fashion</h2>
                            <p style={styles.paragraph}>
                                At our store, we believe in giving pre-loved clothing a second life. By choosing second-hand fashion, you're not only saving money but also helping to reduce the environmental impact of the fashion industry. Join us in making a difference, one outfit at a time.
                            </p>
                            <a href="/aboutus" className="btn btn-outline-custom-primary mt-3">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section 2 */}
            <section className='d-flex align-items-center' style={styles.sectionAlt}>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-sm-evenly">
                        <div className="col-md-4 my-4 order-md-1 order-0" data-aos="fade-left">
                            <img src={Card2} alt="card-image" style={styles.cardImage} className="shadow" />
                        </div>
                        <div className="col-md-4 order-md-0 order-1" data-aos="fade-right" data-aos-delay="200">
                            <h2 style={styles.heading}>Find Clothes That Suit Your Preferences</h2>
                            <p style={styles.paragraph}>
                                Our shop has lots of second hand clothes with various themes. Find clothes that suit your preferences at low prices in decent condition.
                            </p>
                            <a href="/store" className="btn btn-outline-custom-primary mt-3">Browse Collection</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section 3 */}
            <section ref={sustainableMovementRef} className='d-flex align-items-center' style={styles.section}>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-sm-evenly">
                        <div className="col-md-4 my-4" data-aos="fade-right">
                            <img src={Card3} alt="card-image" style={styles.cardImage} className="shadow" />
                        </div>
                        <div className="col-md-4" data-aos="fade-left" data-aos-delay="200">
                            <h2 style={styles.heading}>Sustainable Fashion Movement</h2>
                            <p style={styles.paragraph}>
                                At our store, we believe in giving pre-loved clothing a second life. By choosing second-hand fashion, you're not only saving money but also helping to reduce the environmental impact of the fashion industry. Join us in making a difference, one outfit at a time.
                            </p>
                            <a href="/aboutus" className="btn btn-outline-custom-primary mt-3">Join Our Community</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section ref={featuredProductsRef} style={styles.featuredSection}>
                <div className="container py-5">
                    <h2 className="text-center mb-5" style={styles.heading} data-aos="fade-down">Featured Products</h2>
                    <div className="row g-4">
                        {products.map((product, index) => (
                            <div className="col-md-3 col-6" key={product.id} data-aos="fade-up" data-aos-delay={index * 100} data-aos-duration="800">
                                <Item picture={product.image} name={product.name} oldPrice={product.oldPrice} price={product.price} />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5" data-aos="zoom-in" data-aos-delay="400">
                        <a href="/store" className="btn btn-custom-primary btn-lg">View All Products</a>
                    </div>
                </div>
            </section>

            {/* Articles Section */}
            <section style={styles.articlesSection}>
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col-md-8 mx-auto text-center" data-aos="fade-down">
                            <h2 style={styles.heading}>Sustainable Fashion Insights</h2>
                            <p style={styles.sectionIntro}>
                                Explore our collection of articles about sustainable fashion, eco-friendly practices, and how to make a positive impact through your style choices.
                            </p>
                        </div>
                    </div>
                    
                   <ItemArticles></ItemArticles>
                    <div className="text-center mt-5" data-aos="fade-up">
                        <a href="/articles" className="btn btn-custom-primary btn-lg">Explore All Articles</a>
                    </div>
                </div>
            </section>

            {/* Statistics Section with Background Image */}
            <section style={{
                ...styles.statsSection,
                backgroundImage: `url(${StatsBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(57, 117, 75, 0.85)'
                }}></div>
                
                <div className="container py-5 position-relative">
                    <div className="row text-center">
                        <div className="col-md-12 mb-5">
                            <h2 style={{...styles.heading, color: '#FCFBF0'}} data-aos="zoom-in">Our Impact</h2>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-3 col-6 mb-4" data-aos="zoom-in" data-aos-delay="100">
                            <div className="stat-item p-4" style={styles.statItem}>
                                <h3 className="counter" style={styles.statNumber}>5,000+</h3>
                                <p style={styles.statText}>Items Recycled</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4" data-aos="zoom-in" data-aos-delay="200">
                            <div className="stat-item p-4" style={styles.statItem}>
                                <h3 className="counter" style={styles.statNumber}>2,500+</h3>
                                <p style={styles.statText}>Happy Customers</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4" data-aos="zoom-in" data-aos-delay="300">
                            <div className="stat-item p-4" style={styles.statItem}>
                                <h3 className="counter" style={styles.statNumber}>15+</h3>
                                <p style={styles.statText}>Tons CO2 Saved</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4" data-aos="zoom-in" data-aos-delay="400">
                            <div className="stat-item p-4" style={styles.statItem}>
                                <h3 className="counter" style={styles.statNumber}>500K+</h3>
                                <p style={styles.statText}>Liters Water Saved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Teaser */}
            <section style={styles.aboutUsSection}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right">
                            <h2 style={styles.heading}>Meet The Team Behind Our Mission</h2>
                            <p style={styles.paragraph}>
                                We're a passionate group of individuals committed to changing the fashion industry for the better. Our team combines expertise in fashion, sustainability, and retail to create a shopping experience that's good for you and the planet.
                            </p>
                            <p style={styles.paragraph}>
                                From our careful curation process to our community initiatives, every aspect of our business is guided by our commitment to environmental responsibility and ethical practices.
                            </p>
                            <div className="mt-4">
                                <a href="/aboutus" className="btn btn-custom-primary">Learn More About Us</a>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
                            <div className="row g-4 mt-2 mt-lg-0">
                                <div className="col-6">
                                    <div className="team-preview" style={styles.teamPreview}>
                                        <img src={Team1} alt="Team member" className="img-fluid rounded shadow" />
                                        <div style={styles.teamOverlay}>
                                            <h5 className="mb-0">Kevin</h5>
                                            <p className="small mb-0">Founder & CEO</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="team-preview mt-4" style={styles.teamPreview}>
                                        <img src={Team2} alt="Team member" className="img-fluid rounded shadow" />
                                        <div style={styles.teamOverlay}>
                                            <h5 className="mb-0">Ivan</h5>
                                            <p className="small mb-0">Sustainability Director</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom CSS */}
            <style jsx>{`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                    40% {transform: translateY(-20px);}
                    60% {transform: translateY(-10px);}
                }
                
                .parallax-slide {
                    z-index: 1;
                }
                
                .active-slide {
                    z-index: 2;
                }
                
                .btn-custom-primary {
                    background-color: #39754B;
                    color: #FCFBF0;
                    border: none;
                    transition: all 0.3s ease;
                }
                
                .btn-custom-primary:hover {
                    background-color: #2c5d3b;
                    color: #FCFBF0;
                    transform: translateY(-2px);
                }
                
                .btn-outline-custom-primary {
                    border-color: #39754B;
                    color: #39754B;
                    background-color: transparent;
                    transition: all 0.3s ease;
                }
                
                .btn-outline-custom-primary:hover {
                    background-color: #39754B;
                    color: #FCFBF0;
                }
                
                .btn-custom-secondary {
                    background-color: #93A588;
                    color: #FCFBF0;
                    border: none;
                    transition: all 0.3s ease;
                }
                
                .btn-custom-secondary:hover {
                    background-color: #7d8c73;
                    color: #FCFBF0;
                    transform: translateY(-2px);
                }
                
                /* Media Queries for Responsiveness */
                @media (max-width: 992px) {
                    .parallax-carousel-container {
                        height: 80vh !important;
                    }
                }
                
                @media (max-width: 768px) {
                    .parallax-carousel-container {
                        height: 70vh !important;
                    }
                    
                    .carousel-content h1 {
                        font-size: 2.5rem !important;
                    }
                    
                    .carousel-content p {
                        font-size: 1.2rem !important;
                    }
                }
                
                @media (max-width: 576px) {
                    .parallax-carousel-container {
                        height: 60vh !important;
                    }
                    
                    .carousel-content h1 {
                        font-size: 2rem !important;
                    }
                    
                    .carousel-content p {
                        font-size: 1rem !important;
                    }
                    
                    .carousel-content button {
                        padding: 8px 20px !important;
                        font-size: 1rem !important;
                    }
                }
            `}</style>
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
    sectionAlt: {
        backgroundColor: "#F5F5F5",
        minHeight: '80vh',
        padding: '30px 10px',
    },
    cardImage: {
        width: "100%",
        height: "auto",
        borderRadius: "10px",
        transition: "transform 0.3s ease",
        "&:hover": {
            transform: "scale(1.02)"
        }
    },
    heading: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#39754B",
    },
    paragraph: {
        fontSize: "1.2rem",
        lineHeight: "1.8",
        color: "#1A1816"
    },
    carouselText: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)'
    },
    featuredSection: {
        backgroundColor: "#F8F9FA",
        padding: '50px 0'
    },
    productCard: {
        border: "1px solid #93A588",
        borderRadius: "10px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
        }
    },
    productImage: {
        height: "250px",
        objectFit: "cover"
    },
    badge: {
        top: "10px",
        right: "10px",
        color: "#FCFBF0"
    },
    statsSection: {
        padding: '50px 0',
        color: "#FCFBF0",
        position: 'relative'
    },
    statItem: {
        backgroundColor: "rgba(252, 251, 240, 0.1)",
        borderRadius: "10px",
        transition: "transform 0.3s ease",
        backdropFilter: "blur(5px)",
        "&:hover": {
            transform: "translateY(-10px)"
        }
    },
    statNumber: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#FCFBF0"
    },
    statText: {
        fontSize: "1.1rem",
        color: "#FCFBF0"
    },
    articlesSection: {
        backgroundColor: "#FCFBF0",
        padding: '50px 0'
    },
    sectionIntro: {
        fontSize: "1.2rem",
        lineHeight: "1.8",
        color: "#1A1816",
        maxWidth: "800px",
        margin: "0 auto"
    },
    articleCard: {
        border: "1px solid #93A588",
        borderRadius: "10px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: "#FCFBF0",
        "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
        }
    },
    articleImage: {
        height: "200px",
        objectFit: "cover"
    },
    aboutUsSection: {
        backgroundColor: "#F5F5F5",
        padding: '50px 0'
    },
    teamPreview: {
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        "&:hover": {
            "& > div": {
                transform: "translateY(0)"
            }
        }
    },
    teamOverlay: {
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: "rgba(57, 117, 75, 0.9)",
        color: "#FCFBF0",
        padding: "15px",
        transform: "translateY(100%)",
        transition: "transform 0.3s ease"
    },
    newsletterSection: {
        backgroundColor: "#1A1816",
        padding: '50px 0'
    }
}

export default HomePage;