import { useState, useEffect } from "react";
import Resume from "./components/Resume/Resume";
// Assets
import littlePrinceFly from "./assets/little-prince-fly.png";
import littlePrinceSit from "./assets/little-prince-sit.png";
import SwitchLanguage from "./components/SwitchLanguage/SwitchLanguage";
import NavBar from "./components/NavBar/NavBar";
// store
import { useSelector } from "react-redux";
import { RootState } from "./store/reducers/rootReducer";
// Components
import { Background } from "./components/Background";
import Intro from "./components/Intro/Intro";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import SvgBanner from "./components/SvgBanner";
import useScroll from "./components/useScroll";
import Planets from "./components/Planets";

function App() {
  const folio = useSelector((state: RootState) => state.portfolio);
  const [pageYOffset, setPageYOffset] = useState(0)

  const {scrollY, scrollDirection} = useScroll()
  
  return (
    <ParallaxProvider>
      <Background stars={true} startsNum={[15, 30, 70]}>
        <SwitchLanguage />
        <NavBar />
        <Intro {...folio.intro} />

        {/* <SvgBanner/> */}

        <Resume />

        <Planets />

        <Parallax
          className="littel-prince-sit"
          x={[-200, 200]}
          y={[200, 200]}
          tagOuter="figure"
        >
          <img src={littlePrinceSit} alt="little-prince-sit.png"></img>
        </Parallax>
      </Background>
    </ParallaxProvider>
  );
}

export default App;
