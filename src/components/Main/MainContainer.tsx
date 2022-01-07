import React from 'react'
import './mainContainer.scss'
// store
import { useSelector, useDispatch } from 'react-redux'
import Portfolio from '../../models/portfolio'
import { switchEn } from '../../store/actions'


function MainContainer() {

  const zh = useSelector<Portfolio>(state => state.zh)
  const dispatch = useDispatch()
  

  return (
    <div className="scrollable">
      <button onClick={() => dispatch(switchEn())}>Switch Language</button>
      {console.log(zh)}
      {zh}
      <div>
        hi
        <div className="test" style={{ height: "100vh" }}>
          test
        </div>
      </div>
    </div>
  )
}

export default MainContainer
