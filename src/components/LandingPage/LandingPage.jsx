import React from "react";

// Importing components
import Navbar from "./Navbar";
import Slider from "./Slider";
import IPhoneSection from "./IPhoneSection";

// Importing assets
import "./LandingPage.css";
import UpperRight from "../../assets/UpperRight.png";

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
