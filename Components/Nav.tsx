import React, { useState, useEffect } from "react";
import Image from "next/image";

type Props = {};

function Nav({}: Props) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [overlay, setOverlay] = useState(false);

  // for open and closing of sidebar with hamburger
  const handleOpenSidebar = (e: any) => {
    e.stopPropagation();
    setOpenSidebar(!openSidebar);
    setOverlay(!overlay);
  };

  const handleCloseSidebar = (e: any) => {
    e.stopPropagation();
    setOpenSidebar(false);
    setOverlay(false);
  };

  // loop over data.json planet names- each planet has an onClick that makes a fetch call to the json data.json for the relevant planet
  return (
    <nav className="container is-fullhd is-flex bulma-responsive is-justify-content-space-between is-align-items-center border py-4  nav-background">
      <div>
        <h1 className="navbar-brand is-align-self-center pl-3 pt-2 is-size-4 has-text-white is-uppercase logo">
          The Planets
        </h1>
      </div>
      <ul className="planet-list">
        <li className="mx-4 is-clickable">Mars</li>
        <li className="mx-4 is-clickable">Venus</li>
        <li className="mx-4 is-clickable ">Mercury</li>
        <li className="mx-4 is-clickable">Moon</li>
        <li className="mx-4 is-clickable">Earth</li>
      </ul>

      <a
        role="button"
        className="navbar-burger has-text-white"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </nav>
  );
}

export default Nav;
