import { GeneralSidebar } from "../../../../components/TeamPage/GeneralSidebar";
import { TeamSidebar } from "../../../../components/TeamPage/TeamSidebar";
import './TeamMembers.css'

export function TeamMembers({all}) {
  return (
    <>
      <GeneralSidebar notification={all} />
      <TeamSidebar />
      <main className="teamPageMain">
        <header className="team-members-header">
          <div className="left">
            <i className="fa-regular fa-user"></i>
            <div className="info">
              <p className="hd-txt">Members</p>
              <div>
                5 members 
                <span></span>
                3 online
              </div>
            </div>
          </div>
          <div className="right">
            <button>
              <i className="fa-solid fa-plus"></i>
              Invite Member
            </button>
          </div>
        </header>
        <div className="members-container">
          <div className="top">
            <div>
              <span className="online"></span>
              Online now (3)
            </div>
            <div>
              <span className="away"></span>
              Away (1)
            </div>
            <div>
              <span className="offline"></span>
              Offline (1)
            </div>
          </div>
          <div className="down">
            <div className="profile">
              <div className="up"></div>
              <div className="bottom">
                <div className="profile-top">
                  <div className="img">
                    <img src="/profile.png" />
                    <span className="online"></span>
                  </div>
                  <p>Owner</p>
                </div>
                <div className="profile-details">
                  <p className="name">Levi Blaque</p>
                  <p className="title">Full Stack Developer</p>
                  <div className="extra-info-first">
                    <p>@realleviblaque</p>
                    <span></span>
                    <p>Lagos, NG</p>
                  </div>
                  <div className="extra-info-second">
                    <span>
                      <p className="count">16K</p>
                      Followers
                    </span>
                    <span>
                      <p className="count">8</p>
                      Projects
                    </span>
                  </div>
                  <div className="skills">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>PostreSQL</span>
                    <span>Python</span>
                    <span>JavaScript</span>
                    <span>MongoDB</span>
                  </div>
                  <div className="action">
                    <div>
                      <button>Message</button>
                    </div>
                    <div>
                      <button>View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="up"></div>
              <div className="bottom">
                <div className="profile-top">
                  <div className="img">
                    <img src="/profile.png" />
                    <span className="online"></span>
                  </div>
                  <p>Designer</p>
                </div>
                <div className="profile-details">
                  <p className="name">Amara Osei</p>
                  <p className="title">UI / Product Designer</p>
                  <div className="extra-info-first">
                    <p>@amaraosei</p>
                    <span></span>
                    <p>Lagos, NG</p>
                  </div>
                  <div className="extra-info-second">
                    <span>
                      <p className="count">16K</p>
                      Followers
                    </span>
                    <span>
                      <p className="count">8</p>
                      Projects
                    </span>
                  </div>
                  <div className="skills">
                    <span>React</span>
                    <span>Figma</span>
                    <span>UI ? UX</span>
                  </div>
                  <div className="action">
                    <div>
                      <button>Message</button>
                      <button>Change Role</button>
                    </div>
                    <div>
                      <button>View Profile</button>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="up"></div>
              <div className="bottom">
                <div className="profile-top">
                  <div className="img">
                    <img src="/profile.png" />
                    <span className="away"></span>
                  </div>
                  <p>Motion Dev</p>
                </div>
                <div className="profile-details">
                  <p className="name">Tunde Nwosu</p>
                  <p className="title">Motion Designer & Dev</p>
                  <div className="extra-info-first">
                    <p>@tundenwosu</p>
                    <span></span>
                    <p>Lagos, NG</p>
                  </div>
                  <div className="extra-info-second">
                    <span>
                      <p className="count">16K</p>
                      Followers
                    </span>
                    <span>
                      <p className="count">8</p>
                      Projects
                    </span>
                  </div>
                  <div className="skills">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>PostreSQL</span>
                    <span>Motion</span>
                    <span>JavaScript</span>
                  </div>
                  <div className="action">
                    <div>
                      <button>Message</button>
                      <button>Change Role</button>
                    </div>
                    <div>
                      <button>View Profile</button>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="up"></div>
              <div className="bottom">
                <div className="profile-top">
                  <div className="img">
                    <img src="/profile.png" />
                    <span className="offline"></span>
                  </div>
                  <p>Backend Dev</p>
                </div>
                <div className="profile-details">
                  <p className="name">Kofi Mensah</p>
                  <p className="title">Backend Developer</p>
                  <div className="extra-info-first">
                    <p>@kofimensah</p>
                    <span></span>
                    <p>Lagos, NG</p>
                  </div>
                  <div className="extra-info-second">
                    <span>
                      <p className="count">16K</p>
                      Followers
                    </span>
                    <span>
                      <p className="count">8</p>
                      Projects
                    </span>
                  </div>
                  <div className="skills">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>PostreSQL</span>
                    <span>Python</span>
                    <span>JavaScript</span>
                    <span>MongoDB</span>
                  </div>
                  <div className="action">
                    <div>
                      <button>Message</button>
                      <button>Change Role</button>
                    </div>
                    <div>
                      <button>View Profile</button>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="up"></div>
              <div className="bottom">
                <div className="profile-top">
                  <div className="img">
                    <img src="/profile.png" />
                    <span className="online"></span>
                  </div>
                  <p>Frontend Dev</p>
                </div>
                <div className="profile-details">
                  <p className="name">Zara Tanaka</p>
                  <p className="title">Frontend Developer</p>
                  <div className="extra-info-first">
                    <p>@zaratananka</p>
                    <span></span>
                    <p>Lagos, NG</p>
                  </div>
                  <div className="extra-info-second">
                    <span>
                      <p className="count">16K</p>
                      Followers
                    </span>
                    <span>
                      <p className="count">8</p>
                      Projects
                    </span>
                  </div>
                  <div className="skills">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>PostreSQL</span>
                    <span>JavaScript</span>
                  </div>
                  <div className="action">
                    <div>
                      <button>Message</button>
                      <button>Change Role</button>
                    </div>
                    <div>
                      <button>View Profile</button>
                      <button>Remove</button>
                    </div>
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