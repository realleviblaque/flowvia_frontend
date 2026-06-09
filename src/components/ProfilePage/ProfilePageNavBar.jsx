export function ProfilePageNavBar({viewingSection, setViewingSection}) {
  return (
    <div className="button-options">
      <div className={viewingSection === 'Activity' ? 'current-click' : ''} onClick={() => setViewingSection('Activity')}>
        Activity
      </div>
      <div className={viewingSection === 'Projects' ? 'current-click' : ''} onClick={() => setViewingSection('Projects')}>
        Projects
      </div>
      <div className={viewingSection === 'Portfolio' ? 'current-click' : ''} onClick={() => setViewingSection('Portfolio')}>
        Portfolio
      </div>
      <div className={viewingSection === 'About' ? 'current-click' : ''} onClick={() => setViewingSection('About')}>
        About
      </div>
      <div className={viewingSection === 'Reviews' ? 'current-click' : ''} onClick={() => setViewingSection('Reviews')}>
        Reviews
      </div>
    </div>
  )
}