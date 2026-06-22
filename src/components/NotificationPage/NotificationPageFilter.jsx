import { useState } from 'react';
import { notificationCount } from '../../utils/notification-count'
import './NotificationPageFilter.css'

export function NotificationPageFilter({notification}) {
  const [filter, setFilter] = useState('All')
  const {all, hire, work, project, mention, review} = notificationCount(notification);
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
      <div className={filter === 'Mention' ? 'active-filter' : ''} onClick={() => setFilter('Mention')}>
        Mentions
        <span className="mention-count">{mention}</span>
      </div>
      <div className={filter === 'Reviews' ? 'active-filter' : ''} onClick={() => setFilter('Reviews')}>
        Reviews
        <span className="review-count">{review}</span>
      </div>
    </div>
  )
}