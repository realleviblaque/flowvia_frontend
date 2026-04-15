import { indidual } from "../utils/individual-array.js";
const randomIndividual = indidual.sort(() => Math.random() - 0.5)

export function renderIndividualPannel() {
  let viewHtml = '';
  let i = 0;
  randomIndividual.forEach((self) => {
    i++;
    if (i > 4) {
      return;
    } else if (i <= 4) {
      viewHtml += `
        <div class="content-wrapper">
          <div class="left">
            <img src="${self.ProfileImg}">
          </div>
          <div class="middle">
            <p class="name">${self.name}</p>
            <p class="profession">Full Stack Developer</p>
          </div>
          <div class="right">
            <button>Follow</button>
          </div>
        </div>
      `
    }
  })
  document.querySelector('.sug-self-container').innerHTML = viewHtml
}