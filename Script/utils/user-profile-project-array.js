import { projects } from "../../data/projects.js";
const completedProject = projects.filter(p => p.projectType !== 'Public Project' && p.isComplete)

export function renderAllProject(complete = completedProject) {
  let viewHtml = '';
  complete.forEach((project) => {
    viewHtml +=  `
      <div class="project-container">
        <div class="project-right">
          <img src="${project.img}">
        </div>
        <div class="project-left">
          <div class="project-left-top">
            <p class="project-title">${project.name}</p>
            <button class="project-btn">View Project</button>
          </div>
          <div class="project-left-middle">
            <div class="middle-top">
              <p>Description</p>
            </div>
            <div class="middle-description">
              <p>${project.description}</p>
            </div>
            <div class="middle-top">
              <p>Phases</p>
            </div>
            <div class="middle-phasws">
              <div>
                <span>1</span>
                <div class="phases-list">
                  <p>Starting the project</p>
                  <img src="/Icons/bootstrap icon/check.svg">
                </div>
              </div>
              <div>
                <span>2</span>
                <div class="phases-list">
                  <p>Starting the project</p>
                  <img src="/Icons/bootstrap icon/check.svg">
                </div>
              </div>
              <div>
                <span>3</span>
                <div class="phases-list">
                  <p>Starting the project</p>
                  <img src="/Icons/bootstrap icon/check.svg">
                </div>
              </div>
              <div>
                <span>4</span>
                <div class="phases-list">
                  <p>Starting the project</p>
                  <img src="/Icons/bootstrap icon/check.svg">
                </div>
              </div>
              <div>
                <span>5</span>
                <div class="phases-list">
                  <p>Starting the project</p>
                  <img src="/Icons/bootstrap icon/check.svg">
                </div>
              </div>
              <div>
                <span>6</span>
                <div class="phases-list">
                  <p>Starting the project</p>
                  <img src="/Icons/bootstrap icon/x.svg">
                </div>
              </div>
              <div>
                <span>7</span>
                <div class="phases-list">
                  <p>Starting the project</p>
                  <img src="/Icons/bootstrap icon/x.svg">
                </div>
              </div>
              <div>
                <span>8</span>
                <div class="phases-list">
                  <p>Starting the project</p>
                  <img src="/Icons/bootstrap icon/x.svg">
                </div>
              </div>
            </div>
          </div>
          <div class="project-left-bottom">
            <div class="project-bottom-top">
              <p>Project Type: <span>${project.projectType}</span></p>
              <p>Budget: <span>${project.budget}</span></p>
            </div>
            <div class="project-bottom-bottom">
              <p>Created on: <span>March 20, 2026</span></p>
              <p class="project-status ${project.isComplete ? 'project-complete' : ''}">${project.isComplete ? 'Completed' : 'Ongoing'}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  })

  document.querySelector('.project-wrapper').innerHTML = viewHtml;
}