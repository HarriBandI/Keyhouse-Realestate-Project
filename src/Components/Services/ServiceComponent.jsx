import React from 'react';

const ServiceComponent = () => {
  const serviceItems = [
    {
      icon: "https://www.mylandproperties.co.in/assets/img/icons/landscape.png",
      title: "Property Management Services",
      description: "Our property management services include Rental property management, Property Maintenance. We perform periodic inspections on each property we take and look for safety hazards, violations etc., We send every report to the property owner and take necessary steps to manage the property with at most care. We establish preventative maintenance policy and prepare preliminary cost estimates. We assign a property manager to supervise all necessary precautions and steps. Myland Properties Pvt Ltd is completely comprised of industry level experienced and efficient property management team. We ensure the best practices were followed in routine maintenance and facility management which enables us to provide maximum value and capital appreciation for our properties.",
    },
    {
      icon: "https://www.mylandproperties.co.in/assets/img/icons/design.png",
      title: "Residential Apartments",
      description: "Our Apartments reside in a location from where you can easily access the basic and city central offices or commercials. We ensure the residential project is with urban amenities that easily balances the work-life. We have residential apartments with high security deposits. We have experience and expertise in serving the most reputed Developers, Portfolio Investors and Individual Investors. With our process driven and technology business model, we have gained the trusted name in Residential real estate market. We have highly trained real estate experts who enables discovery through a digital platform. We offer complete residential services providing vast options for buyers that maximize property value for investors.",
    },
    {
      icon: "https://www.mylandproperties.co.in/assets/img/icons/fectory.png",
      title: "Individual Homes & Villa",
      description: "Myland Properties Pvt Ltd have envisioned a new way of life finding the luxurious deals. Our new villas and Individual homes are designed with world class interiors providing a comfortable life of its occupants. We have conceptualized independent Villas with modern amenities in flexible. We are known around for our commitment towards housing sector. We help you own the home which adds the delight of residing in the best investment property with top-notch features as affordability as the key factor. Redefining the real estate sector we bridged the gap between affordability and quality.",
    },
    {
      icon: "https://www.mylandproperties.co.in/assets/img/icons/delivery.png",
      title: "Open Plot Venture",
      description: "The interest of buying plots/lands has the prominence among real estate markets. While planning a venture we ensure the appropriate layout design which is accessible and nearer to core locations of the city or town. We promise the precise plots that are rich in resale or commercialization by identifying the best places to invest. Our open plots ventures were planned as fully integrated townships harmonising with nature. Featuring distinguished array of basic residential essentials like educational institutes, Multi-Speciality hospitals, Shopping centres and much more.",
    },
    {
      icon: "https://www.mylandproperties.co.in/assets/img/icons/commercial.png",
      title: "Commercial Buildings",
      description: "We are a trusted real estate company that finds the affordable solutions for customers who aim at owning a commercial property. With modern amenities and standards we maximize the returns by choosing the best place to start a commercial building. We help our valued customers in buying and selling of commercial real estate property. We offer commercial and customized advisory and consulting focusing on high-yield office assets catering to the demands of investors. Focusing on appreciation we aim to be a one-step solution providing end-to-end services on Research Advisory, consulting & Valuation and Transaction management. Whether we work with Landlords or Investors we bring a mix of transparency and integrity to each business.",
    },
    {
      icon: "https://www.mylandproperties.co.in/assets/img/icons/kitchen.png",
      title: "Construction & Infra activities",
      description: "With a talented experience in land we've extended our services into construction and Infrastructure activities. We take up the construction projects of various sectors from Buildings infrastructure, Industrial plants by coordinating with various contractors and devising optimized solutions. We continuously offer the construction supervisions to complete the project with quality standards. With a comprehensive inspection, we drive out the quality driven construction and infrastructure services to our valued customers and clients.",
    }
  ];

  return (
    <div className="container">
    <div className="row my-5">
      {serviceItems.map((item, index) => (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 parent mb-5" key={index}>
          <div className="service-item">
            <div className="icon">
              <img src={item.icon} alt="" />
            </div>
             <h3 className='service-title my-3'>{item.title}</h3>
             <div className='service-hidden'>
             <p className='service-description'>{item.description}</p>
             </div>
          </div>
        </div>
      
      ))}
    </div>
    </div>
  );
};

export default ServiceComponent;
