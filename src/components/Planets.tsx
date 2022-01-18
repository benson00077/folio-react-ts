import React, { CSSProperties } from 'react'
import { Parallax } from 'react-scroll-parallax'
// imgs
import blackHole from '../assets/icons8-black-hole-48.png'
import earth from '../assets/icons8-earth-48.png'
import jupiter from '../assets/icons8-jupiter-48.png'
import mars from '../assets/icons8-mars-48.png'
import mercury from '../assets/icons8-mercury-48.png'
import moon from '../assets/icons8-moon-48.png'
import nebula from '../assets/icons8-nebula-48.png'
import neptune from '../assets/icons8-neptune-48.png'
import pluto from '../assets/icons8-pluto-48.png'
import saturn from '../assets/icons8-saturn-48.png'
import sun from '../assets/icons8-sun-48.png'
import uranus from '../assets/icons8-uranus-48.png'
import venus from '../assets/icons8-venus-48.png'

const planets = [
  blackHole, earth, jupiter, mars, mercury,
  moon, nebula, neptune, pluto, sun,
  saturn, uranus, venus
]


function Planets() {
  const style: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  }


  return (
    <div className="planets" style={style}>
      {planets.map((planet, i) => {
        const j = planets.length / 2 - i
        return (
          <Parallax y={[-50 * j, 30 * j]} key={i}>
            <img src={planet} alt={i + ""} />
          </Parallax>
        )
      })}
    </div>
  )
}

export default Planets
