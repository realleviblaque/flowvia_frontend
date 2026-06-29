import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './ProfessionalTab.css'
import { Professional } from "../../../../components/SettingsPage/Pages/Professional/Professional";

export function ProfessionalTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="professional-details-section">
            <SettingsContentHeader />
            <div className="professional-details-content">
              <div className="top-part">
                <p className="head-txt">Professional Details</p>
                <p className="txt">Your professional identity - shown to recruiters and clients browsing the marketplace.</p>
              </div>
              <Professional />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}