import { useEffect, useState } from "react";
import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './PendingRequest.css'
import { workPendingRequest } from "../../../data/StatusPage/workPendingRequest";
import formatCount from "../../../utils/formatCount";
import dayjs from "dayjs";
import { statusTimeAgo } from "../../../utils/statusTimeAgo";

export function PendingRequest({all}) {
  const [requests, setRequests] = useState(workPendingRequest);
  const [search, setSearch] = useState('')
  const [, forceUpdate] = useState(0)
  setRequests
  let total = 0;
  let expiring = 0;
  let expired = 0;
  requests.forEach(p => {
    total += p.info.budget
    const expirationDays = 5;
    const createdAt = dayjs(p.createdAt);
    const daysElapsed = dayjs().diff(createdAt, 'day');
    const daysLeft = expirationDays - daysElapsed;
    if (daysLeft <= 2 && daysLeft > 0) {
      expiring ++;
    } else if (daysLeft <= 0) {
      expired ++;
    }
  })
  useEffect(() => {
    const handleSearch = () => {
      if (search.trim()) {
        setRequests(
          workPendingRequest.filter(p => 
            p.details.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.client.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
          )
        )
      } else {
        setRequests(workPendingRequest)
      }
    }
    handleSearch();
  }, [search])
  useEffect(() => {
    const timer = setInterval(() => {
      forceUpdate(prev => prev + 1)
    }, 60000);
    return () => clearInterval(timer)
  }, [])
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-pemding-request-main">
        <div className="top-side">
          <div>
              <p className="pending">{requests.length - expired}</p>
              <p className="txt">Pending</p>
          </div>
          <div>
            <p className="expiring">{expiring}</p>
            <p className="txt">Expiring Soon</p>
          </div>
          <div>
            <p className="expired">{expired}</p>
            <p className="txt">Expired</p>
          </div>
          <div>
            <p className="total">${formatCount(total)}</p>
            <p className="txt">Total Offered</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search requests..." value={search} onInput={e => setSearch(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="projects-container">
          {requests.length === 0 && (
            <div className="empty-state">
              <i className="fa-solid fa-inbox"></i>
              <p>
                {search.trim()
                  ? `No projects found for "${search.trim()}"`
                  : 'No projects found'
                }
              </p>
            </div>
          )}
          {requests.map((request) => {
            const expirationDays = 5;
            const createdAt = dayjs(request.createdAt);
            const daysElapsed = dayjs().diff(createdAt, 'day');
            const daysLeft = expirationDays - daysElapsed;
            let open = false;
            let expiring2 = false;
            let expiring1 = false;
            let expired = false;
            if (daysLeft > 0) {
              open = true;
            } 
            if (daysLeft <= 2 && daysLeft > 0) {
              expiring2 = true
            }
            if (daysLeft <= 1 && daysLeft > 0) {
              expiring1 = true
            }
            if (daysLeft <= 0) {
              expired = true;
            }
            return (
              <div className="wrapper" key={request.id}>
                <div className="top">
                  <div className="up">
                    <div className="first-top">
                      <div className="left">
                        <div className={`${open && 'status'} ${expiring2 && 're2d'} ${expiring1 && 'dday'} ${expired && 'expired'}`}>{expired ? 'Expired' : `Expires in ${daysLeft}d`}</div>
                      </div>
                      <div className="right">
                        Sent {statusTimeAgo(request.createdAt)}
                      </div>
                    </div>
                    <p className="title">{request.details.name}</p>
                    <p className="description">{request.details.description}</p>
                  </div>
                  <div className="middle">
                    <div className="client-wrap">
                      <div className="left">
                        <img src={request.client.image} />
                        <div>
                          <p className="name">{request.client.name}</p>
                          <p className="user-details">@{request.client.username} <span></span> {request.client.title} <span></span> {request.workBefore > 0 ? `${request.workBefore} job${request.workBefore > 0 && request.workBefore <= 1 ? '' : 's'} worked together` : 'New Client'}</p>
                        </div>
                      </div>
                      <div className="right">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="project-info-wrap">
                      <div>
                        <p className="txt">Offered</p>
                        <p className="offered">${formatCount(request.info.budget)}</p>
                      </div>
                      <div>
                        <p className="txt">Duration</p>
                        <p className="duration">{request.info.duration}</p>
                      </div>
                      <div>
                        <p className="txt">Type</p>
                        <p className="type">{request.info.type}</p>
                      </div>
                      <div>
                        <p className="txt">Expires</p>
                        <p className={`expires ${expiring2 && 'reminder2'} ${expiring1 && 'dday'} ${expired && 'expired'}`}>{daysLeft > 0 && daysLeft <= 1 ? `${daysLeft} day` : expired ? 'Expired' : `${daysLeft} days`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="left">
                    <button>Accept {isMobile ? '' : 'Offer'}</button>
                    {isMobile ? (
                      <i className="fa-regular fa-message"></i>                  
                    ) : (
                        <button>Message</button>
                    )}
                  </div>
                  <div className="right">
                    <button>Decline</button>
                  </div>
                </div>
              </div>
            )
            })}
        </div>
      </main>
    </>
  )
}