import React, { useState } from "react";
import Logo from "/img/homerentals.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
 const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);
 const transition = { type: "spring", duration: 3 };
 return (
  <header>
   <nav className="navbar">
    <Link to="/" className="navbar-logo">
     <img src={Logo} alt="" />
    </Link>
    <div className="menu-icon" onClick={handleClick}>
     <i className={click ? "fas fa-times" : "fas fa-bars"} />
    </div>
    <ul className={click ? "nav-menu active" : "nav-menu"}>
     <li className="nav-item">
      <Link to="/" className="nav-links" onClick={closeMobileMenu}>
       Home
      </Link>
     </li>
     <li className="nav-item">
      <Link to="/" className="nav-links" onClick={closeMobileMenu}>
       Landlord
      </Link>
     </li>
     <li className="nav-item">
      <Link to="/" className="nav-links" onClick={closeMobileMenu}>
       Tenants
      </Link>
     </li>
     <li className="nav-item">
      <Link to="/" className="nav-links" onClick={closeMobileMenu}>
       Contact Us
      </Link>
     </li>
     <div className="btn">
      <Button name="Join Us" />
     </div>
    </ul>
   </nav>
  </header>
 );
};

export default Navbar;
