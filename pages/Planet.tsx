import React, { useState, useEffect } from "react";
import PlanetData from "../Components/PlanetData";
import PlanetImgs from "../Components/PlanetImgs";
import FooterData from "../Components/FooterData";
import Sidebar from "../Components/Sidebar";
type Props = {};

function Planet({}: Props) {
  // onLoad loads default state- mercury as the default planet & the overview as the default data

  // data should live here and be passed to planetImgs, PlanetData and FooterData components as props
  return (
    <>
      <main className="grid">
        <PlanetImgs />
        <Sidebar />
        <div className="planet-text-container mobile-widths-planet-data">
          <PlanetData />
          <div className="  is-fullwidth desktop-options">
            <button className="is-clickable no-bg mx-2 mt-2   border-full ">
              01 <span className="tab-value">Overview</span>{" "}
            </button>
            <button className="is-clickable no-bg mx-2 mt-2  border-full">
              02 <span className="tab-value">Structure</span>
            </button>
            <button className="is-clickable no-bg mx-2 mt-2  border-full">
              03 <span className="tab-value">Geology</span>{" "}
            </button>
          </div>
        </div>

        {/* each has onClick function to fetch selected data */}
      </main>
      <FooterData />
    </>
  );
}

export default Planet;
