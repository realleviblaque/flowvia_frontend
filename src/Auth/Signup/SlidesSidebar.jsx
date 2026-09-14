import './SlidesSidebar.css'

export function SlidesSidebar({accountType, slideOpen}) {
  return (
    <div className="slides-sidebar">
      <div className="top">
        <img src="/flowvia-favicon.png" />
        <p>Flowvia</p>
      </div>
      <div className="middle">
        <div className={slideOpen > 0 ? 'complete' : ''}>
          <span>
            <i className="fa-solid fa-check"></i>
          </span>
          <p>Account Details</p>
        </div>
        <div className={slideOpen > 1 ? 'complete' :slideOpen === 1 ? 'current' : ''}>
          <span>
            {slideOpen > 1 ? <i className="fa-solid fa-check"></i> : <p>2</p>}
          </span>
          <p>Professional Title</p>
        </div>
        <div className={slideOpen > 2 ? 'complete' :slideOpen === 2 ? 'current' : ''}>
          <span>
            {slideOpen > 2 ? <i className="fa-solid fa-check"></i> : <p>3</p>}
          </span>
          <p>Website</p>
        </div>
        {accountType === 'Freelancer' && (
          <>
            <div className={slideOpen > 3 ? 'complete' :slideOpen === 3 ? 'current' : ''}>
              <span>
                {slideOpen > 3 ? <i className="fa-solid fa-check"></i> : <p>4</p>}
              </span>
              <p>Skills</p>
            </div>
            <div className={slideOpen > 4 ? 'complete' :slideOpen === 4 ? 'current' : ''}>
              <span>
                {slideOpen > 4 ? <i className="fa-solid fa-check"></i> : <p>5</p>}
              </span>
              <p>Pricing</p>
            </div>
            <div className={slideOpen > 5 ? 'complete' :slideOpen === 5 ? 'current' : ''}>
              <span>
                {slideOpen > 5 ? <i className="fa-solid fa-check"></i> : <p>6</p>}
              </span>
              <p>Bio</p>
            </div>
            <div className={slideOpen > 6 ? 'complete' :slideOpen === 6 ? 'current' : ''}>
              <span>
                {slideOpen > 6 ? <i className="fa-solid fa-check"></i> : <p>7</p>}
              </span>
              <p>Profile Photo</p>
            </div>
          </>
        )}
        {accountType === 'Recruiter' && (
          <>
            <div className={slideOpen > 3 ? 'complete' :slideOpen === 3 ? 'current' : ''}>
              <span>
                {slideOpen > 3 ? <i className="fa-solid fa-check"></i> : <p>4</p>}
              </span>
              <p>Bio</p>
            </div>
            <div className={slideOpen > 4 ? 'complete' :slideOpen === 4 ? 'current' : ''}>
              <span>
                {slideOpen > 4 ? <i className="fa-solid fa-check"></i> : <p>5</p>}
              </span>
              <p>Profile Photo</p>
            </div>
          </>
        )}
      </div>
      <div className="bottom">
        <div className={accountType.toLowerCase()}>
          {accountType} Account
        </div>
      </div>
    </div>
  )
}