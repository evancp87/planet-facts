import React, {
  createContext,
  Dispatch,
  useState,
  useEffect,
  SetStateAction,
} from "react";

import data from "../../data.json";

interface DefaultPlanets {
  data: object;
  setData: Dispatch<SetStateAction<object>>;
  planets: object;
  setPlanets: Dispatch<SetStateAction<object[]>>;
  currPlanet: string;
  setCurrPlanet: Dispatch<SetStateAction<string>>;
  colors: { [key: string]: string }; // <-- add this
  setPlanetData: () => void;
}
const PlanetsContext = createContext<DefaultPlanets>({
  data: {},
  setData: () => {},
  planets: data,
  setPlanets: () => {},
  currPlanet: "Mercury",
  setCurrPlanet: () => {},
  colors: {},
  setPlanetData: () => {},
});

// colors of planets

const PlanetState = ({ children }: any) => {
  const [data, setData] = useState({});
  const [planets, setPlanets] = useState<object[]>([]);
  const [currPlanet, setCurrPlanet] = useState("Mercury");

  const colors = {
    Mercury: "#DEF4FC",
    Venus: "#F7CC7F",
    Earth: "#545BFE",
    Mars: "#FF6A45",
    Jupiter: "#ECAD7A",
    Uranus: "#65F0D5",
    Saturn: "#FCCB6B",
    Neptune: "#497EFA",
  };

  function setPlanetData(): void {
    fetch("../../data.json")
      .then((response) => response.json())
      .then((planets) =>
        setPlanets(
          planets.filter((planet: any) => {
            const {
              name,
              overview: { content: overviewContent, source: overviewSource },
              structure: { content: structureContent, source: structureSource },
              geology: { content: geometryContent, source: geometrySource },
              rotation,
              revolution,
              radius,
              temperature,
              images: {
                planet: planetImage,
                internal: planetInternalImage,
                geology: planetGeologyInternal,
              },
            } = planet;
            if (name === currPlanet) {
              setData({
                name,
                overviewContent,
                overviewSource,
                structureContent,
                structureSource,
                geometryContent,
                geometrySource,
                rotation,
                revolution,
                radius,
                temperature,
                planetImage,
                planetInternalImage,
                planetGeologyInternal,
              });
            }
          })
        )
      );
    //       }
    //     })
    //     );
    //   })
  }

  return (
    <PlanetsContext.Provider
      value={{
        data,
        setData,
        currPlanet,
        setCurrPlanet,
        planets,
        setPlanets,
        colors,
        setPlanetData,
      }}
    >
      {children}
    </PlanetsContext.Provider>
  );
};

export default PlanetState;
