import React from "react";
import logo from "../assets/image 9.png";

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='logo' />
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
