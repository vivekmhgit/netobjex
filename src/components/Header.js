import React from "react";
import logo1 from "../assets/image 9.png";
import logo2 from "../assets/Ellipse 14.png";

const Header = () => {
  return (
    <div className='header'>
      <div className='right-logo-area'>
        <img className='right-logo' src={logo2} alt='logo2' />
        <div className='right-logo-text'>dignity health</div>
      </div>
      <img className='left-logo' src={logo1} alt='logo1' />
      <div className='header-title'>
        <div className='main-title'>healthCare provider documents</div>
        <div className='sub-title'>
          documents shared by healthcare providers
        </div>
      </div>
    </div>
  );
};

export default Header;
