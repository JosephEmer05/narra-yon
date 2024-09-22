import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact.css';

function Contact() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Contact Us</h2>
          <p>Question or concern? Suggestion? We look forward to hearing from you!</p>

          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group controlId="formAddress1" className="mt-3">
              <Form.Label>Address 1 *</Form.Label>
              <Form.Control type="text" placeholder="Enter address" required />
            </Form.Group>

            <Form.Group controlId="formAddress2" className="mt-3">
              <Form.Label>Address 2</Form.Label>
              <Form.Control type="text" placeholder="Enter address" />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group controlId="formCity" className="mt-3">
                  <Form.Label>City *</Form.Label>
                  <Form.Control type="text" placeholder="Enter city" required />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formState" className="mt-3">
                  <Form.Label>State *</Form.Label>
                  <Form.Control as="select" required>
                    <option>Select</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formZip" className="mt-3">
                  <Form.Label>ZIP *</Form.Label>
                  <Form.Control type="text" placeholder="Enter ZIP" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formPhoneNumber" className="mt-3">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control type="text" placeholder="Provide a telephone number" required />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message *</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
            </Form.Group>

            <Form.Group controlId="formCheckBox" className="mt-3">
              <Form.Check type="checkbox" label="I have a problem with my order" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Submit
            </Button>
          </Form>
        </Col>

        <Col md={4} className="mt-4">
          <div className="contact-details">
            <h5>Contact us by phone/email</h5>
            <p>1-877-847-6181</p>
            <p>narra_yon@gmail.com</p>
            <p>Hours of Operation: Monday - Friday: 8am - 6pm EST</p>

            <h5>Questions About Our Food?</h5>
            <Button variant="outline-secondary" href="#">
              View all FAQs
            </Button>

            <div className="mt-4">
              <h5>Most Recent Topics</h5>
              <ul className="list-unstyled">
                <li>What are live and active cultures?</li>
                <li>What is rBST?</li>
                <li>Is our product organic?</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
