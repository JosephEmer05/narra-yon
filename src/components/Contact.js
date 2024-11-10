import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    phoneNumber: '',
    message: '',
    orderProblem: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Display success message
        setFormData({ // Reset form data
          firstName: '',
          lastName: '',
          email: '',
          address1: '',
          address2: '',
          city: '',
          state: '',
          zip: '',
          phoneNumber: '',
          message: '',
          orderProblem: false,
        });
      } else {
        const errorData = await response.json();
        alert(errorData.message); // Display error message
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Contact Us</h2>
          <p>Question or concern? Suggestion? We look forward to hearing from you!</p>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter first name" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter last name" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formAddress1" className="mt-3">
              <Form.Label>Address 1 *</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter address" 
                name="address1" 
                value={formData.address1} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formAddress2" className="mt-3">
              <Form.Label>Address 2</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter address" 
                name="address2" 
                value={formData.address2} 
                onChange={handleChange} 
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group controlId="formCity" className="mt-3">
                  <Form.Label>City *</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter city" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formState" className="mt-3">
                  <Form.Label>State *</Form.Label>
                  <Form.Control 
                    as="select" 
                    name="state" 
                    value={formData.state} 
                    onChange={handleChange} 
                    required
                  >
                    <option>Select</option>
                    {/* Add your state options here */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formZip" className="mt-3">
                  <Form.Label>ZIP *</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter ZIP" 
                    name="zip" 
                    value={formData.zip} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formPhoneNumber" className="mt-3">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Provide a telephone number" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message *</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Enter your message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formCheckBox" className="mt-3">
              <Form.Check 
                type="checkbox" 
                label="I have a problem with my order" 
                name="orderProblem" 
                checked={formData.orderProblem} 
                onChange={handleChange} 
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Submit
            </Button>
          </Form>
        </Col>

        <Col md={4} className="mt-4">
          <div className="contact-details">
            <h5>Contact us by phone</h5>
            <p>1-877-847-6181</p>
            <p>Hours of Operation: Monday - Friday: 8am - 6pm EST</p>

            <h5>Questions About Our Products?</h5>
            <Button variant="outline-secondary" href="#">
              View all FAQs
            </Button>

            <div className="mt-4">
              <h5>Most Recent Topics</h5>
              <ul className="list-unstyled">
                <li>What are live and active cultures?</li>
                <li>What is rBST?</li>
                <li>Is our product organic?</li>
                {/* Add more topics as needed */}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;