import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './ProjectMain.css'
// Define the list of Telangana districts
const districts = [
  { 
    name: "Hyderabad", 
    tabs: [
      { title: "Srishailam Highway", content: "Content for Srishailam Highway"  },
  { title: "Banglore Highway", content: "Content for Banglore Highway" },
  { title: "Mumbai Highway", content: "Content for Mumbai Highway" },
  { title: "Nanded Highway", content: "Content for Nanded Highway" },
  { title: "Nizamabad Highway", content: "Content for Nizamabad Highway" },
  { title: "Karimnagar Highway", content: "Content for Karimnagar Highway" },
  { title: "Warangal Highway", content: "Content for Warangal Highway" },
  { title: "Vijayawada Highway", content: "Content for Vijayawada Highway" },
  { title: "Sagar Highway", content: "Content for Sagar Highway" , link: "/sagarroad"},
    ] 
  },
  { 
    name: "Adilabad", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Adilabad" },
      { title: "Tab 2", content: "Content for Tab 2 in Adilabad" },
      { title: "Tab 3", content: "Content for Tab 3 in Adilabad" }
    ] 
  },
  { 
    name: "Bhadradri Kothagudem", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Bhadradri Kothagudem" },
      { title: "Tab 2", content: "Content for Tab 2 in Bhadradri Kothagudem" },
      { title: "Tab 3", content: "Content for Tab 3 in Bhadradri Kothagudem" }
    ] 
  },
  { 
    name: "Jagtial", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Jagtial" },
      { title: "Tab 2", content: "Content for Tab 2 in Jagtial" },
      { title: "Tab 3", content: "Content for Tab 3 in Jagtial" }
    ] 
  },
  { 
    name: "Jangaon", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Jangaon" },
      { title: "Tab 2", content: "Content for Tab 2 in Jangaon" },
      { title: "Tab 3", content: "Content for Tab 3 in Jangaon" }
    ] 
  },
  // Add other districts here with their respective tabs
  { 
    name: "Jayashankar Bhupalpally", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Jayashankar Bhupalpally" },
      { title: "Tab 2", content: "Content for Tab 2 in Jayashankar Bhupalpally" },
      { title: "Tab 3", content: "Content for Tab 3 in Jayashankar Bhupalpally" }
    ] 
  },
  { 
    name: "Jogulamba Gadwal", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Jogulamba Gadwal" },
      { title: "Tab 2", content: "Content for Tab 2 in Jogulamba Gadwal" },
      { title: "Tab 3", content: "Content for Tab 3 in Jogulamba Gadwal" }
    ] 
  },
  { 
    name: "Kamareddy", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Kamareddy" },
      { title: "Tab 2", content: "Content for Tab 2 in Kamareddy" },
      { title: "Tab 3", content: "Content for Tab 3 in Kamareddy" }
    ] 
  },
  { 
    name: "Karimnagar", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Karimnagar" },
      { title: "Tab 2", content: "Content for Tab 2 in Karimnagar" },
      { title: "Tab 3", content: "Content for Tab 3 in Karimnagar" }
    ] 
  },
  { 
    name: "Khammam", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Khammam" },
      { title: "Tab 2", content: "Content for Tab 2 in Khammam" },
      { title: "Tab 3", content: "Content for Tab 3 in Khammam" }
    ] 
  },
  { 
    name: "Kumuram Bheem Asifabad", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Kumuram Bheem Asifabad" },
      { title: "Tab 2", content: "Content for Tab 2 in Kumuram Bheem Asifabad" },
      { title: "Tab 3", content: "Content for Tab 3 in Kumuram Bheem Asifabad" }
    ] 
  },
  { 
    name: "Mahabubabad", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Mahabubabad" },
      { title: "Tab 2", content: "Content for Tab 2 in Mahabubabad" },
      { title: "Tab 3", content: "Content for Tab 3 in Mahabubabad" }
    ] 
  },
  { 
    name: "Mahabubnagar", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Mahabubnagar" },
      { title: "Tab 2", content: "Content for Tab 2 in Mahabubnagar" },
      { title: "Tab 3", content: "Content for Tab 3 in Mahabubnagar" }
    ] 
  },
  { 
    name: "Mancherial", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Mancherial" },
      { title: "Tab 2", content: "Content for Tab 2 in Mancherial" },
      { title: "Tab 3", content: "Content for Tab 3 in Mancherial" }
    ] 
  },
  { 
    name: "Medak", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Medak" },
      { title: "Tab 2", content: "Content for Tab 2 in Medak" },
      { title: "Tab 3", content: "Content for Tab 3 in Medak" }
    ] 
  },
  { 
    name: "Medchal–Malkajgiri", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Medchal–Malkajgiri" },
      { title: "Tab 2", content: "Content for Tab 2 in Medchal–Malkajgiri" },
      { title: "Tab 3", content: "Content for Tab 3 in Medchal–Malkajgiri" }
    ] 
  },
  { 
    name: "Nagarkurnool", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Nagarkurnool" },
      { title: "Tab 2", content: "Content for Tab 2 in Nagarkurnool" },
      { title: "Tab 3", content: "Content for Tab 3 in Nagarkurnool" }
    ] 
  },
  { 
    name: "Nalgonda", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Nalgonda" },
      { title: "Tab 2", content: "Content for Tab 2 in Nalgonda" },
      { title: "Tab 3", content: "Content for Tab 3 in Nalgonda" }
    ] 
  },
  { 
    name: "Narayanpet", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Narayanpet" },
      { title: "Tab 2", content: "Content for Tab 2 in Narayanpet" },
      { title: "Tab 3", content: "Content for Tab 3 in Narayanpet" }
    ] 
  },
  { 
    name: "Nirmal", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Nirmal" },
      { title: "Tab 2", content: "Content for Tab 2 in Nirmal" },
      { title: "Tab 3", content: "Content for Tab 3 in Nirmal" }
    ] 
  },
  { 
    name: "Nizamabad", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Nizamabad" },
      { title: "Tab 2", content: "Content for Tab 2 in Nizamabad" },
      { title: "Tab 3", content: "Content for Tab 3 in Nizamabad" }
    ] 
  },
  { 
    name: "Peddapalli", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Peddapalli" },
      { title: "Tab 2", content: "Content for Tab 2 in Peddapalli" },
      { title: "Tab 3", content: "Content for Tab 3 in Peddapalli" }
    ] 
  },
  { 
    name: "Rajanna Sircilla", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Rajanna Sircilla" },
      { title: "Tab 2", content: "Content for Tab 2 in Rajanna Sircilla" },
      { title: "Tab 3", content: "Content for Tab 3 in Rajanna Sircilla" }
    ] 
  },
  { 
    name: "Ranga Reddy", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Ranga Reddy" },
      { title: "Tab 2", content: "Content for Tab 2 in Ranga Reddy" },
      { title: "Tab 3", content: "Content for Tab 3 in Ranga Reddy" }
    ] 
  },
  { 
    name: "Sangareddy", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Sangareddy" },
      { title: "Tab 2", content: "Content for Tab 2 in Sangareddy" },
      { title: "Tab 3", content: "Content for Tab 3 in Sangareddy" }
    ] 
  },
  { 
    name: "Siddipet", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Siddipet" },
      { title: "Tab 2", content: "Content for Tab 2 in Siddipet" },
      { title: "Tab 3", content: "Content for Tab 3 in Siddipet" }
    ] 
  },
  { 
    name: "Suryapet", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Suryapet" },
      { title: "Tab 2", content: "Content for Tab 2 in Suryapet" },
      { title: "Tab 3", content: "Content for Tab 3 in Suryapet" }
    ] 
  },
  { 
    name: "Vikarabad", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Vikarabad" },
      { title: "Tab 2", content: "Content for Tab 2 in Vikarabad" },
      { title: "Tab 3", content: "Content for Tab 3 in Vikarabad" }
    ] 
  },
  { 
    name: "Wanaparthy", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Wanaparthy" },
      { title: "Tab 2", content: "Content for Tab 2 in Wanaparthy" },
      { title: "Tab 3", content: "Content for Tab 3 in Wanaparthy" }
    ] 
  },
  { 
    name: "Warangal Rural", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Warangal Rural" },
      { title: "Tab 2", content: "Content for Tab 2 in Warangal Rural" },
      { title: "Tab 3", content: "Content for Tab 3 in Warangal Rural" }
    ] 
  },
  { 
    name: "Warangal Urban", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Warangal Urban" },
      { title: "Tab 2", content: "Content for Tab 2 in Warangal Urban" },
      { title: "Tab 3", content: "Content for Tab 3 in Warangal Urban" }
    ] 
  },
  { 
    name: "Yadadri Bhuvanagiri", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Yadadri Bhuvanagiri" },
      { title: "Tab 2", content: "Content for Tab 2 in Yadadri Bhuvanagiri" },
      { title: "Tab 3", content: "Content for Tab 3 in Yadadri Bhuvanagiri" }
    ] 
  },
  { 
    name: "Mulugu", 
    tabs: [
      { title: "Tab 1", content: "Content for Tab 1 in Mulugu" },
      { title: "Tab 2", content: "Content for Tab 2 in Mulugu" },
      { title: "Tab 3", content: "Content for Tab 3 in Mulugu" }
    ] 
  }
];

function ProjectMain() {
  return (
    <>
<Container fluid className="p-0 project-bg">
</Container>

      <Container className='m-5'>
        <Accordion defaultActiveKey="0">
          {districts.map((district, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>
                <strong>{district.name}</strong>
              </Accordion.Header>
              <Accordion.Body>
                <Tabs defaultActiveKey={district.tabs[0].title} id={`tabs-${index}`} className="mb-3">
                  {district.tabs.map((tab, tabIndex) => (
                    <Tab key={tabIndex} eventKey={`tab-${tabIndex}`} title={tab.title}>
                      {tab.content}
                      <a href={tab.link} target="_blank" rel="noopener noreferrer">
                          <button className='btn btn-primary'>Projects</button>
                        </a>
                    </Tab>
                  ))}
                </Tabs>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </>
  );
}

export default ProjectMain;
