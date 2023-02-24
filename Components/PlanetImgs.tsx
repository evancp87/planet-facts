import React, { useState, useEffect } from "react";
import Image from "next/image";
import mercury from "../public/assets/planet-mercury.svg";
import geology from "../public/assets/geology-mercury.png";
import internal from "../public/assets/planet-mercury-internal.svg";

type Props = {};

function PlanetImgs({}: Props) {
  return (
    <div className="mt-3 flex-prop planet-img is-relative">
      <Image
        src={mercury}
        alt="#"
        width="200"
        height="200"
        // className="is-relative"
      />

      <div className="mt-3 flex-prop geology-img is-absolute">
        <Image
          src={geology}
          alt="#"
          width="200"
          height="200"
          // className="is-absolute"
        />
      </div>

      {/* <Image src={mercury} alt="#" width="200" height="200" /> */}
    </div>
    // <div className="mt-3 flex-prop planet-img is-relative">
    //   <Image
    //     src={internal}
    //     alt="#"
    //     width="200"
    //     height="200"
    //     // className="is-relative"
    //   />
    // </div>
  );
}

export default PlanetImgs;
