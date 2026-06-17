import './HomePageHeader.css'

export function HomePAgeHeader({handleDialogOpen}) {
  return (
    <header className='home-header'>
      <div className="left">
        <input type="text" placeholder="Search Teams, Freelancers or Projects" id='search-input' />
        <button className="search-btn">Search</button>
      </div>
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