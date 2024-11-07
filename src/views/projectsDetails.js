import { html } from "../lib/lit-html.js";
import { previousProjects } from "../api/data.js";

const detailsTemplate = (a) => html` <section class="details">
  <div class="wrapper">
    <div class="product-img">
      <img
        src="${a.img}"
        width="320"
        alt="${a.title} основно изображение"
        @click=${() => openModal(a.img)}
      />
      <div class="gallery-images">
        ${a.additionalImages.map(
          (img) => html`
            <div class="gallery-item" @click=${() => openModal(img)}>
              <img src="${img}" alt="" width="150" />
            </div>
          `
        )}
      </div>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>${a.title}</h1>
        <p>${a.description}</p>
      </div>
      <div class="back-btn">
        <a class="btn" href="/projects" type="button">Назад</a>
      </div>
    </div>
  </div>

  <!-- Option to open the pictures in "Previous projects" -->
  <div class="modal" @click=${closeModal}>
    <span class="close" @click=${closeModal}>&times;</span>
    <img class="modal-content" id="modal-img" />
    <div id="caption"></div>
  </div>
</section>`;

function openModal(imageSrc) {
  const modal = document.querySelector(".modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  captionText.innerHTML = "";
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

export function funcProjectsDetails(е) {
  const id = е.params.id;
  const a = previousProjects.find((a) => a.id === id);
  е.render(detailsTemplate(a));
}
