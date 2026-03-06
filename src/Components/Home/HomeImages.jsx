import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Home.css';
import { Link } from 'react-router-dom';
function HomeImages() {
  const images = [
    {
      imageUrl: "https://img.freepik.com/free-photo/park-lujiazui-financial-centre_1127-3343.jpg?t=st=1710237350~exp=1710240950~hmac=7b7c28e6640712eb0bb1d41d2b075c5c6512b517e82424d79a961b00a5fac6b9&w=1060",
      title: "Park Lujiazui Financial Centre"
    },
    {
      imageUrl: "https://cdn.pixabay.com/photo/2023/06/21/06/38/house-8078612_1280.jpg",
      title: "House"
    },
    {
      imageUrl: "https://img.freepik.com/free-photo/aerial-view-various-sizes-green-fields_1268-15590.jpg?t=st=1711774775~exp=1711778375~hmac=d2d8e7724f8287914a48e9850b1e475c2ab3666795a91fc19819cb503655a2c6&w=900",
      title: "Aerial View of Green Fields"
    },
    {
      imageUrl: "https://media.istockphoto.com/id/1302442919/photo/luxury-beach-villa-at-night.jpg?s=1024x1024&w=is&k=20&c=Xi0gxsijyjCjm3RO4ZdrTqBghlKpZQz-6p6ULDICo1k=",
      title: "Luxury Beach Villa at Night"
    },
    {
      imageUrl: "https://media.istockphoto.com/id/1223059802/photo/cityscape-of-a-modern-residential-area-with-apartment-buildings-new-green-urban-landscape-in.jpg?s=1024x1024&w=is&k=20&c=YMkVtRqWpvlTc-ukZiNYHhfLBT0Kll_fLElDCoNRCcU=",
      title: "Cityscape of a Modern Residential Area"
    },
    {
      imageUrl: "https://img.freepik.com/free-photo/road-with-trees-around_1127-2249.jpg?t=st=1711774818~exp=1711778418~hmac=de9554067543a76d98fc6315bc0c1c1e58ef1c7b99ba0889f86a7f634e4fdb12&w=900",
      title: "Road with Trees Around"
    }
  ];

  return (
    <Container fluid className='bg-body-tertiary p-5'>
      <h3 style={{ color: 'blue' }}>Our projects</h3>
      <Row className='m-5'>
        {images.map((image, index) => (
          <Col xs={12} sm={6} md={4} key={index} className='d-flex align-items-stretch mb-3'>
            <Card className='overflow-hidden w-100'>
              <Card.Img className='zoomImage img-fluid' variant="top" src={image.imageUrl} style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.5vw' }}>{image.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function Jumbotrons() {
  return (
    <>
      <Container className='d-flex align-items-center justify-content-center rounded my-5 p-5' style={{backgroundImage:'linear-gradient(to right,blue, rgba(0,172,238,1))',color:'white' }}>
        <Row>
          <Col style={{ textAlign: 'center', fontSize: '2.5vw' }} className='d-flex flex-column w-50'>
            <span className='p-5'>꧁•⊹٭Grasp to capture a beautiful house with a small investment٭⊹•꧂</span>
         <Link to='/contact' className='btn btn-primary ms-auto'>Contact Us</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default function Home() {
  return (
    <div>
      <HomeImages />
      <Jumbotrons />
    </div>
  );
}
