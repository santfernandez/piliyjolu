import { React, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import "../styles/ImageCarousel.css";

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel pause="hover">
        <Carousel.Item>
          <img
            className="img-carousel"
            src={`https://drive.google.com/uc?export=view&id=1o98ZVGFI4axk6h6CRX9lcKeP59JWOgQY`}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-carousel"
            src={`https://drive.google.com/uc?export=view&id=1pH7LLqNdFEE-aNz34zvFfNiE-0fcsQGu`}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-carousel"
            src={`https://drive.google.com/uc?export=view&id=1AuJZHvRjdKg4QBaWn-L9Tf7nN0R9Oe-X`}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
