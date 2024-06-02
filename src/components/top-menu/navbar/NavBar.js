import React from "react";
import "../TopMenu.css";
import { Link } from "react-router-dom";
export const NavBar = (props) => {
  var navItem;
  if (props.item.type === "link") {
    // navItem = <li data-testid="nav-element"> <a href="./" className="nav-link"  >{props.item.title}</a></li>;
    navItem = (
      <li data-testid="nav-element">
        <Link className="nav-link" to={props.item.path}>
          {props.item.title}
        </Link>
      </li>
    );
  } else {
    navItem = (
      <li data-testid="nav-element">
        {/* <a href="./" className="nav-link login-btn"> */}
        <Link className="nav-link login-btn" to={props.item.path}>

          {props.item.title}
          </Link>

        {/* </a> */}
        {/* <Link className="nav-link login-btn" to={props.item.path}>
          {props.item.title}
        </Link> */}
      </li>
    );
  }
  return <>{navItem}</>;
};
