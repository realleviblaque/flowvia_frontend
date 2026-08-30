import { useState } from "react"
import { FreelancerWorkHistory, WorkHistorySetup } from "../WorkHistory"
import formatCount from "../../../utils/formatCount"
import { formatLastSeen } from "../../../utils/formatLastSeen"

export function FreelancerWrap({freelancer}) {
  const [isHistoryShow, setIsHistoryShow] = useState(false)
  const handleHistoryShow = () => {
    setIsHistoryShow(!isHistoryShow)
  }
  const {amount, jobTotal, date} = WorkHistorySetup(freelancer);
  return (
    <div className="freelancer-wrap">
      <div className="top">
        <div className="left">
          <div className="profile">
            <img src={freelancer.profile.image} className={freelancer.profile.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="details">
            <div className="name-wrap">
              <p className="name">{freelancer.profile.name}</p>
              {freelancer.profile.info.isVerified && <i className="fa-regular fa-check-circle"></i>}
            </div>
            <div className="username-info">
              <p className="username">@{freelancer.profile.username}</p>
              <span></span>
              {freelancer.profile.info.isOnline 
                ?
                  <>
                    <div className="online-stat"></div>
                    <p className="online">Online</p>
                  </>
                :
                  <p>{formatLastSeen(freelancer.profile.info.lastSeenAt)}</p>
              }
            </div>
            <p className="profession-title">{freelancer.profile.title}r</p>
            <p className="bio">{freelancer.profile.bio}</p>
            <div className="more-info">
              <div className="total-jobs">
                {jobTotal} job{jobTotal === 1 ? '' : 's'} done
              </div>
              <div className="total-paid">
                <span>${formatCount(amount)} paid</span>
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