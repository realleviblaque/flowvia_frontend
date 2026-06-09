import { notificationCount } from '../../utils/notification-count'
import './NotificationPageFilter.css'

export function NotificationPageFilter({notification}) {
  const {all, hire, work, project, mention, review} = notificationCount(notification)
  return (
    <div className="notification-filter-container">
      <div className="all-notification-btn active-filter">
        All
        <span className="all-count">{all}</span>
      </div>
      <div className="hire-notification-btn">
        Hire Requests
        <span className="hire-count">{hire}</span>
      </div>
      <div className="work-cricle-notification-btn">
        Work Circle
        <span className="work-count">{work}</span>
      </div>
      <div className="project-notification-btn">
        Projects
        <span className="project-count">{project}</span>
      </div>
      <div className="mentions-notification-btn">
        Mentions
        <span className="mention-count">{mention}</span>
      </div>
      <div className="reviews-notification-btn">
        Reviews
        <span className="review-count">{review}</span>
      </div>
    </div>
  )
}