import Carousel from 'react-bootstrap/Carousel';

function HomeClients() {
  const imgWid = {
    width: '300px',
    height: '250px'
  };

  return (
    <Carousel data-bs-theme="dark  m-5">
      <Carousel.Item>
        <div className='d-flex align-items-center justify-content-around'>
          <img
            src="https://img.freepik.com/free-photo/cityscape-skyline-chongqing-cloud-sky-view-from-empty-floor_1127-2861.jpg?t=st=1711944414~exp=1711948014~hmac=b9c013cb85163f05ef342ec73e082989ef16d73adb2618707a626074b026660d&w=1060"
            alt="First slide"
            style={imgWid}
          />
          <img
            src="https://img.freepik.com/free-photo/hotel_1127-4031.jpg?t=st=1711944543~exp=1711948143~hmac=1fc611dcd6a5c5b584fbb2b9163369e86fb13441200de82b5c980d759007905f&w=1060"
            alt="First slide"
            style={imgWid}
          />
          <img
            src="https://img.freepik.com/free-photo/3d-rendering-isometric-house_23-2150727964.jpg?t=st=1711944593~exp=1711948193~hmac=64e1cfc361bb8e5864770dc5e4d22f27ded2614bf567c496734de5beab9549c1&w=740"
            alt="First slide"
            style={imgWid}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex align-items-center justify-content-around'>
          <img
            src="https://img.freepik.com/free-photo/aerial-shot-beautiful-buildings-mallorca-balearic-islands-spain_181624-19817.jpg?t=st=1711944646~exp=1711948246~hmac=f45fb57f030ec2cd5d758ac02b16533ccf614616dce7a3e6c7b7ae9fdb8ab39d&w=996"
            alt="Second slide"
            style={imgWid}
          />
          <img
            src="https://img.freepik.com/free-photo/framing-landscape-while-traveling_23-2149887715.jpg?t=st=1711944679~exp=1711948279~hmac=c5976d80da349f1d1e51f9f51026848fde367a2d4fd4879c43a77d6226e51dd5&w=1060"
            alt="Second slide"
            style={imgWid}
          />
          <img
            src="https://img.freepik.com/free-photo/tranquil-scene-nature-beauty-urban-landscape-sunset-generated-by-ai_188544-55254.jpg?t=st=1711944710~exp=1711948310~hmac=153af9abcccfdec65cef3d96dea8a997d461aec304c0ee65c6de63bf13010188&w=1380"
            alt="Second slide"
            style={imgWid}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex align-items-center justify-content-around'>
          <img
            src="https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?t=st=1711944751~exp=1711948351~hmac=a3c5004496dd6141ca0fb372e2f96c2f1d9a2f55c81cbd9720037938c5d6d705&w=1380"
            alt="Third slide"
            style={imgWid}
          />
          <img
            src="https://img.freepik.com/free-photo/3d-view-house-model_23-2150761170.jpg?t=st=1711944790~exp=1711948390~hmac=6f5b891a698d3b8d335da7585bdb6b84ad0b4580680f99cf5f7dd51a06db5832&w=740"
            alt="Third slide"
            style={imgWid}
          />
          <img
            src="https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004033.jpg?t=st=1711944821~exp=1711948421~hmac=968099bc859b42f20a5ef4585d43b030b9748e386fe4a4a604713539db092671&w=1380"
            alt="Third slide"
            style={imgWid}
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeClients;
