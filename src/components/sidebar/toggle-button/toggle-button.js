import React from "react";

const ToggleButton = ({ toggleMenu, isOpen }) => {

   return (
      <button
         className={`toggle-button ${isOpen ? "toggle-button--active" : ""}`}
         onClick={() => {
            toggleMenu(!isOpen);
         }}
      >
         <span className="toggle-button-line"></span>
      </button>
   );
};

export default ToggleButton;
