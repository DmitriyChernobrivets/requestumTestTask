import React, { useState, useEffect } from 'react';
import logo from '../../assets/rsz_1unnamed.png';

const Header = () => {
   return (
      <header className="header">
         <div className="logo">
            <div className="logo-image-wrapper">
               <img alt="requestum-logo" src={logo} />
            </div>
            <div className="logo-title">
               <p className="company-name">requestum</p>
               <p className="company-description">web development company</p>
            </div>
         </div>
         <div className="app-name">Github users search app</div>
      </header>
   );
};

export default Header;
