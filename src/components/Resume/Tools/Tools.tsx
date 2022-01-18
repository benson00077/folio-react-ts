import React, { CSSProperties, useEffect, useRef } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Tool from '../../../models/tool'
// store
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
// icons
import iconsWithStyle from "./logos"
import { relative } from 'node:path/win32';



function Tools() {

  if (iconsWithStyle.length !== 13) console.error("Warring: iconMap has been changed")
  const resume = useSelector((state: RootState) => state.portfolio.resume)
  const { toolsHeadline, tools } = resume
  const posnInfo = useSelector((state: RootState) => state.position)
  const { height } = posnInfo

  const toolsRef = useRef<HTMLDivElement>(null)

  let memoizedNum = -1
  const InnerParalaxOffset = window.visualViewport.height * 0.24;
  const heightOffset = 12;
  const posnParallaxOuter: CSSProperties = {
    position: "absolute",
    top: height.vh.intro + height.vh.summary - heightOffset + "vh",
  }


  // TODO: scroll eventListener is lagging ---
  useEffect(() => {
    const tools = toolsRef.current
    if (!tools) return
    const { top, height } = tools.getBoundingClientRect()
    const animationStart = top - height / 2 <= 0
    const animationEnd = top - 65 <= 0

    if (animationStart) {
      tools.classList.add("tools-animation")
    } else {
      tools.classList.remove("tools-animation")
    }
  }, [toolsRef.current?.clientTop])

  return (
    <div className="tools-layout" ref={toolsRef}>
      <h3>{toolsHeadline}</h3>
      <div className="tools-group">
        {tools.map((tool, i) => (
          <React.Fragment key={i}>
            <Parallax x={[50 * (1 - i), 1 * (1 - i)]}
              styleOuter={posnParallaxOuter}
              styleInner={{ position: "relative", top: `${InnerParalaxOffset * (1+i)}px` }} >

              <div key={i} className="tool-type">
                <h4>{tool.type}</h4>

                {tool.list.map((item, j) => {

                  memoizedNum += 1

                  return (
                    <div className="tools-item" key={j}>
                      <div className="tool-icon">
                        {iconsWithStyle[memoizedNum]}
                      </div>
                      <p className="tool-info">{item}</p>
                    </div>
                  )
                })}
              </div>
            </Parallax>

          </React.Fragment>
        ))}
      </div>

    </div>
  )
}

export default Tools
