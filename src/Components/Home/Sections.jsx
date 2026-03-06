import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Sections() {
  return (
    <>
    <Container className='my-5'>
        <Row>
            <Col  className='d-flex  align-items-center m-2 justify-content-around'>
            <Link as={Link} to="/about"  class="btn-12 text-light"><span>Click!</span><span>About</span></Link>
    </Col>
    <Col  className='d-flex align-items-center  m-2 justify-content-around'>
    <Link as={Link} to="/project"  class="btn-12 text-light"><span>Click!</span><span>Project</span></Link>
  
   </Col>
   <Col  className='d-flex align-items-center m-2 justify-content-around'>
   <Link as={Link} to="/services"  class="btn-12 text-light"><span>Click!</span><span>Services </span></Link>
 
  </Col>
  </Row>
  </Container>
  </>
  );
}

export default Sections;