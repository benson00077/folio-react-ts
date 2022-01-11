import {useState, useLayoutEffect} from 'react'

function useScroll(handler: ()=>void) {
  
  const scrollHandler = () => {
    handler()
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])
}

export default useScroll
