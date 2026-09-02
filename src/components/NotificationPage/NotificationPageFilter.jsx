import './NotificationPageFilter.css'

export function NotificationPageFilter({notification, filter, setFilter}) {
  const all = notification.length;
  const hire = notification.filter(n => n.category === 'hiring').length;
  const work = notification.filter(n => n.category === 'work_circle').length;
  const project = notification.filter(n => n.category === 'projects').length;
  const review = notification.filter(n => n.category === 'reviews').length;
  return (
    <div className="notification-filter-container">
      <div className={filter === 'All' ? 'active-filter' : ''} onClick={() => setFilter('All')}>
        All
        <span className="all-count">{all}</span>
      </div>
      <div className={filter === 'Hire' ? 'active-filter' : ''} onClick={() => setFilter('Hire')}>
        Hire Requests
        <span className="hire-count">{hire}</span>
      </div>
      <div className={filter === 'Work' ? 'active-filter' : ''} onClick={() => setFilter('Work')}>
        Work Circle
        <span className="work-count">{work}</span>
      </div>
      <div className={filter === 'Project' ? 'active-filter' : ''} onClick={() => setFilter('Project')}>
        Projects
        <span className="project-count">{project}</span>
      </div>
      <div className={filter === 'Reviews' ? 'active-filter' : ''} onClick={() => setFilter('Reviews')}>
        Reviews
        <span className="review-count">{review}</span>
      </div>
    </div>
  )
}