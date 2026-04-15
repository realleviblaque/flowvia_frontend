import { job } from "../utils/job-array.js";
import { checkAccountBadge } from "../utils/job-array.js";
const randomJobs = job.sort(() => Math.random() - 0.5)

export function renderJobPannel() {
  let viewHtml = '';
  let i = 0;
  randomJobs.forEach((jobs) => {
    i++;
    if (i > 2) {
      return;
    } else if (i <= 2) {
      viewHtml += `
        <div class="content-wrapper">
          <div class="top">
            <p class="job-title">${jobs.jobTitle}</p>
            <p class="requirement">Requirement: Figma Designer</p>
          </div>
          <div class="middle">
            <div class="budget">${jobs.budget}</div>
            <div class="location">${jobs.jobLocation}</div>
          </div>
          <div class="bottom">
            <div class="bottom-left">
              <p class="client-text">CLient</p>
              <div class="client-details">
                <div class="client-profile-pic">
                  <img src="${jobs.clientPic}">
                </div>
                <div class="client-name">
                  <p class="client-username">@${jobs.clinetUsername}</p>
                  <span  class="${checkAccountBadge(jobs)}" title="${jobs.clientAccountBadge} Account"></span>
                </div>
              </div>
            </div>
            <div class="bottom-right">
              <button>View Job</button>
            </div>
          </div>
        </div>
      `
    }
  })
  document.querySelector('.sug-job-container').innerHTML = viewHtml;
}