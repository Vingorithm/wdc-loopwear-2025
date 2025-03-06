import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image1 from "../assets/images/carousel/carousel6.webp";
import Image2 from "../assets/images/carousel/carousel2.jpg";

const ItemArticles = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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

  const styles = {
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
    card: {
      backgroundColor: "#FCFBF0",
      boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
      borderRadius: "12px",
      transition: "all 0.3s ease"
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
    textButton: {
      backgroundColor: "transparent",
      color: "#39754B",
      fontWeight: "600",
      border: "none",
      padding: "0",
      textDecoration: "underline",
      transition: "all 0.2s ease"
    }
  };

  return (
    <section style={styles.altSection} className="py-5">
      <div className="container">
        <div className="row g-4">
          {recentArticles.map((article, index) => (
            <div className="col-md-4" key={index} data-aos="zoom-in" data-aos-delay={200 + (index * 100)}>
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
                  <button 
                    style={styles.textButton} 
                    className="btn p-0 mt-2" 
                    onClick={() => window.location.href = "/detailarticles"}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemArticles;
