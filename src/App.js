import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomeIndex from './Components/Home/HomeIndex';
import Navbar1 from './Components/Navbar/Navbar';
import AboutUsIndex from "./Components/AboutUs/AboutUsIndex";
import ServiceIndex from "./Components/Services/ServiceIndex";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import  Footer  from "./Components/Footer/Footer";
import ProjectMain from "./Components/Projects/ProjectMain";
import Project2 from "./Components/Projects/Project2";
import SagarRoads from "./Components/Projects/SagarRoads";
import Epitome from "./Components/Projects/Epitome";


function App() {
  return (
   <div>

<BrowserRouter>

<Header/>
<Navbar1/>

      <Routes>
      <Route exact path="/" element={<HomeIndex/>} />
          <Route exact path="/about" element={<AboutUsIndex/>} />
          <Route exact path="/services" element={<ServiceIndex/>} />
          <Route exact path="/contact" element={<Contact/>} />
         <Route exact path="/project" element={<ProjectMain/>}/>
<Route exact path="/epitome" element={<Epitome/>}/>
<Route exact path="/project2" element={<Project2/>}/>
<Route exact path="/sagarroad" element={<SagarRoads/>}/>
  </Routes>
      <Footer/>
    </BrowserRouter>
   </div>
  );
}

export default App;
