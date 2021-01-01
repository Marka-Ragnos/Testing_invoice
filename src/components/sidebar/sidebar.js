import React from "react";
import "./sidebar.css";
import Avatar from "./avatar/avatar";
import Navigation from "./navigation/navigation";
import Copyright from "./copyright/copyright";
import ToggleButtonExample from "./toggle-button/toggle-button";

function Sidebar() {
   return (
      <>
			<div className="sidebar py-3">
				<ToggleButtonExample />
            <Avatar />
            <Navigation />
            <Copyright />
         </div>
      </>
   );
}

export default Sidebar;
