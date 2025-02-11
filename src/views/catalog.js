import { html } from "../lib/lit-html.js";
import { electronicServices } from "../api/data.js";

const title = ["УСЛУГИ"];

const serviceTemplate = (p) => html` <div class="box">
  <div class="image">
    <img src=${p.img} alt="" />
    <div class="icons">
      <a href=${`/catalog/${p.id}`} class="cart-btn">Детайли</a>
    </div>
  </div>
  <div class="content">
    <h3>${p.title}</h3>
  </div>
</div>`;

const servicesTemplate = (electronicServices) => html` <section
  class="products"
  id="products"
>
  <h1 class="heading">${title[0]} <span>${title[1]}</span></h1>
  <div class="box-container">
    ${electronicServices
      .filter((p) => p.services === "services")
      .map(serviceTemplate)}
  </div>
</section>`;

export function funcServices(е) {
  е.render(servicesTemplate(electronicServices));
}
