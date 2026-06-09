import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './OnlineTab.css'

export function OnlineTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="online-status-tab-section">
            <SettingsContentHeader />
            <div className="online-status-tab-content">
              <div className="top-part">
                <p className="head-txt">Online Status</p>
                <p className="txt">Controls what others can see about your presence and activity on Flowvia.</p>
              </div>
              <div className="online-content">
                <div className="status-card-content">
                  <div className="options">
                    <div className="left">
                      <p className="head-txt">Show Online Status</p>
                      <p className="txt">Show a green dot indicator when you are curretly active on Flowvia</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="options">
                    <div className="left">
                      <p className="head-txt">Show Last Seen</p>
                      <p className="txt">Let others see when you were last active - e.g. "Active 2 hours ago"</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="options">
                    <div className="left">
                      <p className="head-txt">Show Availability Status</p>
                      <p className="txt">Display your work status (Open to Work, Busy, etc.) on your profile card in the marketplace</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <div className="action-btn">
                  <button className="save-btn">Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}