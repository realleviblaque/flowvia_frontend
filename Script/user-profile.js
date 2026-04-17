import {homePost, reuseCount} from "./utils/post-array.js";
import { projects, OpenProject } from "../data/projects.js";
import { checkProject, statusCount } from "./utils/portfolio.js";
import { renderAllProject } from "./utils/user-profile-project-array.js";
import {chnageTheme, clickTheme } from "./utils/changeTheme.js";
chnageTheme();
clickTheme();
renderAllProject();
checkProject();
statusCount();

const allProjects = projects.filter(p => p.projectType !== 'Public Project');
const completedProject = projects.filter(p => p.projectType !== 'Public Project' && p.isComplete)
const ongoingProjects = projects.filter(p => p.projectType !== 'Public Project' && !p.isComplete)

const sectionProject = document.querySelector('.project-section');
const sectionActivity = document.querySelector('.activity-section');
const portfolioSection = document.querySelector('.portfolio-section-gone')
const reviewSection = document.querySelector('.reviews-section-gone')

const activityBtn = document.querySelector('.activity-btn');
const projectBtn = document.querySelector('.projects-btn');
const portfolioBtn = document.querySelector('.portfolio-btn');
const aboutBtn = document.querySelector('.about-btn');
const reviewsBtn = document.querySelector('.reviews-btn');

projectBtn.addEventListener('click', () => {
  sectionActivity.classList.add('activity-section-gone')
  sectionProject.classList.add('project-section-show')
  portfolioSection.classList.remove('portfolio-section')
  reviewSection.classList.remove('reviews-section')
  allProjectClick();
  activityBtn.classList.remove('act-click');
  portfolioBtn.classList.remove('port-click');
  aboutBtn.classList.remove('abt-click');
  reviewsBtn.classList.remove('rev-click');
  projectBtn.classList.add('proj-click')
});

activityBtn.addEventListener('click', () => {
  sectionActivity.classList.remove('activity-section-gone')
  sectionProject.classList.remove('project-section-show')
  portfolioSection.classList.remove('portfolio-section')
  reviewSection.classList.remove('reviews-section')
  activityBtn.classList.add('act-click');
  projectBtn.classList.remove('proj-click')
  portfolioBtn.classList.remove('port-click');
  aboutBtn.classList.remove('abt-click');
  reviewsBtn.classList.remove('rev-click');
});
portfolioBtn.addEventListener('click', () => {
  sectionActivity.classList.add('activity-section-gone')
  sectionProject.classList.remove('project-section-show')
  portfolioSection.classList.add('portfolio-section')
  reviewSection.classList.remove('reviews-section')
  portfolioBtn.classList.add('port-click');
  projectBtn.classList.remove('proj-click')
  activityBtn.classList.remove('act-click');
  aboutBtn.classList.remove('abt-click');
  reviewsBtn.classList.remove('rev-click');
  projectBtn.classList.remove('proj-click')
});
aboutBtn.addEventListener('click', () => {
  aboutBtn.classList.add('abt-click');
  portfolioBtn.classList.remove('port-click');
  projectBtn.classList.remove('proj-click')
  activityBtn.classList.remove('act-click');
  reviewsBtn.classList.remove('rev-click');
  projectBtn.classList.remove('proj-click')
})
reviewsBtn.addEventListener('click', () => {
  sectionActivity.classList.add('activity-section-gone')
  sectionProject.classList.remove('project-section-show')
  portfolioSection.classList.remove('portfolio-section')
  reviewSection.classList.add('reviews-section')
  reviewsBtn.classList.add('rev-click');
  aboutBtn.classList.remove('abt-click');
  portfolioBtn.classList.remove('port-click');
  projectBtn.classList.remove('proj-click')
  activityBtn.classList.remove('act-click');
  projectBtn.classList.remove('proj-click')
})

const banner = document.querySelector('.banner-head');



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

