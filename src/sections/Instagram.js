import React from "react";
import "../styles/Instagram.css";

const Instagram = () => {
  return (
    <div className="instagram-section">
      <div className="instagram-section-image">
        <img
          src={`https://drive.google.com/uc?export=view&id=1YnO08SvE8b7GFODyXPAyehslFudQop_9`}
        />
      </div>
      <div className="instagram-section-hashtag">
        <p>#JoacoYSofi</p>
      </div>
      <div className="instagram-section-phrase">
        <p>Compartí la experiencia usando el hashtag</p>
      </div>
      <button className="instagram-section-button" type="button">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/explore/tags/joacoysofi/?hl=es"
          className="instagram-link"
        >
          <p>Ver en Instagram</p>
        </a>
      </button>
    </div>
  );
};

export default Instagram;
