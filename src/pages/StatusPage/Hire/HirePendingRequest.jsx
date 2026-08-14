import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './HirePendingRequest.css'

export function HirePendingRequest({all}) {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-hire-pending-request-main">
        <div className="top-side">
          <div>
              <p className="applicant">7</p>
              <p className="txt">{isMobile ? '' : 'Total '}Applicants</p>
          </div>
          <div>
            <p className="not-rev">4</p>
            <p className="txt">{isMobile ? 'Not Rev.' : 'Not Reviewed'}</p>
          </div>
          <div>
            <p className="shortlisted">2</p>
            <p className="txt">Shortlisted</p>
          </div>
          <div>
            <p className="discussion">1</p>
            <p className="txt">{isMobile ? '' : 'In '}Discussion</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className='active'>All</div>
            <div>New</div>
            <div>Shortlisted</div>
            <div>Reviewed</div>
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search applicants..." />
            </div>
          </div>
        </div>
        <div className="projects-container">
          <div className="wrapper">
            <div className="top">
              <div className="up">
                <div className="first-top">
                  <div className="client">
                    <div className="left-side">
                      <img src="/profile.png" />
                    </div>
                    <div className="right-side">
                      <div className="name-info">
                        <p className="name">Zara Tanaka</p>
                        <div className='new'>New</div>
                      </div>
                      <p className="username">@zaratanaka</p>
                      <div className="title">Frontend Dev</div>
                      <p className="bio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odit maxime earum eveniet excepturi vel quisquam odio inventore sint pariatur sapiente esse eaque, facere magnam laborum consequatur minus fugiat perspiciatis.</p>
                      <div className="details">
                        <div>
                          12 jobs done
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    {isMobile ? '' : 'Applied '}3 days ago
                  </div>
                </div>
              </div>
              <div className="middle">
                <p className="txt">Cover Message</p>
                <span>
                  <p className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor cupiditate similique eligendi adipisci sapiente delectus, doloribus atque molestias eos asperiores animi maiores doloremque odio officia corporis neque tenetur? Exercitationem, architecto.</p>
                </span>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <button className="shortlist">Shortlist</button>
                {/* <button className="start">Start Discussion</button> */}
                <button className="review">Review</button>
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