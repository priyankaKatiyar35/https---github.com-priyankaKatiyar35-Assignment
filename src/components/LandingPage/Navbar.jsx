import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importing Components
import Menu from "./Menu";

// assets
import logo from "../../assets/Logo.png";
import "./Navbar.css";

// Icons
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [navActive, setActive] = useState(false); // For keep track of navigation

  // If navigation menu is open while in mobile view then making body non scrollable
  if (navActive) {
    document.getElementById("body").style.overflow = "hidden";
  } else {
    document.getElementById("body").style.overflow = "";
  }

  // Navigation Items
  const menu = ["features", "pricing", "business", "smart card"];

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="pocket" />

      {/* Hamburger Menu */}
      {!navActive && (
        <HiMenuAlt3 className="menuIcon" onClick={() => setActive(true)} />
      )}
      <div className={`menu ${navActive ? "active" : ""}`}>
        {navActive && (
          <IoCloseSharp
            className="closeIcon"
            onClick={() => setActive(false)}
          />
        )}
        {/* Navigation bar */}
        {menu.map((menuItem) => (
          <Menu key={menuItem} item={menuItem} />
        ))}
        <Link to="/share" className="create-a-card-button">
          create a card
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
