import {getPost} from "./utils/post.js";
import { homePost, reuseCount, checkAccountType} from "./utils/post-array.js";
import { renderTeamPannel } from "./pannels/team.js";
import { renderIndividualPannel } from "./pannels/individual.js";
import { renderJobPannel } from "./pannels/job.js";
import { clickTheme, chnageTheme } from "./utils/changeTheme.js";
import { statusCount } from "./utils/portfolio.js";
import { filterPost } from "./filters/filter-post.js";

chnageTheme();
clickTheme();
renderPost();
renderTeamPannel();
renderIndividualPannel();
renderJobPannel();
statusCount()

export function renderPost(allPost = homePost) {
  const randomeHomePost = allPost.sort(() => Math.random() - 0.5)
  let postHTML = '';
  randomeHomePost.forEach((post) => {
    postHTML += `
      <div class="post-container">
        <div class="post-header">
          <div class="left">
            <img class="post-user-profile" src="${post.userImg}">
          </div>
          <div class="middle">
            <div class="post-info-top">
              <p class="name">${post.user}</p>
              <div class="badge ${checkAccountType(post)}">${post.accountType}</div>
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
    `;
  })

 document.querySelector('.content').innerHTML = postHTML;

  attachLikesListener();
}

// FIltered Post
filterPost();

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

// Updating the post likes

function attachLikesListener() {
  document.querySelectorAll('.like-click').forEach((like) => {
    like.addEventListener('click', () => {
      reuseCount(like);
    })
  })
}

document.querySelector('.btn-nav-click').addEventListener('click', () => {
  document.querySelector('.dialog').showModal();
})

document.querySelector('.close-dialog').addEventListener('click', () => {
  document.querySelector('.dialog').close();
})