import { NotificationPageContent } from "./NotificationPageContent";
import { NotificationPageFilter } from "../../components/NotificationPage/NotificationPageFilter";
import { NotificationPageHeader } from "../../components/NotificationPage/NotificationPaheHeader";
import { NotificationRightSidebar } from "../../components/NotificationPage/NotificationRIghtSidebar";
import { SideBar } from "../../components/Sidebar";
import { Notifications } from "../../data/NotificationPage/notifications";
import './NotificationPage.css'
import { formatLastSentDate } from "../../utils/formatLastSentData";
import { BottomBar } from "../../components/BottomBar";
import { PlusModal } from "../../components/PlusModal";
import { MobileHeader2 } from "../../components/MobileHeader2";
import dayjs from "../../lib/dayjs";
import { Fragment, useEffect, useState } from "react";

export function NotificationPage({all, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  const [notifications, setNotifications] = useState(Notifications)
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    const handleFilter = () => {
      if (filter === 'All') {
        setNotifications(Notifications)
      } else if (filter === 'Hire') {
        setNotifications(Notifications.filter(n => n.category === 'hiring'))
      } else if (filter === 'Work') {
        setNotifications(Notifications.filter(n => n.category === 'work_circle'))
      } else if (filter === 'Project') {
        setNotifications(Notifications.filter(n => n.category === 'projects'))
      } else if (filter === 'Reviews') {
        setNotifications(Notifications.filter(n => n.category === 'reviews'))
      }
    }
    handleFilter();
  }, [filter])
  return (
    <>
      <SideBar notification={all} />
      <NotificationPageHeader setNotifications={setNotifications} />
      <MobileHeader2 />
      <main className="notification-main-page">  
        <NotificationPageFilter notification={notifications} filter={filter} setFilter={setFilter} />
        <div className="notfication-container">
          <div className="notification-content">
            {notifications.slice().reverse().map((notification, index, array) => {
              const previousMessage = array[index - 1];
              const shouldShowDate = !previousMessage || !dayjs(notification.createdAt).isSame(dayjs(previousMessage.createdAt), 'day')
              return (
                <Fragment key={notification.id} >
                  {shouldShowDate && (
                    <div className="notification-date">
                      <p>{formatLastSentDate(notification.createdAt)}</p>
                      <span></span>
                    </div>
                  )}
                  <div className="notification-wrap">
                    <NotificationPageContent notification={notification} />
                  </div>
                </Fragment>
              )
            })}
          </div>
          <NotificationRightSidebar notification={notifications} />
        </div>
      </main>
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}