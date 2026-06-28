import { useState } from 'react'
import { MobileHeader2 } from '../../components/MobileHeader2'
import './MobileSettingsPage.css'
import { Profile } from '../../components/SettingsPage/Pages/Profile';

export function MobileSettingsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSettings, setCurretSettings] = useState('Profile')
  return (
    <>
      <MobileHeader2 />
      <main className='mobile-settings-page-main'>
        <div className="settings-sidebar">
          <div>
            <p>Account</p>
            <ul>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Profile')
              }}>
                <i className="fa-regular fa-user"></i> Profile
              </span>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Account Information')
              }}>
                <i className="fa-regular fa-id-card"></i> Account Information
              </span>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Appearance')
              }}>
                <i className="fa-solid fa-palette"></i> Appearance
              </span>
            </ul>
          </div>
          <div>
            <p>Professional</p>
            <ul>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Professional Details')
              }}>
                <i className="fa-solid fa-laptop"></i> Professional Details
              </span>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Pricing & Availability')
              }}>
                <i className="fa-regular fa-clock"></i> Pricing & Availability
              </span>
            </ul>
          </div>
          <div>
            <p>Notifications</p>
            <ul>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Push Notifications')
              }}>
                <i className="fa-regular fa-bell"></i> Push Notifications
              </span>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Email Notifications')
              }}>
                <i className="fa-regular fa-envelope"></i> Email Notifications
              </span>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Marketplace Alerts')
              }}>
                <i className="fa-solid fa-bullhorn"></i> Marketplace Alerts
              </span>
            </ul>
          </div>
          <div>
            <p>Privacy & Visibility</p>
            <ul>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Profile Visibility')
              }}>
                <i className="fa-regular fa-eye"></i> Profile Visibility
              </span>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Online Status')
              }}>
                <i className="fa-solid fa-signal"></i> Online Status
              </span>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('PrBlocked Usersofile')
              }}>
                <i className="fa-solid fa-ban"></i> Blocked Users
              </span>
            </ul>
          </div>
          <div>
            <p>Security</p>
            <ul>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Password')
              }}>
                <i className="fa-solid fa-lock"></i> Password
              </span>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Two-Factor Auth')
              }}>
                <i className="fa-solid fa-shield-halved"></i> Two-Factor Auth
              </span>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Login Sessions')
              }}>
                <i className="fa-solid fa-desktop"></i> Login Sessions
              </span>
            </ul>
          </div>
          <div>
            <p>Billing & Verification</p>
            <ul>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Verification')
              }}>
                <i className="fa-regular fa-circle-check"></i> Verification
              </span>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Subscription & Billing')
              }}>
                <i className="fa-regular fa-credit-card"></i> Subscription & Billing
              </span>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Payment Methods')
              }}>
                <i className="fa-solid fa-wallet"></i> Payment Methods
              </span>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Payout Settings')
              }}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Payout Settings
              </span>
            </ul>
          </div>
          <div>
            <p>Saved Items</p>
            <ul>
              <span onClick={() => {
                setIsOpen(true)
                setCurretSettings('Saved Post')
              }}>
                <i className="fa-regular fa-bookmark"></i> Saved Post
              </span>
            </ul>
          </div>
          <div>
            <p>Danger</p>
            <ul>
              <span className='deactive' onClick={() => {
                setIsOpen(true)
                setCurretSettings('Deactivate Account')
              }}>
                <i className="fa-solid fa-circle-exclamation"></i> Deactivate Account
              </span>
              <span className='delete' onClick={() => {
                setIsOpen(true)
                setCurretSettings('Delete Account')
              }}>
                <i className="fa-solid fa-triangle-exclamation"></i> Delete Account
              </span>
            </ul>
          </div>
        </div>
        <div className={`mobile-settings-content ${isOpen && 'open'}`}>
          <div className="head-part">
            <i className="fa-solid fa-chevron-left" onClick={() => setIsOpen(false)}></i>
            <p>{currentSettings}</p>
          </div>
          <div className="mobile-settings-content-part">
            {currentSettings === 'Profile' && (<Profile />)}
          </div>
        </div>
      </main>
    </>
  )
}