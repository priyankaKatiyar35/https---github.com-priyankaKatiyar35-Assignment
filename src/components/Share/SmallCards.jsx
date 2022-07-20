import React, { useState } from "react";

// Icons
import qrCode from "../../assets/qr-code.png";
import email from "../../assets/email.png";
import copyLink from "../../assets/copy-link.png";

// Importing external css
import "./SmallCards.css";

// Representing each single card
const Card = ({ element, isActive, setActive, index }) => {
  const { image, text } = element;
  return (
    <div
      className={`smallCard ${isActive ? "active" : ""}`}
      onClick={() => setActive(index)}
    >
      <img src={image} alt={text} />
      <p>{text}</p>
    </div>
  );
};

// Representing all Small cards
const SmallCards = () => {
  const [active, setActive] = useState(0);

  // Data for Smallcards
  const data = [
    { image: qrCode, text: "Code" },
    { image: email, text: "Email" },
    { image: copyLink, text: "Copy Link" },
  ];

  // To change selection of card
  const changeActive = (index) => {
    setActive(index);
  };

  return (
    <div className="smallCards">
      <div className="smallCardContainer">
        {data.map((dataItem, index) => (
          <Card
            element={dataItem}
            isActive={index === active ? true : false}
            key={dataItem.text}
            setActive={changeActive}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SmallCards;
