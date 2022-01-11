import React from 'react'
import Tool from '../../../models/tool'
// icons
import iconsWithStyle from "./logos"


type ToolProps = {
  toolsHeadline: string
  tools: Tool[]
}

function Tools(props: ToolProps) {

  if (iconsWithStyle.length !== 13) console.error("Warring: iconMap has been changed")

  let memoizedNum = -1

  return (
    <div className="tools-layout">
      <h3>{props.toolsHeadline}</h3>
      <div>
        {props.tools.map((tool, i) => (
          <React.Fragment>
            <div className="tool-type-name">{tool.type}</div>
            <div key={i} className="tool-type">

              {tool.list.map((item, j) => {

                memoizedNum += 1

                return (
                  <div className="tools-group" key={j}>
                    <div className="tool-icon">
                      {/* {React.createElement(iconMap[memoizedNum], {style: { height: "50px", width: "50px" }})} */}
                      {iconsWithStyle[memoizedNum]}
                    </div>
                    <p className="tool-info">{item}</p>
                  </div>
                )
              })}
            </div>
          </React.Fragment>
        ))}
      </div>

    </div>
  )
}

export default Tools
