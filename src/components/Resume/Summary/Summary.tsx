import React, { useRef, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
// Assets
import profilePhoto from "../../../assets/bensontuan.png";
// store
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import NextPageButton from "../../utils/NextPageBtn";

function Summary() {

  const resume = useSelector((state: RootState) => state.portfolio.resume)
  const { headline, summary } = resume

  const vw = window.visualViewport.width
  const vh = window.visualViewport.height
  const profilePohtoHeigth = vh * 0.21
  const profilePhotoWidth = vw * 0.17

  const clipPath = "polygon(0 7%, 100% 0, 100% 92%, 0% 100%)";

  return (
    <div className="summary" >

      <div>
        <img
          src={profilePhoto}
          alt="little-prince-fly.png"
          style={{ width: profilePhotoWidth * 0.9 }}
        ></img>
      </div>

      <div>

        <p>{headline}</p>

        {summary.map((sum, i) => (
          <p key={i}>{sum}</p>
        ))}
      </div>

      <NextPageButton/>
    </div>
  );
}

export default Summary;
