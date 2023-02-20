import React from "react";
import style from "./portfolio.module.scss";
import { DemoCarousel } from "../slider";
import Container from "../../components/container";
import ImageSlider from "../image-slider";

const PortFolioSection = () => {
  return (
    <Container>
      <div className={style.wraper} id={"portfolio"}>
        <div className={style.bannerSec}>
          <div className={style.bannver1}>
            {/* <img src={sportGala} /> */}
            <ImageSlider />
          </div>
        </div>
        <div className={style.cardSec}>
          <DemoCarousel />
        </div>
      </div>
    </Container>
  );
};

export default PortFolioSection;
