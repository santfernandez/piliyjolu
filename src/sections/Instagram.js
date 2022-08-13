import React from "react";
import "../styles/Instagram.css";
import InstagramLogo from '../img/instagram-logo.webp'

const Instagram = () => {
  return (
    <div className="instagram-section">
      <div className="instagram-section-image">
        <img
          src={InstagramLogo}
        />
      </div>
      <div className="instagram-section-hashtag">
        <p>#PiliyJolu</p>
      </div>
      <div className="instagram-section-phrase">
        <p>Compartí la experiencia usando el hashtag</p>
      </div>
      <button className="instagram-section-button" type="button">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/explore/tags/piliyjolu/?hl=es"
          className="instagram-link"
        >
          <p>Ver en Instagram</p>
        </a>
      </button>
    </div>
  );
};

export default Instagram;
