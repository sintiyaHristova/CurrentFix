import { html } from "../lib/lit-html.js";

const homeTemplate = () => html` <section class="home">
  <div class="content">
    <h3>Електротехник</h3>
    <span>гр. София</span>
    <div class="content-sections">
      <div class="image-section">
        <img src="/assets/Plamen.jpg" alt="Снимка на електротехник" />
      </div>
      <div class="text-section">
        <p>
          Oпитен електротехник с над 10 години опит в предоставянето на
          висококачествени електрически услуги. Квалифицирани в промишлени
          електрически инсталации, ремонти и поддръжка. Ангажиран да гарантира
          ремонти и монтажи в съответствие с изискванията за безопасност и да
          предоставят изключително обслужване на клиентите.
        </p>
      </div>
    </div>
    <div class="contact-icons">
      <a href="tel:+359877083399" title="Звънни">
        <img src="/assets/call.png" alt="Звънни" class="iconOne" />
      </a>
      <a href="viber://contact?number=+359877083399" title="Свържи се по Viber">
        <img src="/assets/viber.png" alt="Viber" class="iconTwo" />
      </a>
    </div>
    <a href="/catalog" class="btn">Вижте повече</a>
  </div>
</section>`;

export function funcHome(е) {
  е.render(homeTemplate());
}
