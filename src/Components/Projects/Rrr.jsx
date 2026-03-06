
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner1 from '../assets/project1.jpg';
import rrr1 from '../assets/rrr1.jpg';
import rrr2 from '../assets/rrr2.jpg';
import rrr3 from '../assets/rrr3.jpg';
import rrr4 from '../assets/rrr4.jpg';
const Rrr = () => {
  const projectData = {
    aboutContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nostrum magni architecto, voluptate suscipit voluptatum similique officiis tempora fuga molestiae! Fugit, corporis! Delectus adipisci error id, omnis nihil aperiam? Labore.',
    mapImage: 'https://img.freepik.com/free-photo/3d-view-map_23-2150471683.jpg?t=st=1710395367~exp=1710398967~hmac=94fdc373538e0707cc11358363fff0445ee76e00e92d8bb5d98d2c6b76dbf9be&w=826',
    rootMapImage:'',
        locationImage:rrr1,
    locationImage1: rrr2,
     locationImage2: rrr3,
      locationImage3: rrr4
  };

  return (
    <div>
  <Container fluid className='p-0'>
<img src={Banner1} style={{backgroundImage: `url(${Banner1})`, backgroundSize: 'fill', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',width:'100%',height:'auto'}} alt="banner1" className='img-fluid p-0'/>
      </Container>
      <Container>
        <p>{projectData.aboutContent}</p>
      </Container>
      <Container fluid className='p-3'>
        <center><img src={projectData.mapImage} alt='project-map' style={{ width: '500px', height: 'auto' }} className='img-fluid' /></center>
      </Container>
      <Container fluid className='bg-light'>
            </Container>
      <Container className='bg-light p-5'>
        <Row>
          <Col><img src={projectData.locationImage} alt='project-location'  style={{width:'100%',height:'200px'}} /></Col>
          <Col><img src={projectData.locationImage1} alt='project-location' style={{width:'100%',height:'200px'}} /></Col>
          <Col><img src={projectData.locationImage2} alt='project-location' style={{width:'100%',height:'200px'}} /></Col>
          <Col><img src={projectData.locationImage3} alt='project-location' style={{width:'100%',height:'200px'}} /></Col>
        </Row>
      </Container>

    </div>
  );
};

export default Rrr;
