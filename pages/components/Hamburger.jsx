import React from 'react';

const Hamburger = ({handleHamburger, isOpen}) => {
  return (
    <div id="nav-icon1" className={`z-50 lg:order-2 order-3 ${isOpen ? 'open' : ""}`} onClick={handleHamburger}>
      <span></span>
      <span className="middle-span "></span>
      <span className="last-span "></span>
    </div>
  )
}

export default Hamburger;
