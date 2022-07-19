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
              <svg viewBox="0 0 500 500" className="home-phrase-text">
                <path
                  id="curve"
                  d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                />
                <text width="500">
                  <textPath xlinkHref="#curve">¡Nos casamos!</textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="home-content-b">
          <div className="home-title">
            <h2>Joaquín</h2>
            <p className="middle-title">&</p>
            <h2>Sofía</h2>
          </div>
        </div>
        <div className="home-content-c">
          <div className="home-empty-div"></div>
          <p className="home-date">Sábado 13 de Agosto</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
