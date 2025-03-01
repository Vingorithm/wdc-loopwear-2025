import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Image1 from "../assets/images/carousel/carousel6.webp";
import Image2 from "../assets/images/carousel/carousel2.jpg";
import Image3 from "../assets/images/carousel/carousel3.jpg";

const Articles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselImages = [Image1, Image2, Image3];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.body}>
      <section style={styles.hero}>
        <div style={styles.carouselContainer}>
          <div style={styles.carouselOverlay}></div>
          <img 
            src={carouselImages[activeIndex]}
            alt="Sustainable fashion hero"
            style={styles.carouselImage}
          />
          <div className="container" style={styles.heroContent}>
            <div className="row align-items-center">
              <div className="col-md-8 mx-auto text-center">
                <h1 style={styles.heroTitle}>Sustainable Fashion Insights</h1>
                <p style={styles.heroSubtitle}>Learn how to extend your clothing's lifespan, reduce waste, and create a sustainable future.</p>
              </div>
            </div>
          </div>
          <div style={styles.carouselIndicators}>
            {carouselImages.map((_, index) => (
              <span 
                key={index} 
                style={{
                  ...styles.indicator,
                  backgroundColor: index === activeIndex ? '#FCFBF0' : 'rgba(252, 251, 240, 0.5)'
                }}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section style={styles.section} className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <div className="card border-0" style={styles.featuredCard}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <img 
                      src={Image1} 
                      alt="Sustainable clothing care" 
                      className="img-fluid rounded-start" 
                      style={styles.featuredImage}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body p-4">
                      <span style={styles.featuredBadge}>Featured</span>
                      <h2 style={styles.cardTitle}>The Complete Guide to Clothing Care</h2>
                      <p className="text-muted mb-2">March 1, 2025 • 8 min read</p>
                      <p style={styles.cardText}>
                        Discover essential techniques to extend your garments' lifespan. From washing methods to storage solutions, learn how proper care can reduce your fashion footprint while preserving your favorite pieces for years to come.
                      </p>
                      <button style={styles.button} className="btn mt-3" onClick={() => window.location.href = "/detailarticles"}>Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section style={styles.altSection} className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 style={styles.sectionTitle}>Latest Articles</h2>
              <p style={styles.sectionSubtitle}>Stay informed with our latest insights on sustainable fashion</p>
            </div>
          </div>
          
          <div className="row g-4">
            {recentArticles.map((article, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0" style={styles.card}>
                  <img 
                    src={index === 0 ? Image2 : Image1} 
                    className="card-img-top" 
                    alt={article.title} 
                  />
                  <div className="card-body">
                    <span style={styles.categoryBadge}>{article.category}</span>
                    <h3 style={styles.cardTitle}>{article.title}</h3>
                    <p className="text-muted mb-2">{article.date} • {article.readTime}</p>
                    <p style={styles.cardText}>{article.excerpt}</p>
                    <button style={styles.textButton} className="btn p-0 mt-2" onClick={() => window.location.href = "/detailarticles"}>Read More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section style={styles.section} className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 style={styles.sectionTitle}>Browse by Category</h2>
              <p style={styles.sectionSubtitle}>Explore sustainable fashion topics that interest you most</p>
            </div>
          </div>
          
          <div className="row g-4">
            {categories.map((category, index) => (
              <div className="col-md-3 col-6" key={index}>
                <div className="card h-100 border-0" style={styles.categoryCard}>
                  <div className="card-body text-center">
                    <div style={styles.categoryIcon}>
                      <span className="material-icons">{category.icon}</span>
                    </div>
                    <h4 style={styles.categoryTitle}>{category.title}</h4>
                    <p style={styles.categoryCount}>{category.count} Articles</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={styles.altSection} className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 style={styles.sectionTitle}>Join Our Newsletter</h2>
              <p style={styles.sectionSubtitle}>Get sustainable fashion tips and exclusive content delivered to your inbox</p>
              
              <div className="input-group mt-4 mb-3 w-75 mx-auto">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email address" 
                  style={styles.input}
                />
                <button 
                  className="btn" 
                  type="button" 
                  style={styles.button}
                >
                  Subscribe
                </button>
              </div>
              <p style={styles.smallText}>We respect your privacy and will never share your information</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const recentArticles = [
  {
    title: "Upcycling Basics: Transform Old Clothes Into New Favorites",
    category: "DIY",
    date: "February 28, 2025",
    readTime: "5 min read",
    excerpt: "Learn essential techniques to breathe new life into your old garments with these beginner-friendly upcycling projects."
  },
  {
    title: "Sustainable Fabrics Guide: What To Look For When Shopping",
    category: "Shopping Guide",
    date: "February 25, 2025", 
    readTime: "7 min read",
    excerpt: "Discover which materials have the lowest environmental impact and how to identify truly sustainable options."
  },
  {
    title: "The True Cost of Fast Fashion: Environmental Impact Report",
    category: "Research",
    date: "February 20, 2025",
    readTime: "10 min read",
    excerpt: "Our in-depth analysis reveals the hidden environmental costs behind the clothing industry's rapid production cycles."
  }
];

const categories = [
  { title: "Clothing Care", icon: "eco", count: 18 },
  { title: "Upcycling", icon: "refresh", count: 12 },
  { title: "Sustainable Brands", icon: "verified", count: 15 },
  { title: "Minimalist Wardrobe", icon: "style", count: 9 },
  { title: "Ethical Production", icon: "handshake", count: 11 },
  { title: "Repair Guides", icon: "build", count: 14 },
  { title: "Second-Hand Tips", icon: "recycling", count: 8 },
  { title: "Fabric Knowledge", icon: "layers", count: 13 }
];

// Styles
const styles = {
  body: {
    fontFamily: "'Poppins', sans-serif",
    color: "#1A1816",
    backgroundColor: "#FCFBF0"
  },
  hero: {
    color: "#FCFBF0",
    position: "relative",
    height: "500px",
    overflow: "hidden"
  },
  carouselContainer: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    transition: "opacity 1s ease-in-out"
  },
  carouselOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  carouselIndicators: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
    zIndex: 2
  },
  indicator: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s ease"
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "16px",
    color: "#FCFBF0",
    textShadow: "0 2px 4px rgba(0,0,0,0.2)"
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    maxWidth: "700px",
    margin: "0 auto",
    color: "#FCFBF0",
    textShadow: "0 1px 3px rgba(0,0,0,0.2)"
  },
  section: {
    backgroundColor: "#FCFBF0",
  },
  altSection: {
    backgroundColor: "#f5f4e8",
  },
  sectionTitle: {
    color: "#39754B",
    fontWeight: "600",
    marginBottom: "8px"
  },
  sectionSubtitle: {
    color: "#1A1816",
    opacity: "0.8",
    marginBottom: "24px"
  },
  featuredCard: {
    backgroundColor: "#FCFBF0",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    borderRadius: "12px",
    overflow: "hidden"
  },
  featuredImage: {
    height: "100%",
    objectFit: "cover"
  },
  card: {
    backgroundColor: "#FCFBF0",
    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
    borderRadius: "12px",
    transition: "all 0.3s ease"
  },
  categoryCard: {
    backgroundColor: "#FCFBF0",
    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
    borderRadius: "12px",
    transition: "all 0.3s ease"
  },
  cardTitle: {
    color: "#1A1816",
    fontWeight: "600",
    marginTop: "8px",
    marginBottom: "8px"
  },
  cardText: {
    color: "#1A1816",
    opacity: "0.8"
  },
  categoryBadge: {
    display: "inline-block",
    backgroundColor: "#e9f2ee",
    color: "#39754B",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "500"
  },
  featuredBadge: {
    display: "inline-block",
    backgroundColor: "#39754B",
    color: "#FCFBF0",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "500",
    marginBottom: "16px"
  },
  button: {
    backgroundColor: "#39754B",
    color: "#FCFBF0",
    borderRadius: "6px",
    padding: "10px 20px",
    border: "none",
    fontWeight: "500",
    transition: "all 0.2s ease"
  },
  textButton: {
    backgroundColor: "transparent",
    color: "#39754B",
    fontWeight: "600",
    border: "none",
    padding: "0",
    textDecoration: "underline",
    transition: "all 0.2s ease"
  },
  input: {
    backgroundColor: "#FCFBF0",
    border: "1px solid #ddd",
    padding: "12px 20px",
    borderRadius: "6px 0 0 6px"
  },
  categoryIcon: {
    width: "60px",
    height: "60px",
    backgroundColor: "#e9f2ee",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px auto",
    color: "#39754B"
  },
  categoryTitle: {
    color: "#1A1816",
    fontWeight: "600",
    marginBottom: "4px"
  },
  categoryCount: {
    color: "#1A1816",
    opacity: "0.6",
    fontSize: "0.9rem"
  },
  smallText: {
    fontSize: "0.8rem",
    color: "#1A1816",
    opacity: "0.6",
    marginTop: "12px"
  }
};

export default Articles;