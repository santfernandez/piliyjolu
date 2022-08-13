import React from "react";
import ReactDOM from "react-dom";
import "../styles/GiftModal.css";
import Letter from '../img/letter.webp'


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function GiftModal({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="gift-overlay-modal">
        <div className="gift-modal">
          <button className="gift-close-modal-button" onClick={onClose}>
            X
          </button>
          <div className="gift-modal-titles">
            <h1>¡Su presencia es nuestro mejor regalo!</h1>
            <h2>Pero si querés hacernos un detalle, podés hacerlo de la siguiente manera:</h2>
          </div>
          <Tabs> 
            <TabList>
              <Tab>Mercado Pago</Tab>
              <Tab>Banco Macro</Tab>
              <Tab>Efectivo</Tab>
            </TabList>
            <TabPanel>
                <div className="gift-modal-all-info">
                  <div className="gift-modal-info-container">
                    <p className="gift-modal-info">Mercado Pago</p>
                  </div>
                  <div className="gift-modal-info-container">
                    <p className="gift-modal-info">Nombre: José Sebastián Sosa Luna</p>
                  </div>
                  <div className="gift-modal-info-container">
                    <p className="gift-modal-info">Alias: tucson.travel.mp</p>
                  </div>
                  <div className="gift-modal-info-container">
                    <p className="gift-modal-info">CVU: 20300692878</p>
                  </div>
               </div>
              </TabPanel>
              <TabPanel>
              <div className="gift-modal-all-info">
                  <div className="gift-modal-info-container">
                    <p className="gift-modal-info">Banco Macro</p>
                  </div>
                  <div className="gift-modal-info-container">
                    <p className="gift-modal-info">Nombre: María Pilar Guindo</p>
                  </div>
                  <div className="gift-modal-info-container">
                    <p className="gift-modal-info">Caja de Ahorro en Pesos</p>
                  </div>
                  <div className="gift-modal-info-container">
                    <p className="gift-modal-info">CBU: 460000102169879</p>
                  </div>
               </div>
              </TabPanel>
              <TabPanel>
                <div className="gift-modal-all-info">
                    <div className="gift-modal-info-cash-container">
                      <p className="gift-modal-info-cash">El día de la boda encontrarás un buzón de regalos para colocar tu aporte.</p>
                    </div>
                    <img
                      className="gift-modal-cash-image"
                      src={Letter}
                    />
                </div>
              </TabPanel>
          </Tabs>
          <h2 className="gift-modal-greetings">¡Muchas gracias!</h2>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
