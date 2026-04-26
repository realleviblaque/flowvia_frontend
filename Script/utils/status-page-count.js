import { completeOpenProject, OpenProject, projects } from "../../data/projects.js";

const completedProject = projects.filter(p => p.projectType !== 'Public Project' && p.isComplete)
const ongoingProjects = projects.filter(p => p.projectType !== 'Public Project' && !p.isComplete)
export function updateStatusCards() {
  const active = document.querySelector('.active-project-count');
  const complete = document.querySelector('.completed-project-count');
  const open = document.querySelector('.open-project-count');
  const completeOpen = document.querySelector('.complete-open-project-count');

  active.innerText = ongoingProjects.length;
  complete.innerText = completedProject.length;
  open.innerText = OpenProject.length;
  completeOpen.innerText = completeOpenProject.length
}