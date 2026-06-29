import './Block.css'

export function Block() {
  return (
    <div className="block-content">
      <div className="head">
        <p>3 blocked users</p>
        <input type="text" placeholder="Search blocked users..." />
      </div>
      <div className="block-wrap">
        <div className="left">
          <img src="/profile.png" />
          <div className="details">
            <p className="head-txt">Unknown User</p>
            <div>
              <p>@unknownuser</p>
              <span></span>
              <p className="time">Blocked 3 weeks ago</p>
            </div>
          </div>
        </div>
        <div className="right">
          <button>Unblock</button>
          <button>Report</button>
        </div>
      </div>
      <div className="block-wrap">
        <div className="left">
          <img src="/profile.png" />
          <div className="details">
            <p className="head-txt">Spam Account</p>
            <div>
              <p>@spanacct</p>
              <span></span>
              <p className="time">Blocked 1 month ago</p>
            </div>
          </div>
        </div>
        <div className="right">
          <button>Unblock</button>
          <button>Report</button>
        </div>
      </div>
      <div className="block-wrap">
        <div className="left">
          <img src="/profile.png" />
          <div className="details">
            <p className="head-txt">Hidden User</p>
            <div>
              <p>@hiddenuser</p>
              <span></span>
              <p className="time">Blocked 2 months ago</p>
            </div>
          </div>
        </div>
        <div className="right">
          <button>Unblock</button>
          <button>Report</button>
        </div>
      </div>
    </div>
  )
}