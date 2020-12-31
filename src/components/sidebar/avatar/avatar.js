import React from "react";
import "./avatar.css";

function Avatar() {
   return (
      <>
         <div className="avatar">
            <img
               src="../../../avatar-primer.jpg"
               alt="user"
               width="900"
               height="900"
            />
         </div>
      </>
   );
}

export default Avatar;
