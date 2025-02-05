import { html } from "../lib/lit-html.js";
import { previousProjects } from "../api/data.js";

const detailsTemplate = (a) => html` <section class="details">
  <div class="wrapper">
    <div class="product-img">
      <img
        src="${a.img}"
        class="main-img"
        alt="${a.title} основно изображение"
        @click=${() => openModal([a.img, ...a.additionalImages], 0)}
      />
      <div class="gallery-images">
        ${a.additionalImages.map(
          (img, index) => html`
            <div
              class="gallery-item"
              @click=${() =>
                openModal([a.img, ...a.additionalImages], index + 1)}
            >
              <img
                src="${img}"
                alt="Допълнително изображение ${index + 1}"
                class="gallery-thumbnail"
              />
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
</section>`;

let currentImages = [];
let currentIndex = 0;

function openModal(images, index) {
  currentImages = images;
  currentIndex = index;
  updateModalImage();
  document.querySelector(".modal").style.display = "block";
}

function updateModalImage() {
  const modalImg = document.getElementById("modal-img");
  if (modalImg) {
    console.log("Зареждаме изображение:", currentImages[currentIndex]);
    modalImg.src = currentImages[currentIndex];
  }
}

function changeImage(direction) {
  currentIndex =
    (currentIndex + direction + currentImages.length) % currentImages.length;
  updateModalImage();
}

function closeModal() {
  document.querySelector(".modal").style.display = "none";
}

export function funcProjectsDetails(e) {
  const id = e.params.id;
  const a = previousProjects.find((a) => a.id === id);
  if (a) {
    e.render(detailsTemplate(a));
  }
}

// === ГЛОБАЛНО ДОСТЪПНИ ФУНКЦИИ ===
window.openModal = openModal;
window.changeImage = changeImage;
window.closeModal = closeModal;
