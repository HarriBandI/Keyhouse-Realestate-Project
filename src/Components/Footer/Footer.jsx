import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import List from 'react-bootstrap/ListGroup';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="overlays"></div>
            <Container fluid className='text-light mt-5 p-4 contact-bg'>
                <Row>
                    <Col xs={6} md={3} className='p-2 text-content'>
                        <h4>COMPANY NAME</h4>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Col>
                    <Col xs={6} md={3} className='p-2 text-content'>
                        <h4>Contents</h4>
                        <List.Item as="li"><Link to="/about" style={{textDecoration:'none',color:'white'}}>About Us</Link></List.Item>
                        <List.Item as="li"><Link to="/services"  style={{textDecoration:'none',color:'white'}}>Services</Link></List.Item>
                        <List.Item as="li"><Link to="/contact"  style={{textDecoration:'none',color:'white'}}>Contact Us</Link></List.Item>
                        <List.Item as="li"><Link to="/project"  style={{textDecoration:'none',color:'white'}}>Projects</Link></List.Item>
                    </Col>
                    <Col xs={6} md={6} className='p-2 text-content'>
                        <h4>Mail Us</h4>
                        <Form>
                            <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <input className='form-controls contact-input-noborder ' type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Send Us your Thoughts</Form.Label>
                                <input className='form-controls contact-input-noborder' as="textarea" rows={3} style={{height:'100px'}}/>
                            </Form.Group>
                            <Button className='bg-light text-dark'>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
