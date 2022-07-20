// Assets
import card0 from "../../assets/card-0.png";
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import qrCode from "../../assets/qr-code.png";

import "./Cards.css";

// Icons
import { MdEdit } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

// Simple card component
const Cards = () => {
  return (
    <div className="cards">
      {/* -------------- Card 1 -------------- */}
      <div className="card">
        <div className="title">Your Cards</div>
        <div className="cardContainer">
          <img src={card0} alt="Card 0" />
          <div className="fieldContainer">
            <div className="field nameAddress">
              <div>
                <p>Full Name</p>
                <p>Email Address</p>
              </div>
              <MdEdit />
            </div>
            <Link to="/create-card" className="field createNewCard">
              <BsPlusCircle className="circlePlus" />{" "}
              <span> Create A New Card</span>
            </Link>
          </div>
        </div>
      </div>
      {/* -------------- Card 2 -------------- */}
      <div className="card">
        <div className="title">Share your card</div>
        <div className="cardContainer">
          <img src={card1} alt="Card 1" />
          <div className="fieldContainer">
            <img src={qrCode} alt="Qr code" className="qrCode" />
            <p className="smallText">Scan or Click to Preview</p>
          </div>
        </div>
      </div>
      {/* -------------- Card 3 -------------- */}
      <div className="card">
        <div className="title">Your Cards</div>
        <div className="cardContainer">
          <img src={card2} alt="Card 2" />
          <div className="fieldContainer">
            <div className="smallText">
              Upgrade your plan to unlock more exciting features
            </div>
            <div className="upgradeBtn">UPGRADE PLAN</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
