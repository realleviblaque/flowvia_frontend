let hidden = JSON.parse(localStorage.getItem('hideHire')) ?? true;


function saveHideHire() {
  localStorage.setItem('hideHire', JSON.stringify(hidden));
}

export function checkHiredHire() {
  hidden = !hidden;
  saveHideHire();
  checkHideStatus();
}

export function checkHideStatus() {
  const hideHireBtn = document.querySelector('.hide-hire-btn')
  const hideHireText = document.querySelector('.hide-hire-text')
  const hireStatusContainer = document.querySelector('.hire-status-container')
  if (hidden) {
    hideHireBtn.src = '/Icons/bootstrap icon/eye-fill.svg';
    hideHireText.innerText = 'Show Hire Status';
    hireStatusContainer.style.display = 'none'
  } else {
    hideHireBtn.src = '/Icons/bootstrap icon/eye-slash-fill.svg';
    hideHireText.innerText = 'Hide Hire Status';
    hireStatusContainer.style.display = 'flex'
  }
}
function chnageTheme() {
  const changeThemeImage = document.querySelector('.change-theme');
  if (isDarkMode) {
    document.body.classList.add('dark-theme')
    if (!document.querySelector('.change-theme')) return;
    changeThemeImage.src = '/Icons/bootstrap icon/moon-stars-fill.svg';
  } else {
    document.body.classList.remove('dark-theme')
    if (!document.querySelector('.change-theme')) return;
    changeThemeImage.src = '/Icons/bootstrap icon/moon-stars.svg';
  }
}