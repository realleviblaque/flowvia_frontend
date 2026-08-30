import { useState } from "react";
import { ClientWorkHistory, WorkHistorySetup } from "../WorkHistory";
import formatCount from "../../../utils/formatCount";
import { formatLastSeen } from "../../../utils/formatLastSeen";

export function ClientWrap({client}) {
  const [isHistoryShow, setIsHistoryShow] = useState(false)
  const handleHistoryShow = () => {
    setIsHistoryShow(!isHistoryShow)
  }
  const {amount, date, jobTotal} = WorkHistorySetup(client)
  return (
    <div className="client-wrap">
      <div className="top">
        <div className="left">
          <div className="profile">
            <img src={client.profile.image} className={client.profile.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="details">
            <div className="name-wrap">
              <p className="name">{client.profile.name}</p>
              {client.profile.info.isVerified && <i className="fa-regular fa-check-circle"></i>}
            </div>
            <div className="username-info">
              <p className="username">@{client.profile.username}</p>
              <span></span>
              {client.profile.info.isOnline 
                ?
                  <>
                    <div className="online-stat"></div>
                    <p className="online">Online</p>
                  </>
                :
                  <p>{formatLastSeen(client.profile.info.lastSeenAt)}</p>
              }
            </div>
            <p className="profession-title">{client.profile.accountType}<span></span>{client.profile.title}</p>
            <p className="bio">{client.profile.bio}</p>
            <div className="more-info">
              <div className="total-jobs">
                {jobTotal} job{jobTotal === 1 ? '' : 's'} together
              </div>
              <div className="total-paid">
                <span>${formatCount(amount)} earned</span>
              </div>
              <div className="last-work-with">
                Last: {date}
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <button className="request-btn">Send Request</button>
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
        <div className={`client-job-history-wrapper ${isHistoryShow && 'active-history'}`}>
          {<ClientWorkHistory client={client} />}
        </div>
      </div>
    </div>
  )
}