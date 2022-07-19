import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./sections/Home";
import Countdown from "./sections/Countdown";
import VenueInfo from "./sections/VenueInfo";
import RSVP from "./sections/RSVP";
import PartyInfo from "./sections/PartyInfo";
import Instagram from "./sections/Instagram";
import Greetings from "./sections/Greetings";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Countdown />
      <VenueInfo />
      <RSVP />
      <PartyInfo />
      <Instagram />
      <Greetings />
      <Footer />
    </div>
  );
}

export default App;
