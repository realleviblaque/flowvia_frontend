import { projects } from "../data/projects.js";
import { chnageTheme, clickTheme } from "./utils/changeTheme.js";
import { statusCount } from "./utils/portfolio.js";

chnageTheme();
clickTheme();
statusCount();

/* document.querySelector('.completed-project-type').addEventListener('change', () => {
   filterCompleteProject();
}) */

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
document.querySelectorAll('.create-project-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    window.location.href = 'create-new-project.html';
  })
})



const myProject = projects.filter(p => p.projectType !== 'Public Project');
function renderProject(allProject = myProject) {
  let viewHtml = '';
  allProject.forEach((project) => {
    viewHtml += `
      <div class="project-container">
        <div class="left  ${project.projectType === 'Personal Project' ? '' : 'client-project-left'}">
          <span class="project-type ${project.projectType === 'Personal Project' ? '' : 'client-project-type'}">${project.projectType === 'Personal Project' ? 'Personal' : 'Client'}</span>
        </div>
        <div class="middle">
          <div class="top">
            <div class="title-content">
              <p class="title">${project.name}</p>
              <p class="portfolio-status ${project.isPortfolio ? '' : 'not-active'}">Portfolio: ${project.isPortfolio ? 'Ative' : 'Inactive'}</p>
            </div>
            <div class="link-content">
              <p>Link to Project</p>
              ${project.isComplete ? `
                <span></span>
                <a href="${project.linkToProject}">Go to Project</a>
                ` : ''}
            </div>
            <div class="description-content">
              <p>${project.description}</p>
            </div>
          </div>
          <div class="bottom">
            <div class="project-info">
              <div class="budget-info">
                <p>Budget</p>
                <p class="project-budget ${project.projectType === 'Personal Project' ? '' : 'budget-active'}">${project.projectType === 'Personal Project' ? 'Personal' : `${project.budget}`}</p>
              </div>
              <div class="duration-info">
                <p>Duration</p>
                <p class="project-duration">${project.duration ? `${project.duration}` : 'None'}</p>
              </div>
              <div class="status-info">
                <p>Status</p>
                <p class="project-status ${project.isComplete ? 'completed-status' : ''}">${project.isComplete ? 'Completed' : 'In Progress'}</p>
              </div>
              <div class="client-info">
                <p>Client</p>
                <p class="project-client">-------</p>
              </div>
            </div>
            ${project.totalPhase ? `
              <div class="phase-progress-wrap">
                <p>Phases</p>
                <div class="progress-bar-wrap">
                  <span class="progress-bar"></span>
                </div>
                <p><span class="completed-phase">2</span> / <span class="all-phase">${project.totalPhase}</span></p>
                <span></span>
                <p><span class="completed-phase">2</span> Completed</p>
              </div>
              ` : ''}
          </div>
        </div>
        <div class="right">
          <div class="top">
            <p>Updatetd 2 days ago</p>
          </div>
          <div class="bottom">
            <button class="view-project-btn">View Full Project</button>
            <button class="edit-project-btn">Edit Project</button>
          </div>
        </div>
      </div>
    `;
  })
  document.querySelector('.project-content').innerHTML = viewHtml;
}
renderProject();

function updateProjectCountCard() {
  document.querySelectorAll('.total-project-count').forEach((each) => {
    each.innerHTML = projects.filter(p => p.projectType !== 'Public Project').length
  })
  document.querySelectorAll('.ongoing-project-count').forEach((each) => {
    each.innerHTML = projects.filter(p => p.projectType !== 'Public Project' && !p.isComplete).length
  })
  document.querySelectorAll('.completed-project-count').forEach((each) => {
    each.innerHTML = projects.filter(p => p.projectType !== 'Public Project' && p.isComplete).length
  })
}
updateProjectCountCard();