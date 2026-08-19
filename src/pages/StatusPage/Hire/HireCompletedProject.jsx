import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './HireCompletedProject.css'

export function HireCompletedProject({all}) {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-hire-completed-project-main">
        <div className="top-side">
          <div>
              <p className="completed">0</p>
              <p className="txt">Completed</p>
          </div>
          <div>
            <p className="total">0</p>
            <p className="txt">{isMobile ? '' : 'Total '}Paid Out</p>
          </div>
          <div>
            <p className="avg-review">0</p>
            <p className="txt">Avg. Rating{isMobile ? '' : ' Given'}</p>
          </div>
          <div>
            <p className="repeat">0</p>
            <p className="txt">{isMobile ? 'Repeated' : 'Repeat Freelancer'}</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className='active'>All</div>
            <div>This year</div>
            <div>5 Star</div>
            <div>Repeat Clients</div>
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search completed..." />
            </div>
          </div>
        </div>
        <div className="projects-container">
          <div className="wrapper">
            <div className="top">
              <div className="up">
                <div className="first-top">
                  <div className="left">
                    <div className='completed'><i className="fa-solid fa-check"></i> Completed</div>
                  </div>
                  <div className="right">
                    Completed Jan 28 2025
                  </div>
                </div>
                <p className="title">React Developer needed - SaaS Dashboard</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi obcaecati minima in, modi ea, numquam vel amet delectus dolorum odio temporibus accusantium, quia architecto necessitatibus. Laudantium magni ullam quidem labore!</p>
              </div>
              <div className="middle">
                <div className="client-wrap">
                  <div className="left">
                    <img src='/profile.png' />
                    <div>
                      <p className="name">Levi Blaque</p>
                      <p className="user-details">@realleviblaque <span></span> Freelancer</p>
                    </div>
                  </div>
                  <div className="right">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
                <div className="project-info-wrap">
                  <div>
                    <p className="txt">Paid</p>
                    <p className="earned">$3.5K</p>
                  </div>
                  <div>
                    <p className="txt">Duration</p>
                    <p className="duration">3 weeks</p>
                  </div>
                  <div>
                    <p className="txt">Rating</p>
                    <p className="rating"><i className="fa-solid fa-star"></i> 5.0</p>
                  </div>
                  <div>
                    <p className="txt">Repeat Frelancer</p>
                    <p className="repeat">Yes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <button>Rehire</button>
                <button>View {isMobile ? '' : 'Project'}</button>
                {isMobile ? (
                  <i className="fa-regular fa-message"></i>                  
                ) : (
                    <button>Message</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}