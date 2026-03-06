import React from 'react'
import '../Services/Services.css'
import ContactCards from './ContactCards'
import { Container ,Row,Col} from 'react-bootstrap';
import ContactForm from './ContactForm';
function Contact() {
    return (
    
        <>
            <Container fluid className='p-0'>
            <div class="containers">
  <img src="https://www.mylandproperties.co.in/assets/img/bg/page-header-bg.jpg" alt="Avatar" className="image img-fluid" />
  <div class="middle">
    <div class="text">contact us</div>
  </div>
</div>
            </Container>
              <ContactCards/>
<Container>
    <Row className='d-flex align-items-center'>
      <Col xs={12} md={6}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121807.94259956652!2d78.43020800000001!3d17.4358528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99f19e44a111%3A0x94788b849d04c4ce!2sPlots%20Sale%20Hyderabad%20%7C%20PR!5e0!3m2!1sen!2sin!4v1711945413760!5m2!1sen!2sin"  style={{border:'0',width:'100%',height:'70vh'}} title='just reference' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
      </Col>
    <Col  xs={12} md={6}><ContactForm/></Col>
    </Row></Container>
</>
    )
}

export default Contact
