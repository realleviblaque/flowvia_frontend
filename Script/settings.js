import { statusCount } from "./utils/portfolio.js";
import { chnageTheme, clickTheme } from "./utils/changeTheme.js";

statusCount();
chnageTheme();
clickTheme();

const statusView = document.querySelector('.stat-click');
statusView.addEventListener('click', () => {
  const statView = document.querySelector('.status-view');
  const stat = document.querySelector('.stat');
  const iconChange = document.querySelector('.stat-click');
  if (statView.classList.contains('status-open')) {
    statView.classList.remove('status-open')
    iconChange.classList.remove('icon-down');
    stat.classList.remove('stat-in')
  } else {
    statView.classList.add('status-open')
    iconChange.classList.add('icon-down');
    stat.classList.add('stat-in')
  }
  
})


document.querySelector('.btn-nav-click').addEventListener('click', () => {
  document.querySelector('.dialog').showModal();
})

document.querySelector('.close-dialog').addEventListener('click', () => {
  document.querySelector('.dialog').close();
})

// Navigate through settings tab

const profileTab = document.querySelector('.profile-tab')
const privacyTab = document.querySelector('.privacy-tab')
const notifiTab = document.querySelector('.notifi-tab')
const paymentTab = document.querySelector('.payment-tab')
const savedTab = document.querySelector('.account-tab')
const bookmarkedTab = document.querySelector('.bookmarked-tab')
const securityTab = document.querySelector('.security-tab')
const accMoceTab = document.querySelector('.acc-mode-tab')
const blockTab = document.querySelector('.block-tab')

profileTab.addEventListener('click', () => {
  profileTab.classList.add('profile-setting')
  privacyTab.classList.remove('privacy-setting')
  notifiTab.classList.remove('notifi-setting')
  paymentTab.classList.remove('payment-setting')
  savedTab.classList.remove('saved-setting')
  bookmarkedTab.classList.remove('bookmarked-setting')
  securityTab.classList.remove('security-setting')
  accMoceTab.classList.remove('acc-mode-setting')
  blockTab.classList.remove('block-setting')
})
privacyTab.addEventListener('click', () => {
  profileTab.classList.remove('profile-setting')
  privacyTab.classList.add('privacy-setting')
  notifiTab.classList.remove('notifi-setting')
  paymentTab.classList.remove('payment-setting')
  savedTab.classList.remove('saved-setting')
  bookmarkedTab.classList.remove('bookmarked-setting')
  securityTab.classList.remove('security-setting')
  accMoceTab.classList.remove('acc-mode-setting')
  blockTab.classList.remove('block-setting')
})
notifiTab.addEventListener('click', () => {
  profileTab.classList.remove('profile-setting')
  privacyTab.classList.remove('privacy-setting')
  notifiTab.classList.add('notifi-setting')
  paymentTab.classList.remove('payment-setting')
  savedTab.classList.remove('saved-setting')
  bookmarkedTab.classList.remove('bookmarked-setting')
  securityTab.classList.remove('security-setting')
  accMoceTab.classList.remove('acc-mode-setting')
  blockTab.classList.remove('block-setting')
})
paymentTab.addEventListener('click', () => {
  profileTab.classList.remove('profile-setting')
  privacyTab.classList.remove('privacy-setting')
  notifiTab.classList.remove('notifi-setting')
  paymentTab.classList.add('payment-setting')
  savedTab.classList.remove('saved-setting')
  bookmarkedTab.classList.remove('bookmarked-setting')
  securityTab.classList.remove('security-setting')
  accMoceTab.classList.remove('acc-mode-setting')
  blockTab.classList.remove('block-setting')
})
savedTab.addEventListener('click', () => {
  profileTab.classList.remove('profile-setting')
  privacyTab.classList.remove('privacy-setting')
  notifiTab.classList.remove('notifi-setting')
  paymentTab.classList.remove('payment-setting')
  savedTab.classList.add('saved-setting')
  bookmarkedTab.classList.remove('bookmarked-setting')
  securityTab.classList.remove('security-setting')
  accMoceTab.classList.remove('acc-mode-setting')
  blockTab.classList.remove('block-setting')
})
bookmarkedTab.addEventListener('click', () => {
  profileTab.classList.remove('profile-setting')
  privacyTab.classList.remove('privacy-setting')
  notifiTab.classList.remove('notifi-setting')
  paymentTab.classList.remove('payment-setting')
  savedTab.classList.remove('saved-setting')
  bookmarkedTab.classList.add('bookmarked-setting')
  securityTab.classList.remove('security-setting')
  accMoceTab.classList.remove('acc-mode-setting')
  blockTab.classList.remove('block-setting')
})
securityTab.addEventListener('click', () => {
  profileTab.classList.remove('profile-setting')
  privacyTab.classList.remove('privacy-setting')
  notifiTab.classList.remove('notifi-setting')
  paymentTab.classList.remove('payment-setting')
  savedTab.classList.remove('saved-setting')
  bookmarkedTab.classList.remove('bookmarked-setting')
  securityTab.classList.add('security-setting')
  accMoceTab.classList.remove('acc-mode-setting')
  blockTab.classList.remove('block-setting')
})
accMoceTab.addEventListener('click', () => {
  profileTab.classList.remove('profile-setting')
  privacyTab.classList.remove('privacy-setting')
  notifiTab.classList.remove('notifi-setting')
  paymentTab.classList.remove('payment-setting')
  savedTab.classList.remove('saved-setting')
  bookmarkedTab.classList.remove('bookmarked-setting')
  securityTab.classList.remove('security-setting')
  accMoceTab.classList.add('acc-mode-setting')
  blockTab.classList.remove('block-setting')
})
blockTab.addEventListener('click', () => {
  profileTab.classList.remove('profile-setting')
  privacyTab.classList.remove('privacy-setting')
  notifiTab.classList.remove('notifi-setting')
  paymentTab.classList.remove('payment-setting')
  savedTab.classList.remove('saved-setting')
  bookmarkedTab.classList.remove('bookmarked-setting')
  securityTab.classList.remove('security-setting')
  accMoceTab.classList.remove('acc-mode-setting')
  blockTab.classList.add('block-setting')
})