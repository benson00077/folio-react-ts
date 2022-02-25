import { ReactNode, useEffect, useRef, useState } from "react";
import { Tween } from "./util";
import "./nextPageBtn.scss";


/**
 *  Inproving scrolling performance
 *  with debounce or throttle in React : https://blog.logrocket.com/how-and-when-to-debounce-or-throttle-in-react/
 *  with passive listeners : https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#improving_scrolling_performance_with_passive_listeners
 */

function NextPageButton() {

  const toNextPage = () => {
    let start: number | null = null;
    const windowHeight = window.innerHeight;
    //TODO: to be Dynamic ❌ hard code
    const nextElement = document.querySelector(".summary")
  
    // function step(timestamp: DOMHighResTimeStamp) {
    //   if (!nextElement) throw new Error ("div.summary not found.")
    //   const nextElePosn = nextElement.getBoundingClientRect().top

    //   if (!start) start = timestamp;
    //   let progress = timestamp - start;
    //   window.scrollTo({
    //     top: Math.min(progress / 0.5, windowHeight),
    //   });
    //   if (nextElePosn > 0) {
    //     window.requestAnimationFrame(step);
    //   } else {
    //     return
    //   }
    // }
    // window.requestAnimationFrame(step);

    const sceneTransition = function() {
      let start = 0, during = 75;
      let _run = function() {
        start++;
        const scrollNumber: number = Tween.Back.easeOut(start, 0, windowHeight, during);
      
        window.scrollTo({
          top: scrollNumber,
        });

        if (start < during) requestAnimationFrame(_run);
      };
      _run();
    };
    sceneTransition()
  };

  return (
    <>
      {/* // isShow = scrollTopCount >= BackToTop_ThreshHold (like 800 or sth) } */}
      <div onClick={toNextPage} className="nextPageBtn">
        <p>🚀</p>
      </div>
    </>
  );
}

export default NextPageButton;
