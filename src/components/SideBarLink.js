import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarLink = (props) => {
  const location = useLocation();
  let isActive = location.pathname === props.to ? "active" : "";
  return (
    <li className={`${isActive}`}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
};

export default SideBarLink;
