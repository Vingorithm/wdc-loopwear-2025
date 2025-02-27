import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselImage from "../assets/images/carousel/carousel5.webp";

const AboutUs = () => {
    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        {/* Wrapper untuk Overlay */}
                        <div className="position-relative">
                            {/* Gambar Carousel */}
                            <img src={CarouselImage} className="d-block w-100" alt="image-carousel-1" style={styles.imgCarousel} />
                            
                            {/* Overlay Gelap */}
                            <div style={styles.overlay}></div>
                            
                            {/* Teks dan Button */}
                            <div style={styles.contentWrapper} className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                <div className="container px-4">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-md-10 col-lg-8 text-center">
                                            <h2 className="fw-bold text-white mb-3">Extending Fashion's Lifespan for a Sustainable Future</h2>
                                            <p className="text-white">
                                                Millions of tons of textile waste are discarded in Indonesia each year, and without action, 
                                                the numbers will only grow. Clothes are worn, tossed aside, and forgotten therefore harming 
                                                the environment. Loopwear is here to extend the lifespan of clothing and make sustainable 
                                                choices easier, empowering individuals to minimize their environmental impact and embrace 
                                                a more eco-friendly future.
                                            </p>
                                            <button className="btn btn-success mt-3">LEARN MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='py-5' style={styles.section}>
                <div className="container py-4">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h3 className="text-uppercase" style={styles.sectionHeading}>WHAT WE STAND FOR</h3>
                            <h2 style={styles.mainHeading}>We are dedicated to sustainable fashion.</h2>
                        </div>
                    </div>
                    
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h4 style={styles.subHeading}>OUR MISSION</h4>
                            <h3 style={styles.columnHeading}>We Make Fashion Circular for a Sustainable Future</h3>
                            <p style={styles.text}>
                                Loopwear main service is extending the life cycle of fashion items through our circular 
                                system. We collect, restore, and redistribute clothing to reduce textile waste and promote 
                                sustainable consumption habits. By keeping clothes in circulation longer, we help reduce 
                                the environmental impact of the fashion industry.
                            </p>
                        </div>
                        
                        {/* Right Column */}
                        <div className="col-md-6">
                            <h4 style={styles.subHeading}>OUR VISION</h4>
                            <h3 style={styles.columnHeading}>We Ensure Educational Impact That Drives Change</h3>
                            <p style={styles.text}>
                                Loopwear aims to educate consumers about the environmental impact of fashion choices 
                                and empower them with sustainable alternatives. Through workshops, content, and community 
                                engagement, we're building awareness about circular fashion and inspiring individuals to 
                                make more conscious decisions about their clothing.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Education Section */}
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="p-4 rounded" style={styles.educationBox}>
                                <h3 className="text-center mb-4" style={styles.educationHeading}>We're Making A Huge Difference</h3>
                                <p className="text-center mb-4">
                                    We believe that every garment deserves a second chance at a brighter future in 
                                    their life cycle. Fashion doesn't have to end up in landfills - it deserves a chance 
                                    to be appreciated by others.
                                </p>
                                
                                <div className="row mt-5">
                                    <div className="col-md-4 text-center mb-4 mb-md-0">
                                        <div className="d-flex flex-column align-items-center">
                                            <div style={styles.iconCircle} className="mb-3 d-flex align-items-center justify-content-center">
                                                <i className="fas fa-recycle" style={styles.icon}></i>
                                            </div>
                                            <h5 className="mb-3">Recycling</h5>
                                            <p>Converting waste materials into new products to prevent waste of potentially useful materials.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 text-center mb-4 mb-md-0">
                                        <div className="d-flex flex-column align-items-center">
                                            <div style={styles.iconCircle} className="mb-3 d-flex align-items-center justify-content-center">
                                                <i className="fas fa-tshirt" style={styles.icon}></i>
                                            </div>
                                            <h5 className="mb-3">Upcycling</h5>
                                            <p>Transforming by-products, waste materials, or unwanted products into new materials of better quality.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 text-center">
                                        <div className="d-flex flex-column align-items-center">
                                            <div style={styles.iconCircle} className="mb-3 d-flex align-items-center justify-content-center">
                                                <i className="fas fa-seedling" style={styles.icon}></i>
                                            </div>
                                            <h5 className="mb-3">Education</h5>
                                            <p>Providing resources and workshops to educate consumers about sustainable fashion practices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Team Section */}
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h3 className="text-uppercase" style={styles.sectionHeading}>THE PEOPLE BEHIND LOOPWEAR</h3>
                            <h2 style={styles.mainHeading}>Our Team</h2>
                            <p className="text-center mb-5" style={styles.text}>
                                Meet the passionate individuals driving our mission to make fashion more sustainable.
                                Together, we're working to create a circular fashion economy that benefits both people and the planet.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row">
                        {/* Team Member 1 */}
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card border-0" style={styles.teamCard}>
                                <div className="text-center p-3">
                                    <div style={styles.memberImageWrapper}>
                                        <div style={styles.memberImage} className="mb-3"></div>
                                    </div>
                                    <h4 style={styles.memberName}>Kevin Philips Tanamas</h4>
                                    <h5 style={styles.memberPosition}>Founder & CEO</h5>
                                    <p style={styles.text}>
                                        With a background in sustainable fashion, Kevin leads our team with a
                                        vision to transform how we think about clothing consumption and waste.
                                    </p>
                                    <div className="mt-3">
                                        <a href="#" className="me-2" style={styles.socialIcon}>
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="#" className="me-2" style={styles.socialIcon}>
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="#" style={styles.socialIcon}>
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Team Member 2 */}
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card border-0" style={styles.teamCard}>
                                <div className="text-center p-3">
                                    <div style={styles.memberImageWrapper}>
                                        <div style={styles.memberImage} className="mb-3"></div>
                                    </div>
                                    <h4 style={styles.memberName}>Ivan Tjandra</h4>
                                    <h5 style={styles.memberPosition}>Head of Operations</h5>
                                    <p style={styles.text}>
                                        Ivan oversees our collection and redistribution processes, ensuring
                                        that our circular system runs efficiently and effectively.
                                    </p>
                                    <div className="mt-3">
                                        <a href="#" className="me-2" style={styles.socialIcon}>
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="#" className="me-2" style={styles.socialIcon}>
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="#" style={styles.socialIcon}>
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Team Member 3 */}
                        <div className="col-md-4">
                            <div className="card border-0" style={styles.teamCard}>
                                <div className="text-center p-3">
                                    <div style={styles.memberImageWrapper}>
                                        <div style={styles.memberImage} className="mb-3"></div>
                                    </div>
                                    <h4 style={styles.memberName}>Pieter Leviano</h4>
                                    <h5 style={styles.memberPosition}>Education Director</h5>
                                    <p style={styles.text}>
                                        Pieter leads our educational initiatives, developing workshops and
                                        content to promote sustainable fashion practices in our community.
                                    </p>
                                    <div className="mt-3">
                                        <a href="#" className="me-2" style={styles.socialIcon}>
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="#" className="me-2" style={styles.socialIcon}>
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="#" style={styles.socialIcon}>
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const styles = {
    imgCarousel: {
        height: "100vh",
        objectFit: "cover",
        width: "100%"
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay lebih gelap (0.5 opacity)
        zIndex: 1
    },
    contentWrapper: {
        zIndex: 2, // Pastikan konten berada di atas overlay
        padding: "0 20px"
    },
    section: {
        backgroundColor: "#FCFBF0",
    },
    sectionHeading: {
        color: "#E5A04D",
        fontSize: "1rem",
        fontWeight: 600,
        marginBottom: "0.5rem"
    },
    mainHeading: {
        color: "#39754B",
        fontSize: "2.25rem",
        fontWeight: 700,
        marginBottom: "2rem"
    },
    subHeading: {
        color: "#E5A04D",
        fontSize: "0.9rem",
        fontWeight: 600,
        marginBottom: "0.5rem"
    },
    columnHeading: {
        color: "#2B6A4D",
        fontSize: "1.5rem",
        fontWeight: 600,
        marginBottom: "1rem"
    },
    text: {
        color: "#555",
        lineHeight: 1.6
    },
    educationBox: {
        backgroundColor: "#fff",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        borderRadius: "8px"
    },
    educationHeading: {
        color: "#2B6A4D",
        fontWeight: 600
    },
    iconCircle: {
        backgroundColor: "#E8F5E9",
        width: "80px",
        height: "80px",
        borderRadius: "50%"
    },
    icon: {
        fontSize: "2rem",
        color: "#2B6A4D"
    },
    // Team Section Styles
    teamCard: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        height: "100%",
        transition: "transform 0.3s ease",
        cursor: "pointer"
    },
    memberImageWrapper: {
        width: "150px",
        height: "150px",
        margin: "0 auto",
        borderRadius: "50%",
        backgroundColor: "#E8F5E9",
        padding: "5px"
    },
    memberImage: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        backgroundColor: "#ccc", // Placeholder for actual image
        backgroundPosition: "center",
        backgroundSize: "cover"
    },
    memberName: {
        color: "#2B6A4D",
        fontSize: "1.25rem",
        fontWeight: 600,
        marginBottom: "0.5rem",
        marginTop: "1rem"
    },
    memberPosition: {
        color: "#E5A04D",
        fontSize: "0.9rem",
        fontWeight: 500,
        marginBottom: "1rem"
    },
    socialIcon: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "#E8F5E9",
        color: "#2B6A4D",
        fontSize: "1rem",
        textDecoration: "none",
        transition: "background-color 0.3s ease",
        marginRight: "8px"
    }
};

export default AboutUs;