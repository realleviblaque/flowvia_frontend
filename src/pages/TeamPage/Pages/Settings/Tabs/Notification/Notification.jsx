import { GeneralSidebar } from "../../../../../../components/TeamPage/GeneralSidebar";
import { TeamSettingsSidebar } from "../../../../../../components/TeamPage/Settings/TeamSettingsSidebar";
import { TeamSidebar } from "../../../../../../components/TeamPage/TeamSidebar";
import './Notification.css'

export function Notification({all}) {
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
          <div className="team-notification-contents">
            <div className="top">
              <p className="hd-txt">Team Notifications</p>
              <p className="txt">Choose what trigers a team notification for all members.</p>
            </div>
            <div className="bottom">
              <div className="control-box">
                <div className="left">
                  <p className="hd-txt">New Hire Requests</p>
                  <p className="txt">Notify all members when a client sends a hire request to the team</p>
                </div>
                <div className="right">
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
              <div className="control-box">
                <div className="left">
                  <p className="hd-txt">Project Phase Completions</p>
                  <p className="txt">Notify all members when a project phase is marked completed</p>
                </div>
                <div className="right">
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
              <div className="control-box">
                <div className="left">
                  <p className="hd-txt">New Team Member</p>
                  <p className="txt">Notify all members when someone joined the team</p>
                </div>
                <div className="right">
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
              <div className="control-box">
                <div className="left">
                  <p className="hd-txt">Team Chat Mentions</p>
                  <p className="txt">Push notification when you're @mentioned in the team chat</p>
                </div>
                <div className="right">
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
              <div className="control-box">
                <div className="left">
                  <p className="hd-txt">New Reviews</p>
                  <p className="txt">When a client leaves a review on a team project</p>
                </div>
                <div className="right">
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
              <button>Save Preferences</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}