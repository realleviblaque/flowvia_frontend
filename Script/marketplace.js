import { renderIndividual } from "./utils/individual-array.js";
import { renderTeam } from "./utils/team-array.js";
import { renderJob } from "./utils/job-array.js";
import { clickTheme, chnageTheme } from "./utils/changeTheme.js";
import { statusCount } from "./utils/portfolio.js";


renderIndividual();
renderTeam();
renderJob();
chnageTheme();
clickTheme();
statusCount();

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


//This is to hire, apply for a job and also calculate the characters
const individualTextInput = document.querySelectorAll('.hire-message');
const count = document.querySelectorAll('.max-count');
const individualHireContainer = document.querySelectorAll('.indidual-hire-message-container');



const teamTextInput = document.querySelectorAll('.team-hire-message');
const teamCount = document.querySelectorAll('.team-max-count');
const teaamHireContainer = document.querySelectorAll('.team-hire-message-container');



const jobTextInput = document.querySelectorAll('.job-hire-message');
const jobCount = document.querySelectorAll('.job-max-count');
jobCount.textContent = 0;
const jobHireContainer = document.querySelectorAll('.job-hire-message-container');







//This is to navigate through the markepplace section
const individualTab = document.querySelector('.individual-tab');
const teamTab = document.querySelector('.team-tab');
const jobTab = document.querySelector('.job-tab');
const individualSection = document.querySelector('.individual-tab-section');
const teamSection = document.querySelector('.team-tab-section');
const jobSection = document.querySelector('.job-tab-section');
const searchInput = document.querySelector('.searc-input')


function teamClick() {
  teamTab.classList.add('teamInView')
  individualTab.classList.remove('individual-tab')
  jobTab.classList.remove('jobInView')
  individualSection.classList.add('individualSectionGone')
  jobSection.classList.remove('jobSectionView')
  teamSection.classList.add('teamSectionView')
  individualHireContainer.forEach(container => container.classList.remove('indidual-hire-message-container-view'))
  individualTextInput.forEach(input => input.value = '')
  count.forEach(counts => counts.textContent = 0)
  jobHireContainer.forEach(container => container.classList.remove('job-hire-message-container-view'))
  jobTextInput.forEach(input => input.value = '');
  jobCount.forEach(count => count.textContent = 0);
}

function jobClick() {
  if(jobSection.classList.contains('jobSectionView')) {
    return;
  }
  if (individualTab.classList.contains('individual-tab') && individualSection.classList.contains('individual-tab-section') || teamTab.classList.contains('teamInView') && teamSection.classList.contains('teamSectionView') || individualHireContainer.classList.contains('indidual-hire-message-container-view') || teaamHireContainer.classList.contains('team-hire-message-container-view')) {
    jobTab.classList.add('jobInView')
    teamTab.classList.remove('teamInView')
    individualTab.classList.remove('individual-tab')
    jobSection.classList.add('jobSectionView')
    individualSection.classList.add('individualSectionGone')
    teamSection.classList.remove('teamSectionView')
    individualHireContainer.forEach(container => container.classList.remove('indidual-hire-message-container-view'))
    individualTextInput.forEach(input => input.value = '')
    count.forEach(counts => counts.textContent = 0)
    teaamHireContainer.forEach(container => container.classList.remove('team-hire-message-container-view'))
    teamTextInput.forEach(input => input.value = '');
    teamCount.forEach(teamCouts => teamCouts.textContent = 0);
  }
}

function indidualClick() {
  if(!individualSection.classList.contains('individualSectionGone')) {
    return;
  }
  if (jobTab.classList.contains('jobInView') && jobSection.classList.contains('jobSectionView') || teamTab.classList.contains('teamInView') && teamSection.classList.contains('teamSectionView') || teaamHireContainer.classList.contains('team-hire-message-container-view') || jobHireContainer.classList.contains('job-hire-message-container-view')) {
    teamTab.classList.remove('teamInView')
    individualTab.classList.add('individual-tab')
    jobTab.classList.remove('jobInView')
    jobSection.classList.remove('jobSectionView')
    individualSection.classList.remove('individualSectionGone')
    teamSection.classList.remove('teamSectionView')
    teaamHireContainer.forEach(container => container.classList.remove('team-hire-message-container-view'))
    teamTextInput.forEach(input => input.value = '');
    teamCount.forEach(teamCouts => teamCouts.textContent = 0);
    jobHireContainer.forEach(container => container.classList.remove('job-hire-message-container-view'))
    jobTextInput.forEach(input => input.value = '');
    jobCount.forEach(count => count.textContent = 0);
  }
}


