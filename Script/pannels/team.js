import { team, capitalizeName } from "../utils/team-array.js";
const randomTeam = team.sort(() => Math.random() - 0.5)

export function renderTeamPannel() {
  let viewHtml = '';
  let i = 0;
  randomTeam.forEach((sugTeam) => {
    i++;
    if (i > 4) {
      return;
    } else if (i <= 4) {
      viewHtml += `
        <div class="content-wrapper">
          <div class="left">
            <img src="${sugTeam.teamProfile}">
          </div>
          <div class="middle">
            <p class="name team-name">${sugTeam.teamName}</p>
            <p class="profession">Full Stack Developer</p>
          </div>
          <div class="right">
            <button>Follow</button>
          </div>
        </div>
      `
    }
  })
  document.querySelector('.sug-team-container').innerHTML = viewHtml;
  document.querySelectorAll('.team-name').forEach((text) => capitalizeName(text))
}