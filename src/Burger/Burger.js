import React from 'react';
import './Burger.css';

function Burger({ isOpen, onClick }) {
  return (
    <div className="root" onClick={onClick}>
      <svg className={`${!isOpen ? 'closeHide' : 'close'}`} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 52 51.8">
        <path d="M7.7,7.8L26,26.1" />
        <path d="M7.5,44.5l17-17"/>
        <path d="M44.4,44.5L26,26.1"/>
        <path d="M44.4,7.7L30.2,21.9"/>
      </svg>
    </div>
  );
}

export default Burger;
