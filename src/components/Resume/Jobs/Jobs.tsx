import React from 'react'
// store
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";

function Jobs() {

  const resume = useSelector((state: RootState) => state.portfolio.resume)

  return (
    <div className="jobs">
      <h3>{resume.jobsHeadline}</h3>
      <div>
        {resume.jobs.map((job, i) => (
          <div key={i} className="jobs-group">
            <span className="float-right time-frame-badge">{job.timeframe}</span>
            <h5>{job.title}
              {" - "}
              <span>{job.company}</span>
            </h5>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{job.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jobs
