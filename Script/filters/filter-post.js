import { homePost } from "../utils/post-array.js";
import { renderPost } from "../home-feed.js";const allPostBtn = document.querySelector('.all-post');
const selfPostBtn = document.querySelector('.self-post');
const teamPostBtn = document.querySelector('.teams-post');
const clientPostBtn = document.querySelector('.client-post');
const projectsPostBtn = document.querySelector('.projects-post');

export function filterPost() {
  allPostBtn.addEventListener('click', () => {
    allPostBtn.classList.add('current-post')
    selfPostBtn.classList.remove('current-post')
    teamPostBtn.classList.remove('current-post')
    clientPostBtn.classList.remove('current-post')
    projectsPostBtn.classList.remove('current-post')
    renderPost();
  });
  selfPostBtn.addEventListener('click', () => {
    allPostBtn.classList.remove('current-post')
    selfPostBtn.classList.add('current-post')
    teamPostBtn.classList.remove('current-post')
    clientPostBtn.classList.remove('current-post')
    projectsPostBtn.classList.remove('current-post')
    const filtered = homePost.filter(p => p.accountType === 'Self');
    renderPost(filtered);
  })
  teamPostBtn.addEventListener('click', () => {
    allPostBtn.classList.remove('current-post')
    selfPostBtn.classList.remove('current-post')
    teamPostBtn.classList.add('current-post')
    clientPostBtn.classList.remove('current-post')
    projectsPostBtn.classList.remove('current-post')
    const filtered = homePost.filter(p => p.accountType === 'Team');
    renderPost(filtered);
  })
  clientPostBtn.addEventListener('click', () => {
    allPostBtn.classList.remove('current-post')
    selfPostBtn.classList.remove('current-post')
    teamPostBtn.classList.remove('current-post')
    clientPostBtn.classList.add('current-post')
    projectsPostBtn.classList.remove('current-post')
    const filtered = homePost.filter(p => p.accountType === 'Recruiter');
    renderPost(filtered);
  })
  projectsPostBtn.addEventListener('click', () => {
    allPostBtn.classList.remove('current-post')
    selfPostBtn.classList.remove('current-post')
    teamPostBtn.classList.remove('current-post')
    clientPostBtn.classList.remove('current-post')
    projectsPostBtn.classList.add('current-post')
    const filtered = homePost.filter(p => p.postProject);
    renderPost(filtered);
  })
}