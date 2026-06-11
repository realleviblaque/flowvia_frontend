import { GeneralSidebar } from "../../../../../../components/TeamPage/GeneralSidebar";
import { TeamSettingsSidebar } from "../../../../../../components/TeamPage/Settings/TeamSettingsSidebar";
import { TeamSidebar } from "../../../../../../components/TeamPage/TeamSidebar";
import './StatusManagement.css'

export function StatusManagement({all}) {
  return (
    <>
      <GeneralSidebar notification={all} />
      <TeamSidebar />
      <main className="teamPageMain">
        <header className="team-settings-header">
          <div className="left">
            <i className="fa-solid fa-gear"></i>
            <div className="info">
              <p className="hd-txt">Team Settings</p>
              <div>
                Manage Flowvia Team - only visible to admins
              </div>
            </div>
          </div>
        </header>
        <div className="team-settings-container">
          <TeamSettingsSidebar />
          <div className="status-manahement-contents">
            <div className="top">
              <p className="hd-txt">Status Management</p>
              <p className="txt">Members can set their availability status here. Status changes are reflected across the team roster.</p>
              <div className="status-info">
                <span className="online">Online (3)</span>
                <span className="away">Away (1)</span>
                <span className="offline">Offline (1)</span>
              </div>
            </div>
            <div className="bottom">
              <div className="memeber-status">
                <div className="up">
                  <div className="left">
                    <p className="hd-txt">My Status</p>
                    <p className="txt">Only you can change your own status</p>
                  </div>
                </div>
                <div className="down my-status">
                  <div className="profile-top">
                    <div className="img">
                      <img src="/profile.png" />
                      <span></span>
                    </div>
                    <div className="user-info">
                      <div className="name-roles">
                        <p className="name">Levi Blaque</p>
                        <span>Owner</span>
                      </div>
                      <div className="status-check">
                        <p>Currently:</p>
                        <p className="status"><span></span> Online</p>
                      </div>
                    </div>
                  </div>
                  <div className="status-action-wrap">
                    <p className="head-txt">Set Your Status</p>
                    <div className="status-option">
                      <div className="status-choose current">
                        <span className="online"></span>
                        <div className="right">
                          <p className="hd-txt online">Available</p>
                          <p className="txt">Active and available now</p>
                        </div>
                      </div>
                      <div className="status-choose">
                        <span className="away"></span>
                        <div className="right">
                          <p className="hd-txt away">Away</p>
                          <p className="txt">Stepped away, may be slow to respond or currently unavailable</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="actions">
                    <button>Update My Status</button>
                  </div>
                </div>
              </div>
              <div className="member-authority">
                <div className="up">
                  <div className="left">
                    <p className="hd-txt">All Members</p>
                  </div>
                  <p className="txt">Admins can reset any member's status</p>
                </div>
                <div className="down all-members">
                  <div className="member">
                    <div className="img">
                      <img src="/profile.png" />
                      <span></span>
                    </div>
                    <div className="user-info">
                      <div className="name-roles">
                        <p className="name">Levi Blaque</p>
                      </div>
                      <div className="status-check">
                        <p>Owner <span></span> Full Stack Developer</p>
                      </div>
                    </div>
                    <div className="actions">
                      <div><span></span>Online</div>
                      <button>Edit</button>
                    </div>
                  </div>
                  <div className="member">
                    <div className="img">
                      <img src="/profile.png" />
                      <span></span>
                    </div>
                    <div className="user-info">
                      <div className="name-roles">
                        <p className="name">Amara Osei</p>
                      </div>
                      <div className="status-check">
                        <p>Moderator <span></span> Designer</p>
                      </div>
                    </div>
                    <div className="actions">
                      <div><span></span>Online</div>
                      <button>Edit</button>
                    </div>
                  </div>
                  <div className="member">
                    <div className="img">
                      <img src="/profile.png" />
                      <span className="away"></span>
                    </div>
                    <div className="user-info">
                      <div className="name-roles">
                        <p className="name">Tunde Nwosu</p>
                      </div>
                      <div className="status-check">
                        <p>Member <span></span> Motion Dev</p>
                      </div>
                    </div>
                    <div className="actions">
                      <div className="away"><span></span>Away</div>
                      <button>Reset</button>
                    </div>
                  </div>
                  <div className="member">
                    <div className="img">
                      <img src="/profile.png" />
                      <span className="offline"></span>
                    </div>
                    <div className="user-info">
                      <div className="name-roles">
                        <p className="name">Kofi Mensah</p>
                      </div>
                      <div className="status-check">
                        <p>Member <span></span> Backend Dev</p>
                      </div>
                    </div>
                    <div className="actions">
                      <div className="offline"><span></span>Offline</div>
                      <button>Edit</button>
                    </div>
                  </div>
                  <div className="member">
                    <div className="img">
                      <img src="/profile.png" />
                      <span></span>
                    </div>
                    <div className="user-info">
                      <div className="name-roles">
                        <p className="name">Zara Tanaka</p>
                      </div>
                      <div className="status-check">
                        <p>Member <span></span> Frontend Dev</p>
                      </div>
                    </div>
                    <div className="actions">
                      <div><span></span>Online</div>
                      <button>Edit</button>
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