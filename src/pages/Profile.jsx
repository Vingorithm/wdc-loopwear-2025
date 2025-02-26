import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import profilePicture from "../assets/images/profpic/profile-picture.jpg";
import languagePicture from "../assets/images/flag/english.webp"
import paypal from '../assets/images/payment/paypal.png';
import gopay from '../assets/images/payment/gopay.webp';
import dana from '../assets/images/payment/dana.png';

const Profile = () => {
  return (
    <section style={styles.bgColor}>
      <Container className="py-4" style={{ minHeight: '100vh' }}>
        {/* Profile Header Card */}
        <h2 h2 className="mt-5 text-uppercase">Profile</h2>

        {/* Main Profile Card */}
        <Card className="mt-3 rounded-0 shadow-sm" style={styles.bgColor}>
          <Card.Body className="p-4">
            <Row>
              <Col md={3} className="d-flex flex-column align-items-center">

                <img className="mb-3" src={profilePicture} alt="profile-picture" style={styles.profilePicture} />

                <Button 
                  variant="outline-dark" 
                  className="light-btn rounded-0"
                  style={{ 
                    width: '140px'
                  }}
                >
                  Edit
                </Button>
              </Col>
              
              <Col md={9}>
                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Label className="fw-bold text-uppercase text-secondary" style={{ fontSize: '0.8rem' }}>
                        Username
                      </Form.Label>
                      <Form.Control 
                        className="rounded-0 border-2" 
                        style={{ borderColor: '#39754B' }}
                        type="text" 
                      />
                    </Col>
                    
                    <Col md={6} className="mb-3">
                      <Form.Label className="fw-bold text-uppercase text-secondary" style={{ fontSize: '0.8rem' }}>
                        Email Address
                      </Form.Label>
                      <Form.Control 
                        className="rounded-0 border-2" 
                        style={{ borderColor: '#39754B' }}
                        type="email" 
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Label className="fw-bold text-uppercase text-secondary" style={{ fontSize: '0.8rem' }}>
                        Phone Number
                      </Form.Label>
                      <Form.Control 
                        className="rounded-0 border-2" 
                        style={{ borderColor: '#39754B' }}
                        type="tel" 
                      />
                    </Col>
                    
                    <Col md={6} className="mb-3">
                      <Form.Label className="fw-bold text-uppercase text-secondary" style={{ fontSize: '0.8rem' }}>
                        City
                      </Form.Label>
                      <Form.Control 
                        className="rounded-0 border-2" 
                        style={{ borderColor: '#39754B' }}
                        type="text" 
                      />
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-uppercase text-secondary" style={{ fontSize: '0.8rem' }}>
                      Full Address
                    </Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      className="rounded-0 border-2" 
                      style={{ borderColor: '#39754B' }}
                    />
                  </Form.Group>

                  <Button 
                    className="dark-btn w-100 rounded-0 py-3 text-uppercase fw-bold" 
                    style={{ 
                      border: 'none',
                      fontSize: '0.9rem'
                    }}
                  >
                    Save Profile Changes
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Payment Methods Card */}
        <Card className="mt-4 rounded-0 shadow-sm" style={styles.bgColor}>
          <Card.Body className="p-4">
            <h5 className="mb-4 fw-bold text-uppercase" style={{ color: '#39754B' }}>Payment Methods</h5>
            <Row className="align-items-center mb-3">
              <Col md={2} className="d-flex justify-content-center">
                <div 
                  className="rounded-0" 
                  style={styles.paymentLogo}
                ></div>
              </Col>
              <Col className='align-items-center' md={7}>
                <p className='fw-bold darkGreenText text-start'>Gopay</p>
              </Col>
              <Col md={3} className="d-flex justify-content-end">
                <Button 
                  variant="outline-dark" 
                  className="rounded-0 text-uppercase"
                  style={{ 
                    borderColor: '#39754B',
                    color: '#39754B',
                    width: '100%'
                  }}
                >
                  Connect
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Language Settings Card */}
        <Card className="mt-4 rounded-0 shadow-sm mb-4" style={styles.bgColor}>
          <Card.Body className="p-4">
            <h5 className="mb-4 fw-bold text-uppercase" style={{ color: '#39754B' }}>Language Preferences</h5>
            <Row className="align-items-center">
              <Col md={2} className="d-flex justify-content-center">
                <img src={languagePicture} alt="language picture" className="rounded-circle" style={styles.languageFlag} />
              </Col>
              <Col md={10}>
                <Form.Select 
                  className="rounded-0 border-2" 
                  style={{ borderColor: '#39754B' }}
                >
                  <option>Select Language</option>
                  <option value="English">English</option>
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
  profilePicture: {
    borderRadius: "100%",
    objectFit: "cover",
    objectPosition: "center",
    width: '140px',
    height: '140px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#666',
    border: '2px solid #39754B',
  },
  languageFlag: {
    width: '50px', 
    height: '50px', 
    backgroundColor: '#eee', 
    border: '2px solid #39754B'
  },
  paymentLogo: {
    objectFit: "cover",
    objectPosition: "center",
    width: '60px', 
    height: '40px', 
    backgroundColor: '#eee', 
    border: '2px solid #39754B'
  }
}

export default Profile;