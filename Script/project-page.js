import { renderCompletedProject } from "./utils/complete-project-array.js";
import { chnageTheme, clickTheme } from "./utils/changeTheme.js";
import { filterCompleteProject } from "./filters/filter-complete-project-type.js";
import { statusCount } from "./utils/portfolio.js";
import { renderOngoingProject } from "./utils/ongoing-project-array.js";

chnageTheme();
clickTheme();
renderCompletedProject();
renderOngoingProject();
statusCount();

document.querySelector('.completed-project-type').addEventListener('change', () => {
   filterCompleteProject();
})

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

const ongoingTab = document.querySelector('.your-ongoing-tab');
const projetcsTab = document.querySelector('.your-project-tab');
const projetcsSection = document.querySelector('.projects-tab-section');
const ongoingtSection = document.querySelector('.ongoing-tab-section');
ongoingTab.addEventListener('click', () => {
  if (projetcsTab.classList.contains('your-project-tab') && projetcsSection.classList.contains('projects-tab-section')) {
    ongoingTab.classList.add('ongoingInView')
    projetcsSection.classList.remove('project-section-view')
    ongoingtSection.classList.add('ongoingSectionView')
    projetcsTab.classList.remove('your-project-tab')
  }
})
projetcsTab.addEventListener('click', () => {
  if (ongoingTab.classList.contains('ongoingInView') && projetcsSection.classList.contains('projects-tab-section')) {
    ongoingTab.classList.remove('ongoingInView')
    projetcsTab.classList.add('your-project-tab')
    projetcsSection.classList.add('project-section-view')
    ongoingtSection.classList.remove('ongoingSectionView')
    renderCompletedProject();
    document.querySelector('.completed-project-type').value = 'all';
  }
})


document.querySelector('.btn-nav-click').addEventListener('click', () => {
  document.querySelector('.dialog').showModal();
})

document.querySelector('.close-dialog').addEventListener('click', () => {
  document.querySelector('.dialog').close();
})
document.querySelectorAll('.create-project-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    window.location.href = 'create-new-project.html';
  })
})