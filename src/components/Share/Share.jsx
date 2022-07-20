import { Link } from "react-router-dom";

// Icons
import { BiArrowBack } from "react-icons/bi";
import { useEffect } from "react";

// Importing Components
import Cards from "./Cards";
import SmallCards from "./SmallCards";

// Assets
import Logo from "../../assets/Logo.png";
import "./Share.css";

const Share = () => {
  // To make body scrollable, when component loads
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
