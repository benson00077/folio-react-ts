import React from "react";
// types
import Job from "../../models/job";
import Tool from "../../models/tool";

// exp , skills , or Proflile

export interface ResumeProps {
  headline: string;
  summary: string[];
  jobsHeadline: string;
  jobs: Job[];
  toolsHeadline: string;
  tools: Tool[];
}

function Resume(props: ResumeProps) {
  console.log(props);

  return (
    <>
      <div>
        <p>{props.headline}</p>
      </div>
      <div>
        {props.summary.map((sum, i) => (
          <p key={i}>{sum}</p>
        ))}
      </div>
      <h3>{props.toolsHeadline}</h3>
      <div>
        {props.tools.map((tool, i) => (
          <div key={i}>
            <span>{tool.name}</span> <br/>
            <div>{tool.list}</div>
          </div>
        ))}
      </div>
      <h3>{props.jobsHeadline}</h3>
      <div>
        {props.jobs.map((job, i) => (
          <div key={i}>
            <h5>{job.title}</h5>
            <div>{job.company}</div>
            <span>{job.timeframe}</span>
            <p>{job.summary}</p>
          </div>  
        ))}
      </div>
    </>
  );
}

export default Resume;
