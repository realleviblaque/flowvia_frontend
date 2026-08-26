import { useNavigate } from "react-router-dom";
import { Jobs } from "../../../data/MarketplacePage/job";
import { checkAccountType } from "../../../utils/checkAccountType";
import './JobSidebar.css'
import formatCount from "../../../utils/formatCount";

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
                  <p className="job-title">{job.details.title}</p>
                  <p className="requirement">Requirement: {job.details.requirement}</p>
                </div>
                <div className="middle">
                  <div className="budget">${formatCount(job.info.budget.min)} - ${formatCount(job.info.budget.max)}</div>
                  <div className="location">{job.info.location}</div>
                </div>
                <div className="bottom">
                  <div className="bottom-left">
                    <div className="client-details">
                      <div className="client-profile-pic">
                        <img src={job.clients.image} />
                      </div>
                      <div className="client-name">
                        <p className="client-username">@{job.clients.username}</p>
                        <span className={checkAccountType('Freelancer')} title={`${'Freelancer'} Account`}></span>
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