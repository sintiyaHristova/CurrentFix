import { html } from "../lib/lit-html.js";
import { previousProjects } from "../api/data.js";

const projectTemplate = (a) => html` <div class="box">
  <div class="image">
    <img src=${a.img} alt="" />
    <div class="icons">
      <a href=${`/projects/${a.id}`} class="cart-btn">Детайли</a>
    </div>
  </div>
  <div class="content">
    <h3>${a.title}</h3>
  </div>
</div>`;

const previousProjectsTemplate = (previousProjects) => html` <section
  class="products"
  id="products"
>
  <h1 class="heading">Минали <span>проекти</span></h1>
  <div class="box-container">${previousProjects.map(projectTemplate)}</div>
</section>`;

export function funcProjects(e) {
  e.render(previousProjectsTemplate(previousProjects));
}
