import { GeneralSidebar } from "../../../../../../components/TeamPage/GeneralSidebar";
import { TeamSettingsSidebar } from "../../../../../../components/TeamPage/Settings/TeamSettingsSidebar";
import { TeamSidebar } from "../../../../../../components/TeamPage/TeamSidebar";
import './TeamVisibility.css'

export function TeamVisibility({all}) {
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
          <div className="team-visbility-contents">
            <div className="top">
              <p className="hd-txt">Team Visibility</p>
              <p className="txt">Controls how Flowvia Team appears in the Flowvia platform.</p>
            </div>
            <div className="bottom">
              <div className="control-box">
                <div className="left">
                  <p className="hd-txt">Show team in Marketplace</p>
                  <p className="txt">Your team appears in the Teams tab and is discoverale by recruiters</p>
                </div>
                <div className="right">
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
              <div className="control-box">
                <div className="left">
                  <p className="hd-txt">Accept Hire Request</p>
                  <p className="txt">Allow clients to send direct hire requests to your team</p>
                </div>
                <div className="right">
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
              <div className="control-box">
                <div className="left">
                  <p className="hd-txt">Show Portfolio publicly</p>
                  <p className="txt">Your completed projects appear on your public team profile</p>
                </div>
                <div className="right">
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
              <div className="control-box">
                <div className="left">
                  <p className="hd-txt">Show Earning Badge</p>
                  <p className="txt">Display total earningson your team profile card in the marketplace</p>
                </div>
                <div className="right">
                  <input type="checkbox" />
                </div>
              </div>
              <button>Save Changes</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}