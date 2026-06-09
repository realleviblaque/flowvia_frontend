import { useState } from "react";
import { ClientWorkHistory, WorkHistorySetup } from "../WorkHistory";
import formatBudet from "../../../utils/formatBudget";

export function ClientWrap({client}) {
  const [isHistoryShow, setIsHistoryShow] = useState(false)
  const handleHistoryShow = () => {
    setIsHistoryShow(!isHistoryShow)
  }
  const {amount, date, jobTotal} = WorkHistorySetup(client)
  return (
    <div key={client.id} className="client-wrap">
      <div className="top">
        <div className="left">
          <div className="profile">
            <img src={client.profileImg} className={client.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="details">
            <p className="name">{client.name} <i className="fa-regular fa-check-circle"></i></p>
            <div className="username-info">
              <p className="username">@{client.username}</p>
              <span></span>
              {client.isActive 
                ?
                  <>
                    <div className="online-stat"></div>
                    <p className="online">Online</p>
                  </>
                :
                  <p>{client.lastActive} ago</p>
              }
            </div>
            <p className="profession-title">{client.accountType}<span></span>{client.professionTitle}</p>
            <p className="bio">{client.bio}</p>
            <div className="more-info">
              <div className="total-jobs">
                {jobTotal} job{jobTotal === 1 ? '' : 's'} together
              </div>
              <div className="total-paid">
                <span>${formatBudet(amount)} earned</span>
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