import React from "react";

const Header = ({ onCollapsed }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <button
          type="button"
          className="btn btn-collapse"
          onClick={onCollapsed}
        >
          <i className="fas fa-bars"></i>
        </button>
        <h3 className="navbar-title">dashboard</h3>
      </div>
    </nav>
  );
};

export default Header;
