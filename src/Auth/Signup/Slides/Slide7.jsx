import './Slide7.css'

export function Slide7({slideOpen, accountType, user}) {
  return (
    <div className={`slide7-container ${accountType === 'Freelancer' && slideOpen >= 7 ? 'open' :accountType === 'Recruiter' && slideOpen >= 5 ? 'open' : ''}`}>
      <div className="slide7-view">
        <div className="top">
          {user.profilePicture 
            ?
              <div className={`profile-prev ${accountType === 'Freelancer' ? 'free' : 'recru'}`}>
                <img src={user.profilePicture} />
              </div>
            :
              <div className="check-div">
                <i className="fa-solid fa-check"></i>
              </div>
          }
          <p className="hd-txt">Your Flowvia account is ready</p>
            {accountType === 'Freelancer' ? 
              <p className="txt">Welcome to Flowvia, <span>{user.firstName}!</span> Your freelancer account is set up and ready. Start exploring the marketplace, track your projects, and grow your portfolio.</p>
            : <p className="txt">Welcome to Flowvia! Your recruiter account is ready. Start posting jobs, browsing freelancers in the marketplace, and building your hiring circle.</p>
            }
        </div>
        <div className="middle">
          <div>
            <span className='circle'></span>
            <p>Profile created <span></span> <span className="username">@{user.username}</span></p>
          </div>
          <div>
            <span className='circle'></span>
            <p>Title set <span></span> <span className="title">{user.title}</span></p>
          </div>
          {accountType === 'Freelancer' && (
            <>
              <div>
                <span className='circle'></span>
                <p>Skills added to your profile</p>
              </div>
              <div>
                <span className='circle'></span>
                <p>Rate visible in Marketplace</p>
              </div>
            </>
          )}
        </div>
        <div className="bottom">
          <button 
            className={accountType === 'Freelancer' ? 'free' : 'recru'} 
            onClick={() => window.history.back()}
          > Go to Home <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}