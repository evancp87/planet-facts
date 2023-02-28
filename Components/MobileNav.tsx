import React, { useState, useEffect, useContext } from "react";

type Props = {};

function MobileNav({}: Props) {
  return (
    <div className="mobile-nav">
      <div className="is-flex is-flex-direction-row is-flex is-align-items-center  is-justify-content-space-between py-4 mx-3 is-fullwidth">
        <button className="is-clickable no-border tab-btns  mx-2 is-uppercase">
          Overview
        </button>
        <button className="is-clickable no-border mx-2 tab-btns  is-uppercase">
          Structure
        </button>
        <button className="is-clickable no-border  mx-2 tab-btns is-uppercase">
          Geology
        </button>
      </div>
    </div>
  );
}

export default MobileNav;
