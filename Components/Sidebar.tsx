import React, { useState, useEffect, useContext } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Image from "next/image";
import chevron from "../public/assets/icon-chevron.svg";

function Sidebar() {
  return (
    <aside
      className="sidebar"
      // className={classnames("sidebar", {
      //   active: props.openSidebar,
      // })}
    >
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <div className="planet-container">
            <div className="planet-icon"></div>Mercury
          </div>
          <Image
            src={chevron}
            alt="chevron"
            width="10"
            height="10"
            className="chevron has-text-white"
          />
        </li>
        <li className="sidebar-item">
          <div className="planet-container">
            <div className="planet-icon"></div>Venus
          </div>
          <Image
            src={chevron}
            alt="chevron"
            width="10"
            height="10"
            className="chevron has-text-white"
          />
        </li>
        <li className="sidebar-item">
          <div className="planet-container">
            <div className="planet-icon"></div>Earth
          </div>
          <Image
            src={chevron}
            alt="chevron"
            width="10"
            height="10"
            className="chevron has-text-white"
          />
        </li>
        <li className="sidebar-item">
          <div className="planet-container">
            <div className="planet-icon"></div>Mars
          </div>
          <Image
            src={chevron}
            alt="chevron"
            width="10"
            height="10"
            className="chevron has-text-white"
          />
        </li>
        <li className="sidebar-item">
          <div className="planet-container">
            <div className="planet-icon"></div>Jupiter
          </div>
          <Image
            src={chevron}
            alt="chevron"
            width="10"
            height="10"
            className="chevron has-text-white"
          />
        </li>
        <li className="sidebar-item">
          <div className="planet-container">
            <div className="planet-icon"></div>Saturn
          </div>
          <Image
            src={chevron}
            alt="chevron"
            width="10"
            height="10"
            className="chevron has-text-white"
          />
        </li>
        <li className="sidebar-item">
          <div className="planet-container">
            <div className="planet-icon"></div>Uranus
          </div>
          <Image
            src={chevron}
            alt="chevron"
            width="10"
            height="10"
            className="chevron has-text-white"
          />
        </li>
        <li className="sidebar-item">
          <div className="planet-container">
            <div className="planet-icon"></div>Neptune
          </div>
          <Image
            src={chevron}
            alt="chevron"
            width="10"
            height="10"
            className="chevron has-text-white"
          />
        </li>
      </ul>
    </aside>
  );
}
Sidebar.propTypes = {
  openSidebar: PropTypes.bool,
};

export default Sidebar;
