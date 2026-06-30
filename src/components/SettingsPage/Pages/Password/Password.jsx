import './Password.css'

export function Password() {
  return (
    <div className="password-content">
      <div className="up">
        <div>
          <p className="head-txt">Current Password</p>
          <input type="text" placeholder="Enter current password" />
        </div>
        <div>
          <p className="head-txt">New Password</p>
          <input type="text" placeholder="Min. 8 characters" />
        </div>
        <div>
          <p className="head-txt">Confrim New Password</p>
          <input type="text" placeholder="Repeat new password" />
        </div>
      </div>
      <div className="action-btn">
        <button className="save-btn">Update Password</button>
        <button className="cancle-btn">Cancel</button>
      </div>
    </div>
  )
}