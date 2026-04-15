import {chnageTheme, clickTheme } from "./utils/changeTheme.js";
import { statusCount } from "./utils/portfolio.js";
import { checkHiredHire, checkHideStatus } from "./utils/hide-hire.js";
import { updateStatusCards } from "./utils/status-page-count.js";
chnageTheme();
clickTheme();
statusCount();
checkHideStatus();
updateStatusCards();

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

document.querySelector('.hide-hire-btn').addEventListener('click', checkHiredHire)