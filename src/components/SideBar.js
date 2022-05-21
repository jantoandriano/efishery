import React from "react";
import Logo from "../assets/images/logo.png";
import LogoFish from "../assets/images/logo-fish.png";
import SideBarLink from "./SideBarLink";

const SideBar = ({ isCollapsed }) => {
  return (
    <nav className={`sidebar ${isCollapsed ? "active" : ""}`}>
      <div className="sidebar-header">
        <img className={"logo-full"} src={Logo} alt="Logo Efishery" />
        <img className={"logo-fish"} src={LogoFish} alt="Logo Efishery" />
      </div>
      <ul className="list-unstyled components">
        <SideBarLink to="/">Data Perikanan</SideBarLink>
        <SideBarLink to="/about">Tentang Kami</SideBarLink>
      </ul>
    </nav>
  );
};

export default SideBar;
