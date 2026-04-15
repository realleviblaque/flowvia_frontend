import { projects } from "../../data/projects.js";
import { renderCompletedProject } from "../utils/complete-project-array.js";

export function filterCompleteProject() {
  const projectTypeSelect = document.querySelector('.completed-project-type').value;
  const filteredProject = projects.filter((p) => {
    if (projectTypeSelect === 'all') {
      if (p.projectType === 'Personal Project' || p.projectType === 'Client Project') {
        return p.isComplete;
      }
    }
    return p.projectType === projectTypeSelect;
  })
  renderCompletedProject(filteredProject);
}