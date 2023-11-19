// Import necessary React and Bootstrap components
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

// Your component
const ProductCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>A9wa oussema</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items for additional slides */}

        {/* Example of additional Carousel.Item */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Button to view product */}
      <div className="text-center mt-3">
        <Button variant="primary">View Product</Button>
      </div>
    </div>
  );
};

export default ProductCarousel;
