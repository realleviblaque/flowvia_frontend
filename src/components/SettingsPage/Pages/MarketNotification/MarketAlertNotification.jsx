import './MarketNotification.css'

export function MarketNotification() {
  return (
    <div className="market-alert-content">
      <div className="feed-content">
        <div className="head">
          <p className="head-txt">Jobs & Hiring</p>
          <p className="txt">Alerts about job posts and hiring activity</p>
        </div>
        <div className="feed">
          <div className="left">
            <p className="head-txt">New Job Posts</p>
            <p className="txt">When a new job matching your skills is posted on the marketplace</p>
          </div>
          <div className="right">
            <input type="checkbox" />
          </div>
        </div>
        <div className="feed">
          <div className="left">
            <p className="head-txt">New Applicants on Your Posts</p>
            <p className="txt">When someone applies to a new job you've posted</p>
          </div>
          <div className="right">
            <input type="checkbox" />
          </div>
        </div>
        <div className="feed">
          <div className="left">
            <p className="head-txt">Direct Hire Request</p>
            <p className="txt">When a client sends you a direct hire offer</p>
          </div>
          <div className="right">
            <input type="checkbox" />
          </div>
        </div>
        <div className="feed">
          <div className="left">
            <p className="head-txt">Expiring Request Reminders</p>
            <p className="txt">24-hour warning before a hire request you received expires</p>
          </div>
          <div className="right">
            <input type="checkbox" />
          </div>
        </div>
        <div className="head">
          <p className="head-txt">Smart Recommendations</p>
          <p className="txt">Personalized suggestions based on your skills and history</p>
        </div>
        <div className="feed">
          <div className="left">
            <p className="head-txt">Job Recommendations</p>
            <p className="txt">Curated jobs that match your skills, rate, and availability preferences</p>
          </div>
          <div className="right">
            <input type="checkbox" />
          </div>
        </div>
        <div className="feed">
          <div className="left">
            <p className="head-txt">Budget Match Alerts</p>
            <p className="txt">When a job within your budget range is posted by a Verified recruiter</p>
          </div>
          <div className="right">
            <input type="checkbox" />
          </div>
        </div>
        <div className="feed">
          <div className="left">
            <p className="head-txt">Work Circle Job Posts</p>
            <p className="txt">Early access when someone in your work circle posts a new job</p>
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
  )
}