import React, { useLayoutEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import SvgCircle from "./SvgCircle";
// types
import Job from "../../models/job";
import Tool from "../../models/tool";
// style
import "./resume.scss";
import profilePhoto from "../../assets/bensontuan.png";
import useScroll from "../useScroll";
import Tools from "./Tools/Tools";

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
  const summaryRef = useRef<HTMLDivElement>(null)
  const toolsOffsetRef = useRef<HTMLDivElement>(null)

  const vw = window.visualViewport.width
  const vh = window.visualViewport.height
  const profilePohtoHeigth = vh * 0.21
  const profilePhotoWidth = vw * 0.17
  const posnOffset = 3
  const posn = {
    top: posnOffset * profilePohtoHeigth, 
    height: profilePohtoHeigth, 
    width: profilePhotoWidth
  }


  return (
    <div className="resume" ref={resumeRef}>
      <Parallax x={[`-${vw / 10}px`, `${vw / 10}px`]} className="summary-outer" >
        <div className="summary" ref={summaryRef}>
          <Parallax className="profile-photo" y={[`${- posnOffset * profilePohtoHeigth}px`, `${- (posnOffset + 0.26) * profilePohtoHeigth}px`]} styleOuter={posn}>
            <img src={profilePhoto} alt="little-prince-fly.png" style={{width: profilePhotoWidth * 0.9}}></img>
          </Parallax>
          <Parallax className="profile-circle" y={[`${- posnOffset * profilePohtoHeigth}px`, `${- (posnOffset + 0.5) * profilePohtoHeigth}px`]} styleOuter={posn}>
            <SvgCircle {...{width: profilePhotoWidth+ "px"}}/>
          </Parallax>
          <div style={posn}></div>

          <div>
            <p>{resume.headline}</p>
          </div>
          <div>
            {resume.summary.map((sum, i) => (
              <p key={i}>{sum}</p>
            ))}
          </div>
        </div>
      </Parallax>
      
    
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
