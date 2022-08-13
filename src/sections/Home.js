import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.css";
import Rings from '../img/wedding-rings.webp'


const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-content-a">
          <div className="date-and-icon">
            <img
              className="home-icon"
              src={Rings}
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
        <div className="home-content-c">
        <p className="home-down-phrase">“El cielo ha conspirado a nuestro favor...”</p>
        </div>
        </div>
    </div>
  );
};

export default Home;
