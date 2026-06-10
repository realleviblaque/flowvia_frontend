import { GeneralSidebar } from "../../../../../../components/TeamPage/GeneralSidebar";
import { TeamSettingsSidebar } from "../../../../../../components/TeamPage/Settings/TeamSettingsSidebar";
import { TeamSidebar } from "../../../../../../components/TeamPage/TeamSidebar";
import './InviteMembers.css'

export function InviteMembers({all}) {
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
          <div className="invite-members-contents">
            <div className="top">
              <p className="hd-txt">Invite Members</p>
              <p className="txt">Add new members to Flowvia Team via invite link or email.</p>
            </div>
            <div className="bottom">
              <div className="link-invite">
                <div className="up">
                  <div className="left">
                    <p className="hd-txt">Invite Link</p>
                  </div>
                </div>
                <div className="down link">
                  <div className="link-invite-cover">
                    <p>https://flowvia.com/invite/flowviateam/tk_9a3d21c8</p>
                    <button>Copy Link</button>
                  </div>
                  <p className="txt">Link expires in 10 minutes and refreshed every 10 minutes <span className="dot"></span> Anyone with the link can join <span className="count">10:00</span></p>
                </div>
              </div>
              <div className="email-invite">
                <div className="up">
                  <div className="left">
                    <p className="hd-txt">Invite by Email</p>
                  </div>
                </div>
                <div className="down email">
                  <div className="email-invite-cover">
                    <input type="text" placeholder="Enter email address..." />
                    <button>Send Invite</button>
                  </div>
                  <div className="pending-invites">
                    <p className="head-txt">Pending Invites</p>
                    <div className="pending-conainer">
                      <div className="pending">
                        <div className="left">
                          <p className="hd-txt">ola@example.com</p>
                          <p className="txt">Sent Just now <span></span> Expires in 24 hours</p>
                        </div>
                        <div className="right">
                          <button>Revoke</button>
                        </div>
                      </div>
                      <div className="pending">
                        <div className="left">
                          <p className="hd-txt">dev@starup.io</p>
                          <p className="txt">Sent 3 hours ago <span></span> Expires in 21 hours</p>
                        </div>
                        <div className="right">
                          <button>Revoke</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="txt">Email Invite Link expires in 24 hour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}