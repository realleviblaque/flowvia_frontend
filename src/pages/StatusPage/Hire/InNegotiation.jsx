import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './InNegotiation.css'

export function InNegotiation({all}) {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-in-negotiation-main">
        <div className="nav-wrap">
          <div className="left">
            
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search negotiation..." />
            </div>
          </div>
        </div>
        <div className="projects-container">
          <div className="wrapper">
            <div className="top">
              <div className="up">
                <div className="first-top">
                  <div className="left">
                    <div className='short'>Shortlisted</div>
                  </div>
                  <div className="right">
                    Started 3 days ago
                  </div>
                </div>
                <p className="title">React Developer needed - SaaS Dashboard</p>
                <p className="description">Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.</p>
              </div>
              <div className="middle">
                <div className="client-wrap">
                  <div className="left">
                    <img src='/profile.png'/>
                  </div>
                  <div className="right">
                    <p className="name">Zara Tanaka</p>
                    <p className="user-details">@zaratanaka <span></span> Reccruiter</p>
                    <p className="title">Frontend Dev</p>
                    <p className="bio">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, iure. Eaque odit ipsam iste modi dicta necessitatibus tempore perspiciatis est molestiae iure a fugiat sed reiciendis, aut amet velit. Dolorum!</p>
                    <div className="job-done">12 jobs done</div>
                  </div>
                </div>
                <div className="thier-message">
                  <p className="hd-txt">Their Message</p>
                  <span>
                    <p className="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A iusto esse recusandae reiciendis, animi temporibus rem cupiditate aliquam officia repellendus culpa nulla nostrum quidem repudiandae nisi eius. Officiis, accusantium eaque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ipsam saepe impedit dolore dignissimos non, eveniet natus blanditiis voluptas doloribus voluptatem distinctio veniam eius fugiat sequi consequuntur atque molestiae!</p>
                  </span>
                </div>
                <div className="negotiation">
                  <p className="hd-txt">Negotiation</p>
                  <div className="wrap">
                    <div>
                      <p className="txt">Their Ask</p>
                      <p className="hd">$1.8K / project</p>
                    </div>
                    <div>
                      <p className="txt">Your Budget</p>
                      <p className="hd">$500-$2K</p>
                    </div>
                    <div>
                      <p className="txt">Status</p>
                      <p className="hd">Within Range <i className="fa-solid fa-check"></i></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <button>Hire {isMobile ? '' : 'Now'}</button>
                {isMobile ? (
                  <i className="fa-regular fa-message"></i>                  
                ) : (
                    <button>Message</button>
                )}
                <button>{isMobile ? '' : 'View'} Profile</button>
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