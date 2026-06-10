import { GeneralSidebar } from "../../../../../../components/TeamPage/GeneralSidebar";
import { TeamSettingsSidebar } from "../../../../../../components/TeamPage/Settings/TeamSettingsSidebar";
import { TeamSidebar } from "../../../../../../components/TeamPage/TeamSidebar";
import './TeamManagement.css'

export function TeamManagement({all}) {
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
          <div className="team-management-contents">
            <div className="top">
              <p className="hd-txt">Team Management</p>
              <p className="txt">Updates your team's public profile and identity.</p>
            </div>
            <div className="bottom">
              <div className="up">
                Team Identity
              </div>
              <div className="down">
                <div className="profile">
                  <img src="/profile.png" />
                  <div className="right">
                    <button>Upload Logo</button>
                    <div>
                      PNG or SVG <span></span> Recommended 480x480px
                    </div>
                  </div>
                </div>
                <div className="details">
                  <div className="input-cover">
                    <div>
                      <p className="txt">Team Name</p>
                      <input type="text" placeholder="Enter your team name" defaultValue='Flowvia Team' />
                    </div>
                    <div>
                      <p className="txt">Username / Handle</p>
                      <input type="text" placeholder="Enter your team username" defaultValue='flowviateam' />
                    </div>
                  </div>
                  <div className="input-cover">
                    <div>
                      <p className="txt">Professional Title</p>
                      <input type="text" placeholder="Enter your team professional title" defaultValue='Creative Agency' />
                    </div>
                    <div>
                      <p className="txt">Team Size</p>
                      <select>
                        <option value="0-5">0-5</option>
                        <option value="5-10">5-10</option>
                        <option value="10-20">10-20</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-cover">
                    <div>
                      <p className="txt">Team Description</p>
                      <textarea placeholder="Enter your team description" defaultValue='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nam autem culpa nulla aspernatur fugiat laudantium soluta inventore neque sit saepe voluptates quae quaerat, alias, animi officiis. Laborum, veniam quidem?'></textarea>
                    </div>
                  </div>
                  <div className="input-cover">
                    <div>
                      <p className="txt">Website</p>
                      <input type="text" placeholder="https://flowviateam.com" />
                    </div>
                    <div>
                      <p className="txt">Location</p>
                      <input type="text" placeholder="Enter your team location" defaultValue='Lagos, Nigeria' />
                    </div>
                  </div>
                </div>
                <div className="action">
                  <button>Save Changes</button>
                  <button>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}