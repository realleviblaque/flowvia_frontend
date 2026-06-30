import './LoginSession.css'

export function LoginSession() {
  return (
    <div className="login-session-content">
      <div className="sessions">
        <div className="left">
          <span>
            <i className="fa-solid fa-desktop"></i>
          </span>
        </div>
        <div className="right">
          <div className="up">
            <p className="head-txt">Chrome on macOS</p>
            <span>Current</span>
          </div>
          <div className="down">
            <p>Lagos, Nigeria</p>
            <span></span>
            <p>Last active just now</p>
          </div>
        </div>
      </div>
      <div className="sessions">
        <div className="left">
          <span>
            <i className="fa-solid fa-mobile"></i>
          </span>
        </div>
        <div className="right">
          <div className="up">
            <p className="head-txt">Safari on iPhone 15</p>
          </div>
          <div className="down">
            <p>Lagos, Nigeria</p>
            <span></span>
            <p>Last active 2 hours ago</p>
          </div>
        </div>
        <div className="action">
          <p>Revoke</p>
        </div>
      </div>
      <div className="sessions">
        <div className="left">
          <span>
            <i className="fa-solid fa-desktop"></i>
          </span>
        </div>
        <div className="right">
          <div className="up">
            <p className="head-txt">Firefox on Windows</p>
          </div>
          <div className="down">
            <p>Abija, Nigeria</p>
            <span></span>
            <p>Last active 4 days agp</p>
          </div>
        </div>
        <div className="action">
          <p>Revoke</p>
        </div>
      </div>
      <div className="login-action">
        <button>Revoke All Other Sessions</button>
      </div>
    </div>
  )
}