import React from "react";
import "./sidebar.css";
import Avatar from "./avatar/avatar";
import Navigation from "./navigation/navigation";
import Copyright from "./copyright/copyright";

function Sidebar() {
   return (
      <>
         <div className="sidebar">
            <Avatar />
            <Navigation />
            <Copyright />
         </div>
      </>
   );
}

export default Sidebar;
