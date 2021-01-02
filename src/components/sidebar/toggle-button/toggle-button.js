import React from "react";

const ToggleButton = ({ toggleMenu, isOpen }) => {
   console.log(isOpen);

   return (
      <button
         className={`toggle-button ${isOpen ? "toggle-button--active" : null}`}
         onClick={() => {
            toggleMenu(!isOpen);
         }}
      >
         <span className="toggle-button-line"></span>
      </button>
   );
};

export default ToggleButton;
