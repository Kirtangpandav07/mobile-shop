import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img11 from '../images/img11.jpg'
import img22 from '../images/img22.jpg'
import img44 from '../images/img44.jpg'

const Home = () => {
  return (
    <>
    
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img22}
        alt="First slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img44}
        alt="Second slide"
      />

      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img11}
        alt="Third slide"
      />

      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    
    
  </Carousel>
  
  </>
  
  );
};

export default Home