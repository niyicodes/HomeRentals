import React from "react";
import styled from "styled-components";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import {
 BsFillPrinterFill,
 BsFacebook,
 BsTwitter,
 BsInstagram,
 BsYoutube,
 BsGoogle,
 BsPinterest,
} from "react-icons/bs";
const Footer = () => {
 return (
  <FooterComponent>
   <div className="top">
    <div className="topleft">
     <img src="/img/homerentals.png" alt="" />
    </div>
    <div className="topright">
     <div className="contact">
      <div className="div">
      <p>
       <span className="icons">
        <CiLocationOn />
       </span>
       345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
      </p>
      </div>
      <div className="div div-2">
      <p>
       <span className="icons">
        <CiPhone />
       </span>
       (234) 456-7890
      </p>
      <p>
       <span className="icons">
        <BsFillPrinterFill />
       </span>
       (234) 456-7890
      </p>
      </div>
     </div>
     <div className="socials">
      <p>Social media</p>
      <div className="social">
       <ul>
        <li><BsFacebook className="icons"/></li>
        <li><BsTwitter className="icons"/></li>
        <li><BsFacebook className="icons"/></li>
        <li><BsYoutube className="icons"/></li>
        <li><BsInstagram className="icons"/></li>
        <li><BsGoogle className="icons"/></li>
        <li><BsPinterest className="icons"/></li>
       </ul>
      </div>
     </div>
    </div>
   </div>
   <div className="bottom">
    <div className="bottomleft">
     <nav>
      <ul>
       <li>
        <a href="#">ABOUT US</a>
       </li>
       <li>
        <a href="#">CONTACT US</a>
       </li>
       <li>
        <a href="#">HELP</a>
       </li>
       <li>
        <a href="#">PRIVACY POLICY</a>
       </li>
       <li>
        <a href="#">DISCLAIMER</a>
       </li>
      </ul>
     </nav>
    </div>
    <div className="bottomright">
     <p>
      Copyright © 2022 <a href="http://">niyicodes</a>. All rights reserved
     </p>
    </div>
   </div>
  </FooterComponent>
 );
};

const FooterComponent = styled.footer`
 margin-top: 3rem;
 padding: 3rem 5rem;
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 2rem;
 width: 90%;

 .icons{
  color: #F4511E;
 }

 li{
  list-style: none;
 }

 a{
  text-decoration: none;
 }
 ul{
  display: flex;
 }
 .top{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  border-top: 2px solid #F4511E;

  .div{
   padding-bottom: 1rem;

   span{
    padding-right: .3rem;
    align-items: center;
   }
  }
  .div-2{
   display: flex;
   justify-content: space-between;
  }

  .socials{
   display: flex;
   margin-top: 1rem;
   gap: 2rem;
   .social ul li{
    display: flex;
    padding-right: 1rem;
   }
  }
 }
 .bottom{
  display: flex;
  justify-content: space-between;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  border-top: 1px solid #7BB9FC;
  padding-top: 2rem;
  ul li a{
   padding-right: 1rem;
   color: black;
  }
 }
`;
export default Footer;
