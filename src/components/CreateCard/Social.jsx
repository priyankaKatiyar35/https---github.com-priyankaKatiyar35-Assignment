import React from "react";

const Social = ({ element }) => {
  let { logo, name } = element;
  return (
    <div className="socialBox">
      <div className="socialLogoContainer">{logo ? logo : ""}</div>
      <p className="socialName">{name}</p>
    </div>
  );
};

export default Social;
