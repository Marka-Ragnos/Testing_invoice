import React, { useState } from "react";
import ToggleButton from "./toggle-button/toggle-button";
import SidebarContent from "./sidebar-content/sidebar-content";

const Sidebar = () => {
   const [isOpen, toggleMenu] = useState(false);

   return (
      <div className="sidebar">
         <ToggleButton toggleMenu={toggleMenu} isOpen={isOpen} />
         <SidebarContent isOpen={isOpen} />
      </div>
   );
};

export default Sidebar;
