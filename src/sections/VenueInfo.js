import React, { useState } from "react";
import "../styles/VenueInfo.css";
import Church from '../img/church.webp'
import Toast from '../img/toast.webp'

const VenueInfo = () => {
  return (
    <div className="venue-info">
      <div className="venue-info-row-a">
        <div className="ceremony">
          <div className="venue-info-image">
            <img
              src={Church}
            />
          </div>
          <div className="venue-info-content">
            <div className="venue-info-event">
              <h2>Ceremonia</h2>
            </div>
            <div className="venue-info-day">
              <h4 className="venue-info-list-title">Día</h4>
              <p>27 de agosto de 2022</p>
            </div>
            <div className="venue-info-hour">
              <h4 className="venue-info-list-title">Hora</h4>
              <p>12 pm</p>
            </div>
            <div className="venue-info-venue">
              <h4 className="venue-info-list-title">Lugar</h4>
              <p>Capilla San Cristóbal</p>
            </div>
            <div className="venue-info-address">
              <h4 className="venue-info-list-title">Dirección</h4>
              <p>Lobo de la Vega y Perú, Yerba Buena</p>
            </div>
          </div>
          <div className="venue-info-button">
            <button type="button">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://goo.gl/maps/z9T59hdvMKJCaQ3P8"
              >
                Cómo llegar
              </a>
            </button>
          </div>
        </div>
        <div className="party">
          <div className="venue-info-image">
            <img
              src={Toast}
            />
          </div>
          <div className="venue-info-content">
            <div className="venue-info-event">
              <h2>Celebración</h2>
            </div>
            <div className="venue-info-day">
              <h4 className="venue-info-list-title">Día</h4>
              <p>27 de agosto de 2022</p>
            </div>
            <div className="venue-info-hour">
              <h4 className="venue-info-list-title">Hora</h4>
              <p>1 pm</p>
            </div>
            <div className="venue-info-venue">
              <h4 className="venue-info-list-title">Lugar</h4>
              <p>Terrazas de San José</p>
            </div>
            <div className="venue-info-address">
              <h4 className="venue-info-list-title">Dirección</h4>
              <p>Av. Pte. Perón 2400, Yerba Buena</p>
            </div>
          </div>
          <div className="venue-info-button">
            <button type="button">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://goo.gl/maps/hXqhCPAdV3GPDZuK6"
              >
                Cómo llegar
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
