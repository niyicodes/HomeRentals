import React from "react";
import Logo from "/img/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Landingpage = () => {
 return (
  <LandingPage>
   <nav>
    <img src={Logo} alt="" />
    <ul className="nav-links">
     <li>
      <Link to="/" className="current">
       Home
      </Link>
     </li>
     <li>
      <Link to="/landlord">Landlord</Link>
     </li>
     <li>
      <Link to="/tenants">Tenants</Link>
     </li>
     <li>
      <Link to="/contact-us">Contact Us</Link>
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
    <div className="map"></div>
   </main>
  </LandingPage>
 );
};

const LandingPage = styled.main`
 background: url(./img/bg.jpg) center/cover no-repeat;
 height: 100vh;
 padding: 1rem 5rem;

 nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid;
  border-color: white;
  font-family: "DM Sans", sans-serif;
  font-size: 1.2rem;
  padding-bottom: 1rem;
  img {
   height: 40px;
  }
  .nav-links {
   display: flex;
   li {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;

    .current {
     border-bottom: 3px solid #F4511E;
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
      background: #F4511E;
      transition: width 0.3s;
     }
     &:hover::after{
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
 main{
   display: flex;
   flex-direction: row;
   height: 100vh;
   justify-content: center;
   align-items: center;
   /* margin: 2rem auto; */

   .text{
    h3{
     font-family: 'Inter', sans-serif;
     font-size: 3.5rem;
     width: 45%;
     color: white;
     text-transform: capitalize;
     line-height: 1.4;
    }
   }
  }
`;
export default Landingpage;
