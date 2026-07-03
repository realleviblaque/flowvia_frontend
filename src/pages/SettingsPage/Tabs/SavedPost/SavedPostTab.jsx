import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './SavedPostTab.css'
import { Saved } from "../../../../components/SettingsPage/Pages/Saved/Saved";

export function SavedPostTab({all, savePosts}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="saved-section">
            <SettingsContentHeader />
            <div className="saved-content">
              <div className="top-part">
                <p className="head-txt">Saved Posts</p>
                <p className="txt">Posts you've bookmarked from the feed. Tap the bookmark icon on any post to save it here.</p>
              </div>
              <Saved savePosts={savePosts} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}