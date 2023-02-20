import React from "react";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import sportGala from "../../assets/sports.jpg";
import bb from "../../assets/binary.webp";

const ImageSlider = () => {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src={sportGala}
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src={bb}
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src={sportGala}
        alt="..."
      />
    </MDBCarousel>
  );
};

export default ImageSlider;
