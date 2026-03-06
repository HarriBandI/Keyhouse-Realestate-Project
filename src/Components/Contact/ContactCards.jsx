import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdQueryStats } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";
function ContactCards() {
  return (
    <Container className='p-5 '>
      <Row>
        <Col className='m-2'>
    <Card style={{ width: '18rem',background:'#009173' }} className='text-center text-light d-flex flex-column align-items-center justify-content-center'>
      <Card.Body>
      <HiBuildingOffice2 style={{fontSize:'70px'}}/>
        <Card.Title>Corporate Office</Card.Title>
           <Card.Text>
         
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col className='m-2'>
    <Card style={{ width: '18rem', background:'#5F6060'}} className='text-center text-light d-flex flex-column align-items-center justify-content-center'>
      <Card.Body>
        <FaSitemap style={{fontSize:'70px'}}/>
        <Card.Title>Plot Address</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col className='m-2'>
    <Card style={{ width: '18rem',background:'#086AD1' }} className='text-center text-light text-center d-flex flex-column align-items-center justify-content-center '>
      <Card.Body>
      <MdQueryStats style={{fontSize:'70px'}}/>
        <Card.Title>Queries</Card.Title>
            <Card.Text>
              
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
  );
}

export default ContactCards;