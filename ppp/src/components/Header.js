
import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Header">
      <span className="head-logo">Penny Pincher Pro</span>
      <div className={`head-items ${isOpen && "open"}`}>
        <a href="/overview">overview</a>
        <a href="/about">Income</a>
        <a href="/service">Account</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`head-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;