document.querySelector('.btn-nav-click').addEventListener('click', () => {
  document.querySelector('.dialog').showModal();
})

document.querySelector('.close-dialog').addEventListener('click', () => {
  document.querySelector('.dialog').close();
})


const url = new URL(window.location.href);

individualTab.addEventListener('click', () => {
  window.location.href = 'market-place.html?individuals';
})
teamTab.addEventListener('click', () => {
  window.location.href = 'market-place.html?teams';
})
jobTab.addEventListener('click', () => {
  window.location.href = 'market-place.html?jobs';
})
if (url.searchParams.has('teams')) {
  teamClick()
  document.querySelector('.individual-filter-wrap').classList.add('individual-filter-gone');
  document.querySelector('.team-filter-wrap').classList.remove('team-filter-gone');
  document.querySelector('.job-filter-wrap').classList.add('job-filter-gone');
} else if (url.searchParams.has('individuals')) {
  indidualClick()
  document.querySelector('.individual-filter-wrap').classList.remove('individual-filter-gone');
  document.querySelector('.team-filter-wrap').classList.add('team-filter-gone');
  document.querySelector('.job-filter-wrap').classList.add('job-filter-gone');
} else if (url.searchParams.has('jobs')) {
  jobClick()
  document.querySelector('.individual-filter-wrap').classList.add('individual-filter-gone');
  document.querySelector('.team-filter-wrap').classList.add('team-filter-gone');
  document.querySelector('.job-filter-wrap').classList.remove('job-filter-gone');
}

