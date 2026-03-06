import React from 'react'
import '../Services/Services.css';
import { GiOnTarget } from "react-icons/gi";
import { GiTargetLaser } from "react-icons/gi";
import { GiFallingStar } from "react-icons/gi";
const AboutUsContent = () => {
  const serviceItems = [
    {
      icon: <GiTargetLaser />,
      title: "Our mission",
      description: " We ensure the best practices were followed in routine maintenance and facility management which enables us to provide maximum value and capital appreciation for our properties.",
    },

    {
      icon: <GiFallingStar />,
      title: "Our core values",
      description: "Myland Properties Pvt Ltd have envisioned a new way of life finding the luxurious deals. Our new villas and Individual homes are designed with world class interiors providing a comfortable life of its occupants.",
    },
    {
      icon:  <GiOnTarget />,
      title: "Our vision",
      description: "Our Apartments reside in a location from where you can easily access the basic and city central offices or commercials.",
    },
  ];

  return (
    <div className="container">
    <div className="row my-5">
      {serviceItems.map((item, index) => (
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mb-5" key={index}>
          <div className="d-flex">
              <span style={{fontSize:'5vw',color:'green'}}>{item.icon}</span>
             <div className='d-flex flex-column p-3'><h3 className=' my-3'>{item.title}</h3>
             <p className=''>{item.description}</p></div>
          </div>
        </div>
      
      ))}
    </div>
    </div>
  );
};
const AboutUsBanner=() =>{
    return (
        <div>
       <div class="containers">
  <img src="https://static.vecteezy.com/system/resources/previews/022/903/424/large_2x/ai-generative-3d-modern-luxury-real-estate-house-for-sale-and-rent-luxury-property-concept-ai-generated-artwork-photo.jpg" alt="Avatar" className="image img-fluid" />
  <div class="middle">
    <div class="text">About</div>
  </div>
</div>
        </div>
    )
}

export default function AboutUsIndex() {
  return (
    <div>
     <AboutUsBanner/>
     <AboutUsContent/>
    </div>
  );
}

