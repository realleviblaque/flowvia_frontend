import { completedProject, ongoingProjects, completeOpenProject, OpenProject } from "../../data/projects.js";

export function updateStatusCards() {
  const active = document.querySelector('.acitve-project-count');
  const complete = document.querySelector('.complete-project-count');
  const open = document.querySelector('.open-project-count');
  const completeOpen = document.querySelector('.complete-open-project-count');

  active.innerText = ongoingProjects.length;
  complete.innerText = completedProject.length;
  open.innerText = OpenProject.length;
  completeOpen.innerText = completeOpenProject.length
}