import { NavLink } from 'react-router-dom'
import './SettingsPageSidebar.css'

export function SettingsPageSidebar() {
  return (
    <div className="settings-sidebar">
      <div>
        <p>Account</p>
        <ul>
          <NavLink to='/settings' end>
            <i className="fa-regular fa-user"></i> Profile
          </NavLink>
          <NavLink to='/settings/account-infomation'>
            <i className="fa-regular fa-id-card"></i> Account Information
          </NavLink>
          <NavLink to='/settings/appearance'>
            <i className="fa-solid fa-palette"></i> Appearance
          </NavLink>
        </ul>
      </div>
      <div>
        <p>Professional</p>
        <ul>
          <NavLink to='/settings/professional-details'>
            <i className="fa-solid fa-laptop"></i> Professional Details
          </NavLink>
          <NavLink to='/settings/pricing-availability'>
            <i className="fa-regular fa-clock"></i> Pricing & Availability
          </NavLink>
        </ul>
      </div>
      <div>
        <p>Notifications</p>
        <ul>
          <NavLink to='/settings/push-notification'>
            <i className="fa-regular fa-bell"></i> Push Notifications
          </NavLink>
          <NavLink to='/settings/email-notification'>
            <i className="fa-regular fa-envelope"></i> Email Notifications
          </NavLink>
          <NavLink to='/settings/marketplace-alerts'>
            <i className="fa-solid fa-bullhorn"></i> Marketplace Alerts
          </NavLink>
        </ul>
      </div>
      <div>
        <p>Privacy & Visibility</p>
        <ul>
          <NavLink to='/settings/profile-visibility'>
            <i className="fa-regular fa-eye"></i> Profile Visibility
          </NavLink>
          <NavLink to='/settings/online-status'>
            <i className="fa-solid fa-signal"></i> Online Status
          </NavLink>
          <NavLink to='/settings/blocked-users'>
            <i className="fa-solid fa-ban"></i> Blocked Users
          </NavLink>
        </ul>
      </div>
      <div>
        <p>Security</p>
        <ul>
          <NavLink to='/settings/password'>
            <i className="fa-solid fa-lock"></i> Password
          </NavLink>
          <NavLink to='/settings/two-factor-auth'>
            <i className="fa-solid fa-shield-halved"></i> Two-Factor Auth
          </NavLink>
          <NavLink to='/settings/login-sessions'>
            <i className="fa-solid fa-desktop"></i> Login Sessions
          </NavLink>
        </ul>
      </div>
      <div>
        <p>Billing & Verification</p>
        <ul>
          <NavLink to='/settings/verification'>
            <i className="fa-regular fa-circle-check"></i> Verification
          </NavLink>
          <NavLink to='/settings/subscription-billing'>
            <i className="fa-regular fa-credit-card"></i> Subscription & Billing
          </NavLink>
          <NavLink to='/settings/payment'>
            <i className="fa-solid fa-wallet"></i> Payment Methods
          </NavLink>
          <NavLink to='/settings/payout'>
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Payout Settings
          </NavLink>
        </ul>
      </div>
      <div>
        <p>Saved Items</p>
        <ul>
          <NavLink to='/settings/saved-post'>
            <i className="fa-regular fa-bookmark"></i> Saved Post
          </NavLink>
        </ul>
      </div>
      <div>
        <p>Danger</p>
        <ul>
          <NavLink to='/settings/deactivate-account' className='deactive'>
            <i className="fa-solid fa-circle-exclamation"></i> Deactivate Account
          </NavLink>
          <NavLink to='/settings/delete-account' className='delete'>
            <i className="fa-solid fa-triangle-exclamation"></i> Delete Account
          </NavLink>
        </ul>
      </div>
    </div>
  )
}