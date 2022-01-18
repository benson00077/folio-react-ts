import React, { useEffect } from "react";

import "./stars.scss";
import "./style.scss";
import getRandomStarAttribute from "./utilities";

export const Background = (props: {
  stars: boolean;
  startsNum: number[];
  children: React.ReactNode;
}) => {
  
  useEffect(() => {
    if (!props.stars) return;
    const [n1, n2, n3] = props.startsNum
    const stars = document.querySelector("#stars");
    const stars2 = document.querySelector("#stars2");
    const stars3 = document.querySelector("#stars3");
    stars?.setAttribute("style", `box-shadow: ${getRandomStarAttribute(n3)}`);
    stars2?.setAttribute("style", `box-shadow: ${getRandomStarAttribute(n2)}`);
    stars3?.setAttribute("style", `box-shadow: ${getRandomStarAttribute(n1)}`);
  }, []);

  return (
    <div id="bg" className="background">
      <div>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      {props.children}
    </div>
  );
};
