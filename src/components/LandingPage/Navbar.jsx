import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "./Menu";

import logo from "../../imeges/Logo.png";
import "./Navbar.css";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [navActive, setActive] = useState(false);
  if (navActive) {
    document.getElementById("body").style.overflow = "hidden";
  } else {
    document.getElementById("body").style.overflow = "";
  }

  const menu = ["features", "pricing", "business", "smart card"];

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="pocket" />

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
