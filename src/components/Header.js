import React from "react";
import IconBars from "../assets/images/icon-bars.png";

const Header = ({ onCollapsed }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <button
          type="button"
          className="btn btn-collapse"
          onClick={onCollapsed}
        >
          <img className={"logo-full"} src={IconBars} alt="Logo Efishery" />
        </button>
        <h3 className="navbar-title">dashboard</h3>
      </div>
    </nav>
  );
};

export default Header;
