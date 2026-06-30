import './Deactivate.css'

export function Deactivate() {
  return (
    <div className="deactivate-m-content">
      <p className="head-txt">What happens when you deactivate?</p>
      <p className="txt">Your profile is hidden from the marketplace and search results. <br /> Active projects and messages are paused - not deleted. <br />Your Work Circle, portfolio, and reviews are all preserved. <br />Log back in at any time to reactivate - everything stays intact.</p>
      <p className="hd-txt">Confirm Your Password to Continue</p>
      <input type="password" placeholder="Enter current password" />
      <button>Deactivate My Account</button>
    </div>
  )
}