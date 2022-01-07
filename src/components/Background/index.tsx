import React, { useEffect } from "react";


import './stars.scss'
import './style.scss'
import getRandomStarAttribute from './utilities'

export const Background = () => {

  useEffect(() => {
    const stars = document.querySelector("#stars")
    const stars2 = document.querySelector("#stars2")
    const stars3 = document.querySelector("#stars3")
    stars?.setAttribute("style", `box-shadow: ${getRandomStarAttribute(400)}`)
    stars2?.setAttribute("style", `box-shadow: ${getRandomStarAttribute(200)}`)
    stars3?.setAttribute("style", `box-shadow: ${getRandomStarAttribute(50)}`)
  }, [])

  return (
    <div id="bg" className="background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  )
}