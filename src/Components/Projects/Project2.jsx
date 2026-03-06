
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner1 from '../assets/project1.jpg';
import projectImg1 from '../assets/ProjectImg1.png'
import projectImg2 from '../assets/ProjectImg2.png'
import projectImg3 from '../assets/ProjectImg3.png'
import projectImg4 from '../assets/ProjectImg4.png'

const Project2 = () => {
  const projectData = {
    aboutContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nostrum magni architecto, voluptate suscipit voluptatum similique officiis tempora fuga molestiae! Fugit, corporis! Delectus adipisci error id, omnis nihil aperiam? Labore.',
    mapImage: 'https://img.freepik.com/free-photo/3d-view-map_23-2150471683.jpg?t=st=1710395367~exp=1710398967~hmac=94fdc373538e0707cc11358363fff0445ee76e00e92d8bb5d98d2c6b76dbf9be&w=826',
    rootMapImage:'',
        locationImage: projectImg1,
    locationImage1: projectImg2,
     locationImage2: projectImg3,
      locationImage3: projectImg4
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

export default Project2;
