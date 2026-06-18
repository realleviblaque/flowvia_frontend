import './MobileHeader.css'

export function MobileHeader({handleDialogOpen}) {
  return (
    <header className='mobile-home-header'>
      <div className="phone-size">
        <div className="name">Flow<span>via</span></div>
        <div className="right-side">
          <span>
            <i className="fa-solid fa-search"></i>
          </span>
          <span>
            <i className="fa-regular fa-bell"></i>
            <div className='notification'></div>
          </span>
          <span>
            <i className="fa-regular fa-message"></i>
            <div className="message">6</div>
          </span>
          <span>
            <img src="/profile.png" />
          </span>
          <span className='hanburger' onClick={handleDialogOpen}>
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
      </div>
    </header>
  )
}