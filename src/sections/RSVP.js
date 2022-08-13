import React, { useState } from "react";
import "../styles/RSVP.css";

const RSVP = () => {
  return (
    <div className="rsvp-container">
      <div className="rsvp">
        <h2 className="rsvp-title">Asistencia</h2>
        <p className="rsvp-info">Confirmar antes del 13 de agosto</p>
        <button type="button" className="rsvp-button">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBsJ9zCOEgW-dCjGXtaWwsoYTkPw1UZbe3Uay7L00ZkTFhiw/viewform"
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
