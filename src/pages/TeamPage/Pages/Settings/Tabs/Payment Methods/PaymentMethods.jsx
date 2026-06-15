import { GeneralSidebar } from "../../../../../../components/TeamPage/GeneralSidebar";
import { TeamSettingsSidebar } from "../../../../../../components/TeamPage/Settings/TeamSettingsSidebar";
import { TeamSidebar } from "../../../../../../components/TeamPage/TeamSidebar";
import './PaymentMethods.css'

export function PaymentMethods({all}) {
  return (
    <>
      <GeneralSidebar notification={all} />
      <TeamSidebar />
      <main className="teamPageMain">
        <header className="team-settings-header">
          <div className="left">
            <i className="fa-solid fa-gear"></i>
            <div className="info">
              <p className="hd-txt">Team Settings</p>
              <div>
                Manage Flowvia Team - only visible to admins
              </div>
            </div>
          </div>
        </header>
        <div className="team-settings-container">
          <TeamSettingsSidebar />
          <div className="payment-method-contents">
            <div className="top">
              <p className="hd-txt">Payment Methods</p>
              <p className="txt">Saved payment methods for team subscription and platform fees.</p>
            </div>
            <div className="bottom">
              <div className="content">
                <div className="top-up">
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
                    <button className="remove">Remove</button>
                  </div>
                </div>
                <div className="down">
                  <i className="fa-solid fa-lock"></i>
                  <p>Payments are encrypted and processed securely via Stripe. Flowvia does not store full card details.</p>
                </div>
              </div>
              <div className="other-method">
                <p className="hd-txt">Choose Other Methods</p>
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
        </div>
      </main>
    </>
  )
}