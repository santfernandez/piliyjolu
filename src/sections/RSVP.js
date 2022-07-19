import React, { useState } from "react";
import "../styles/RSVP.css";

const RSVP = () => {
  return (
    <div className="rsvp-container">
      <div className="rsvp">
        <h2 className="rsvp-title">Asistencia</h2>
        <p className="rsvp-info">Confirmar antes del 30 julio</p>
        <button type="button" className="rsvp-button">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLScCKG7CQCAkjVcTWvj0w_xnPICWaQZKLGdgM26OSJwOGzXx8A/viewform"
            className="rsvp-link"
          >
            Confirmar
          </a>
        </button>
      </div>
    </div>
  );
};

export default RSVP;
