// Components
import { Background } from "./components/Background";
import Intro from "./components/Intro/Intro";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
// Assets
import littlePrinceFly from "./assets/little-prince-fly.png";
import littlePrinceSit from "./assets/little-prince-sit.png";
import SwitchLanguage from "./components/SwitchLanguage/SwitchLanguage";
import NavBar from "./components/NavBar/NavBar";
// store
import { useSelector } from "react-redux";
import { RootState } from "./store/reducers/rootReducer";
import Resume from "./components/Resume/Resume";

function App() {
  const folio = useSelector((state: RootState) => state.portfolio);
  return (
    <ParallaxProvider>
      <Background stars={false}>
        <SwitchLanguage />
        <NavBar />
        <Intro {...folio.intro}/>
        <Resume {...folio.resume} />

        <Parallax
          className="littel-prince-fly"
          x={[-300, 600]}
          styleInner={{ transition: "all 0.5s ease-out" }}
          tagOuter="figure"
        >
          <img src={littlePrinceFly} alt="little-prince-fly.png"></img>
        </Parallax>
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
