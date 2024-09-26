import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <header>
      <div className="header_top">
        <div className="header_top_left">
          <ul className="top_nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contact</Link></li>
          </ul>
        </div>
        <div className="header_top_right">
          <p>Friday, December 05, 2045</p>
        </div>
      </div>
      <div className="header_bottom">
        <div className="logo_area">
          <Link to="/" className="logo"><img src={`${process.env.PUBLIC_URL}/assets/images/logo.jpg`} alt="logo" /></Link>
        </div>
        <div className="add_banner">
          <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/addbanner_728x90_V1.jpg`} alt="Banner" /></a>
        </div>
      </div>
    </header>
  );
};

export default Head;
