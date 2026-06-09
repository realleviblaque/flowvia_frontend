import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './PushNotificationTab.css'

export function PushNotificationTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="push-notifi-tab-section">
            <SettingsContentHeader />
            <div className="push-notifi-tab-content">
              <div className="top-part">
                <p className="head-txt">Push Notifications</p>
                <p className="txt">In-app and mobile push alerts - delivered in real time.</p>
              </div>
              <div className="content">
                <div className="feed-content">
                  <div className="head">
                    <p className="head-txt">Social Activity</p>
                    <p className="txt">Alerts about activity on your posts and profile</p>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">Likes</p>
                      <p className="txt">When someone likes one of your posts</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">Comments</p>
                      <p className="txt">When someone comments on your post</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">New Followers</p>
                      <p className="txt">When someone follows your profile</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">Mentions</p>
                      <p className="txt">When someone tags you in a post or comment</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">Reposts</p>
                      <p className="txt">When someone reposts your content</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">Messages</p>
                      <p className="txt">Chat and direct message alerts</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">New Messages</p>
                      <p className="txt">When you receive a direct message from anyone</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">Hire Request Messages</p>
                      <p className="txt">Messages attached to direct hire offers from recruiters</p>
                    </div>
                    <div className="right">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="feed">
                    <div className="left">
                      <p className="head-txt">New Messages</p>
                      <p className="txt">When you receive a direct message from anyone</p>
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