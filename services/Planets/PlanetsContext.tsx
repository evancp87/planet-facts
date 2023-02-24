import React, {
  createContext,
  Dispatch,
  useState,
  useEffect,
  SetStateAction,
} from "react";

interface DefaultPlanets {
  data: Object;
  setData: Dispatch<SetStateAction<object | undefined>>;
  planets: Object;
  setPlanets: Dispatch<SetStateAction<object | undefined>>;
  currPlanet: string;
  setCurrPlanet: string;
}
const PlanetsContext = createContext<DefaultPlanets>({
  data: {},
  setData: () => {},
  planets: {},
  setPlanets: () => {},
  currPlanet: "",
  setCurrPlanet: "Mercury",
});

// colors of planets

// const storage = localStorage.getItem("items")
//   ? JSON.parse(localStorage.getItem("items"))
//   : [];

const PlanetState = ({ children }: any) => {
  const [data, setData] = useState({});
  const [planets, setPlanets] = useState({});
  const [currPlanet, setCurrPlanet] = useState("Mercury");

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
      value={{ data, setData, currPlanet, setCurrPlanet, planets, setPlanets }}
    >
      {children}
    </PlanetsContext.Provider>
  );
};

export default PlanetState;
