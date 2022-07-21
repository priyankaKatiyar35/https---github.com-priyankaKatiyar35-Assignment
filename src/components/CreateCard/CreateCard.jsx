import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../imeges/Logo.png";
import "./CreateCard.css";

import Right from "./Right";
import Left from "./Left";

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

      <div className="sides">
        <Left />
        <div className="line"></div>
        <Right />
      </div>
    </div>
  );
};

export default CreateCard;
