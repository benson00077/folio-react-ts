import React from 'react'
//store
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducers/rootReducer'

function SvgBanner() {
  const posnInfo = useSelector((state: RootState) => state.position)
  const { height } = posnInfo


  const position: React.CSSProperties = {
    position: "absolute",
    top: height.vh.intro + 1 + "vh",
    width: "100%",
  }

  return (
    <div className="svg-banner" style={position}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1440 270" enableBackground="new 0 0 1440 270" xmlSpace="preserve">
        <polygon fill="#8d8383" points="1440,0 0,230 0,270 1440,40 "></polygon>
      </svg>
    </div>
  )
}

export default SvgBanner
