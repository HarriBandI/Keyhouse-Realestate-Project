
import React from 'react';
import { Container,Button,Tabs,Tab } from 'react-bootstrap';
import Epitome from './Epitome';


const SagarRoads = () => {
  return (
    <>
    <Container fluid className="p-0 sagar-bg">
</Container>

    <Container className='d-flex flex-column align-items-center justify-content-center' style={{color:'blue'}}>
      <Tabs 
      defaultActiveKey=""
      id="uncontrolled-tab-example"
      className="mb-3"
      
    >
      <Tab eventKey="Villas" title={<Button variant="outline-primary">Villas</Button>}>
        
         </Tab>
      <Tab eventKey="Srisailam" title={<Button variant="outline-primary">Apartments</Button>}>
     Srisailam
      </Tab>
      <Tab eventKey="Bomabay Road" title={<Button variant="outline-primary">Open Lands</Button>}>
      <Tabs 
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Epitome" title={<Button variant="outline-primary">Epitome</Button>}>
      <Epitome/>
         </Tab>
      <Tab eventKey="xyz" title="xyz">
   hii
      </Tab>
    </Tabs>
      </Tab>
      <Tab eventKey="Independent Houses" title={<Button variant="outline-primary">Independent Houses</Button>} >
     Nizamabad Road
      </Tab>
      <Tab eventKey="Commercial" title={<Button variant="outline-primary">Commercial</Button>} >
     Nizamabad Road
      </Tab>
      <Tab eventKey="Farm lands" title={<Button variant="outline-primary">Farm lands</Button>} >
     Nizamabad Road
      </Tab>
      <Tab eventKey="Agricultural Lands" title={<Button variant="outline-primary">Agricultural Land</Button>} >
     Nizamabad Road
      </Tab>
    </Tabs>
    </Container>
    
    </>
  );
};

export default SagarRoads;
