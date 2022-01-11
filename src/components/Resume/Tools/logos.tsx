import React from 'react'
// icons
import { SiTypescript, SiJavascript, SiMysql, SiReact, SiRedux, SiStyledcomponents, SiSass, SiWebpack, SiGit, SiNpm, SiSelenium, SiJest } from 'react-icons/si'
import python from '../../../assets/python-logo-64.png'


const iconsWithStyle = [
  <SiJavascript style={{ height: "50px", width: "50px" }} fill="#F7DF1E" />,
  <SiTypescript style={{ height: "50px", width: "50px" }} fill="#1572B6" />,
  <SiMysql style={{ height: "50px", width: "50px" }} fill="#4479A1" />,
  <img src={python} style={{ height: "50px", width: "50px", }} alt="python"></img>,

  <SiReact style={{ height: "50px", width: "50px" }} fill="#61DAFB" />,
  <SiRedux style={{ height: "50px", width: "50px" }} fill="#764ABC" />,
  <SiStyledcomponents style={{ height: "50px", width: "50px" }} fill="#c982a6" />,
  <SiSass style={{ height: "50px", width: "50px" }} fill="#CC6699" />,
  
  <SiGit style={{ height: "50px", width: "50px" }} fill="#f03b2d" />,
  <SiNpm style={{ height: "50px", width: "50px" }} fill="#d1403f" />,
  <SiWebpack style={{ height: "50px", width: "50px" }} fill="#8ed6fb" />,
  <SiSelenium style={{ height: "50px", width: "50px" }} fill="#798f9a" />,
  <SiJest style={{ height: "50px", width: "50px" }} fill="#98445b" />,
]

export default iconsWithStyle
