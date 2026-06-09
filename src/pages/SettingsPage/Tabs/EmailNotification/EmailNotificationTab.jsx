import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './EmailNotificationTab.css'

export function EmailNotificationTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="email-notifi-tab-section">
            <SettingsContentHeader />
            <div className="email-notifi-tab-content">
              <div className="top-part">
                <p className="head-txt">Email Notifications</p>
                <p className="txt">Choose which emails Flowvia sends to your inboc. Critical security emails are always sent.</p>
              </div>
              <div className="content">
                <div className="feed-content">
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">Weekly Activity Digest</p>
                      <p className="txt">A summary of your projects, applicaations, and feed activity every Monday morning</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">New Job Match Alerts</p>
                      <p className="txt">When a new job in the marketplace matches your skills and rate range</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">Hire Request Emails</p>
                      <p className="txt">Email copy of direct hire requests sent to your account</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">Project Updates</p>
                      <p className="txt">Phase complettions, recruiter messages, and milestone activity on your project</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">Deadline Reminders</p>
                      <p className="txt">Email reminders 3 days and 1 day before project deadlines</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">Marketing & Project Updates</p>
                      <p className="txt">New Flowvia features, platform announcements, and tips for freelancers</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <div className="action-btn">
                  <button className="save-btn">Save Preferences</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}