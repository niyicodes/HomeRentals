import React, { useState } from "react";
import Logo from "/img/homerentals.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button/Button";


const Landingpage = () => {
 const [click, setClick] = useState(false);

 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);
 return (
  <LandingPage>
   <nav>
    <Link to="/">
     <img src={Logo} alt="" />
    </Link>
    <div className="menu-icon" onClick={handleClick}>
     <i className={click ? "fas fa-times" : "fas fa-bars"} />
    </div>
    <ul className="nav-links">
     <li>
      <Link to="/" className="current" onClick={closeMobileMenu}>
       Home
      </Link>
     </li>
     <li>
      <Link to="/landlord" onClick={closeMobileMenu}>
       Landlord
      </Link>
     </li>
     <li>
      <Link to="/tenants" onClick={closeMobileMenu}>
       Tenants
      </Link>
     </li>
     <li>
      <Link to="/contact-us" onClick={closeMobileMenu}>
       Contact Us
      </Link>
     </li>
    </ul>
    <ul>
     <Button name="Join Us" />
    </ul>
   </nav>
   <main>
    <div className="text">
     <h3>The most affortable place to stay in the san franciso bay area</h3>
    </div>
    <div className="map">
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1982.285449589194!2d3.3890841080126894!3d6.449096348833601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1673442480603!5m2!1sen!2sng"
      width="400"
      height="350"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
     ></iframe>
    </div>
   </main>
  </LandingPage>
 );
};

const LandingPage = styled.section`
 background: url(./img/bg.jpg) center/cover no-repeat;
 height: 100vh;
 padding: 1rem 5rem;

 nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2.5px solid;
  border-color: white;
  font-family: "DM Sans", sans-serif;
  font-size: 1.2rem;
  padding-bottom: 1rem;

  .menu-icon {
   display: none;
  }

  img {
   width: 120px;
  }
  .nav-links {
   display: flex;
   background-color: transparent;
   li {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;

    .current {
     border-bottom: 3px solid #f4511e;
     /* padding-bottom: 1rem; */
    }

    a {
     text-decoration: none;
     color: white;
     font-size: 1.3rem;

     &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: #f4511e;
      transition: width .7s;
     }
     &:hover::after {
      width: 100%;
     }
    }
   }
  }
  button {
   font-size: 1.2rem;
   padding: 0.3rem 0.8rem;
   outline: none;
   border: none;
   border-radius: 5px;
   cursor: pointer;
  }
 }
 main {
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  .text {
   width: 50%;
   h3 {
    font-family: "Inter", sans-serif;
    font-size: 3.7rem;
    width: 100%;
    color: white;
    text-transform: capitalize;
    line-height: 1.5;
   }
  }
 }
`;
export default Landingpage;
