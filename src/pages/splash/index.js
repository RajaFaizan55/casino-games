import React, {  useEffect, useRef } from "react";

import videoSrc from "../../assets/video/info.mp4";

import "./video.css";

const SplashScreen = () => {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current && videoRef.current.play();
  });
  return (
    <div>
      <video autoPlay muted id="myVideo" ref={videoRef}>
        <source src={videoSrc} />
      </video>
    </div>
  );
};

export default SplashScreen;
