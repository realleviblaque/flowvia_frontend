import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './AppearanceTab.css'
import { useState } from "react";

export function AppearanceTab({all}) {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="appearance-section">
            <SettingsContentHeader />
            <div className="appearance-content">
              <div className="top-part">
                <p className="head-txt">Appearance</p>
                <p className="txt">Choose your preferred theme for the Flowvia interface.</p>
              </div>
              <div className="content">
                <div className="up">
                  <div className={`dark ${isDarkTheme ? 'active' : ''}`} onClick={() => setIsDarkTheme(true)}>
                    <div className="up">
                      <div className="left">
                        <span></span>
                      </div>
                      <div className="right">
                        <span className="head"></span>
                        <span className="body"></span>
                      </div>
                    </div>
                    <div className="down">
                      Dark (Actuve)
                    </div>
                  </div>
                  <div className={`light ${isDarkTheme ? '' : 'active'}`}  onClick={() => setIsDarkTheme(false)}>
                    <div className="up">
                      <div className="left">
                        <span></span>
                      </div>
                      <div className="right">
                        <span className="head"></span>
                        <span className="body"></span>
                      </div>
                    </div>
                    <div className="down">
                      Light
                    </div>
                  </div>
                </div>
                <div className="action">
                  <button>Save Preferences</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}