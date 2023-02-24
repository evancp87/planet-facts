import React from "react";
import source from "../public/assets/icon-source.svg";
import Image from "next/image";
type Props = {};

function PlanetData({}: Props) {
  return (
    <div className="planet-text has-text-white">
      <h1 className="mt-4 is-uppercase heading-one-font">Neptune</h1>

      <p className=" mt-2 body-size">
        Neptune is the eighth and farthest-known Solar planet from the Sun. In
        the Solar System, it is the fourth-largest planet by diameter, the
        third-most-massive planet, and the densest giant planet. It is 17 times
        the mass of Earth, more massive than its near-twin Uranus.
      </p>
      <cite className="my-2 is-flex is-justify-content-center source">
        <span className="source-heading">Source:</span> <p>Wikipedia</p>
        <Image
          src={source}
          alt="chevron"
          width="20"
          height="20"
          className="ml-3 "
        />
        {/* </span> */}
      </cite>
    </div>
  );
}

export default PlanetData;
