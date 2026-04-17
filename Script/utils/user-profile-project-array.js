import { projects } from "../../data/projects.js";
const completedProject = projects.filter(p => p.projectType !== 'Public Project' && p.isComplete)

export function renderAllProject(complete = completedProject) {
  let viewHtml = '';
  complete.forEach((project) => {
    viewHtml += `
      <div class="project-container">
        <div class="left  ${project.projectType === 'Personal Project' ? '' : 'client-project-left'}">
          <span class="project-type ${project.projectType === 'Personal Project' ? '' : project.projectType === 'Client Project' ? 'client-project-type' : 'public-project-type'}">${project.projectType === 'Personal Project' ? 'Personal' :project.projectType === 'Client Project' ? 'Client' : 'Public'}</span>
        </div>
        <div class="middle">
          <div class="top">
            <div class="title-content">
              <p class="title">${project.name}</p>
              <p class="portfolio-status ${project.isPortfolio ? '' : 'not-active'}">Portfolio: ${project.isPortfolio ? 'Active' : 'Inactive'}</p>
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
                <p class="project-status ${project.isComplete ? 'completed-status' : ''}">${project.projectType === 'Public Project' && !project.isComplete ? 'Open' :project.isComplete ? 'Completed' : 'In Progress'}</p>
              </div>
              ${project.projectType === 'Public Project' ? `
                  <div class="type-info">
                    <p>Project Type</p>
                    <p class="project-client">${project.type}</p>
                  </div>
                ` : `
                  <div class="client-info">
                    <p>Client</p>
                    <p class="project-client">-------</p>
                  </div>
                `}
            </div>
            <div class="phase-progress-wrap">
              <p>Phases</p>
              <div class="progress-bar-wrap">
                <span class="progress-bar"></span>
              </div>
              <p><span class="completed-phase">2</span> / <span class="all-phase">${project.totalPhase}</span></p>
              <span class="dot"></span>
              <p><span class="completed-phase">2</span> Completed</p>
            </div>
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

  document.querySelector('.project-wrapper').innerHTML = viewHtml;
}