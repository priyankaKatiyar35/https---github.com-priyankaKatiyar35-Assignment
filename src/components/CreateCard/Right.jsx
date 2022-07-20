import React from "react";
import "./Right.css";

// Importing Required Icons
import {
  FaDiscord,
  FaLinkedin,
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagram,
  FaSnapchatSquare,
  FaYoutube,
  FaPaypal,
  FaGithubSquare,
} from "react-icons/fa";

// Importing Component
import Social from "./Social";

// Representing Right side of Create Card page
const Right = () => {
  // Data for each social card
  const socials = [
    { id: 1, logo: <FaDiscord className="socialLogo" />, name: "Discord" },
    { id: 2, logo: <FaLinkedin className="socialLogo" />, name: "LinkedIn" },
    {
      id: 3,
      logo: <FaWhatsappSquare className="socialLogo" />,
      name: "Whatsapp",
    },
    {
      id: 4,
      logo: <FaFacebookSquare className="socialLogo" />,
      name: "Facebook",
    },
    { id: 5, logo: <FaInstagram className="socialLogo" />, name: "Instagram" },
    {
      id: 6,
      logo: <FaSnapchatSquare className="socialLogo" />,
      name: "Snapchat",
    },
    { id: 7, logo: <FaYoutube className="socialLogo" />, name: "YouTube" },
    { id: 8, logo: <FaPaypal className="socialLogo" />, name: "Paypal" },
    { id: 9, logo: <FaGithubSquare className="socialLogo" />, name: "Github" },
    { id: 10, name: "Simple" },
    { id: 11, name: "Simple" },
    { id: 12, name: "Simple" },
    { id: 13, name: "Simple" },
    { id: 14, name: "Simple" },
    { id: 15, name: "Simple" },
    { id: 16, name: "Simple" },
    { id: 17, name: "Simple" },
    { id: 18, name: "Simple" },
    { id: 19, name: "Simple" },
    { id: 20, name: "Simple" },
    { id: 21, name: "Simple" },
  ];

  return (
    <div className="right">
      <p className="rightTitle">ADD ADDITIONAL INFORMATION</p>
      <div className="socialsContainer">
        {socials.map((social) => (
          <Social element={social} key={social.id} />
        ))}
      </div>
    </div>
  );
};

export default Right;
