import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

import profilePicture from "../assets/images/profpic/profile-picture.jpg";
import languagePicture from "../assets/images/flag/english.webp"
import paypal from '../assets/images/payment/paypal.png';
import gopay from '../assets/images/payment/gopay.jpg';
import dana from '../assets/images/payment/dana.png';
import shopeepay from '../assets/images/payment/shopeepay.png';

const Profile = () => {

  const [profile, setProfile] = useState({
    name: 'Ivan',
    email: 'ivantjandra@gmail.com',
    phoneNumber: '082723923849',
    city: 'Yogyakarta',
    address: 'Jl. Babarsasi KM 71'
  });

  return (
    <section style={styles.bgColor}>
      <Container className="py-5" style={{ minHeight: '100vh' }}>
        {/* Profile Section */}
        <h3 className="mb-4 fw-bold" style={styles.sectionTitle}>
          <i className="bi bi-person-circle me-2"></i>Profile
        </h3>

        <Card className="mb-5 rounded-11 shadow" style={styles.bgColor}>
          <Card.Body className="p-4">
            <Row>
              <Col md={3} className="d-flex flex-column align-items-center">
                <Form.Label className="fw-bold mb-3" style={styles.labelText}>
                  Profile Picture
                </Form.Label>
                <div style={styles.profileImageContainer}>
                  <img src={profilePicture} alt="profile-picture" style={styles.profilePicture} />
                </div>
                <Button 
                  variant="success" 
                  className="green-light-btn py-1 rounded-1 mt-3 transition-hover"
                  style={styles.editButton}
                >
                  <i className="bi bi-pencil-square me-2 "></i> Edit
                </Button>
              </Col>
              
              <Col md={9}>
                <Form>
                  <Row>
                    <Col md={6} className="mb-4">
                      <Form.Label className="fw-bold" style={styles.labelText}>
                        <i className="bi bi-person me-2"></i>Username
                      </Form.Label>
                      <Form.Control 
                        className="rounded-1 border-1 shadow-sm" 
                        style={styles.form}
                        type="text" 
                        placeholder="Enter your username"
                        value={profile.name}
                        onChange={(e) => setProfile({
                          ...profile, 
                          name: e.target.value
                        })}
                      />
                    </Col>
                    
                    <Col md={6} className="mb-4">
                      <Form.Label className="fw-bold" style={styles.labelText}>
                        <i className="bi bi-envelope me-2"></i>Email Address
                      </Form.Label>
                      <Form.Control 
                        className="rounded-1 border-1 shadow-sm" 
                        style={styles.form}
                        type="email" 
                        placeholder="Enter your email"
                        value={profile.email}
                        onChange={(e) => setProfile({
                          ...profile, 
                          email: e.target.value
                        })}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-4">
                      <Form.Label className="fw-bold" style={styles.labelText}>
                        <i className="bi bi-telephone me-2"></i>Phone Number
                      </Form.Label>
                      <Form.Control 
                        className="rounded-1 border-1 shadow-sm" 
                        style={styles.form}
                        type="tel" 
                        placeholder="Enter your phone number"
                        value={profile.phoneNumber}
                        onChange={(e) => setProfile({
                          ...profile, 
                          phoneNumber: e.target.value
                        })}
                      />
                    </Col>
                    
                    <Col md={6} className="mb-4">
                      <Form.Label className="fw-bold" style={styles.labelText}>
                        <i className="bi bi-geo-alt me-2"></i>City
                      </Form.Label>
                      <Form.Control 
                        className="rounded-1 border-1 shadow-sm" 
                        style={styles.form}
                        type="text" 
                        placeholder="Enter your city"
                        value={profile.city}
                        onChange={(e) => setProfile({
                          ...profile, 
                          city: e.target.value
                        })}
                      />
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold" style={styles.labelText}>
                      <i className="bi bi-house me-2"></i>Full Address
                    </Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      className="rounded-1 border-1 shadow-sm" 
                      style={styles.form}
                      placeholder="Enter your complete address"
                      value={profile.address}
                        onChange={(e) => setProfile({
                          ...profile, 
                          address: e.target.value
                        })}
                    />
                  </Form.Group>

                  <Button 
                    variant="success" 
                    className="w-100 rounded-1 green-dark-btn py-3 fw-bold transition-hover" 
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
        <h3 className="mb-4 fw-bold" style={styles.sectionTitle}>
          <i className="bi bi-credit-card me-2"></i>Payment Methods
        </h3>
        <Card className="mb-5 rounded-1 shadow" style={styles.bgColor}>
          <Card.Body className="p-4">
            {[{ img: gopay, name: 'Gopay' }, { img: paypal, name: 'Paypal' }, { img: dana, name: 'Dana' }, { img: shopeepay, name: 'Shopeepay' }].map((payment, index) => (
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
                    variant="success"  
                    className="rounded-1 transition-hover green-light-btn"
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
        <h3 className="mb-4 fw-bold" style={styles.sectionTitle}>
          <i className="bi bi-translate me-2"></i>Language Preferences
        </h3>
        <Card className="mb-5 rounded-1 shadow" style={styles.bgColor}>
          <Card.Body className="p-4">
            <Row className="align-items-center">
              <Col md={2} className="d-flex justify-content-center mb-4 mb-md-0">
                <div style={styles.languageFlagContainer}>
                  <img src={languagePicture} alt="language picture" className="rounded-circle" style={styles.languageFlag} />
                </div>
              </Col>
              <Col md={10}>
                <Form.Select 
                  className="rounded-1 border-1 shadow-sm" 
                  style={styles.form}
                  aria-label="Language selector"
                >
                  <option className='green-active'>Select Language</option>
                  <option className='green-active' value="English" selected>English</option>
                  <option className='green-active' value="Indonesia">Indonesia</option>
                  <option className='green-active' value="Chinese">Chinese</option>
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
    letterSpacing: "0.5px",
    color: '#1A1816'
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
    border: '2px solid #39754B',
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
    border: '2px solid #39754B',
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
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "#39754B",
      color: "#FCFBF0"
    }
  },
  
  saveButton: { 
    border: 'none',
    fontSize: '0.9rem',
    border: '1px solid #39754B',
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