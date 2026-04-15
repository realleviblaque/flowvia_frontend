let isDarkMode = JSON.parse(localStorage.getItem('theme')) ?? true;

function saveTheme() {
  localStorage.setItem('theme', JSON.stringify(isDarkMode));
}

function checkTheme() {
  isDarkMode = !isDarkMode;
  saveTheme();
  chnageTheme();
}

export function chnageTheme() {
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
export function clickTheme() {
  if (!document.querySelector('.change-theme')) return;
  document.querySelector('.change-theme').addEventListener('click', checkTheme)
}