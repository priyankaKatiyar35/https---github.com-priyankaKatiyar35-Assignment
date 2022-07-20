import React from "react";
import { Link } from "react-router-dom";

// Assets
import Logo from "../../assets/Logo.png";
import "./CreateCard.css";

// Components
import Right from "./Right";
import Left from "./Left";

// Icons
import { BiArrowBack } from "react-icons/bi";

const CreateCard = () => {
  return (
    <div className="craeteCardPage">
      <div className="logoContainer">
        <img src={Logo} alt="pocket logo" className="logo" />
      </div>
      <Link to="/share" className="backButton">
        <BiArrowBack className="backArrow" /> BACK
      </Link>

      {/* ----- Both Sides ----- */}
      <div className="sides">
        <Left />
        <div className="line"></div>
        <Right />
      </div>
    </div>
  );
};

export default CreateCard;
