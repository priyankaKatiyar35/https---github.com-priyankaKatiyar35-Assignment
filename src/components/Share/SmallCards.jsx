import React, { useState } from "react";

import qrCode from "../../imeges/qr-code.png";
import email from "../../imeges/email.png";
import copyLink from "../../imeges/copy-link.png";

import "./SmallCards.css";

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

const SmallCards = () => {
  const [active, setActive] = useState(0);

  const data = [
    { image: qrCode, text: "Code" },
    { image: email, text: "Email" },
    { image: copyLink, text: "Copy Link" },
  ];

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
