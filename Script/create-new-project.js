import { chnageTheme } from "./utils/changeTheme.js";
import { completeProject } from "./utils/complete-project-array.js";
chnageTheme();


const titleInput = document.getElementById('title');
const describtionInput = document.getElementById('describtion');
const titleLimit = 70;

document.getElementById('title').addEventListener('input', () => {
  document.querySelector('.count').textContent = titleInput.value.length;
  if (titleInput.value.length >= titleLimit) {
    titleInput.value = titleInput.value.slice(0, titleLimit)
   document.querySelector('.count').textContent = titleLimit; 
  }
})
const personalProjectType = document.getElementById('personal')
const publicProjectType = document.getElementById('public')
const clientProjectType = document.getElementById('client')
const clientInternal = document.getElementById('internal');
const clientExternal = document.getElementById('external');
const sourceSelect = document.getElementById('source-select');

function projectTypeOption(type) {
  document.querySelector('.phases-wrap').style.display = type === 'Personal' ? 'flex' : '';
  document.querySelector('.source-wrap').style.display = type === 'Client' ? 'flex' : '';
  document.querySelector('.public-options').style.display = type === 'Public' ? 'flex' : '';
  document.querySelector('.visibility-wrap').style.display = type === 'Public' ? 'flex' : '';
}
function clientSource(type) {
  document.querySelector('.source-wrap-option').style.display = type === 'external' ? 'flex' : '';
}

personalProjectType.addEventListener('click', () => projectTypeOption('Personal'))
if (personalProjectType.checked) {
  projectTypeOption('Personal')
}
clientExternal.addEventListener('click', () => clientSource('external'))
clientInternal.addEventListener('click', () => clientSource(''))

const addNewPhase = document.querySelector('.add-phase-btn');
let count = 0;
document.querySelector('.phase-count').innerHTML = count;
addNewPhase.addEventListener('click', () => {
  count++;
  document.querySelector('.phase-container').innerHTML +=  `
    <div class="phase-wrapper">
      <span>${count}</span>
      <input type="text">
    </div>
  `;
  document.querySelector('.phase-count').innerHTML = count;
})
sourceSelect.addEventListener('change', () => {
  if (sourceSelect.value === 'Others') {
    document.querySelector('.enter-source').style.display = 'flex';
  } else {
    document.querySelector('.enter-source').style.display = 'none';
  }
})


publicProjectType.addEventListener('click', () => {
  projectTypeOption('Public')
  document.querySelector('.phase-container').innerHTML = '';
  count = 0;
  document.querySelector('.phase-count').innerHTML = count;
})
clientProjectType.addEventListener('click', () => {
  projectTypeOption('Client')
  document.querySelector('.phase-container').innerHTML = '';
  count = 0;
  document.querySelector('.phase-count').innerHTML = count;
})

console.log(completeProject.length)

document.querySelector('form').addEventListener('submit', () => {
  completeProject.push({
    id: crypto.randomUUID(),
    img: '/Car Project/image/file_0000000076d061f4aa69bd6aa79bafc0.png',
    name: titleInput.value,
    description: describtionInput.value,
    totalPhase: count,
    isComplete: false,
    duration: 'none',
    isPortfolio: true,
    linkToProject: '',
    projectType: 'Personal Project',
    budget: '--'
  })
})

console.log(completeProject)
console.log(completeProject.length)

// I am building my landing page to showcase my work and reach out to more client, delivering good job and providing services to those who needed it