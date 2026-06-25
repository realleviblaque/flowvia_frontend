export function ProfilePageNavBar({viewingSection, handleTabClick}) {
  return (
    <div className="button-options">
      <div className={viewingSection === 'Activity' ? 'current-click' : ''} onClick={() => handleTabClick('Activity')}>
        Activity
      </div>
      <div className={viewingSection === 'Projects' ? 'current-click' : ''} onClick={() => handleTabClick('Projects')}>
        Projects
      </div>
      <div className={viewingSection === 'Portfolio' ? 'current-click' : ''} onClick={() => handleTabClick('Portfolio')}>
        Portfolio
      </div>
      <div className={viewingSection === 'About' ? 'current-click' : ''} onClick={() => handleTabClick('About')}>
        About
      </div>
      <div className={viewingSection === 'Reviews' ? 'current-click' : ''} onClick={() => handleTabClick('Reviews')}>
        Reviews
      </div>
    </div>
  )
}