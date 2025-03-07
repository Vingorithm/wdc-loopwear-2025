import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

import profilePicture from "../assets/images/profpic/profile-picture.jpg";
import languagePicture from "../assets/images/flag/english.webp"
import paypal from '../assets/images/payment/paypal.png';
import gopay from '../assets/images/payment/gopay.jpg';
import dana from '../assets/images/payment/dana.png';

const Profile = () => {
  return (
    <section style={styles.bgColor}>
      <Container className="py-5" style={{ minHeight: '100vh' }}>
        {/* Profile Section */}
        <h3 className="mb-4 text-uppercase fw-bold" style={styles.sectionTitle}>
          <i className="bi bi-person-circle me-2"></i>Profile
        </h3>

        <Card className="mb-5 rounded-0 shadow" style={styles.bgColor}>
          <Card.Body className="p-4">
            <Row>
              <Col md={3} className="d-flex flex-column align-items-center">
                <Form.Label className="fw-bold text-uppercase text-secondary mb-3" style={styles.labelText}>
                  Profile Picture
                </Form.Label>
                <div style={styles.profileImageContainer}>
                  <img src={profilePicture} alt="profile-picture" style={styles.profilePicture} />
                </div>
                <Button 
                  variant="outline-dark" 
                  className="rounded-0 mt-3 transition-hover"
                  style={styles.editButton}
                >
                  <i className="bi bi-pencil-square me-2"></i> Edit
                </Button>
              </Col>
              
              <Col md={9}>
                <Form>
                  <Row>
                    <Col md={6} className="mb-4">
                      <Form.Label className="fw-bold text-uppercase text-secondary" style={styles.labelText}>
                        <i className="bi bi-person me-2"></i>Username
                      </Form.Label>
                      <Form.Control 
                        className="rounded-0 border-2 shadow-sm" 
                        style={styles.form}
                        type="text" 
                        placeholder="Enter your username"
                      />
                    </Col>
                    
                    <Col md={6} className="mb-4">
                      <Form.Label className="fw-bold text-uppercase text-secondary" style={styles.labelText}>
                        <i className="bi bi-envelope me-2"></i>Email Address
                      </Form.Label>
                      <Form.Control 
                        className="rounded-0 border-2 shadow-sm" 
                        style={styles.form}
                        type="email" 
                        placeholder="Enter your email"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-4">
                      <Form.Label className="fw-bold text-uppercase text-secondary" style={styles.labelText}>
                        <i className="bi bi-telephone me-2"></i>Phone Number
                      </Form.Label>
                      <Form.Control 
                        className="rounded-0 border-2 shadow-sm" 
                        style={styles.form}
                        type="tel" 
                        placeholder="Enter your phone number"
                      />
                    </Col>
                    
                    <Col md={6} className="mb-4">
                      <Form.Label className="fw-bold text-uppercase text-secondary" style={styles.labelText}>
                        <i className="bi bi-geo-alt me-2"></i>City
                      </Form.Label>
                      <Form.Control 
                        className="rounded-0 border-2 shadow-sm" 
                        style={styles.form}
                        type="text" 
                        placeholder="Enter your city"
                      />
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-uppercase text-secondary" style={styles.labelText}>
                      <i className="bi bi-house me-2"></i>Full Address
                    </Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      className="rounded-0 border-2 shadow-sm" 
                      style={styles.form}
                      placeholder="Enter your complete address"
                    />
                  </Form.Group>

                  <Button 
                    className="w-100 rounded-0 py-3 text-uppercase fw-bold transition-hover" 
                    style={styles.saveButton}
                  >
                    <i className="bi bi-check-circle me-2"></i> Save Profile Changes
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Payment Methods Card */}
        <h3 className="mb-4 text-uppercase fw-bold" style={styles.sectionTitle}>
          <i className="bi bi-credit-card me-2"></i>Payment Methods
        </h3>
        <Card className="mb-5 rounded-0 shadow" style={styles.bgColor}>
          <Card.Body className="p-4">
            {[{ img: gopay, name: 'Gopay' }, { img: paypal, name: 'Paypal' }, { img: dana, name: 'Dana' }].map((payment, index) => (
              <Row className="align-items-center mb-4 payment-method-row" key={index} style={styles.paymentRow}>
                <Col md={2} className="d-flex justify-content-center">
                  <div style={styles.paymentLogoContainer}>
                    <img src={payment.img} alt={payment.name} style={styles.paymentLogo} />
                  </div>
                </Col>
                <Col className='d-flex align-items-center' md={8}>
                  <p className='fw-bold fs-4 my-0 mx-auto mx-sm-0' style={styles.paymentName}>{payment.name}</p>
                </Col>
                <Col md={2} className="d-flex justify-content-end">
                  <Button 
                    variant="outline-dark" 
                    className="rounded-0 text-uppercase transition-hover"
                    style={styles.connectButton}
                  >
                    <i className="bi bi-link-45deg me-2"></i>Connect
                  </Button>
                </Col>
              </Row>
            ))}
          </Card.Body>
        </Card>

        {/* Language Settings Card */}
        <h3 className="mb-4 text-uppercase fw-bold" style={styles.sectionTitle}>
          <i className="bi bi-translate me-2"></i>Language Preferences
        </h3>
        <Card className="mb-5 rounded-0 shadow" style={styles.bgColor}>
          <Card.Body className="p-4">
            <Row className="align-items-center">
              <Col md={2} className="d-flex justify-content-center mb-4 mb-md-0">
                <div style={styles.languageFlagContainer}>
                  <img src={languagePicture} alt="language picture" className="rounded-circle" style={styles.languageFlag} />
                </div>
              </Col>
              <Col md={10}>
                <Form.Select 
                  className="rounded-0 border-2 shadow-sm" 
                  style={styles.form}
                  aria-label="Language selector"
                >
                  <option>Select Language</option>
                  <option value="English" selected>English</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Chinese">Chinese</option>
                </Form.Select>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

const styles = {
  bgColor: {
    backgroundColor: "#FCFBF0",
  },
  
  sectionTitle: {
    color: "#1A1816",
    paddingBottom: "8px",
    letterSpacing: "1px"
  },
  
  labelText: {
    fontSize: '0.8rem',
    letterSpacing: "0.5px"
  },

  profileImageContainer: {
    padding: "5px",
    borderRadius: "50%",
    boxShadow: "0 4px 12px rgba(57, 117, 75, 0.2)",
  },
  
  profilePicture: {
    borderRadius: "100%",
    objectFit: "cover",
    objectPosition: "center",
    width: '140px',
    height: '140px',
    border: '3px solid #39754B',
    transition: "all 0.3s ease",
  },

  languageFlagContainer: {
    padding: "3px",
    borderRadius: "50%",
    boxShadow: "0 4px 12px rgba(57, 117, 75, 0.2)",
  },
  
  languageFlag: {
    width: '60px', 
    height: '60px', 
    backgroundColor: '#eee', 
    border: '3px solid #39754B',
    transition: "transform 0.3s ease",
  },

  paymentLogoContainer: {
    padding: "5px",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    backgroundColor: "white",
    boxShadow: "0 2px 8px rgba(57, 117, 75, 0.1)",
  },
  
  paymentLogo: {
    width: "90%",
    aspectRatio: "2.3/1",
    objectPosition: "center",
    objectFit: "contain",
    padding: "8px",
  },
  
  paymentRow: {
    padding: "12px 8px",
    borderRadius: "4px",
    transition: "background-color 0.2s ease",
    border: "1px solid transparent",
    ":hover": {
      backgroundColor: "rgba(57, 117, 75, 0.05)",
      border: "1px solid #39754B",
    }
  },
  
  paymentName: {
    color: "#1A1816"
  },

  form: {
    borderColor: "#39754B",
    backgroundColor: "#FCFBF0",
    transition: "box-shadow 0.3s ease, transform 0.2s ease",
    ":focus": {
      boxShadow: "0 0 0 0.2rem rgba(57, 117, 75, 0.25)",
      transform: "translateY(-2px)",
    }
  },
  
  editButton: { 
    width: '80%',
    borderColor: "#39754B",
    color: "#39754B",
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "#39754B",
      color: "#FCFBF0"
    }
  },
  
  saveButton: { 
    border: 'none',
    fontSize: '0.9rem',
    backgroundColor: "#39754B",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "#2c5a3a",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    }
  },
  
  connectButton: { 
    width: '100%',
    borderColor: "#39754B",
    color: "#39754B",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "#39754B",
      color: "#FCFBF0"
    }
  }
};

const styleElement = document.createElement('style');
styleElement.textContent = `
  .transition-hover:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-control:focus, .form-select:focus {
    box-shadow: 0 0 0 0.2rem rgba(57, 117, 75, 0.25) !important;
    border-color: #39754B !important;
  }
  
  .payment-method-row:hover {
    background-color: rgba(57, 117, 75, 0.05);
    border: 1px solid #39754B !important;
  }
`;
document.head.appendChild(styleElement);

export default Profile;