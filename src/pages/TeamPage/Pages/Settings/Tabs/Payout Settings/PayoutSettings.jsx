import { GeneralSidebar } from "../../../../../../components/TeamPage/GeneralSidebar";
import { TeamSettingsSidebar } from "../../../../../../components/TeamPage/Settings/TeamSettingsSidebar";
import { TeamSidebar } from "../../../../../../components/TeamPage/TeamSidebar";
import './PayoutSettings.css'

export function PayoutSettings({all}) {
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
          <div className="payout-settings-contents">
            <div className="top">
              <p className="hd-txt">Payout Settings</p>
              <p className="txt">Configure where Flowvia Team receives payments for completed work.</p>
            </div>
            <div className="bottom">
              <div className="content">
                <div className="top-up">
                  <div>
                    <p className="txt">Available Balance</p>
                    <p className="head-txt avail">$4, 240</p>
                  </div>
                  <div>
                    <p className="txt">Pending Release</p>
                    <p className="head-txt pending">$1, 800</p>
                  </div>
                  <div>
                    <p className="txt">Total Earned</p>
                    <p className="head-txt total">$32K</p>
                  </div>
                </div>
                <div className="down">
                  <div className="up">
                    <p className="hd-txt">Withdrawal Method</p>
                    <div>
                      <span className="active">
                        <p className="head-txt">Bank Transfer</p>
                        <p className="txt">2-5 business days</p>
                      </span>
                      <span>
                        <p className="head-txt">PayPal</p>
                        <p className="txt">1-2 business days</p>
                      </span>
                      <span>
                        <p className="head-txt">Crypto</p>
                        <p className="txt">coming soon</p>
                      </span>
                    </div>
                  </div>
                  <div className="middle">
                    <div className="details">
                      <div>
                        <p>Bank Name</p>
                        <input type="text" placeholder="e.g GTBank, Zenith Bank, Access" />
                      </div>
                      <div>
                        <p>Account Number</p>
                        <input type="text" placeholder="10-digit account number" />
                      </div>
                    </div>
                    <div className="details">
                      <div>
                        <p>Account Name</p>
                        <input type="text" placeholder="As it appears on your bank account" />
                      </div>
                      <div>
                        <p>Payout Cuurency</p>
                        <input type="text" list="currency" />
                        <datalist id="currency">
                          <option value="NGN - Nigerian Naira"></option>
                          <option value="USD - United Stata Dollar"></option>
                        </datalist>
                      </div>
                    </div>
                  </div>
                  <div className="notice">
                    <i className="fa-solid fa-triangle-exclamation"></i> Payout are processed within 2-5 business days. A 7% platform fee applies to all withdrawals. Minimum withdrawal amount is $20.
                  </div>
                  <div className="action-bottom">
                    <button className="request">Request Payout</button>
                    <button className="save">Save Bank Details</button>
                    <button className="cancel">Cancle</button>
                  </div>
                </div>
              </div>
              <div className="top-part">
                <p className="head-txt">Payout History</p>
              </div>
              <div className="content history">
                <table>
                  <thead>
                    <tr>
                      <th className="date">Date</th>
                      <th className="des">Description</th>
                      <th className="amount">Amount</th>
                      <th className="stat">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="date">May 1, 2026</td>
                      <td className="des">FinDash Project - Phase 2</td>
                      <td className="amount">$1, 600</td>
                      <td className="stat">Paid</td>
                    </tr>
                    <tr>
                      <td className="date">April 12, 2026</td>
                      <td className="des">E-Commerce Rebuild</td>
                      <td className="amount">$2, 040</td>
                      <td className="stat">Paid</td>
                    </tr>
                    <tr>
                      <td className="date">Mar 28, 2026</td>
                      <td className="des">FX Signal Bot - Final Payment</td>
                      <td className="amount">$600</td>
                      <td className="stat">Paid</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}