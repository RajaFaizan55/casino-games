import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import style from "./video.module.scss";
import { DemoCarousel } from "../../slider";
import Container from "../../../components/container";
import AboutUs from "../about-us-section";
import HowItWorks from "../how-it-works";
import WhyCricAdda from "../why-cric-adda";

import pic1 from "../../../assets/girls1.png";
import pic2 from "../../../assets/girls.png";
import PaymentMethod from "../payment-method";

// import slider1 from "../../../assets/sports-icons/header.jpg";
import slider2 from "../../../assets/sports-icons/banners/2.jpg";
import slider1 from "../../../assets/sports-icons/banners/4.jpg";
import slider3 from "../../../assets/sports-icons/banners/3.jpg";

import whatsapp from "../../../assets/sports-icons/Social/whatsapp.png";
import Footer from "../footer";
import MoveText from "../../move-text";

const VideoSection = () => {
  return (
    <Container>
      <div className={style.wraper}>
        <div className={style.bannerSec}>
          <div>
            <MDBCarousel showControls showIndicators>
              <MDBCarouselItem
                className="w-100 d-block"
                itemId={1}
                src={slider1}
                alt="..."
              />
              <MDBCarouselItem
                className="w-100 d-block"
                itemId={2}
                src={slider2}
                alt="..."
              />
              <MDBCarouselItem
                className="w-100 d-block"
                itemId={3}
                src={slider3}
                alt="..."
              />
            </MDBCarousel>
          </div>
        </div>

        <div className={style.cardSec} id={"vid"}>
          <DemoCarousel border cardWidth={"400px"} cardHeight={"600px"} />
        </div>
      </div>
      <MoveText text={"JOIN NOW GET BONUS 20% ON ALL SPORTS and CASINO"} />
      <AboutUs />
      {/* <div className={style.pic1} id={"about"}>
        <img src={about} />
      </div> */}

      <HowItWorks />
      {/* <div className={style.pic1} id={"work"}>
        <img src={work} />
      </div> */}
      <WhyCricAdda />
      {/* <div className={style.pic1} id={"whycric"}>
        <img src={whycric} />
      </div> */}
      {/* <div className={style.pic1}>
        <img src={banner} />
      </div> */}
      <div className={style.pic1}>
        <img src={pic1} alt="icon" />
        <a href="https://wa.me/+919913044444" target="_blank" rel="noreferrer">
          <div className={style.info}>
            <p>PREMIUM SITES</p>
            <p>FAST WITHDRAWAL</p>
            <p>
              <span>24 * 7</span> SERVICE
            </p>
            <p>
              <img src={whatsapp} alt='icon' />
              <span>+91 991304444</span>
            </p>
          </div>
        </a>
      </div>
      <PaymentMethod />
      <div id={"contact"} className={style.pic2}>
        <img src={pic2} alt="icon" />
        <a href="https://wa.me/+919913044444" target="_blank" rel="noreferrer">
          <div className={style.info}>
            <p>GET YOUR ID IN</p>
            <p>30 SECONDS ONLY</p>

            <p>
              <img src={whatsapp} alt='icon' />
              <span>+91 991304444</span>
            </p>
          </div>
        </a>
      </div>
      <Footer />
    </Container>
  );
};

export default VideoSection;
