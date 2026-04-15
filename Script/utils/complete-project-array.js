import { completedProject } from "../../data/projects.js";

export function renderCompletedProject(allProject = completedProject) {
  let viewHtml = '';
  allProject.forEach((project) => {
    viewHtml += `
        <div class="project-container">
          <div class="left">
            <img src="${project.img}">
          </div>
          <div class="rigt">
            <div class="details-top">
              <div>
               <p class="details-name">${project.name}</p>
              </div>
              <div class="details-action">
                <button class="view-project">View Full Project</button>
                <button class="edit-project"><img src="/Icons/bootstrap icon/pencil-square.svg">Edit Project</button>
              </div>
            </div>
            <div class="details-bottom">
              <div class="describtion">
                <p class="des-head">Description</p>
                <p class="des-text">${project.description}</p>
              </div>
              <div class="details-down">
              ${project.totalPhase 
                ? `
                    <div class="phase">
                      <p class="phase-head">Total Phases:</p>
                      <span class="phase-count">${project.totalPhase}</span>
                      <p class="phase-confirmation">${project.isComplete ? 'Completed <img src="/Icons/bootstrap icon/check-circle-fill.svg">' : 'Not Completed <img src="/Icons/bootstrap icon/x-circle-fill.svg">'}</p>
                    </div>
                    <span class="line"></span>
                  ` 
                : ''}
                <div class="duration">
                  <p class="duration-head">Budget:</p>
                  <span class="duration-week">${project.budget}</span>
                </div>
                <span class="line"></span>
                <div class="duration">
                  ${project.projectType === 'Client Project' || project.projectType === 'Public Project' 
                    ? `
                      <p class="duration-head">Deadline:</p>
                      <span class="duration-week">${project.deadline}</span>
                    ` 
                    : `
                      <p class="duration-head">Project Duration:</p>
                      <span class="duration-week">${project.duration}</span>
                    `}
                </div>
                ${project.isComplete 
                  ? `
                    <span class="line"></span>
                    <div class="portfolio">
                      <p class="portfolio-head">Portfolio Status:</p>
                      <span class="portfolio-statis ${project.isPortfolio ? 'active' : ''}">${project.isPortfolio ? 'Active' : 'Not Active'}</span>
                    </div>
                  ` 
                  : ''
                }
                ${project.isComplete ? `
                    <span class="line"></span>
                    <div class="project-link">
                      <p class="link-head">Link To Project</p>
                      <a href="${project.linkToProject}" target="_blank" class="link-project">Go to Project</a>
                    </div>
                  ` : ''}
                <div class="details-right">
                  <span class="prohject-type">${project.projectType}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
  })
  // document.querySelector('.project-wrapper').innerHTML = viewHtml
}