import React, { useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import SvgCircle from "./SvgCircle";
// types
import Job from "../../models/job";
import Tool from "../../models/tool";
// style
import "./resume.scss";
import profilePhoto from "../../assets/bensontuan.png";
import useScroll from "../useScroll";

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
  const toolsRef = useRef<HTMLDivElement>(null)
  const toolsOffsetRef = useRef<HTMLDivElement>(null)
  const translateMax = useRef({x:0, y:0})
  const translate = useRef({x:0, y:0})
  

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

  const moveToolDiv = () => {
    /** Warning: Long task . Painting esp.*/

    // init
    const pageYOffset = window.pageYOffset
    const resumeDiv = resumeRef.current
    const summaryDiv = summaryRef.current
    const toolDiv = toolsRef.current
    const toolsOffsetDiv = toolsOffsetRef.current
    if (!resumeDiv || !summaryDiv || !toolDiv || !toolsOffsetDiv) return

    // memoized
    if (translateMax.current.x === 0) {
      //translateMax.current.x = toolDiv.getBoundingClientRect().left - toolsOffsetDiv.getBoundingClientRect().left
      translateMax.current.x = toolDiv.offsetLeft - toolsOffsetDiv.offsetLeft
    }
    if (translateMax.current.y === 0) {
      // translateMax.current.y = toolsOffsetDiv.getBoundingClientRect().top - toolDiv.getBoundingClientRect().top
      translateMax.current.y = toolsOffsetDiv.offsetTop - toolDiv.offsetTop
    }

    // calc 
    const buffer = 0.3
    const startLine = resumeDiv.offsetTop + toolDiv.offsetHeight * buffer
    const endLine = resumeDiv.offsetTop + toolsOffsetDiv.offsetTop * 4/5
    const startTranslate = pageYOffset >= startLine
    const endTranslate = pageYOffset >= endLine
    const speed = { x: 2, y: 1.5 }
    const deltaX = (pageYOffset - startLine) * speed.x
    const deltaY = (pageYOffset - startLine) * speed.y


    if (startTranslate) {
      if (deltaY <= translateMax.current.y) {
        translate.current.y = deltaY
      }
      if (deltaX <= translateMax.current.x) {
        translate.current.x = deltaX
      }
      toolDiv.setAttribute("style", `transform: translate(-${translate.current.x}px, ${translate.current.y}px)`) 
    } 
    
    // when scroll top quickly
    if (!startTranslate) {
      toolDiv.setAttribute("style", ``)
    }

    // when scroll down quickly
    if (endTranslate) {
      toolDiv.setAttribute("style", `transform: translate(-${translateMax.current.x}px, ${translateMax.current.y}px)`) 
      translate.current.x = translateMax.current.x
      translate.current.y = translateMax.current.y

    }


    // console.log(translate.current);
    // console.log(translateMax.current);
  }
  const test = useScroll(moveToolDiv)

  return (
    <div className="resume" ref={resumeRef}>
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
      
      <Parallax y={[0, 200]}>
        <div className="tools" ref={toolsRef}>
          <h3>{resume.toolsHeadline}</h3>
          <div>
            {resume.tools.map((tool, i) => (
              <div key={i}>
                <span>{tool.name}</span> <br />
                <div>{tool.list}</div>
              </div>
            ))}
          </div>
        </div>
      </Parallax>

      <div className="tools-offset" ref={toolsOffsetRef}></div>

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
