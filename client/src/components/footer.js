import React from 'react';
import './Footer.css';
import logoBower from '../assets/logoSVG.svg'

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2024 - Um produto Bowerbird</p>
      <p>contato@bowerbird.com.br</p>
      <img className="logo-bower" src={logoBower} alt="logo-bower" />
    </div>
  );
};

export default Footer;