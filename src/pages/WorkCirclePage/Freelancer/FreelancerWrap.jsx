import { useState } from "react"
import formatBudet from "../../../utils/formatBudget"
import { FreelancerWorkHistory, WorkHistorySetup } from "../WorkHistory"

export function FreelancerWrap({freelancer}) {
  const [isHistoryShow, setIsHistoryShow] = useState(false)
  const handleHistoryShow = () => {
    setIsHistoryShow(!isHistoryShow)
  }
  const {amount, jobTotal, date} = WorkHistorySetup(freelancer);
  return (
    <div key={freelancer.id} className="freelancer-wrap">
      <div className="top">
        <div className="left">
          <div className="profile">
            <img src={freelancer.profileImg} className={freelancer.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="details">
            <p className="name">{freelancer.name} <i className="fa-regular fa-check-circle"></i></p>
            <div className="username-info">
              <p className="username">@{freelancer.username}</p>
              <span></span>
              {freelancer.isActive 
                ?
                  <>
                    <div className="online-stat"></div>
                    <p className="online">Online</p>
                  </>
                :
                  <p>{freelancer.lastActive} ago</p>
              }
            </div>
            <p className="profession-title">{freelancer.professionTitle}r</p>
            <p className="bio">{freelancer.bio}</p>
            <div className="more-info">
              <div className="total-jobs">
                {jobTotal} job{jobTotal === 1 ? '' : 's'} done
              </div>
              <div className="total-paid">
                <span>${formatBudet(amount)} paid</span>
              </div>
              <div className="last-work-with">
                Last: {date}
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <button className="rehire-btn">Rehire</button>
          <button className="message-btn">Message</button>
          <button className="profile-btn">View Profile</button>
        </div>
      </div>
      <div className="bottom">
        <div className="up">
          <p>Work History</p>
          <span></span>
          {jobTotal}
          <p>Completed Job{jobTotal === 1 ? '' : 's'}</p>
          <i className={`fa-solid ${isHistoryShow ? 'fa-chevron-up' : 'fa-chevron-down'}`} onClick={handleHistoryShow}></i>
        </div>
        <div className={`job-history-wrapper ${isHistoryShow && 'active-history'}`}>
          <FreelancerWorkHistory freelancer={freelancer} />
        </div>
      </div>
    </div>
  )
}