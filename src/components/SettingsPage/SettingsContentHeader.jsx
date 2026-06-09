import './SettingsContentHeader.css'

export function SettingsContentHeader() {
  return (
    <div className="settings-top">
      <div className="profile-img-prev">
        <img src="/profile.png" />
        <span className="active-badge"></span>
      </div>
      <div className="profile-details-prev">
        <p className="name">Levi Blaque</p>
        <div className="details-prev">
          <p>@realleviblaque</p>
          <span></span>
          <p>Freelancer Account</p>
        </div>
        <div className="avail-prev">
          <span className="prof-title">Full Stack Developer</span>
          <span className="open-to-work">Open to Work</span>
        </div>
      </div>
    </div>
  )
}