function renderUserProfilePost() {
  let profilePostHTML = '';
  homePost.forEach((post) => {
    profilePostHTML = `
      <div class="post-container">
        <div class="post-header">
          <div class="left">
            <img class="post-user-profile" src="${post.userImg}">
          </div>
          <div class="middle">
            <div class="post-info-top">
              <p class="name">${post.user}</p>
              <span></span>
              <p class="post-time">${post.postDate}</p>
            </div>
            <div class="post-info-bottom">
              <p class="username">@${post.username}</p>
              <span></span>
              <p class="category">Flowvia Company</p>
            </div>
          </div>
          <div class="post-option">
            <img src="/Icons/bootstrap icon/three-dots.svg">
          </div>
        </div>
        <div class="post-body">
          <p class="body-text">
            ${post.postText}
          </p>
          ${ post.postProject ? '' :  post.postImg ? `
              <div class="body-image">
                <img src="${post.postImg}">
              </div>
            ` : ''
          }
        </div>
        ${post.postProject ? `
            <div class="post-project">
              <div class="project-cover" style="${post.postProject.image ? `background: linear-gradient(rgba(0,0,0,0.3)), url('${post.postProject.image}') center no-repeat; background-size: cover` : ''}">
                ${!post.postProject.image ? `${post.postProject.title}` : ''}
              </div>
              <div class="project-details">
                <p class="title">${post.postProject.title}</p>
                <p class="description">${post.postProject.description}</p>
                <div class="details">
                  <div>
                    Remote
                  </div>
                  <span></span>
                  <div>
                    Long-Term Contract
                  </div>
                </div>
                <div class="action">
                  <div class="left-action-project">
                    <div class="budget">${post.postProject.budget}</div>
                    <div class="deadline">${post.postProject.deadline}</div>
                  </div>
                  <div class="right-action-project">
                    <button class="opportunity-btn">View Opportunity</button>
                  </div>
                </div>
              </div>
            </div>
          ` : ''}
        <div class="footer-post">
          <div class="react-wrap">
            <div>
              <img src="/Icons/bootstrap icon/heart.svg">
              <p class="like-count">${post.likes}</p>
            </div>
            <div>
              <img src="/Icons/bootstrap icon/chat.svg">
              <p class="comment-count">${post.comment}</p>
            </div>
            <div>
              <img src="/Icons/bootstrap icon/share.svg">
              <p class="share-count">${post.share}</p>
            </div>
          </div>
          <div class="save-post">
            <div>
              <img src="/Icons/bootstrap icon/bookmark.svg">
              <p class="save-count">${post.save}</p>
            </div>
          </div>
        </div>
      </div>
    ` + profilePostHTML;
    document.querySelector('.activity-container').innerHTML = profilePostHTML;
  })
}

renderUserProfilePost();
document.querySelectorAll('.like-click').forEach((like) => {
  like.addEventListener('click', () => {
    reuseCount(like)
  })
})


document.querySelector('.btn-nav-click').addEventListener('click', () => {
  document.querySelector('.dialog').showModal();
})

document.querySelector('.close-dialog').addEventListener('click', () => {
  document.querySelector('.dialog').close();
})

const allProject = document.querySelector('.all-project')
const ongoingProject = document.querySelector('.ongoing-project')
const openProject = document.querySelector('.open-project')
const finsihedProject = document.querySelector('.completed-project')
const allProjectCount = document.querySelector('.all-project-count')
const projectType = document.querySelector('.project-type')

function allProjectClick() {
  allProject.classList.add('project-tab-in-view');
  finsihedProject.classList.remove('project-tab-in-view');
  ongoingProject.classList.remove('project-tab-in-view');
  openProject.classList.remove('project-tab-in-view');
  allProjectCount.innerHTML = allProjects.length;
  projectType.innerHTML = 'Projects';
  renderAllProject();
}

allProject.addEventListener('click', () => {
  allProjectClick();
})
ongoingProject.addEventListener('click', () => {
  ongoingProject.classList.add('project-tab-in-view');
  openProject.classList.remove('project-tab-in-view');
  allProject.classList.remove('project-tab-in-view');
  finsihedProject.classList.remove('project-tab-in-view');
  allProjectCount.innerHTML = ongoingProjects.length;
  projectType.innerHTML = 'Ongoing Projects';
  renderAllProject(ongoingProjects);
})
openProject.addEventListener('click', () => {
  ongoingProject.classList.remove('project-tab-in-view');
  openProject.classList.add('project-tab-in-view');
  allProject.classList.remove('project-tab-in-view');
  finsihedProject.classList.remove('project-tab-in-view');
  allProjectCount.innerHTML = OpenProject.length;
  projectType.innerHTML = 'Open Projects';
  renderAllProject(OpenProject);
})
finsihedProject.addEventListener('click', () => {
  ongoingProject.classList.remove('project-tab-in-view');
  openProject.classList.remove('project-tab-in-view');
  allProject.classList.remove('project-tab-in-view');
  finsihedProject.classList.add('project-tab-in-view');
  allProjectCount.innerHTML = completedProject.length;
  projectType.innerHTML = 'Finished Projects';
  renderAllProject(completedProject);
})






//Skill Section in Activity Tab
function skillsRenderist() {
  let list = [{
    skill: 'React'
  }, {
    skill: 'Node.js'
  }, {
    skill: 'TypeScript'
  }, {
    skill: 'Python'
  }, {
    skill: 'PosgreSQL'
  }, {
    skill: 'Figma'
  }, {
    skill: 'REST APIs'
  }, {
    skill: 'Tailwind'
  }]

  const container =  document.querySelector('.skills-container');
  let wrapper;
  list.forEach((lst, index) => {

    if (index % 3 === 0) {
      wrapper = document.createElement('div');
      wrapper.className = 'skill-wrap-fill'
      container.appendChild(wrapper)
    }

    wrapper.innerHTML += `
      <span>${lst.skill}</span>
    `
  })
}
skillsRenderist();
