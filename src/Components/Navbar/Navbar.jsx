import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {

  return (

    <Navbar expand="lg" className="bg-light p-4 shadow">
      <Container>
        <Navbar.Brand href="#home"><h2>KeyHouse</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='sliding-middle-out' style={{fontWeight: '600', fontSize: '3vh', paddingRight: '30px', color: '#000'}}>HOME</Nav.Link>
            <Nav.Link href="/about" className='sliding-middle-out' style={{fontWeight: '600', fontSize: '3vh', paddingRight: '30px', color: '#000'}}>ABOUT</Nav.Link>
            <Nav.Link href="/project" className='sliding-middle-out' style={{fontWeight: '600', fontSize: '3vh',paddingRight: '30px', color: '#000'}}>PROJECTS</Nav.Link>
            <Nav.Link href="/services" className='sliding-middle-out' style={{fontWeight: '600', fontSize: '3vh', paddingRight: '30px', color: '#000'}}>SERVICES</Nav.Link>
            <Nav.Link href="/contact" className='sliding-middle-out' style={{fontWeight: '600', fontSize: '3vh', paddingRight: '30px', color: '#000'}}>CONTACT</Nav.Link>
            <NavDropdown title="LOCATIONS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={{fontWeight: '600', fontSize: '17px', paddingRight: '30px', color: '#000'}}>HYDERABAD</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{fontWeight: '600', fontSize: '17px', paddingRight: '30px', color: '#000'}}>
                WARANGAL
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{fontWeight: '600', fontSize: '17px', paddingRight: '30px', color: '#000'}}>Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;