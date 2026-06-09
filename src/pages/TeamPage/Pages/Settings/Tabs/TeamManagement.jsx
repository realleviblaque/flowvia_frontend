import { GeneralSidebar } from "../../../../../components/TeamPage/GeneralSidebar";
import { TeamSettingsSidebar } from "../../../../../components/TeamPage/Settings/TeamSettingsSidebar";
import { TeamSidebar } from "../../../../../components/TeamPage/TeamSidebar";

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
          <div className="settings-contents">

          </div>
        </div>
      </main>
    </>
  )
}