import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './LoginSessionTab.css'

export function LoginSessionTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="login-section-tab-section">
            <SettingsContentHeader />
            <div className="login-section-tab-content">
              <div className="top-part">
                <p className="head-txt">Login Sessions</p>
                <p className="txt">All devices and broswers currently signed in to your account.Revoke any sessions you don't recognise.</p>
              </div>
              <div className="content">
                <div className="sessions">
                  <div className="left">
                    <span>
                      <i className="fa-solid fa-desktop"></i>
                    </span>
                  </div>
                  <div className="right">
                    <div className="up">
                      <p className="head-txt">Chrome on macOS</p>
                      <span>Current</span>
                    </div>
                    <div className="down">
                      <p>Lagos, Nigeria</p>
                      <span></span>
                      <p>Last active just now</p>
                    </div>
                  </div>
                </div>
                <div className="sessions">
                  <div className="left">
                    <span>
                      <i className="fa-solid fa-mobile"></i>
                    </span>
                  </div>
                  <div className="right">
                    <div className="up">
                      <p className="head-txt">Safari on iPhone 15</p>
                    </div>
                    <div className="down">
                      <p>Lagos, Nigeria</p>
                      <span></span>
                      <p>Last active 2 hours ago</p>
                    </div>
                  </div>
                  <div className="action">
                    <p>Revoke</p>
                  </div>
                </div>
                <div className="sessions">
                  <div className="left">
                    <span>
                      <i className="fa-solid fa-desktop"></i>
                    </span>
                  </div>
                  <div className="right">
                    <div className="up">
                      <p className="head-txt">Firefox on Windows</p>
                    </div>
                    <div className="down">
                      <p>Abija, Nigeria</p>
                      <span></span>
                      <p>Last active 4 days agp</p>
                    </div>
                  </div>
                  <div className="action">
                    <p>Revoke</p>
                  </div>
                </div>
                <div className="login-action">
                  <button>Revoke All Other Sessions</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}