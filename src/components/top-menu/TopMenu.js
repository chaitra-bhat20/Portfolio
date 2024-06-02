/* eslint-disable no-lone-blocks */
import React from "react";
import "./TopMenu.css";
import { NavBar } from "./navbar/NavBar";
import { Link } from "react-router-dom";

export const TopMenu = () => {
  const menudata = [
    {
      type: "link",
      title: "Home",
    },
    {
      type: "link",
      title: "About",
      path: "/about",
    },
    {
      type: "link",
      title: "Projects",
      path: "/projects",
    },
    {
      type: "link",
      title: "Skills",
      path: "/skills",
    },

    {
      type: "link",
      title: "Contact",
      path: "/contact",
    },
    {
      type: "button",
      title: "Resume >",
      path: "/resume",
    },
  ];

  return (
    <>
      <div className="banner">
        <div data-testid="navbar" className="navbar">
          <img
            src="./assets/logo.svg"
            className="logo desktop-menu"
            alt="logo"
          />

          <ul className="desktop-menu">
            {menudata.map((item, index) => (
              <NavBar key={index} item={item} index={index} />
            ))}
          </ul>
        </div>
        <nav
          className="navbar navbar-expand-md bg-light navbar-light mobile-menu"
          style={{ backgroundColor: "#212529" }}
        >
          <img src="../../assets/logo.svg" alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
            style={{ padding: 2, border: "none", outline: "none" }}
          >
            <span className="navbar-toggler-icon">
              <img src="./assets/hamburger.svg" alt="humberger" />
            </span>
            <span className="my-1 mx-2 close" style={{ color: "#212529" }}>
              <img src="./assets/hamburger-close.svg" alt="humbergerclse" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              {menudata.map((item, index) => (
                <NavBar key={index} item={item} index={index} />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
