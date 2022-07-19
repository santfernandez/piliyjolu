import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-content-a">
          <div className="date-and-icon">
            <img
              className="home-icon"
              src={`https://drive.google.com/uc?export=view&id=1pyQr_TMOb5REBhjjJ2yZwy5PTzeFaEyp`}
              alt="wedding rings blending"
            />
            <div className="home-phrase">
              <p className="home-phrase-date">27|08|22</p>
              <p className="home-phrase-text">¡Nos casamos!</p>
            </div>
          </div>
        </div>
        <div className="home-content-b">
          <div className="home-title">
            <p>Pilar</p>
            <h2 className="middle-title">&</h2>
            <p>José</p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Home;
