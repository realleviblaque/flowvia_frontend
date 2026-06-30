import { SideBar } from "../../../../components/Sidebar";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import './PaymentTab.css'
import { Payment } from "../../../../components/SettingsPage/Pages/Payment/Payment";

export function PaymentTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="payment-section">
            <SettingsContentHeader />
            <Payment />
          </div>
        </div>
      </main>
    </>
  )
}