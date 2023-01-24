import React, { createContext, useState, useEffect } from "react";
import PlanetsContext from "./PlanetsContext";



interface DefaultPlanets {
  data: Object,
  planets: Array<string>,
  currPlanet: Object
}
const PlanetsData = createContext<DefaultPlanets>({
  data: {},
  planets: [],
  currPlanet: {}
});



// const storage = localStorage.getItem("items")
//   ? JSON.parse(localStorage.getItem("items"))
//   : [];

const PlanetProvider = ({ children }) => {
const [data, setData] = useState({})
const [planets, setPlanets] = useState("Mercury")
const [currPlanet, setCurrPlanet] = useState({})

// useEffect(() => {
//   fetch("../data.json")
//     .then((response) => response.json())
//     .then((json) => {
//       setData(json);
//       setPlanets(json.map(planet => planet.name));
//       setCurrPlanet(json[0])
//     });
// }, []);

  return (
    <PlanetsContext.Provider
      value={
        {data, setData, currPlanet, setCurrPlanet, planets, setPlanets}
      }
    >
      {children}
    </PlanetsContext.Provider>
  );
};

export default PlanetsContext;
