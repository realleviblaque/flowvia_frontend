import { useNavigate } from "react-router-dom";
import { Jobs } from "../../../data/MarketplacePage/job";
import { checkAccountType } from "../../../utils/checkAccountType";
import './JobSidebar.css'

const allJobs = Jobs.sort(() => Math.random() - 0.5)

export function JobSidebar() {
  const navigate = useNavigate();
  let i = 0;
  return (
    <>
      <div className="title">
        <p>Suggested Jobs</p>
        <p className="see-all-job-btn" onClick={() => {
          navigate('marketplace/jobs')
        }}>See all</p>
      </div>
      <div className="sug-job-container">
        {allJobs.map((job) => {
          i++;
          return (
            i <= 2 && (
              <div key={job.id} className="content-wrapper">
                <div className="top">
                  <p className="job-title">{job.jobTitle}</p>
                  <p className="requirement">Requirement: Figma Designer</p>
                </div>
                <div className="middle">
                  <div className="budget">{job.budget}</div>
                  <div className="location">{job.jobLocation}</div>
                </div>
                <div className="bottom">
                  <div className="bottom-left">
                    <div className="client-details">
                      <div className="client-profile-pic">
                        <img src={`${job.clientPic}`} />
                      </div>
                      <div className="client-name">
                        <p className="client-username">@{job.clinetUsername}</p>
                        <span className={`${checkAccountType(job)}`} title={`${job.accountType} Account`}></span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-right">
                    <button>View Job</button>
                  </div>
                </div>
              </div>
            )
          )
        })}
      </div>
    </>
  )
}