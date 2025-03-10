import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Image1 from "../assets/images/carousel/carousel6.jpg";
import Image2 from "../assets/images/carousel/carousel2.jpg";
import Image3 from "../assets/images/carousel/carousel3.jpg";

const DetailArticles = () => {
  const [article, setArticle] = useState({
    title: "The Complete Guide to Clothing Care",
    category: "Clothing Care",
    date: "March 1, 2025",
    readTime: "8 min read",
    author: {
      name: "Ivan Tjandra",
      role: "Sustainable Fashion Expert",
      avatar: Image2
    },
    heroImage: Image1,
    content: [
      {
        type: "paragraph",
        text: "Proper clothing care is the cornerstone of sustainable fashion. When we extend the lifespan of our garments, we reduce waste, conserve resources, and minimize our environmental footprint. This comprehensive guide explores essential techniques and best practices to help your clothes look better and last longer."
      },
      {
        type: "heading",
        text: "Understanding Fabric Care Labels"
      },
      {
        type: "paragraph",
        text: "Every garment comes with a care label that provides valuable information about how to properly clean and maintain it. These symbols may seem cryptic at first glance, but they offer crucial guidance that can prevent damage and extend the life of your clothing."
      },
      {
        type: "paragraph",
        text: "Taking a few moments to familiarize yourself with these symbols will empower you to make informed decisions about washing temperatures, drying methods, and ironing settings. When in doubt, opt for gentler washing methods—cold water, delicate cycle, and air drying are typically safer options for most fabrics."
      },
      {
        type: "heading",
        text: "Washing Techniques That Preserve Quality"
      },
      {
        type: "paragraph",
        text: "One of the most impactful changes you can make is washing your clothes less frequently. Many items, particularly jeans, sweaters, and outerwear, don't need to be washed after every wear. Spot cleaning and airing out garments can often refresh them without subjecting them to a full wash cycle."
      },
      {
        type: "paragraph",
        text: "When washing is necessary, turn garments inside out to protect their outer appearance, use mesh laundry bags for delicate items, and select the appropriate water temperature and cycle for the fabric type. Consider using eco-friendly detergents that are gentler on both your clothes and the environment."
      },
      {
        type: "heading",
        text: "Proper Storage Solutions"
      },
      {
        type: "paragraph",
        text: "How you store your clothing between wears significantly impacts its longevity. Invest in quality wooden or padded hangers for structured garments like blazers and coats, which help maintain their shape. For knits and stretchy fabrics, folding is preferable to prevent stretching and distortion."
      },
      {
        type: "paragraph",
        text: "Ensure items are completely dry before storing to prevent mold and mildew growth. Consider using natural moth deterrents like cedar blocks or lavender sachets rather than chemical mothballs. Seasonal rotation of your wardrobe not only creates more space but also gives garments a break from regular wear and tear."
      },
      {
        type: "heading",
        text: "DIY Repair and Maintenance"
      },
      {
        type: "paragraph",
        text: "Learning basic mending skills can dramatically extend the life of your clothing. Simple repairs like replacing buttons, fixing loose seams, or patching small holes can transform a garment from unwearable to renewed. Keep a basic sewing kit on hand for quick fixes."
      },
      {
        type: "paragraph",
        text: "For more complex repairs, consider building a relationship with a local tailor or repair service. The cost of professional repairs is often far less than replacing quality garments, making it both an economically and environmentally sound choice."
      }
    ],
    tags: ["clothing care", "sustainable fashion", "garment maintenance", "eco-friendly fashion"],
    relatedArticles: [
      {
        title: "Natural Stain Removal Techniques",
        category: "Clothing Care",
        date: "February 15, 2025",
        readTime: "6 min read",
        excerpt: "Discover effective plant-based solutions for removing common stains without harsh chemicals."
      },
      {
        title: "Capsule Wardrobe: Quality Over Quantity",
        category: "Minimalist Wardrobe",
        date: "February 10, 2025",
        readTime: "9 min read",
        excerpt: "Learn how to build a versatile wardrobe with fewer, higher-quality pieces that last longer and create more outfits."
      },
      {
        title: "Sustainable Fabric Care Products Guide",
        category: "Shopping Guide",
        date: "January 28, 2025",
        readTime: "7 min read",
        excerpt: "Our curated selection of eco-friendly detergents, stain removers, and fabric care products for conscious consumers."
      }
    ]
  });

  return (
    <div style={styles.body}>
      {/* Hero Section */}
      <section style={styles.heroDetail}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-8 mx-auto text-center">
              <span style={styles.categoryBadge}>{article.category}</span>
              <h1 style={styles.heroTitle}>{article.title}</h1>
              <div style={styles.articleMeta}>
                <p style={styles.metaText}>{article.date} • {article.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section style={styles.section} className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {/* Author Info */}
              <div style={styles.authorCard} className="d-flex align-items-center mb-4">
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name} 
                  style={styles.authorAvatar}
                />
                <div className="ms-3">
                  <h5 style={styles.authorName}>{article.author.name}</h5>
                  <p style={styles.authorRole}>{article.author.role}</p>
                </div>
              </div>

              {/* Featured Image */}
              <div style={styles.featuredImageContainer}>
                <img 
                  src={article.heroImage} 
                  alt={article.title} 
                  className="img-fluid rounded" 
                  style={styles.articleImage}
                />
              </div>

              {/* Article Content */}
              <div style={styles.articleContent}>
                {article.content.map((block, index) => (
                  <div key={index} className="mb-4">
                    {block.type === 'heading' ? (
                      <h2 style={styles.contentHeading}>{block.text}</h2>
                    ) : (
                      <p style={styles.contentParagraph}>{block.text}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={styles.tagsContainer} className="mt-5 mb-4">
                <h5 style={styles.tagsTitle}>Tags</h5>
                <div className="d-flex flex-wrap">
                  {article.tags.map((tag, index) => (
                    <span key={index} style={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div style={styles.shareContainer} className="mb-5">
                <h5 style={styles.shareTitle}>Share This Article</h5>
                <div className="d-flex">
                  <button style={styles.socialButton} className="me-2">
                    <span className="material-icons"><i className="fab fa-facebook"></i></span>
                  </button>
                  <button style={styles.socialButton} className="me-2">
                    <span className="material-icons"><i className="fab fa-twitter"></i></span>
                  </button>
                  <button style={styles.socialButton} className="me-2">
                    <span className="material-icons"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                  </button>
                  <button style={styles.socialButton}>
                    <span className="material-icons"><i class="fa fa-link" aria-hidden="true"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section style={styles.altSection} className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 style={styles.sectionTitle}>You May Also Like</h2>
              <p style={styles.sectionSubtitle}>Explore more sustainable fashion content</p>
            </div>
          </div>
          
          <div className="row g-4">
            {article.relatedArticles.map((related, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0" style={styles.card}>
                  <img 
                    src={index % 3 === 0 ? Image1 : index % 3 === 1 ? Image2 : Image3} 
                    className="card-img-top" 
                    alt={related.title} 
                  />
                  <div className="card-body">
                    <span style={styles.categoryBadge}>{related.category}</span>
                    <h3 style={styles.cardTitle}>{related.title}</h3>
                    <p className="text-muted mb-2">{related.date} • {related.readTime}</p>
                    <p style={styles.cardText}>{related.excerpt}</p>
                    <button style={styles.textButton} className="btn p-0 mt-2">Read More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={styles.section} className="py-5">
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

// Styles
const styles = {
  // General styles
  body: {
    fontFamily: "'Poppins', sans-serif",
    color: "#1A1816",
    backgroundColor: "#FCFBF0"
  },
  section: {
    backgroundColor: "#FCFBF0",
  },
  altSection: {
    backgroundColor: "#f5f4e8",
  },
  
  // Hero styles
  heroDetail: { 
    backgroundColor: "#39754B",
    color: "#FCFBF0",
    padding: "60px 0"
  },
  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginTop: "16px",
    marginBottom: "16px",
    color: "#FCFBF0"
  },
  articleMeta: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8px"
  },
  metaText: {
    color: "#FCFBF0",
    opacity: "0.9",
    margin: "0"
  },
  
  // Author styles
  authorCard: {
    marginBottom: "32px"
  },
  authorAvatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover"
  },
  authorName: {
    margin: "0",
    fontWeight: "600",
    color: "#1A1816"
  },
  authorRole: {
    margin: "0",
    fontSize: "0.9rem",
    color: "#1A1816",
    opacity: "0.7"
  },
  
  // Article content styles
  featuredImageContainer: {
    marginBottom: "32px",
    borderRadius: "12px",
    overflow: "hidden"
  },
  articleImage: {
    width: "100%",
    objectFit: "cover",
    borderRadius: "12px"
  },
  articleContent: {
    lineHeight: "1.8"
  },
  contentHeading: {
    color: "#39754B",
    fontWeight: "600",
    marginTop: "32px",
    marginBottom: "16px"
  },
  contentParagraph: {
    color: "#1A1816",
    marginBottom: "16px",
    fontSize: "1.05rem"
  },
  
  // Tags styles
  tagsContainer: {
    borderTop: "1px solid #e9e9e9",
    paddingTop: "24px"
  },
  tagsTitle: {
    color: "#39754B",
    fontWeight: "600",
    marginBottom: "12px"
  },
  tag: {
    display: "inline-block",
    backgroundColor: "#e9f2ee",
    color: "#39754B",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "500",
    marginRight: "8px",
    marginBottom: "8px"
  },
  
  // Share styles
  shareContainer: {
    borderTop: "1px solid #e9e9e9",
    paddingTop: "24px"
  },
  shareTitle: {
    color: "#39754B",
    fontWeight: "600",
    marginBottom: "12px"
  },
  socialButton: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9f2ee",
    color: "#39754B",
    border: "none",
    transition: "all 0.2s ease"
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
  card: {
    backgroundColor: "#FCFBF0",
    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
    borderRadius: "12px",
    transition: "all 0.3s ease"
  },
  cardTitle: {
    color: "#1A1816",
    fontWeight: "600",
    marginTop: "8px",
    marginBottom: "8px",
    fontSize: "1.1rem"
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
  button: {
    backgroundColor: "#39754B",
    color: "#FCFBF0",
    borderRadius: "0 6px 6px 0",
    padding: "10px 20px",
    border: "none",
    fontWeight: "500",
    transition: "all 0.2s ease"
  },
  smallText: {
    fontSize: "0.8rem",
    color: "#1A1816",
    opacity: "0.6",
    marginTop: "12px"
  }
};

export default DetailArticles;