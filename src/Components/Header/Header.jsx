import React from 'react'
import  Container  from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import { Col } from 'react-bootstrap';
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div>
            <Container fluid className='bg-dark p-2 text-light'>
                <Row className=''>
                    <Col xs={12} sm={6} md={3} lg={6}>
                        <Link href="#" className='text-decoration-none text-light p-1'><CiFacebook style={{fontSize:'20px',color:'white'}} /></Link>
                        <Link href="#" className='text-decoration-none text-light p-1'> <FaWhatsapp style={{fontSize:'20px',color:'white'}} /></Link>
                        <Link href="#" className='text-decoration-none text-light p-1'> <FaInstagram style={{fontSize:'20px',color:'white'}}/></Link>
                        <Link href="#" className='text-decoration-none text-light p-1'> <CiYoutube style={{fontSize:'20px',color:'white'}}/></Link>
                    </Col>
                    
                    <Col className='d-flex justify-content-end' xs={12} sm={6} md={9} lg={6}>
                        <Link href="#"className='text-decoration-none text-light p-1'> <CiMail style={{fontSize:'20px',color:'white'}}/>keyhouse@gmail.com</Link>
                        <Link href="#"className='text-decoration-none text-light p-1'> <CiPhone style={{fontSize:'20px',color:'white'}}/>9963362947</Link>
                    </Col>
                </Row>
               
            </Container>
        </div>
    )
}

export default Header
