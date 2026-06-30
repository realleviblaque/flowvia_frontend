import './Subscription.css'

export function Subscription() {
  return (
    <div className="subsciption-content">
      <div className="top-part">
        <p className="head-txt">Subscription & Billing</p>
        <p className="txt">Manage your Flowvia subscription, and see billing history.</p>
      </div>
      <div className="content free-plan">
        <div className="up">
          <div className="left">
            <span className="plan-type">Free Plan</span>
            <p className="head-txt">Flowvia Free</p>
            <p className="txt">Basic marketplace access <span></span> Standard support</p>
          </div>
          <div className="right">
            <button>Upgrade to Pro <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div className="down">
          <div className="left">
            <p className="t-txt">Marketplace Visibility</p>
            <p className="head-txt">Standard</p>
            <p className="txt">Pro unlocks Priority listing and featured placement</p>
          </div>
        </div>
      </div>
      <div className="top-part">
        <p className="head-txt">Pro Plan - What You Unlock</p>
        <p className="txt">Everything in Free,, plus:.</p>
      </div>
      <div className="content pro-plan">
        <div className="pro-features">
          <div>
            <p>Priority Marketplace Listing</p>
            <span><i className="fa-solid fa-check"></i> Pro</span>
          </div>
          <div>
            <p>Advanced Analytics</p>
            <span><i className="fa-solid fa-check"></i> Pro</span>
          </div>
          <div>
            <p>Verified Badge</p>
            <span><i className="fa-solid fa-check"></i> Pro</span>
          </div>
          <div>
            <p>Priority Support</p>
            <span><i className="fa-solid fa-check"></i> Pro</span>
          </div>
        </div>
      </div>
      <div className="top-part">
        <p className="head-txt">Billing History</p>
        <p className="txt">You are on the Free plan - no billing history yet.</p>
      </div>
      <div className="content billing-history">
        <div className="no-billing">
          <p>No billing records found.</p>
          <p>Your payment history will appear here once you subscribe to a paid plan.</p>
        </div>
      </div>
    </div>
  )
}