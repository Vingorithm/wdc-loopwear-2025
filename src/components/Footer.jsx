import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaPinterest, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col md={3} sm={6}>
            <h5 className="footer-title">Company</h5>
            <ul className="footer-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </Col>
          
          <Col md={3} sm={6}>
            <h5 className="footer-title">Catalog</h5>
            <ul className="footer-list">
              <li><a href="#">Shirts & Tops</a></li>
              <li><a href="#">Outerwear</a></li>
              <li><a href="#">Bottoms</a></li>
              <li><a href="#">Caps</a></li>
            </ul>
          </Col>
          
          <Col md={3} sm={6}>
            <h5 className="footer-title">Terms & Policy</h5>
            <ul className="footer-list">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </Col>
          
          <Col md={3} sm={6}>
            <h5 className="footer-title">Contact</h5>
            <ul className="footer-list">
              <li><FaEnvelope /> support@loopwear.com</li>
              <li><FaPhone /> +62 (123) 456-7890</li>
              <li><FaMapMarkerAlt /> Store Locations</li>
            </ul>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaPinterest /></a>
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .footer {
        background-color: #111;
        color: #fff;
        padding: 40px 0;
        }

        .footer-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 15px;
        }

        .footer-list {
        list-style: none;
        padding: 0;
        }

        .footer-list li {
        margin-bottom: 10px;
        }

        .footer-list a {
        color: #bbb;
        text-decoration: none;
        transition: color 0.3s;
        }

        .footer-list a:hover {
        color: #fff;
        }

        .social-icons {
        margin-top: 15px;
        }

        .social-icons a {
        color: #bbb;
        font-size: 18px;
        margin-right: 15px;
        transition: color 0.3s;
        }

        .social-icons a:hover {
        color: #fff;
        }
      `}
      </style>
    </footer>
  );
};

export default Footer;