function indidualFilter() {
  const all = document.querySelector('.all-filter');
  const avaialbe = document.querySelector('.available-filter')

  all.addEventListener('click', () => {
    avaialbe.classList.remove('active-filter')
    all.classList.add('active-filter')
  })
  avaialbe.addEventListener('click', () => {
    all.classList.remove('active-filter')
    avaialbe.classList.add('active-filter')
  })
}
indidualFilter()
function teamFilter() {
  const all = document.querySelector('.all-team-filter');
  const open = document.querySelector('.open-status-filter');
  const busy = document.querySelector('.busy-status-filter');
  const verified = document.querySelector('.verified-team-filter');

  all.addEventListener('click', () => {
    all.classList.add('active-filter')
    open.classList.remove('active-filter')
    busy.classList.remove('active-filter')
    verified.classList.remove('active-filter')
  })
  open.addEventListener('click', () => {
    open.classList.add('active-filter')
    all.classList.remove('active-filter')
    busy.classList.remove('active-filter')
    verified.classList.remove('active-filter')
  })
  busy.addEventListener('click', () => {
    busy.classList.add('active-filter')
    open.classList.remove('active-filter')
    all.classList.remove('active-filter')
    verified.classList.remove('active-filter')
  })
  verified.addEventListener('click', () => {
    verified.classList.add('active-filter')
    open.classList.remove('active-filter')
    busy.classList.remove('active-filter')
    all.classList.remove('active-filter')
  })
}
teamFilter();
function jobFilter() {
  const all = document.querySelector('.all-job-filter')
  const remote = document.querySelector('.remote-filter')
  const deadline = document.querySelector('.deadline-filter')
  const midSenior = document.querySelector('.mid-senior-filter')
  const senior = document.querySelector('.senior-filter')
  const mmidLevel = document.querySelector('.mid-level-filter')
  const anyLevel = document.querySelector('.any-level-filter')
  const longTerm = document.querySelector('.long-term-filter')
  const oneTime = document.querySelector('.one-time-filter')

  all.addEventListener('click', () => {
    all.classList.add('active-filter')
    remote.classList.remove('active-filter')
    deadline.classList.remove('active-filter')
    midSenior.classList.remove('active-filter')
    senior.classList.remove('active-filter')
    mmidLevel.classList.remove('active-filter')
    anyLevel.classList.remove('active-filter')
    longTerm.classList.remove('active-filter')
    oneTime.classList.remove('active-filter')
  })
  remote.addEventListener('click', () => {
    remote.classList.add('active-filter')
    all.classList.remove('active-filter')
    deadline.classList.remove('active-filter')
    midSenior.classList.remove('active-filter')
    senior.classList.remove('active-filter')
    mmidLevel.classList.remove('active-filter')
    anyLevel.classList.remove('active-filter')
    longTerm.classList.remove('active-filter')
    oneTime.classList.remove('active-filter')
  })
  deadline.addEventListener('click', () => {
    deadline.classList.add('active-filter')
    remote.classList.remove('active-filter')
    all.classList.remove('active-filter')
    midSenior.classList.remove('active-filter')
    senior.classList.remove('active-filter')
    mmidLevel.classList.remove('active-filter')
    anyLevel.classList.remove('active-filter')
    longTerm.classList.remove('active-filter')
    oneTime.classList.remove('active-filter')
  })
  midSenior.addEventListener('click', () => {
    midSenior.classList.add('active-filter')
    remote.classList.remove('active-filter')
    deadline.classList.remove('active-filter')
    all.classList.remove('active-filter')
    senior.classList.remove('active-filter')
    mmidLevel.classList.remove('active-filter')
    anyLevel.classList.remove('active-filter')
    longTerm.classList.remove('active-filter')
    oneTime.classList.remove('active-filter')
  })
  senior.addEventListener('click', () => {
    senior.classList.add('active-filter')
    remote.classList.remove('active-filter')
    deadline.classList.remove('active-filter')
    midSenior.classList.remove('active-filter')
    all.classList.remove('active-filter')
    mmidLevel.classList.remove('active-filter')
    anyLevel.classList.remove('active-filter')
    longTerm.classList.remove('active-filter')
    oneTime.classList.remove('active-filter')
  })
  mmidLevel.addEventListener('click', () => {
    mmidLevel.classList.add('active-filter')
    remote.classList.remove('active-filter')
    deadline.classList.remove('active-filter')
    midSenior.classList.remove('active-filter')
    senior.classList.remove('active-filter')
    all.classList.remove('active-filter')
    anyLevel.classList.remove('active-filter')
    longTerm.classList.remove('active-filter')
    oneTime.classList.remove('active-filter')
  })
  anyLevel.addEventListener('click', () => {
    anyLevel.classList.add('active-filter')
    remote.classList.remove('active-filter')
    deadline.classList.remove('active-filter')
    midSenior.classList.remove('active-filter')
    senior.classList.remove('active-filter')
    mmidLevel.classList.remove('active-filter')
    all.classList.remove('active-filter')
    longTerm.classList.remove('active-filter')
    oneTime.classList.remove('active-filter')
  })
  longTerm.addEventListener('click', () => {
    longTerm.classList.add('active-filter')
    remote.classList.remove('active-filter')
    deadline.classList.remove('active-filter')
    midSenior.classList.remove('active-filter')
    senior.classList.remove('active-filter')
    mmidLevel.classList.remove('active-filter')
    anyLevel.classList.remove('active-filter')
    all.classList.remove('active-filter')
    oneTime.classList.remove('active-filter')
  })
  oneTime.addEventListener('click', () => {
    oneTime.classList.add('active-filter')
    remote.classList.remove('active-filter')
    deadline.classList.remove('active-filter')
    midSenior.classList.remove('active-filter')
    senior.classList.remove('active-filter')
    mmidLevel.classList.remove('active-filter')
    anyLevel.classList.remove('active-filter')
    longTerm.classList.remove('active-filter')
    all.classList.remove('active-filter')
  })
}
jobFilter()