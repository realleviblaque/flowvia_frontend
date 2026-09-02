import './NotificationRightSidebar.css'

export function NotificationRightSidebar({notification}) {
  const all = notification.filter(n => !n.readAt).length;
  const hire = notification.filter(n => n.category === 'hiring').length;
  const work = notification.filter(n => n.category === 'work_circle').length;
  const project = notification.filter(n => n.category === 'projects').length;
  const review = notification.filter(n => n.category === 'reviews').length;
  return (
    <div className="right-sidebar">
      <div className="summary-container">
        <p className="head-txt">Summary</p>
        <div className="summary-wrapper">
          <div>
            <span>
              <i className="fa-regular fa-bell"></i>
            </span>
            <p className="txt">Unread</p>
            <p className="unread-count">{all}</p>
          </div>
          <div>
            <span>
              <i className="fa-solid fa-arrow-up"></i>
            </span>
            <p className="txt">Hire Requests</p>
            <p className="hire-sum-count">{hire}</p>
          </div>
          <div>
            <span>
              <i className="fa-solid fa-circle-nodes"></i>
            </span>
            <p className="txt">Work Circle</p>
            <p className="work-sum-count">{work}</p>
          </div>
          <div>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <p className="txt">Projects</p>
            <p className="project-sum-count">{project}</p>
          </div>
          <div>
            <span>
              <i className="fa-solid fa-table-cells-large"></i>
            </span>
            <p className="txt">Reviews</p>
            <p className="review-sum-count">{review}</p>
          </div>
        </div>
      </div>
      <div className="preference-container">
        <p className="head-txt">Notification Preferences</p>
        <div className="prefernces-wrapper">
          <div>
            <span>
              <p className="txt">Hire Request</p>
              <p>When someone wants to hire you</p>
            </span>
            <input type="checkbox" />
          </div>
          <div>
            <span>
              <p className="txt">Messages</p>
              <p>New Direct messages and Message requests</p>
            </span>
            <input type="checkbox" />
          </div>
          <div>
            <span>
              <p className="txt">Work Circle</p>
              <p>Rehire Request and New job upadtes</p>
            </span>
            <input type="checkbox" />
          </div>
          <div>
            <span>
              <p className="txt">Project Updates</p>
              <p>Milestones, completions</p>
            </span>
            <input type="checkbox" />
          </div>
          <div>
            <span>
              <p className="txt">Mentions</p>
              <p>When tagged in a posts</p>
            </span>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  )
}