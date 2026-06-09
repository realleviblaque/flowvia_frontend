import { GeneralSidebar } from "../../../../components/TeamPage/GeneralSidebar";
import { TeamSidebar } from "../../../../components/TeamPage/TeamSidebar";
import './TeamOverview.css'

export function TeamOverview({all}) {
  return (
    <>
      <GeneralSidebar notification={all} />
      <TeamSidebar />
      <main className="teamPageMain">
        <header className="team-overview-header">
          <div className="left">
            <i className="fa-regular fa-clock"></i>
            <div className="info">
              <p className="hd-txt">Overview</p>
              <div>
                Flowvia Team at a glance
              </div>
            </div>
          </div>
        </header>
        <div className="team-overview-content">
          <div className="top">
            <div>
              <p className="hd-txt">8</p>
              <p className="txt">Total Projects</p>
            </div>
            <div>
              <p className="hd-txt">$120K</p>
              <p className="txt">Total Earned</p>
            </div>
            <div>
              <p className="hd-txt">Open</p>
              <p className="txt">Activity Status</p>
            </div>
            <div>
              <p className="hd-txt">5</p>
              <p className="txt">Total Members</p>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="track">
                <div className="up">
                  <div className="left-side">
                    <p className="hd-txt">Earnings - Last 6 Months</p>
                    <p className="txt">Monthly revenue across all projects</p>
                  </div>
                  <div className="right-side">
                    <select>
                      <option value="6 Months">6 Months</option>
                      <option value="1 Year">1 Year</option>
                    </select>
                  </div>
                </div>
                <div className="down">
                  <div className="monthly">
                    <div className="bar" style={{height: '20%'}}></div>
                    <p className="month">Jan</p>
                  </div>
                  <div className="monthly">
                    <div className="bar"  style={{height: '30%'}}></div>
                    <p className="month">Feb</p>
                  </div>
                  <div className="monthly">
                    <div className="bar" style={{height: '70%'}}></div>
                    <p className="month">Mar</p>
                  </div>
                  <div className="monthly">
                    <div className="bar"  style={{height: '50%'}}></div>
                    <p className="month">April</p>
                  </div>
                  <div className="monthly">
                    <div className="bar" style={{height: '60%'}}></div>
                    <p className="month">May</p>
                  </div>
                  <div className="monthly current">
                    <div className="bar" style={{height: '80%'}}></div>
                    <p className="month">Jun</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="active-project">
                <div className="up">
                  <p className="hd-txt">Active Projects</p>
                  <p className="txt">progress at a glance</p>
                </div>
                <div className="down">
                  <div className="per-project">
                    <div className="first">
                      <p className="title">FinDash Platforms</p>
                      <p className="percent">75%</p>
                    </div>
                    <div className="second">
                      <div className="progress"><span className="bar"></span></div>
                    </div>
                    <div className="third">
                      <div>
                        Phase 3/4
                        <span></span>
                        Apex Build
                        <span></span>
                        April 30
                      </div>
                    </div>
                  </div>
                  <div className="per-project">
                    <div className="first">
                      <p className="title">Flowvia MVP</p>
                      <p className="percent">40%</p>
                    </div>
                    <div className="second">
                      <div className="progress"><span className="bar"></span></div>
                    </div>
                    <div className="third">
                      <div>
                        Phase 2/5
                        <span></span>
                        Internal
                        <span></span>
                        No deadline
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-member">
                <div className="up">
                  <p className="hd-txt">Team Members</p>
                  <p className="txt">Current roster</p>
                </div>
                <div className="down">
                  <div className="member">
                    <div className="img">
                      <img src="/profile.png" />
                      <span className="online"></span>
                    </div>
                    <div className="details">
                      <p className="name">Levi Blaque</p>
                      <div>
                        Owner
                        <span></span>
                        Full-Stack Developer
                      </div>
                    </div>
                    <div className="status">Online</div>
                  </div>
                  <div className="member">
                    <div className="img">
                      <img src="/profile.png" />
                      <span className="online"></span>
                    </div>
                    <div className="details">
                      <p className="name">Amara Osei</p>
                      <div>
                        Designer
                      </div>
                    </div>
                    <div className="status">Online</div>
                  </div>
                  <div className="member">
                    <div className="img">
                      <img src="/profile.png" />
                      <span className="away"></span>
                    </div>
                    <div className="details">
                      <p className="name">Tunde Nwosu</p>
                      <div>
                        Motion Dev
                      </div>
                    </div>
                    <div className="status away">Away</div>
                  </div>
                  <div className="member">
                    <div className="img">
                      <img src="/profile.png" />
                    </div>
                    <div className="details">
                      <p className="name">Kofi Mensah</p>
                      <div>
                        Backend Dev
                      </div>
                    </div>
                    <div className="status offline">Offline</div>
                  </div>
                  <div className="member">
                    <div className="img">
                      <img src="/profile.png" />
                    </div>
                    <div className="details">
                      <p className="name">Zara Tanaka</p>
                      <span className="online"></span>
                      <div>
                        Frontend Dev
                      </div>
                    </div>
                    <div className="status">Online</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}