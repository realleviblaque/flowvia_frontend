import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './BlockedTab.css'

export function BlockedTab({all}) {
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
                <p className="head-txt">Blocked Users</p>
                <p className="txt">Blocked users cannot message you, view your profile, or interact with your posts.</p>
              </div>
              <div className="content">
                <div className="head">
                  <p>3 blocked users</p>
                  <input type="text" placeholder="Search blocked users..." />
                </div>
                <div className="block-wrap">
                  <div className="left">
                    <img src="/profile.png" />
                    <div className="details">
                      <p className="head-txt">Unknown User</p>
                      <div>
                        <p>@unknownuser</p>
                        <span></span>
                        <p>Blocked 3 weeks ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <button>Unblock</button>
                    <button>Report</button>
                  </div>
                </div>
                <div className="block-wrap">
                  <div className="left">
                    <img src="/profile.png" />
                    <div className="details">
                      <p className="head-txt">Spam Account</p>
                      <div>
                        <p>@spanacct</p>
                        <span></span>
                        <p>Blocked 1 month ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <button>Unblock</button>
                    <button>Report</button>
                  </div>
                </div>
                <div className="block-wrap">
                  <div className="left">
                    <img src="/profile.png" />
                    <div className="details">
                      <p className="head-txt">Hidden User</p>
                      <div>
                        <p>@hiddenuser</p>
                        <span></span>
                        <p>Blocked 2 months ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <button>Unblock</button>
                    <button>Report</button>
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