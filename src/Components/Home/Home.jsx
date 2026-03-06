import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RegisterForm from './RegisterForm';

const Home = () => {
  return (
        <Container fluid  className='p-5 contact-container bgImage  shadow overflow-hidden' id="contactAndRegister">  
    <Row>
    <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center text-white">
            <div className="text-center">
              <h3 style={{color:'black',textShadow:'2px 2px lightblue',fontFamily:'monospace', fontSize: '4vw'}}>WELCOME TO KEYHOUSE</h3>
              <p style={{color:'black',textShadow:'2px 2px lightblue', fontSize: '3vw'}}>Find Your Perfect PLOT</p>
            </div>
         
          </Col>
<Col  xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
<RegisterForm/>
            </Col>
            </Row>
      </Container>
  );
};

export default Home;