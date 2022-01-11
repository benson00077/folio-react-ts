import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
// Assets
import profilePhoto from "../../../assets/bensontuan.png";
// store
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";

function Summary(props: {clipPath: string}) {

  const resume = useSelector((state: RootState) => state.portfolio.resume)
  const { headline, summary } = resume

  const vw = window.visualViewport.width
  const vh = window.visualViewport.height
  const profilePohtoHeigth = vh * 0.21
  const profilePhotoWidth = vw * 0.17

  return (
    <div className="summary" style={{clipPath: props.clipPath,}}>
      <ParallaxBanner
        className="banner"
        layers={[
          {
            image: "test.png",
            amount: 0.2,
          },
        ]}
        style={{
          height: "500px",
        }}
      ></ParallaxBanner>
      <img
        src={profilePhoto}
        alt="little-prince-fly.png"
        style={{ width: profilePhotoWidth * 0.9 }}
      ></img>
      <div>
        <p>{headline}</p>
      </div>
      <div>
        {summary.map((sum, i) => (
          <p key={i}>{sum}</p>
        ))}
      </div>
    </div>
  );
}

export default Summary;
