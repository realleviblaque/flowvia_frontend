import { NavLink } from 'react-router-dom'
import './TeamSettingsSidebar.css'

export function TeamSettingsSidebar() {
  return (
    <div className="team-settings-sidebar">
      <div className="team-side-cover">
        <p>TEAM</p>
        <div>
          <NavLink to='/team/settings' end>
            <i className="fa-solid fa-users"></i>
            Team Management
          </NavLink>
          <NavLink to='/team/settings/roles'>
            <i className="fa-solid fa-user-shield"></i>
            Roles Management
          </NavLink>
          <NavLink to='/team/settings/members'>
            <i className="fa-solid fa-user-cog"></i>
            Members & Roles
          </NavLink>
          <NavLink to='/team/settings/invites'>
            <i className="fa-solid fa-plus"></i>
            Invite Members
          </NavLink>
        </div>
      </div>
      <div className="team-side-cover">
        <p>MEMBERS</p>
        <div>
          <NavLink to='/team/settings/status'>
            <i className="fa-solid fa-toggle-on"></i>
            Status Management
          </NavLink>
        </div>
      </div>
      <div className="team-side-cover">
        <p>PROFESSIONAL</p>
        <div>
          <NavLink to='/team/settings/professional_details'>
            <i className="fa-solid fa-laptop"></i>
            Professional Details
          </NavLink>
          <NavLink to='/team/settings/pricing'>
            <i className="fa-regular fa-clock"></i>
            Pricing & Availability
          </NavLink>
        </div>
      </div>
      <div className="team-side-cover">
        <p>BILLING & VERIFICATION</p>
        <div>
          <NavLink to='/team/settings/verification'>
            <i className="fa-regular fa-check-circle"></i>
            Verification
          </NavLink>
          <NavLink to='/team/settings/subscription'>
            <i className="fa-regular fa-credit-card"></i>
            Subscription & Billing
          </NavLink>
          <NavLink to='/team/settings/payment'>
            <i className="fa-solid fa-wallet"></i>
            Payment Methods
          </NavLink>
          <NavLink to='/team/settings/payout'>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Payout Settings
          </NavLink>
        </div>
      </div>
      <div className="team-side-cover">
        <p>VISIBILITY</p>
        <div>
          <NavLink to='/team/settings/visibility'>
            <i className="fa-regular fa-eye"></i>
            Team Visibility
          </NavLink>
          <NavLink to='/team/settings/notifications'>
            <i className="fa-regular fa-bell"></i>
            Notifications
          </NavLink>
        </div>
      </div>
      <div className="team-side-cover danger">
        <p>DANGER</p>
        <div>
          <NavLink to='/team/settings/danger'>
            <i className="fa-solid fa-triangle-exclamation"></i>
            Danger Zone
          </NavLink>
        </div>
      </div>
    </div>
  )
}