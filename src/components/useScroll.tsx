import {useState, useEffect} from 'react'

function useScroll(handler: ()=>void) {
  
  //const [pageYOffset, setPageYOffset] = useState(window.pageYOffset)
  const scrollHandler = () => {
    //setPageYOffset(window.pageYOffset)
    handler()
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])
  
  return true
}

export default useScroll
