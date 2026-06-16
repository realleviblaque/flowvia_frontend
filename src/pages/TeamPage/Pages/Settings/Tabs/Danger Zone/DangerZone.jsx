import { GeneralSidebar } from "../../../../../../components/TeamPage/GeneralSidebar";
import { TeamSettingsSidebar } from "../../../../../../components/TeamPage/Settings/TeamSettingsSidebar";
import { TeamSidebar } from "../../../../../../components/TeamPage/TeamSidebar";
import './DangerZone.css'

export function DangerZone({all}) {
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
          <div className="danger-zone-contents">
            <div className="top">
              <p className="hd-txt">Danger Zone</p>
              <p className="txt">permanent actions - cannot be undone.</p>
            </div>
            <div className="bottom">
              <div className="content">
                <p className="hd-txt">Transfer Ownership</p>
                <p className="txt">Transfer the team ower role to another member. You will become a regular member.</p>
                <button>Transfer Ownership</button>
              </div>
              <div className="content">
                <p className="hd-txt">Delete Team</p>
                <p className="txt">Permanently delete Flowvia Team. All team projects, chat history, portfolio, and member data will be removed. This cannot be reversed.</p>
                <button>Delete Flowvia Team</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}