import { GeneralSidebar } from "../../../../../../components/TeamPage/GeneralSidebar";
import { TeamSettingsSidebar } from "../../../../../../components/TeamPage/Settings/TeamSettingsSidebar";
import { TeamSidebar } from "../../../../../../components/TeamPage/TeamSidebar";
import './MembersRoles.css'

export function MembersRoles({all}) {
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
          <div className="members-roles-contents">
            <div className="top">
              <p className="hd-txt">Members & Roles</p>
              <p className="txt">Management your team members, assign roles, and set permissions.</p>
            </div>
            <div className="bottom">
              <div className="up">
                <div className="left">
                  <p className="hd-txt">5 Members</p>
                </div>
                <div className="right">
                  <button><i className="fa-solid fa-plus"></i> Invite</button>
                </div>
              </div>
              <div className="down">
                <div className="memebers">
                  <div className="left">
                    <img src="/profile.png" />
                    <div className="profile-info">
                      <div className="name-role">
                        <p className="name">Levi Blaque</p>
                        <span>Owner</span>
                      </div>
                      <div className="user-title">
                        <p>@realleviblaque</p>
                        <span></span>
                        <p>Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="memebers">
                  <div className="left">
                    <img src="/profile.png" />
                    <div className="profile-info">
                      <div className="name-role">
                        <p className="name">Amara Osei</p>
                        <span>Moderator</span>
                      </div>
                      <div className="user-title">
                        <p>@amaraosei</p>
                        <span></span>
                        <p>UI / Product Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <button className="edit">Edit Role</button>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="memebers">
                  <div className="left">
                    <img src="/profile.png" />
                    <div className="profile-info">
                      <div className="name-role">
                        <p className="name">Tunde Nwosu</p>
                        <span className="member">Member</span>
                      </div>
                      <div className="user-title">
                        <p>@tundenwosu</p>
                        <span></span>
                        <p>Motion Designer & Dev</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <button className="edit">Assign Role</button>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="memebers">
                  <div className="left">
                    <img src="/profile.png" />
                    <div className="profile-info">
                      <div className="name-role">
                        <p className="name">Kofi Mensah</p>
                        <span className="member">Member</span>
                      </div>
                      <div className="user-title">
                        <p>@kofimensah</p>
                        <span></span>
                        <p>Backend Developer</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <button className="edit">Assign Role</button>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="memebers">
                  <div className="left">
                    <img src="/profile.png" />
                    <div className="profile-info">
                      <div className="name-role">
                        <p className="name">Zara Tanaka</p>
                        <span className="member">Member</span>
                      </div>
                      <div className="user-title">
                        <p>@zaratanaka</p>
                        <span></span>
                        <p>Frontend Developer</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <button className="edit">Assign Role</button>
                    <button>Remove</button>
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