import React, { useLayoutEffect, useRef } from "react";
// types
import Job from "../../models/job";
import Tool from "../../models/tool";
// style
import "./resume.scss";

import Tools from "./Tools/Tools";
import Summary from "./Summary/Summary";

export interface ResumeProps {
  pageYOffset: number;
  resume: {
    headline: string;
    summary: string[];
    jobsHeadline: string;
    jobs: Job[];
    toolsHeadline: string;
    tools: Tool[];
  }
}

function Resume(props: ResumeProps) {

  const {resume, pageYOffset} = props

  const resumeRef = useRef<HTMLDivElement>(null)
  const clipPath = "polygon(0 8%, 100% 0, 100% 92%, 0% 100%)";

  return (
    <div className="resume" ref={resumeRef} style={{clipPath: clipPath}}>
        
      <Summary clipPath={clipPath}/>
      
    
      <Tools toolsHeadline={resume.toolsHeadline} tools={resume.tools}/>

      {/* <Parallax x={[`-${vw / 10}px`, `${vw / 2}px`]} className="tools-outer"> 
        <div className="tools">
            <h3>{resume.toolsHeadline}</h3>
          <div ref={toolsRef}> 
            <div>
              {resume.tools.map((tool, i) => (
                <div key={i}>
                  <span>{tool.name}</span> <br />
                  <div>{tool.list}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Parallax> */}

      <div className="jobs">
        <h3>{resume.jobsHeadline}</h3>
        <div>
          {resume.jobs.map((job, i) => (
            <div key={i}>
              <h5>{job.title}</h5>
              <div>{job.company}</div>
              <span>{job.timeframe}</span>
              <p>{job.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
