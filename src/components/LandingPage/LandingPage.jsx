import React from "react";

import Navbar from "./Navbar";
import Slider from "./Slider";
import IPhoneSection from "./IPhoneSection";

import "./LandingPage.css";
import UpperRight from "../../imeges/UpperRight.png";

const LandingPage = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Navbar />
      <img
        cka
        src={UpperRight}
        className="UpperRight"
        alt="Upper Right Circle"
      />
      <Slider />
      <IPhoneSection />
    </div>
  );
};

export default LandingPage;
