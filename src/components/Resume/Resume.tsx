import React, { useEffect, useLayoutEffect } from "react";
// types
import Job from "../../models/job";
import Tool from "../../models/tool";
// style
import "./index.scss";
// store
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
// componentes
import Summary from "./Summary/Summary";
import Tools from "./Tools/Tools";
import Jobs from "./Jobs/Jobs";

type resumeProps = {
  pageYOffset: number
}

function Resume() {

  const resume = useSelector((state: RootState) => state.portfolio.resume)

  return (

    <div className="resume">
      <Summary />
      <Tools />
      <Jobs />
    </div>

  );
}

export default Resume;
