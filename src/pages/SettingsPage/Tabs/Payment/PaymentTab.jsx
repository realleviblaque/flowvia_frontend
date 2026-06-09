import { SideBar } from "../../../../components/Sidebar";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import './PaymentTab.css'

export function PaymentTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="payment-section">
            <SettingsContentHeader />
            <div className="payment-content">
              <div className="top-part">
                <p className="head-txt">Payment Methods</p>
                <p className="txt">Saved payment methods used for Flowvia subsciptions and platform fees.</p>
              </div>
              <div className="content">
                <div className="top">
                  <p>Saved Cards</p>
                  <button><i className="fa-solid fa-plus"></i> Add Card</button>
                </div>
                <div className="cards">
                  <div className="left">
                    <i className="fa-brands fa-cc-visa"></i>
                    <div className="info">
                      <p className="head-txt">Visa ending in 4242</p>
                      <div>
                        <p>Expires 08/2027</p>
                        <span></span>
                        <p className="txt">Default</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <button>Edit</button>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="down">
                  <i className="fa-solid fa-lock"></i>
                  <p>All Payments are encrypted and processed securely. Flowvia does not store full card numbers</p>
                </div>
              </div>
              <div className="top-part">
                <p className="head-txt">Other Payment Options</p>
                <p className="txt">Connect additional payment methods</p>
              </div>
              <div className="content">
                <div className="cards">
                  <div className="left">
                    <i className="fa-brands fa-cc-paypal"></i>
                    <div className="info">
                      <p className="head-txt">PayPal</p>
                      <div>
                        <p>Not connnected</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <button className="connect-btn">Connect</button>
                  </div>
                </div>
                <div className="cards">
                  <div className="left">
                    <div className="building"><i className="fa-solid fa-university"></i> Bank</div>
                    <div className="info">
                      <p className="head-txt">Bank Acount</p>
                      <div>
                        <p>Not connnected</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <button className="connect-btn">Connect</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}