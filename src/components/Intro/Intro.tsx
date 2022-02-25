import "./intro.scss";
import { Parallax } from "react-scroll-parallax";
import NextPageButton from "../utils/NextPageBtn";

export interface ResumeProps {
  headline: string,
  typed: string[],
}

function Intro(props: ResumeProps) {

  return (
    <div className="intro">
      <div className="text">
        {props.headline}
      </div>
      <div className="sub-texts">
        {props.typed.map((typed, i) => (
          <Parallax key={i} className={`sub-text-${i}`} x={[100 + 100 * i, 0 - 100 * i]}>
            {typed}
          </Parallax>
        ))}
      </div>
      <NextPageButton />
    </div>
  );
}

export default Intro;
