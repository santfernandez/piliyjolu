import React, { useState } from "react";
import "../styles/PartyInfo.css";
import DressCodeModal from "../components/DressCodeModal";
import GiftModal from "../components/GiftModal";
import Dresscode from '../img/dresscode.webp'
import Gift from '../img/gift.webp'

const PartyInfo = () => {
  const [dresscodeIsOpen, setDresscodeIsOpen] = useState(false);
  const [musicIsOpen, setMusicIsOpen] = useState(false);
  const [giftIsOpen, setGiftIsOpen] = useState(false);
  return (
    <div className="party-info">
      <div className="party-info-a">
        <h1 className="party-info-title">¡Hora de la fiesta!</h1>
      </div>
      <div className="party-info-b">
        <div className="party-info-row-a">
          <div className="party-dresscode">
            <div className="party-info-image">
              <img
                src={Dresscode}
              />
            </div>
            <h2 className="party-info-subtitle">Dress Code</h2>
            <button
              type="button"
              className="party-info-button"
              onClick={() => setDresscodeIsOpen(true)}
            >
              ¿Qué me pongo?
            </button>
            <DressCodeModal
              open={dresscodeIsOpen}
              onClose={() => setDresscodeIsOpen(false)}
            >
              <img></img>
              <h2>Elegante</h2>
            </DressCodeModal>
          </div>
          <div className="party-gifts">
            <div className="party-info-image">
              <img
                src={Gift}
              />
            </div>
            <h2 className="party-info-subtitle">Regalos</h2>
            <button
              type="button"
              className="party-info-button"
              onClick={() => setGiftIsOpen(true)}
            >
              Más info
            </button>
            <GiftModal
              open={giftIsOpen}
              onClose={() => setGiftIsOpen(false)}
            ></GiftModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyInfo;
