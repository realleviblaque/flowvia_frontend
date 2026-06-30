import './Two2Factor.css'

export function Two2Factor() {
  return (
    <div className="two2factor-content">
      <div className="head">
        <div className="left">
          <p className="head-txt">Enable Two-Factor Authentication</p>
          <p className="txt">Once enabled, you'll need your authenticator app to log in. Strongly recommended.</p>
        </div>
        <div className="right">
          <input type="checkbox" />
        </div>
      </div>
      <div className="two-card">
        <p className="head-txt">Supported Authenticator Apps</p>
        <p className="txt">Google Authenticator</p>
      </div>
      <div className="backup">
        <p className="txt">Backup Email (Optional)</p>
        <input type="text" placeholder="Recovery email if you lose access to your authenticator" />
      </div>
      <div className="action-btn">
        <button className="save-btn">Enable 2FA</button>
      </div>
    </div>
  )
}