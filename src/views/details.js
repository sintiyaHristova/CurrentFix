import { html } from "../lib/lit-html.js";
import { electronicServices } from "../api/data.js";

const detailsTemplate = (p) => html` <section class="details">
  <div class="wrapper">
    <div class="product-img">
      <img src="${p.img}" width="320" />
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>${p.title}</h1>
        <p>${p.description}</p>
      </div>
      <div class="back-btn">
        <a class="btn" href="/catalog" type="button">Назад</a>
      </div>
    </div>
  </div>
</section>`;

export function funcDetails(e) {
  const id = e.params.id;
  const a = electronicServices.find((p) => p.id === id);
  e.render(detailsTemplate(a));
}
