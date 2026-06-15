import { GeneralSidebar } from "../../../../../../components/TeamPage/GeneralSidebar";
import { TeamSettingsSidebar } from "../../../../../../components/TeamPage/Settings/TeamSettingsSidebar";
import { TeamSidebar } from "../../../../../../components/TeamPage/TeamSidebar";
import './SubscriptionBilling.css'

export function SubscriptionBilling({all}) {
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
          <div className="subscription-billing-contents">
            <div className="top">
              <p className="hd-txt">Subscription & Billing</p>
              <p className="txt">Manage your team plan, member limits, and billing history. Upgrading unlocks more members, features, and priority support.</p>
            </div>
            <div className="bottom">
              <div className="plan-type-content">
                <span className="icon">
                  <i className="fa-solid fa-check"></i>
                </span>
                <div>
                  <p className="hd-txt">You're on the Free Plan</p>
                  <p className="txt">Flowvia Team <span></span> Free <span></span> Up to 6 members <span></span> Upgarde to grow your team</p>
                </div>
                <button>Upgrade Now</button>
              </div>
              <div className="plan-choose">
                <p className="hd-txt">Choose Your Plan</p>
                <div className="choose">
                  <div className="plan">
                    <span className="plan-top">Current Plan</span>
                    <p className="plan-type">Free</p>
                    <p className="amount">$0 <span>/</span> <span>month</span></p>
                    <p className="txt-hd">For small teams just getting started</p>
                    <button>Current Plan</button>
                    <div className="down-plan">
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Up to
                        <p>6 members</p>
                      </span>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Up to 5 active projects
                      </span>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Standard marketplace listing
                      </span>
                      <span className="not-avail">
                        <i className="fa-solid fa-x"></i>
                        Advanced analytics
                      </span>
                      <span className="not-avail">
                        <i className="fa-solid fa-x"></i>
                        Priority marketplace listing
                      </span>
                    </div>
                  </div>
                  <div className="plan pro">
                    <span className="plan-top">Recommended</span>
                    <p className="plan-type">Pro</p>
                    <p className="amount">$24.99 <span>/</span> <span>month</span></p>
                    <p className="txt-hd">For growing teams taking on more clients</p>
                    <button>Upgrade to Pro <i className="fa-solid fa-arrow-right"></i></button>
                    <div className="down-plan">
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Up to
                        <p>20 members</p>
                      </span>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited active projects
                      </span>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Priority marketplace listing
                      </span>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Advamced analytics & reports
                      </span>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Verified Team badge
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="billing">
                <p className="hd-txt">Billing History</p>
                <p className="txt-hd">You are on the Free plan - no billing history yet.</p>
                <div className="billing-history">
                  <div className="no-billing">
                    <p>No billing records found.</p>
                    <p>Your payment history will appear here once you subscribe to a paid plan.</p>
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