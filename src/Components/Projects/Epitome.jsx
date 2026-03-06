
import React from 'react';
import { Container, Row, Col,Button,Tabs,Tab } from 'react-bootstrap';
import Banner1 from '../assets/project1.jpg';
import projectImg1 from '../assets/ProjectImg1.png'
import projectImg2 from '../assets/ProjectImg2.png'
import projectImg3 from '../assets/ProjectImg3.png'
import projectImg4 from '../assets/ProjectImg4.png'
import { Link } from 'react-router-dom';

const Epitome = () => {
  const projectData = {
    aboutContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nostrum magni architecto, voluptate suscipit voluptatum similique officiis tempora fuga molestiae! Fugit, corporis! Delectus adipisci error id, omnis nihil aperiam? Labore.',
    mapImage: 'https://img.freepik.com/free-photo/3d-view-map_23-2150471683.jpg?t=st=1710395367~exp=1710398967~hmac=94fdc373538e0707cc11358363fff0445ee76e00e92d8bb5d98d2c6b76dbf9be&w=826',
    rootMapImage:'https://img.freepik.com/free-vector/fishbone-template-infographic_23-2148560532.jpg?t=st=1710754368~exp=1710757968~hmac=12bce0468225a2f1e056a32c875807d23a1e3ee79a5d586733115af04c4170d8&w=1060',
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
      <Tabs 
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Epitome" title="Epitome"  >
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, illum tempora hic inventore quasi eligendi laborum, ad culpa sunt ratione minus odio consequatur placeat assumenda atque non error quis id.
  <Button ><Link as={Link} to="/warangal" style={{textDecoration:'none',color:'white'}} > projects</Link></Button>
      </Tab>
      <Tab eventKey="Bomabay Road" title="Bomabay Road">
     Bombay Road
      </Tab>
      <Tab eventKey="Nizamabad Road" title="Nizamabad Road" >
     Nizamabad Road
      </Tab>
    </Tabs>
      </Container>
      <Container>
        <p>{projectData.aboutContent}</p>
      </Container>
      <Container fluid className='p-3'>
        <center><img src={projectData.mapImage} alt='project-map' style={{ width: '500px', height: 'auto' }} className='img-fluid' /></center>
      </Container>
      <Container fluid className='bg-light'>
        <img src={projectData.rootMapImage} alt='project-root-map' style={{ width: '100%', height: 'auto' }} className='img-fluid' />
      </Container>
      <Container className='bg-light p-5'>
        <Row>
          <Col xs={12} sm={6} md={3} lg={3} className='my-1'><img src={projectData.locationImage} alt='project-location'  style={{width:'100%',height:'200px'}} /></Col>
          <Col xs={12} sm={6} md={3} lg={3}  className='my-1'><img src={projectData.locationImage1} alt='project-location' style={{width:'100%',height:'200px'}} /></Col>
          <Col xs={12} sm={6} md={3} lg={3}  className='my-1'><img src={projectData.locationImage2} alt='project-location' style={{width:'100%',height:'200px'}} /></Col>
          <Col xs={12} sm={6} md={3} lg={3}  className='my-1'><img src={projectData.locationImage3} alt='project-location' style={{width:'100%',height:'200px'}} /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Epitome;
