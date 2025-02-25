import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Profile = () => {
  return (
    <Container className="py-4" style={{ minHeight: '100vh' }}>
      {/* Profile Header Card */}
      <h2 h2 className="mt-5 text-uppercase">Profile</h2>

      {/* Main Profile Card */}
      <Card className="mt-3 rounded-0 shadow-sm">
        <Card.Body className="p-4">
          <Row>
            <Col md={3} className="d-flex flex-column align-items-center">
              <div
                className="mb-3"
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  backgroundColor: '#eee',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#666',
                  border: '2px solid #39754B'
                }}
              >
                Profile Picture
              </div>
              <Button 
                variant="outline-dark" 
                className="rounded-0"
                style={{ 
                  borderColor: '#39754B',
                  color: '#39754B',
                  width: '140px'
                }}
              >
                Upload Photo
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
                      Country
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
                  className="w-100 rounded-0 py-3 text-uppercase fw-bold" 
                  style={{ 
                    backgroundColor: '#39754B', 
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
      <Card className="mt-4 rounded-0 shadow-sm">
        <Card.Body className="p-4">
          <h5 className="mb-4 fw-bold text-uppercase" style={{ color: '#39754B' }}>Payment Methods</h5>
          {[1, 2, 3].map((_, index) => (
            <Row key={index} className="align-items-center mb-3">
              <Col md={2} className="d-flex justify-content-center">
                <div 
                  className="rounded-0" 
                  style={{ 
                    width: '60px', 
                    height: '40px', 
                    backgroundColor: '#eee', 
                    border: '2px solid #39754B'
                  }}
                ></div>
              </Col>
              <Col md={7}>
                <Form.Control 
                  type="text" 
                  placeholder="Cardholder Name" 
                  className="rounded-0 border-2" 
                  style={{ borderColor: '#39754B' }}
                />
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
                  {index === 0 ? 'Primary' : 'Connect'}
                </Button>
              </Col>
            </Row>
          ))}
        </Card.Body>
      </Card>

      {/* Language Settings Card */}
      <Card className="mt-4 rounded-0 shadow-sm mb-4">
        <Card.Body className="p-4">
          <h5 className="mb-4 fw-bold text-uppercase" style={{ color: '#39754B' }}>Language Preferences</h5>
          <Row className="align-items-center">
            <Col md={2} className="d-flex justify-content-center">
              <div 
                className="rounded-circle" 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: '#eee', 
                  border: '2px solid #39754B'
                }}
              ></div>
            </Col>
            <Col md={10}>
              <Form.Select 
                className="rounded-0 border-2" 
                style={{ borderColor: '#39754B' }}
              >
                <option>Select Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>Portuguese</option>
              </Form.Select>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;