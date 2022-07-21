import { Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";
import { useEffect } from "react";

import Cards from "./Cards";
import SmallCards from "./SmallCards";

import Logo from "../../imeges/Logo.png";
import "./Share.css";

const Share = () => {
  useEffect(() => {
    document.getElementById("body").style.overflow = "";
  }, []);

  return (
    <div className="sharePage">
      <div className="logoContainer">
        <img src={Logo} alt="pocket logo" className="logo" />
      </div>
      <Link to="/" className="backButton">
        <BiArrowBack className="backArrow" /> BACK
      </Link>
      <Cards />
      <SmallCards />
    </div>
  );
};

export default Share;
