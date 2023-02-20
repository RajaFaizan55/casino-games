import { useRef, useState } from "react";
import { Rerousel } from "rerousel";

import video1 from "../../assets/video/vid1.mp4";
import video2 from "../../assets/video/vid2.mp4";


import style from "./slider.module.scss";

export const DemoCarousel = ({ border }) => {
  const [toggle, setToggle] = useState(false);
  const customerLogo = useRef(null);
  // let vid1 = document.getElementById("vid1");
  // console.log("duration", vid1.duration);

  const handlePlay = (id) => {
    setToggle(true);
    var a = document.getElementById(id);
    a.play();
    setInterval(() => {
      console.log(a.currentTime);
      if (a.currentTime > 14.5) {
        setToggle(false);
        a.currentTime = 0;
        a.pause();
      }
    }, 5000);
  };
  const handlePause = (id) => {
    var a = document.getElementById(id);
    a.pause();
    setToggle(false);
  };
  return (
    <div>
      <Rerousel itemRef={customerLogo} interval={toggle ? 15000 : 2000}>
        {vidData.map(({ id, videoSrc }) => {
          return (
            // <Player playsInline poster="/assets/poster.png" src={videoSrc}>
            //   <ControlBar>
            //     <ReplayControl seconds={10} order={1.1} disabled />
            //     <ForwardControl seconds={30} order={1.2} disabled />
            //     <CurrentTimeDisplay order={4.1} disabled />
            //     <TimeDivider order={4.2} disabled />
            //     <PlaybackRateMenuButton
            //       rates={[5, 2, 1, 0.5, 0.1]}
            //       order={7.1}
            //       disabled
            //     />
            //     <VolumeMenuButton disabled />
            //   </ControlBar>
            // </Player>
            <div style={{ position: "relative" }}>
              <video
                muted
                controls
                ref={customerLogo}
                id={id}
                className={style.item}
                onPlay={() => handlePlay(id)}
                onPause={() => handlePause(id)}
                style={{
                  border: border ? "2px solid orange" : "",
                  // width: cardWidth ? cardWidth : "200px",
                  // height: cardHeight ? cardHeight : "400px",
                }}
              >
                <source src={videoSrc} />
              </video>
              {/* <div style={{ display: "flex", alignItems: "center" }}>
                  <span onClick={() => handlePlay(id)} className={style.btn}>
                    <img src={playbtn} />
                  </span>
                  <span onClick={() => handlePause(id)} className={style.btn1}>
                    <img src={pausebtn} />
                  </span>
                </div> */}
            </div>
          );
        })}
      </Rerousel>
    </div>
  );
};

const vidData = [
  { id: "vid1", videoSrc: video2 },
  { id: "vid2", videoSrc: video1 },
  { id: "vid3", videoSrc: video2 },
  { id: "vid4", videoSrc: video1 },
  { id: "vid5", videoSrc: video2 },
  { id: "vid6", videoSrc: video1 },
  { id: "vid7", videoSrc: video2 },
  { id: "vid8", videoSrc: video1 },
  { id: "vid9", videoSrc: video2 },
];
