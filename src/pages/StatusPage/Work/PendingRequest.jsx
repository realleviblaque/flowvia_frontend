import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './PendingRequest.css'

export function PendingRequest({all}) {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-pemding-request-main">
        <div className="top-side">
          <div>
              <p className="pending">0</p>
              <p className="txt">Pending</p>
          </div>
          <div>
            <p className="expiring">0</p>
            <p className="txt">Expiring Soon</p>
          </div>
          <div>
            <p className="expired">0</p>
            <p className="txt">Expired</p>
          </div>
          <div>
            <p className="total">0</p>
            <p className="txt">Total Offered</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search request..." />
            </div>
          </div>
        </div>
        <div className="projects-container">
          <div className="wrapper">
            <div className="top">
              <div className="up">
                <div className="first-top">
                  <div className="left">
                    <div className='status'>Expires in 4d</div>
                  </div>
                  <div className="right">
                    Sent 1 day ago
                  </div>
                </div>
                <p className="title">Direct Hire - Full Stack for MVP Build</p>
                <p className="description">Brand new product, need a full-stack developer to build the entire MVP from scratch. React fronted, Node.js, PostgreSQL. 3-month engagement.</p>
              </div>
              <div className="middle">
                <div className="client-wrap">
                  <div className="left">
                    <img src='/profile.png'/>
                    <div>
                      <p className="name">Nadia James</p>
                      <p className="user-details">@nadiajames <span></span> Startup Founder <span></span> New Client</p>
                    </div>
                  </div>
                  <div className="right">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
                <div className="project-info-wrap">
                  <div>
                    <p className="txt">Offered</p>
                    <p className="offered">$4.2K</p>
                  </div>
                  <div>
                    <p className="txt">Duration</p>
                    <p className="duration">3 months</p>
                  </div>
                  <div>
                    <p className="txt">Type</p>
                    <p className="type">Remote</p>
                  </div>
                  <div>
                    <p className="txt">Expires</p>
                    <p className="expires">4 days</p>
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
        </div>
      </main>
    </>
  )
}