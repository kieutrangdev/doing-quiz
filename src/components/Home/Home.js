import React from "react";
import videoHomePage from "../../assets/video-homepage.mp4"
const Home = () => {
  return (
    <div className="home-container">
      <video autoplay= "autoplay" loop= "" >
        <source 
        src={videoHomePage} 
        type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
