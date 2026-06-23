import { Fragment } from "react/jsx-runtime";
import { NotificationPageContent } from "./NotificationPageContent";
import { NotificationPageFilter } from "../../components/NotificationPage/NotificationPageFilter";
import { NotificationPageHeader } from "../../components/NotificationPage/NotificationPaheHeader";
import { NotificationRightSidebar } from "../../components/NotificationPage/NotificationRIghtSidebar";
import { SideBar } from "../../components/Sidebar";
import { Notifications } from "../../data/NotificationPage/notifications";
import './NotificationPage.css'
import { getNotificationDate } from "../../utils/getNotificationDate";
import { BottomBar } from "../../components/BottomBar";
import { PlusModal } from "../../components/PlusModal";
import { MobileHeader2 } from "../../components/MobileHeader2";

export function NotificationPage({all, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  return (
    <>
      <SideBar notification={all} />
      <NotificationPageHeader />
      <MobileHeader2 />
      <main className="notification-main-page">  
        <NotificationPageFilter notification={Notifications} />
        <div className="notfication-container">
          <div className="notification-content">
            {Notifications.slice().reverse().map((notification) => {
              return (
                <div key={notification.id} className="notification-wrap">
                  <div className="notification-date">
                    <p>{getNotificationDate(notification.createdAt)}</p>
                    <span></span>
                  </div>
                  <div className="wrapper">
                    {notification.contents.slice().reverse().map((content) => {
                      return (
                        <Fragment key={content.id}>
                          <NotificationPageContent content={content} />
                        </Fragment>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          <NotificationRightSidebar notification={Notifications} />
        </div>
      </main>
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}