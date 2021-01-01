import React, { useState } from "react";
import "./toggle-button.css";

function ToggleButtonExample() {
   const [selected, setSelected] = useState(false);

   return (
      <>
         <button
            className={
               selected ? `toggle-button toggle-button--active` : `toggle-button`
            }
            onClick={() => {
               setSelected(!selected);
            }}
         >
            <span className="toggle-button-line"></span>
         </button>
      </>
   );
}

export default ToggleButtonExample;
