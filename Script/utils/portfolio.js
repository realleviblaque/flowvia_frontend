import { projects} from "../../data/projects.js";
export function checkProject() {
  const personalCount =  projects.filter(p => p.projectType === 'Personal Project').length;
  const completedProject = projects.filter(p => p.projectType !== 'Public Project' && p.isComplete)
  const publicCount = 30 /* projects.filter(project => project.projectType === 'Public Project').length */;
  const clientCount =  projects.filter(p => p.projectType === 'Client Project').length;
  document.querySelector('.js-personal-count').innerText = projects.filter(p => p.isPortfolio && p.isComplete && p.projectType === 'Personal Project').length
  document.querySelector('.js-ongoing-count').innerText = projects.filter(p => {
    if (p.projectType === 'Personal Project' || p.projectType === 'Client Project') {
      return !p.isComplete && p.isPortfolio
    }
  }).length;
  document.querySelector('.js-client-count').innerText = projects.filter((p) => p.isComplete && p.isPortfolio && p.projectType === 'Client Project').length;
  document.querySelector('.js-all-count').innerText = projects.filter((p) => {
    if (p.projectType === 'Personal Project' || p.projectType === 'Client Project') {
      return p.isPortfolio;
    }
  }).length;
  document.querySelector('.portfolio-project-count').innerText =  projects.filter((p) => {
    if (p.projectType === 'Personal Project' || p.projectType === 'Client Project') {
      return p.isPortfolio;
    }
  }).length;
  document.querySelector('.projects-count').innerText = completedProject.length;
  document.querySelector('.js-personal-plus').innerHTML = `${personalCount <= 0 ? '' : '+'}`
  document.querySelector('.js-ongoing-plus').innerHTML = `${publicCount <= 0 ? '' : '+'}`
  document.querySelector('.js-client-plus').innerHTML = `${clientCount <= 0 ? '' : '+'}`
  document.querySelector('.js-all-plus').innerHTML = `${completedProject.length <= 0 ? '' : '+'}`
}


export function statusCount() {
  const completedProject = projects.filter(p => p.projectType !== 'Public Project' && p.isComplete)
  const ongoingProjects = projects.filter(p => p.projectType !== 'Public Project' && !p.isComplete)
  document.querySelectorAll('.completet-status-project').forEach(statComplete => statComplete.innerHTML = completedProject.length);
  document.querySelectorAll('.active-status-project').forEach(statComplete => statComplete.innerHTML = ongoingProjects.length);
}