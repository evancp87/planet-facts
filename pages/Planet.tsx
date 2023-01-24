import React, {useState, useEffect} from 'react'
import PlanetData from "../Components/PlanetData";
import PlanetImgs from "../Components/PlanetImgs";
import FooterData from "../Components/FooterData";
type Props = {}

function Planet({}: Props) {

   // onLoad loads default state- mercury as the default planet & the overview as the default data

   // data should live here and be passed to planetImgs, PlanetData and FooterData components as props
  return (
   <>
    <section>
      <PlanetImgs/>
      <div>

       <h1>Planet.name</h1>

       <PlanetData/>

{/* each has onClick function to fetch selected data */}
       <div>
         <button>01 Overview</button>
         <button>02 Structure</button>
         <button>03 Geology</button>
         </div>

      </div>
  
  </section>
<FooterData/>
   </>
  )
}




export default Planet