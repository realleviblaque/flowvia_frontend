import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './VerificationTab.css'

export function VerificationTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="verification-tab-section">
            <SettingsContentHeader />
            <div className="verification-tab-content">
              <div className="top-part">
                <p className="head-txt">Account Verification</p>
                <p className="txt">Verified accounts get a badge, higher search ranking, and significantly more trust from clients and recruiters.</p>
              </div>
              <div className="content">
                <div className="head">
                  <p className="head-txt">Verification Steps</p>
                  <p className="txt">2 / 4 complete</p>
                </div>
                <div className="verification-step">
                  <div className="left">
                    <span className="count-check completed"><i className="fa-solid fa-check"></i></span>
                  </div>
                  <div className="right">
                    <p className="head-txt">Complete your profile</p>
                    <p className="txt">Add your name, title, bio, and at least 3 skills</p>
                  </div>
                </div>
                <div className="verification-step">
                  <div className="left">
                    <span className="count-check completed"><i className="fa-solid fa-check"></i></span>
                  </div>
                  <div className="right">
                    <p className="head-txt">Confirm email address</p>
                    <p className="txt">Your email youremail@gmail.com has been confirmed</p>
                  </div>
                </div>
                <div className="verification-step">
                  <div className="left">
                    <span className="count-check">3</span>
                  </div>
                  <div className="right">
                    <p className="head-txt">Complete your first project on Flowvia</p>
                    <p className="txt">Deliver and close at least one project through the platforms. This established your track record.</p>
                  </div>
                </div>
                <div className="verification-step">
                  <div className="left">
                    <span className="count-check">4</span>
                  </div>
                  <div className="right">
                    <p className="head-txt">Receiver your first review</p>
                    <p className="txt">Get a review from a client after completing a project. 4 stars or above required.</p>
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